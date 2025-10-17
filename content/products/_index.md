+++
title = "PRODUCTS"
description = "製品情報"

[extra]
background_image = "white_pcb.jpg"
prefooter_cards = ["about-us.md", "recruit/_index.md", "contact/_index.md"]
card_body = """極限の環境でも
正常に動作するコンピューターを
"""
+++

{{ product_display(
	product_id_label="",
	bg="",
	img="sc-obc_module_v1.png",
	img_link="",
	alt="",
	pre_title="New Space向けハイエンドコンピュータモジュール",
	title="SC-OBC Module V1",
	subtitle="High performance, reliable, and versatile.",
	text1_a="Main Processor",
	text1_b="AMD Versal AI Edge Series VE2302",
	text2_a="Safety Processor",
	text2_b="Microchip IGLOO2",
	text3_a="Operating System",
	text3_b="APU: Linux / RPU: Zephyr RTOS",
	external_resources = [],
	details_link="@/products/scobc_v1.md"
) }}

{{ product_display(
	product_id_label="",
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
	external_resources = [
		["Space Cubics Documentation", "https://spacecubics.github.io/sc-docs"],
		["Zephyr Project Documentation", "https://docs.zephyrproject.org/latest/boards/sc/scobc_a1/doc/index.html"],
		["Space Cubics GitHub", "https://github.com/spacecubics"],
		["Zephyr RTOS GitHub Repository", "https://github.com/zephyrproject-rtos/zephyr"]
	],
	details_link="@/products/scobc_a1.md"
) }}
