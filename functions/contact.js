export const onRequestPost = async ({ request, env }) => {
	try {
		// Read and parse incoming JSON request
		const body = await request.json();
		const { name, email, role, message, website, captcha } = body;

		// Honeypot anti-spam check
		if (website && website.trim() !== "") {
			return new Response("Bot detected (honeypot)", { status: 400 });
		}

		// Required field validation
		if (!name || !email || !message) {
			return new Response("Missing required fields", { status: 400 });
		}

		// Validate Turnstile CAPTCHA
		const secretKey = env.CAPTCHA_SECRET_KEY;
		const remoteIp = request.headers.get("CF-Connecting-IP") || "";

		const formData = new FormData();
		formData.append("secret", secretKey);
		formData.append("response", captcha);
		formData.append("remoteip", remoteIp);

		const verifyRes = await fetch(
			"https://challenges.cloudflare.com/turnstile/v0/siteverify",
			{
				method: "POST",
				body: formData,
			}
		);

		const verifyJson = await verifyRes.json();

		// Determine which webhook to use based on form ID
		const webhookMap = {
			"recruitForm": env.SLACK_WEBHOOK_RECRUIT,
			"contactForm": env.SLACK_WEBHOOK_CONTACT
		};
		const slackWebhook = webhookMap[form_id];
		const slackFormType = form_id === "recruitForm" ? "Recruitment" : "Contact";

		if (!slackWebhook) {
			return new Response(`Missing Slack webhook for ${slackFormType.toLowerCase()} form`, { status: 500 });
		}

		// Prepare Slack message
		const slackMessage = {
			text: `📬 *New ${slackFormType} Form Submission:*\n*Name:* ${name}\n*Email:* ${email}\n*Role:* ${role || "Not provided"}\n*Message:* ${message}`,
		};

		const slackRes = await fetch(slackWebhook, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(slackMessage),
		});

		if (!slackRes.ok) {
			const err = await slackRes.text();
			return new Response(`Slack error: ${err}`, { status: 500 });
		}

		return new Response("Message sent to Slack", { status: 200 });

	} catch (err) {
		console.error("Server error:", err);
		return new Response(`Server error: ${err.message}`, { status: 500 });
	}
};
