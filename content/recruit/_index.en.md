+++
title = "RECRUIT"
description = "Employment information"

[extra]
background_image = "earth.jpg"
prefooter_cards = ["products/_index.en.md", "about_us.en.md", "contact/_index.en.md"]
card_body = """We are always looking for new people to join our team.

If you are interested, please contact us.
"""
+++

{{ recruit_intro(
	title = "We are always looking for new members to join our team. <br><br> If you are interested, please contact us using the application form.",
	body_text = "
 Space Cubics, Inc. was founded by engineers who met while working in various space tech fields. We genuinely enjoy engineering computers that can be used in the harsh, extreme environment of space.
<br><br>
 Some of us are experts in spacecraft, others in computer circuits, and still others in software development — but we are all skilled at what we do. Some engineering problems require teamwork, making every day a group effort. We don't observe a traditional top-down management structure because we are all unique individuals who achieve more when working together.
 <br><br>
Space Cubics is young and still growing. If you are interested in the astrocomputer industry, please reach out to us. But if you don't work well in a positive, collaborate environment, then this may not be the best place for you."
) }}

{% twocols(line1="WANTED", line2="Currently available", line3="POSITIONS") %}
{{ jobs_list(
	jobs = "
Software Engineer | software_engineer | active
Communications Engineer |
Fundraising Manager |
FPGA Engineer |
Hardware Engineer |
Promotion Engineer |
Sales |
Structural Engineer |
Thermal Engineer |
Systems Engineer |
") }}
{% end %}

{% twocols(line1="APPLICATION FORM", line2="Join us", line3="SPACE CUBICS") %}
{{ application_form(
	name_field="Name"
	email_field="Email adress"
	role_field="Desired position"
	message_field="Please enter your message here"
	button_label="Send"
	description = ""
) }}
{% end %}
