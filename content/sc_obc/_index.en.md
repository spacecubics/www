+++
+++

{% section_title(bg="", title="SC-OBC MODULE A1", subtitle="", slogan="", style_top="product details/SC-OBC Module A1") %}
<!--display element -->
{% end %}

{% quick_jump(
	title1="Product overview", id1="section-summary",
	title2="Use cases", id2="section-usage",
	title3="Dev kit", id3="section-devkit",
	title4="Specifications", id4="section-specs",
	title5="Docs / resources", id5="section-docs"
) %}
<!--display element -->
{% end %}

<section id="section-summary">
	{% hero_element(
		title="PRODUCT",
		img="sc-obc_module_a1.png",
		alt="",
		link="",
		link_text="",
		img_link="",
		bg="",
		subtitle="",
		slogan=""
	) %}
	The SC-OBC MODULE A1 board is optimized for use in CubeSats. We use technology cultivated by JAXA for reliable, safe use on the International Space Station. These boards use a Xilinx Artix-7 FPGA, allowing flexible configuration and multiple interface options. Not limited to CubeSats, our boards can also benefit other spacecraft and even terrestrial applications here on Earth.
{% end %}

<section id="section-usage">
	{% section_title(bg="", title="USES", subtitle="", slogan="") %}
	<!--display element -->
	{% end %}
</section>

{% twocard(
	title="",
	subtitle="",

	left_card_image="interface.jpg",
	right_card_image="satellite.jpg",

	left_card_title="",
	left_card_subtitle="During installation in our own satellite, <br> <br> the SC-OBC Module A1 board was mounted to an interface board with a PC104 form factor.",

	right_card_title="",
	right_card_subtitle="A satellite equipped with the SC-OBC Module A1 installed on an interface board. <br> <br> (Photo shows a prototype under development)",

	bg=""
) %}
<!--display element -->
{% end %}

<section id="section-devkit">
	{% section_title(bg="", title="DEV KIT", subtitle="", slogan="") %}
	<!--display element -->
	{% end %}
</section>

{% twocard(
	title="",
	subtitle="",
	left_card_image="under_construction.jpeg",
	right_card_image="under_construction.jpeg",
	left_card_title="development set",
	left_card_subtitle="coming soon",
	right_card_title="optional items",
	right_card_subtitle="coming soon",
	bg=""
) %}
<!--display element -->
{% end %}

<section id="section-specs">
	{% spec_sheet(
		bg="",
		title="SPECS",
		subtitle="",
		slogan=""
	) %}
	Main Processor | Xilinx Artix-7
	Communication Interface | CAN, I2C, UART
	Main CPU | Cortex-M3 / MicroBlaze-V
	FPGA User I/O | 38 pin
	Preinstalled OS | Zephyr RTOS
	PIC User I/O | 3 pin
	Clock Generator | 24 MHz x 2
	Watchdog timer | 1 (IP Core)
	PIC (anomaly detection / system recovery) | 8 bit PIC MCU
	Interface Connector | 80 pin / 0.5 mm pitch
	On-chip SRAM | 64 KByte FPGA Block RAM
	Supply Voltage | DC 5.0 V ± 10%
	On-board SRAM | 4 MBytes
	Power Consumption | 2.0 W (Max)
	NOR Flash Memory (configurable) | 32 MBytes x 2
	External Dimensions | 70 x 70 x 9.6 mm
	FeRAM | 512 KBytes x 2
	Mass | 130 g
	{% end %}
</section>

<section id="section-docs">
	{% docs_resources(
		bg="",
		title="DOCS",
		subtitle="",
		slogan=""
	) %}
	User Manual | This repository serves as documentation on SC-OBC Module A1 specifications, communication systems, circuit configurations, and more. | https://github.com/spacecubics/scobc-a1-product-manual/tree/main
	Zephyr Info Page | This is the dedicated SC-OBC Module A1 page on the Zephyr Project site. | https://docs.zephyrproject.org/latest/boards/sc/scobc_a1/doc/index.html
	GitHub | For other technical information, please refer to the following. | https://github.com/spacecubics
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

		bottom_card_image = "<!--display element -->",
		bottom_title="CONTACT",
		bottom_subtitle="Send a message",
		bottom_footer_1="We welcome inquiries about our business and services.",
		bottom_footer_2="Please feel free to contact us.",
		bottom_link="/en/contact",

		bg=""
	) %}
	<!--display element -->
	{% end %}
</section>
