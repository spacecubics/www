+++
title = "PRODUCTS"
description = "Product details"

[extra]
background_image = "white_pcb.jpg"
prefooter_cards = ["about_us.en.md", "recruit/_index.en.md", "contact/_index.en.md"]
card_body = """Even in extreme environments,
these computers function normally.
"""
+++

{{ product_display(
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
	details_link="scobc_a1"
) }}
