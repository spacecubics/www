+++
title = "SC-OBC MODULE A1"
description = "On-board Computer for Cubesat"

[extra]
prefooter_cards = ["recruit/_index.md", "investor-relations/_index.md", "contact/_index.md"]
+++

{{ quick_jump(
	title1="Product Overview", id1="section-summary",
	title2="Use Cases", id2="section-usage",
	title3="Specifications", id3="section-specs",
	title4="Dev Kit", id4="section-devkit",
	title5="Docs / Resources", id5="section-docs"
) }}

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
	JAXAが国際宇宙ステーションで培った信頼性設計技術を基にキューブサット用に最適設計した宇宙用コンピュータです。Xilinx製 Artix-7 FPGAを採用し、インターフェースの種類や数をユーザ毎に柔軟に対応することができます。キューブサット以外の宇宙機や地上の産業用途にも使用可能です。
	{% end %}

<section id="section-usage">
	{{ section_title(title="USES CASES", subtitle="", slogan="") }}
</section>

{{ twocard(
	title="",
	subtitle="",

	left_card_image="interface.jpg",
	right_card_image="satellite.jpg",

	left_card_title="",
	left_card_subtitle="弊社人工衛星に搭載するため、<br> <br> PC104形状に合わせたインタフェースボードの上にSC-OBC Module A1を搭載した形態",

	right_card_title="",
	right_card_subtitle="インタフェースボードに 搭載したSC-OBC Module A1が 組み込まれた人工衛星<br> <br> （写真は開発中のもの）",

	bg=""
) }}

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

{{ section_title(title="PRICE", subtitle="", slogan="") }}

{% price(price_number="30", price_unit="万円(税別)", price_note="※本価格は期間限定の特別価格となります。") %}
SC-OBC Module A1（以下、「本製品」と表記します）は自社開発衛星による宇宙実証を予定しております。本価格は宇宙実証までの期間限定の特別価格となります。特別価格が適用される条件は以下のとおりです。

- 本製品を購入いただいたことを弊社ホームページやSNS等で公開することを許諾いただきます。
- 本製品を使用した機器を宇宙へ打上げた実績、あるいは地上産業において使用された実績を弊社ホームページやSNS等で公開することを許諾いただきます。
- 本製品を宇宙で使用した際の運用データを提供いただきます（データは公開いたしません。また、今後の製品仕様へのフィードバックが目的のため、本製品の機能性能に関わるデータのみの提供を希望しております。データ提供の範囲や提供方法など、ご不明な点がございましたらお問合せ下さい。）
- 本製品の使い勝手や仕様への要望等についてアンケートにご協力いただく場合がございます。
{% end %}

{% price_supp(title="インタフェースボード受託開発") %}
SC-OBC Module A1と衛星を接続するための基板開発を受託します。

詳しくは [お問い合わせフォーム](/contact) よりお問い合わせください。
{% end %}

<section id="section-devkit">
	{{ section_title(bg="", title="DEV KIT", subtitle="", slogan="") }}
</section>

{{ twocard(
	title="",
	subtitle="",
	left_card_image="dev-board.webp",
	right_card_image="under_construction.jpeg",
	left_card_title="開発キット",
	left_card_subtitle="coming soon",
	right_card_title="オプション品",
	right_card_subtitle="coming soon",
	bg=""
) }}

<section id="section-docs">
	{% docs_resources(
		bg="",
		title="DOCS",
		subtitle="",
		slogan=""
	) %}
	Product Manual | SC-OBC Module A1の仕様、通信系統、回路構成等について記載されています。 | https://spacecubics.github.io/sc-docs/scobc-a1-product-manual/latest/product_manual.html
  Software Manual | SC-OBC Module A1上でZephyrのアプリケーションを開発・フラッシュ・実行するための環境構築および手順をまとめた技術マニュアルです。 | https://spacecubics.github.io/sc-docs/scobc-a1-software-manual/latest/index.html
	FPGA Technical Reference Manual | SC-OBC Module A1に搭載されているFPGAの仕様書です。FPGAの開発や、ソフトウェアの開発に必要な、FPGA機能に関する仕様やレジスタの仕様が記載されています。 | https://spacecubics.github.io/sc-docs/scobc-a1-fpga-technical-reference-manual/latest/index.html
	Zephyr Info Page | Zephyr Project 公式ドキュメントの、SC-OBC Module A1 ボード情報ページです。 | https://docs.zephyrproject.org/latest/boards/sc/scobc_a1/doc/index.html
	GitHub | その他、様々な技術情報はこちらを参照ください。 | https://github.com/spacecubics
	{% end %}
</section>
