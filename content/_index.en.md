+++
title = "Space Cubics Inc."

[extra]
prefooter_cards = ["recruit/_index.en.md", "investor-relations/_index.en.md", "contact/_index.en.md"]
+++

{{ splash() }}

{% hero_element(
	bg="",
	title="PRODUCTS",
	subtitle="Make the impossible",
	slogan="POSSIBLE"
) %}
	{% hero_content(
		img="sc-obc_module_v1.png",
		alt="",
		link="@/products/_index.md#SC-OBC Module V1",
		link_text="Details",
		img_link="",
		bottom_title="SC-OBC Module V1",
		hero_footer="High-End computer module <br> for New Space"
	) %}
	High-End Space Grade On-board Computer
	<br>
	for New Space

	{% end %}

	{% hero_content(
		img="sc-obc_module_a1.png",
		alt="",
		link="@/products/_index.md#SC-OBC Module A1",
		link_text="Details",
		img_link="",
		bottom_title="SC-OBC Module A1",
		hero_footer="Space computer module <br> for CubeSats"
	) %}
	Ultra-small and made for satellites.
	<br>
	Space computer modules.

	{% end %}
{% end %}

{% hero_element(
	bg="about.jpg",
	title="ABOUT US",
	subtitle="To drink beer",
	slogan="ON THE MOON"
) %}
	{% hero_content(
		img="empty_image.png",
		alt="",
		link="@/about-us.md",
		link_text="About us",
		bottom_title=""
		img_link=""
	) %}
	Space Cubics, Inc.
	<br>is a JAXA venture that makes
	<br>affordable and reliable space computers
	<br>so that anyone can go to the moon.
	{% end %}
{% end %}

{% hero_element(
	bg="",
	title="OUR CUSTOMERS",
	subtitle="Our mission is to support",
	slogan="SUSTAINABLE GROWTH"
) %}
	{% hero_content(
		img="partners.png",
		alt="",
		link="",
		link_text="",
		img_link=""
	) %}
	Trusted by leading space innovators who push the boundaries of technology
	{% end %}
{% end %}
