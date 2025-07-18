document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contactForm");
	const submitBtn = document.getElementById("submitBtn");

	let captchaToken = null;

	submitBtn.disabled = true; // disable on load

	window.onTurnstileSuccess = function (token) {
		captchaToken = token;
		submitBtn.disabled = false; // enable submit button after captcha solved
	};

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		// No alert here since submitBtn is disabled before captcha solved
		if (!captchaToken) {
			// Just ignore submission or optionally console log
			return;
		}

		submitBtn.disabled = true; // prevent double submits

		const formData = new FormData(form);

		const payload = {
			name: formData.get("name"),
			email: formData.get("email"),
			role: formData.get("role"),
			message: formData.get("message"),
			website: formData.get("website"), // honeypot field
			captcha: captchaToken,
		};

		try {
			const res = await fetch("/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!res.ok) {
				const errorText = await res.text();
				throw new Error(errorText);
			}

			alert("✅ Message sent successfully!");
			form.reset();
			captchaToken = null;
			if (typeof turnstile !== "undefined" && turnstile.reset) {
				turnstile.reset();
			}
			submitBtn.disabled = true; // disable submit until captcha solved again
		} catch (err) {
			alert(`❌ Failed to send message: ${err.message}`);
			submitBtn.disabled = false;
		}
	});
});
