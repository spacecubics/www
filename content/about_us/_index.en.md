+++
title = "ABOUT US"
description = "Company information"

[extra]
background_image = "about.jpg"
+++

{{ threecard(
	title="To drink beer on the moon.",
	subtitle="Space Cubics is a JAXA venture developing affordable and reliable space computers so everyone can go to the moon.",
	left_card="blocks/affordable.en.toml",
	middle_card="blocks/easy.en.toml",
	right_card="blocks/to_space.en.toml"
) }}

{{ kv_list(line1="COMPANY", line2="Space Cubics", line3="OVERVIEW", data="blocks/about_company.json") }}

{{ board_members(members="blocks/board-members.en.json", lang="en") }}

{% hero_element(
	title="PARTNERS",
	img="spaceone.png",
	alt="",
	link="https://www.space-one.co.jp/",
	link_text="Read More",
	img_link="",
	bg="",
	subtitle="Other teams who",
	slogan="WORK WITH US"
) %}
Space Cubics and Space One were both selected for an industrial development grant by Japan's Ministry of Economy, Trade and Industry.
<br><br>
Now, we deploy our space computers in CubeSats using Space One's KAIROS rocket. Every launch provides valuable telemetry data that drives refinement.
{% end %}

{{ prefooter(
	left_card_image="white_pcb_dark.jpg",
	right_card_image="earth.jpg",

	left_title = "PRODUCTS"
	left_subtitle = "Board introduction"
	left_footer_1 = "Even in extreme environments,"
	left_footer_2 = "these computers function normally."
	left_link = "/en/products"

	right_title="RECRUIT",
	right_subtitle="Employment details",
	right_footer_1="We are always looking for new people to join our team.",
	right_footer_2="If you are interested, please contact us.",
	right_link="/en/recruit",

	bottom_card_image = "",
	bottom_title = "CONTACT",
	bottom_subtitle="Reach out to us.",
	bottom_footer_1="We welcome inquiries about our business and services.",
	bottom_footer_2="Please feel free to contact us.",
	bottom_link="/en/contact",

	bg=""
) }}
