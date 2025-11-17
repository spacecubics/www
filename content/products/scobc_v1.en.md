+++
title = "SC-OBC MODULE V1"
description = "High-End Space Grade On-board Computer (Coming in Spring 2026) "
template = "product.html"

[extra]
prefooter_cards = ["recruit/_index.md", "investor-relations/_index.md", "contact/_index.md"]
+++

## OVERVIEW

{% product_overview(img="sc-obc_module_v1.png", alt="", title="SC-OBC Module V1", subtitle="High-End Space Grade On-board Computer for New Space") %}

SC-OBC Module V1 is a cutting-edge OBC for space applications, powered by the AMD Versal Adaptive SoC, a powerful heterogeneous computing platform integrates Arm processing subsystems, programmable logic(PL), and AI Engine(AIE). Engineered for next-generation missions, it delivers comprehensive onboard capabilities — from capturing massive data streams from advanced sensors, such as SAR, and LiDAR, to real-time edge processing and reliable high-capacity data storage.

{% end %}


## USE CASES

- High-Speed Data Processing for Earth Observation Sensors (SAR, LiDAR)
- Guidance, Navigation, and Control (GNC)
- LEO, GEO, and Lunar Missions - Orbit, Lander, Probe


## SPECS

{% spec_sheet() %}

	1. Main Processor

	Device | AMD Versal AI Edge Series VE2302

	Application Processor | Dual core Arm Cortex-A72 Up to 1.3 GHz (48 KByte/32 KByte L1 Cache w/ parity & ECC, 1 MByte L2 Cache w/ ECC)

	Real-Time Processor | Dual core Arm Cortex-R5F Up to 600 MHz (32 KByte/32 KByte L1 Cache, 256 KByte TCM w/ ECC)

	AI Engine | AI Engine-ML Tile: 34, AIE/AIE-ML Data Memory Mbit: 17, AIE-ML Shared Memory Mbit: 68

	Programmable Logic | System Logic: 328,720, LUTs: 150,272, DSP Engines: 464, Total Block RAM: 5.4 Mbit, UltraRAM: 43,6 Mbit, Accelerator RAM: 32 Mbit

	2. Safety Processor

	Device | Microchip IGLOO2

	3. Memory

	DDR4 | Rad-tolerant DDR4 memory w/ ECC 4 GByte

	Boot Memory | NOR Flash 64 MByte (Redundancy)

	eMMC | 64 GByte

	High Reliability Memory | FRAM 1 MByte × 2


	4. Pre-Installed Operating System

	APU | Linux

	RPU | Zephyr RTOS

	5. Board to Board Interface (User IO)

	Versal MIO | Platform Management MIO: 27 signals, Low Power Domain MIO: 26 signals, Selectable Interface: Gigabit EtherMAC, USB2.0 (ULPI), UART, I2C, SPI, GPIO, CAN FD, SD/eMMC

	Versal PL XPIO | 54 signals (VDDIO: 1.0/1.2/1.35/1.5 V)

	Versal GTYP | 40 signals / Clock 4 pair / TX 8 pair / RX 8 pair

	IGLOO2 MSIO | 48 signals (VDDIO 1.2/1.5/1.8/2.5/3.3 V)

	6. Board Health Function

	On-Board Sensor | Temperature Sensor, Current/Voltage Monitor

	Power Management | Over-current detection, Brownout protection

	7. Environmental Characteristics

	Power Supply | DC 5.0 V (20 - 40 W typical)

	Operating Temperature | -40 〜 80 ℃

	Size | 100 mm × 150 mm

{% end %}


## PRICE

{% price(price_title="SC-OBC Module V1", price_number="", price_unit="", price_note="Coming in Spring 2026") %}
SC-OBC Module V1 is scheduled for release in spring 2026. Please use our [contact form](/contact) to request more information.
{% end %}


## DEV KIT

{{ twocard(
	title="",
	subtitle="",
	left_card_image="under_construction.jpeg",
	right_card_image="under_construction.jpeg",
	left_card_title="Development Kit",
	left_card_subtitle="coming soon",
	right_card_title="Options",
	right_card_subtitle="coming soon",
	bg=""
) }}


## DOCUMENTS

{% docs_resources() %}
	Coming soon
{% end %}
