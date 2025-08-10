+++
title = "ABOUT US"
description = "私たちについて"

[extra]
background_image = "about.jpg"
prefooter_cards = ["products/_index.md", "recruit/_index.md", "contact/_index.md"]
card_body = "「誰もが月に行ける時代」を目指し、安価で信頼性の高い宇宙用コンピュータを開発するJAXAベンチャーです。"
+++

{{ tagline(title="To drink beer on the moon.",
           statement="私たち Space Cubicsは「誰もが月に行ける時代」を目指し,<br>安価で信頼性の高い宇宙用コンピュータを開発するJAXAのベンチャーです。")
}}

{{ threecard(left_card="blocks/affordable.toml",
	           middle_card="blocks/easy.toml",
	           right_card="blocks/to_space.toml"
) }}

{{ kv_list(line1="COMPANY", line2="Space Cubics", line3="OVERVIEW", data="blocks/about_company.json") }}

{{ board_members(line1="BOARD MEMBERS", line2="Executive", line3="PROFILES", members="blocks/board-members.json") }}
{{ board_members(line1="FOUNDING ALUMNI", line2="", line3="", members="blocks/founding-alumni.json") }}

{% twocols(line1="PARTNERS", line2="Other teams who", line3="WORK WITH US") %}
{% partner(name="スペースワン株式会社", logo="spaceone.png", link="https://www.space-one.co.jp/") %}
経済産業省が実施する「令和2年度 産業技術実用化開発事業費補助金」に共同で採択。超小型宇宙利用プラットフォーム確立へ向け、スペースワン社製小型ロケット「カイロス（KAIROS）」による超小型衛星の放出実証、ならびにSpace Cubics社製宇宙用コンピュータを搭載した衛星の宇宙実証を目指します。
{% end %}
{% end %}
