+++
title = "SC-OBC MODULE V1"
description = "High-End Space Grade On-board Computer"
template = "product.html"

[extra]
prefooter_cards = ["recruit/_index.md", "investor-relations/_index.md", "contact/_index.md"]
+++

## OVERVIEW

{% <product_overview img="sc-obc_module_v1.png" alt="" title="SC-OBC Module V1" subtitle="New Space向けハイエンドコンピュータモジュール"> %}

CPU・FPGA・AI Engineを統合したヘテロジニアスプラットフォームコンピューティング (Adaptive SoC)を採用した AMD Versalを搭載する高性能オンボードコンピュータです。光学センサーや SAR・LiDARなどから入力される大容量のセンサーデータに対し、入力処理・ハードウェアアクセサレーションやベクトル演算を伴うエッジ処理、大容量ストレージへの記録を、効率的に実行することができます。

{% </product_overview> %}


## USE CASES

- 地球観測用センサ（SAR, LiDAR）の高速データ処理
- 誘導航法制御（GNC）
- 地球周回衛星、静止軌道衛星、月周回・着陸・探査ミッション


## SPECS

### Part Number
{% <spec_sheet> %}
	Space Grade | SC-OBC-V1002
	Developer Grade | SC-OBC-V1D02
{% </spec_sheet> %}

### Main Processor
{% <spec_sheet> %}
	Device | AMD Versal AI Edge Series VE2302
	Application Processor | Dual core Arm Cortex-A72 Up to 1.3 GHz (48 KByte/32 KByte L1 Cache w/ parity & ECC, 1 MByte L2 Cache w/ ECC)
	Real-Time Processor | Dual core Arm Cortex-R5F Up to 600 MHz (32 KByte/32 KByte L1 Cache, 256 KByte TCM w/ ECC)
	AI Engine | AI Engine-ML Tile: 34, AIE/AIE-ML Data Memory Mbit: 17, AIE-ML Shared Memory Mbit: 68
	Programmable Logic | System Logic: 328,720, LUTs: 150,272, DSP Engines: 464, Total Block RAM: 5.4 Mbit, UltraRAM: 43,6 Mbit, Accelerator RAM: 32 Mbit
{% </spec_sheet> %}

### Safety Processor
{% <spec_sheet> %}
	Device | Microchip IGLOO2
{% </spec_sheet> %}

### Memory
{% <spec_sheet> %}
	DDR4 | Rad-tolerant DDR4 memory w/ ECC 4 GByte
	Boot Memory | MRAM 64 MByte (Redundancy)
	eMMC | 64 GByte
	High Reliability Memory | MRAM 8 MByte × 2
{% </spec_sheet> %}

### Pre-Installed Operating System
{% <spec_sheet> %}
	APU | Linux
	RPU | Zephyr RTOS
{% </spec_sheet> %}

### Board to Board Interface (User IO)
{% <spec_sheet> %}
	Versal MIO | Platform Management MIO: 27 signals, Low Power Domain MIO: 26 signals, Selectable Interface: Gigabit EtherMAC, USB2.0 (ULPI), UART, I2C, SPI, GPIO, CAN FD, SD/eMMC
	Versal PL XPIO | 54 signals (VDDIO: 1.0/1.2/1.35/1.5 V)
	Versal GTYP | 40 signals / Clock 4 pair / TX 8 pair / RX 8 pair
	IGLOO2 MSIO | 48 signals (VDDIO 1.2/1.5/1.8/2.5/3.3 V)
{% </spec_sheet> %}

### Health Monitoring and Protection
{% <spec_sheet> %}
	On-Board Sensor | Temperature Sensor, Current/Voltage Monitor
	Power Management | Over-current detection, Brownout protection
{% </spec_sheet> %}

### Operating and Physical Characteristics
{% <spec_sheet> %}
	Power Supply | DC 5.0 V (20 - 40 W typical)
	Operating Temperature | -40 〜 80 ℃
	Size | 100 mm × 150 mm
	Mass | 110 g
{% </spec_sheet> %}


## PRICE

{% <price price_title="SC-OBC Module V1" price_number="" price_unit="" price_note=""> %}
詳しくは [お問い合わせフォーム](/contact) よりお問い合わせください。
{% </price> %}


## DEV KIT

{{ twocard(
	title="",
	subtitle="",
	left_card_image="under_construction.jpeg",
	right_card_image="under_construction.jpeg",
	left_card_title="開発キット",
	left_card_subtitle="coming soon",
	right_card_title="オプション品",
	right_card_subtitle="coming soon"
) }}


## RESOURCES

{% <docs_resources> %}
  Product Manual | SC-OBC Module V1の仕様や、開発に必要な情報が記載されています。 | https://docs.spacecubics.com/scobc-v1/latest/index.html
  Yocto Layer for V1 | SC-OBC Module V1用Yoctoレイヤーのソースコードです。 | https://github.com/spacecubics/meta-scobc
  GitHub | その他、様々な技術情報はこちらを参照ください。 | https://github.com/spacecubics
{% </docs_resources> %}
