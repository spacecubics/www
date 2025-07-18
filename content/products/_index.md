+++
+++

{% section_title(bg="", title="PRODUCTS", subtitle="製品情報", slogan="", style_top="製品情報") %}
<!--display element -->
{% end %}

{% twocol(
	title="",
	img="",
	alt="",
	link="",
	link_text="",
	img_link="",
	bg="white_pcb.jpg",
	subtitle="",
	slogan=""
) %}
<!-- no text -->
{% end %}

{% product_display(
	product_id_label="Product 01",
	bg="",
	img="sc-obc_module_a1.png",
	img_link="",
	alt="",
	pre_title="衛星用超小型スペース・コンピュータ・モジュール",
	title="SC-OBC Module A1",
	subtitle="Built for performance, engineered for durability.",
	text1_a="Main Processor",
	text1_b="Xilinx Artix-7",
	text2_a="CPU",
	text2_b="Cortex M3 / MicroBlaze-V",
	text3_a="Operating System",
	text3_b="Zephyr RTOS",
	download_1_link="https://github.com/spacecubics/scobc-a1-product-manual",
	download_1_label="User Manual",
	download_2_link="https://docs.zephyrproject.org/latest/boards/sc/scobc_a1/doc/index.html",
	download_2_label="Zephyr Docs",
	download_3_link="https://github.com/spacecubics",
	download_3_label="GitHub",
	details_link="/sc_obc"
) %}
<!-- no text -->
{% end %}

{% prefooter(
	left_card_image="about.jpg",
	right_card_image="earth.jpg",

	left_title="ABOUT US",
	left_subtitle="私たちについて",
	left_footer_1="「誰もが月に行ける時代」を目指し、",
	left_footer_2="安価で信頼性の高い宇宙用コンピュータを開発するJAXAベンチャーです。",
	left_link="/about_us",

	right_title="RECRUIT",
	right_subtitle="採用情報",
	right_footer_1="一緒に働くメンバーを常に募集しています。",
	right_footer_2="ご興味のある方はご連絡ください。",
	right_link="/recruit",

	bottom_card_image = "<!--display element -->",
	bottom_title="CONTACT",
	bottom_subtitle="お問い合わせ",
	bottom_footer_1="事業やサービスについてご相談・ご質問承ります。",
	bottom_footer_2="お気軽にお問い合わせください。",
	bottom_link="/contact",

	bg=""
) %}
<!--display element -->
{% end %}
