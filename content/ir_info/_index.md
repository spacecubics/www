+++
+++

{{ section_title(bg="", title="IR INFO", subtitle="投資家情報", slogan="", style_top="投資家情報") }}

{{ twocol(bg="ir.jpg") }}

{# TODO: this must be generated from news #}
{{ kv_list(line1="IR NEWS", line2="Space Cubics", line3="INVESTOR RELATIONS", data="blocks/ir_news.json") }}

{{ prefooter(
	bottom_card_image = "",
	bottom_title="CONTACT",
	bottom_subtitle="お問い合わせ",
	bottom_footer_1="事業やサービスについてご相談・ご質問承ります。",
	bottom_footer_2="お気軽にお問い合わせください。",
	bottom_link="/contact",
	bg=""
) }}
