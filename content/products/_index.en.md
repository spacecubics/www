+++
+++

{% section_title(bg="", title="PRODUCTS", subtitle="Product details", slogan="", style_top="Product Information") %}
<!--display element -->
{% end %}

{% twocol(bg="white_pcb.jpg") %}
<!-- no text -->
{% end %}

{% product_display(
	product_id_label="Product 01",
	bg="",
	img="sc-obc_module_a1.png",
	img_link="",
	alt="",
	pre_title="Ultra-small space computer module for satellites.",
	title="SC-OBC Module A1",
	subtitle="Built for performance, engineered for durability.",
	text1_a="Main Processor",
	text1_b="Xilinx Artix-7",
	text2_a="CPU",
	text2_b="Cortex M3 / MicroBlaze-V",
	text3_a="Operating System",
	text3_b="Zephyr RTOS",
	download_1_link="https://github.com/spacecubics/scobc-a1-product-manual",
	download_1_label="Space Cubics Documentation",
	download_2_link="https://docs.zephyrproject.org/latest/boards/sc/scobc_a1/doc/index.html",
	download_2_label="Zephyr Project Documentation",
	download_3_link="https://github.com/spacecubics",
	download_3_label="Space Cubics GitHub",
	download_4_link="https://github.com/zephyrproject-rtos/zephyr",
	download_4_label="Zephyr RTOS GitHub Repository",
	details_link="/en/sc_obc"
) %}
<!-- no text -->
{% end %}

{% prefooter(
	left_card_image="about.jpg",
	right_card_image="earth.jpg",

	left_title="ABOUT US",
	left_subtitle="Company details",
	left_footer_1="Aiming for an era where anyone can go to the moon,",
	left_footer_2="we are a JAXA venture developing affordable and reliable computers for space use.",
	left_link="/en/about_us",

	right_title="RECRUIT",
	right_subtitle="Employment information",
	right_footer_1="We are always looking for new members to join our team.",
	right_footer_2="If you are interested, please contact us.",
	right_link="/en/recruit",

	bottom_card_image = "",
	bottom_title="CONTACT",
	bottom_subtitle="Send a message",
	bottom_footer_1="We welcome inquiries about our business and services.",
	bottom_footer_2="Please feel free to contact us.",
	bottom_link="/en/contact",

	bg=""
) %}
<!--display element -->
{% end %}
