+++
title = "ABOUT US"
description = "私たちについて"

[extra]
background_image = "about.jpg"
+++

{{ threecard(
	title="To drink beer on the moon.",
	subtitle="私たち Space Cubicsは「誰もが月に行ける時代」を目指し,<br>安価で信頼性の高い宇宙用コンピュータを開発するJAXAのベンチャーです。",
	left_card="blocks/affordable.toml",
	middle_card="blocks/easy.toml",
	right_card="blocks/to_space.toml"
) }}

{{ kv_list(line1="COMPANY", line2="Space Cubics", line3="OVERVIEW", data="blocks/about_company.json") }}

{{ board_members(members="blocks/board-members.json", lang="ja") }}

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
スペースワン株式会社
<br>経済産業省が実施する「令和2年度 産業技術実用化開発事業費補助金」に共同で採択。
<br>超小型宇宙利用プラットフォーム確立へ向け、
<br>スペースワン社製小型ロケット「カイロス（KAIROS）」による超小型衛星の放出実証、
<br>ならびにSpace Cubics社製宇宙用コンピュータを搭載した衛星の宇宙実証を目指します。
{% end %}

{{ prefooter(
	left_card_image="white_pcb_dark.jpg",
	right_card_image="earth.jpg",

	left_title = "PRODUCTS"
	left_subtitle = "製品紹介"
	left_footer_1 = "極限の環境でも"
	left_footer_2 = "正常に動作するコンピューターを"
	left_link = "/products"

	right_title="RECRUIT",
	right_subtitle="採用情報",
	right_footer_1="一緒に働く仲間を常に募集しています。",
	right_footer_2="ご興味のある方はご連絡ください。",
	right_link="/recruit",

	bottom_card_image = "",
	bottom_title="CONTACT",
	bottom_subtitle="お問い合わせ",
	bottom_footer_1="事業やサービスについてご相談・ご質問承ります。",
	bottom_footer_2="お気軽にお問い合わせください。",
	bottom_link="/contact",

	bg=""
) }}
