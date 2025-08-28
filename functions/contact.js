export const onRequestPost = async ({ request, env }) => {
	try {
		// Read and parse incoming JSON request
		const body = await request.json();
		const { form_id, name, email, role, message, website, captcha } = body;

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

		let slackMessage;
		if (form_id === "recruitForm") {
			slackMessage = {
				text: `*New Application:*\n*Name:* ${name}\n*Email:* ${email}\n*Desired Role:* ${role}\n*Message:* ${message}`,
			};
		} else {
			slackMessage = {
				text: `*New Contact:*\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`,
			};
		}

		const slackWebhook = env.SLACK_WEBHOOK;
		if (!slackWebhook) {
			return new Response("Missing Slack webhook", { status: 500 });
		}

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
