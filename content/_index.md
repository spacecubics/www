+++
title = "Space Cubics Inc."

[extra]
prefooter_cards = ["recruit/_index.md", "investor-relations/_index.md", "contact/_index.md"]
+++

{{ splash() }}

{% hero_element(
	title="PRODUCTS",
	bg="",
	subtitle="Make the impossible",
	slogan="POSSIBLE"
) %}
	{% hero_content(

	{% hero_content(
		img="sc-obc_module_v1.png",
		alt="",
		link="@/products/_index.md",
		link_text="Details",
		img_link="",
		bottom_title="SC-OBC Module V1",
		hero_footer="High-End computer module <br> for New Space"
	) %}
	New Space向け ハイエンドコンピュータモジュール

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
	衛星用超小型 宇宙用コンピュータモジュール

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
	私たち Space Cubics は
	<br>「誰もが月に行ける時代」を目指し、
	<br>安価で信頼性の高い宇宙用コンピュータを開発する
	<br> JAXAのベンチャーです。
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
	私たちは、限界に挑み続ける革新的企業の皆様と共に挑戦しています。
	{% end %}
{% end %}
