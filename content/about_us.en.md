+++
title = "ABOUT US"
description = "Company information"

[extra]
background_image = "about.jpg"
prefooter_cards = ["products/_index.en.md", "recruit/_index.en.md", "contact/_index.en.md"]
card_body = "Aiming for an era where anyone can go to the moon, we are a JAXA venture developing affordable and reliable computers for space use."
+++

{{ tagline(title="To drink beer on the moon.",
           statement="Space Cubics, a JAXA venture, develops affordable, reliable space computers to make lunar access possible for all.")
}}

{{ threecard(
	title="To drink beer on the moon.",
	subtitle="Space Cubics is a JAXA venture developing affordable and reliable space computers so everyone can go to the moon.",
	left_card="blocks/affordable.en.toml",
	middle_card="blocks/easy.en.toml",
	right_card="blocks/to_space.en.toml"
) }}

{{ kv_list(line1="COMPANY", line2="Space Cubics", line3="OVERVIEW", data="blocks/about_company.json") }}

{{ board_members(line1="BOARD MEMBER", line2="Executive", line3="PROFILES", members="blocks/board-members.en.json") }}
{{ board_members(line1="FOUNDING ALUMNI", line2="", line3="", members="blocks/founding-alumni.en.json") }}

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
