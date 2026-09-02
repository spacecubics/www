+++
title = "SC-OBC MODULE A1"
description = "On-board Computer for Cubesat"
template = "product.html"

[extra]
prefooter_cards = ["recruit/_index.en.md", "investor-relations/_index.en.md", "contact/_index.en.md"]
+++

## OVERVIEW

{% <product_overview img="sc-obc_module_a1.png" alt="" title="SC-OBC Module A1" subtitle="Space computer module for ultra-small satellites"> %}

The SC-OBC MODULE A1 board is optimized for use in CubeSats. We use
technology cultivated by JAXA for reliable, safe use on the
International Space Station. These boards use a Xilinx Artix-7 FPGA,
allowing flexible configuration and multiple interface options. Not
limited to CubeSats, our boards can also benefit other spacecraft and
even terrestrial applications here on Earth.

{% </product_overview> %}


## USE CASES

{{ twocard(
	title="",
	subtitle="",

	left_card_image="interface.jpg",
	right_card_image="satellite.jpg",

	left_card_title="",
	left_card_subtitle="During installation in our own satellite, <br> <br> the SC-OBC Module A1 board was mounted to an interface board with a PC104 form factor.",

	right_card_title="",
	right_card_subtitle="A satellite equipped with the SC-OBC Module A1 installed on an interface board. <br> <br> (Photo shows a prototype under development)"
) }}


## SPECS

{% <spec_sheet> %}
	Part Number | SC-OBC-A1001
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
	Mass | 30 g
{% </spec_sheet> %}


## PRICE

{% <price price_title="SC-OBC Module A1" price_number="300,000" price_unit="JPY (excluding tax)" price_note="*This price is a limited-time offer."> %}

The SC-OBC Module A1 is scheduled to undergo space-readiness testing
using a satellite we developed in-house. This price is only available
until space-readiness has been approved. Conditions for the
limited-time price are as follows.

- You grant permission for the publication of information regarding
  your purchase on our website, social media, and/or other public
  platforms.
- You give us permission to publish the results of any launches that
  used equipment (whether space-based or ground-based) containing this
  product on our website and social media.
- We ask you to share operational data obtained through the use of
  this product in space. This data will remain confidential and will
  not be made public. The purpose is to help improve future product
  specifications, so please provide only data related to the
  functionality and performance of this product.
{% </price> %}

{% <price_supp title="Commissioning an interface board"> %}

We also provide custom circuit board design services to connect the
SC-OBC Module A1 to your satellite.

Please use our [contact form](/en/contact) to request more
information.
{% </price_supp> %}


## DEV KIT

{{ twocard(
	title="",
	subtitle="",
	left_card_image="a1-dev-board-rev-b.webp",
	right_card_image="under_construction.jpeg",
	left_card_title="Development Kit",
	left_card_subtitle="coming soon",
	right_card_title="optional items",
	right_card_subtitle="coming soon"
) }}


## DOCUMENTS

{% <docs_resources> %}
	Product Manual | This document describes all about SC-OBC Module A1. | https://docs.spacecubics.com/scobc-a1/latest/index.html
	Zephyr Info Page | This is the dedicated SC-OBC Module A1 page on the Zephyr Project site. | https://docs.zephyrproject.org/latest/boards/sc/scobc_a1/doc/index.html
	GitHub | For other technical information, please refer to our GitHub repositories. | https://github.com/spacecubics
{% </docs_resources> %}
