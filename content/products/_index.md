+++
title = "PRODUCTS"
description = "製品情報"

[extra]
background_image = "white_pcb.jpg"
prefooter_cards = ["about_us.md", "recruit/_index.md", "contact/_index.md"]
card_body = """極限の環境でも
正常に動作するコンピューターを
"""
+++

{{ product_display(
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
	external_1_link="https://github.com/spacecubics/scobc-a1-product-manual",
	external_1_label="Space Cubics Documentation",
	external_2_link="https://docs.zephyrproject.org/latest/boards/sc/scobc_a1/doc/index.html",
	external_2_label="Zephyr Project Documentation",
	external_3_link="https://github.com/spacecubics",
	external_3_label="Space Cubics GitHub",
	external_4_link="https://github.com/zephyrproject-rtos/zephyr",
	external_4_label="Zephyr RTOS GitHub Repository",
	details_link="scobc_a1"
) }}
