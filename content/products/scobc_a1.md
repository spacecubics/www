+++
title = "SC-OBC MODULE A1"
description = "On-board Computer for Cubesat"
template = "product.html"

[extra]
prefooter_cards = ["recruit/_index.md", "investor-relations/_index.md", "contact/_index.md"]
+++

## OVERVIEW

{% <product_overview img="sc-obc_module_a1.png" alt="" title="SC-OBC Module A1" subtitle="超小型衛星向け宇宙用コンピュータモジュール"> %}

JAXAが国際宇宙ステーションで培った信頼性設計技術を基にキューブサット用に最適設計した宇宙用コンピュータです。
Xilinx製 Artix-7 FPGAを採用し、インターフェースの種類や数をユーザ毎に柔軟に対応することができます。
キューブサット以外の宇宙機や地上の産業用途にも使用可能です。

{% </product_overview> %}


## USE CASES

{{ <twocard
	title=""
	subtitle=""
	left_card_image="interface.jpg"
	right_card_image="satellite.jpg"
	left_card_title=""
	left_card_subtitle="弊社人工衛星に搭載するため、<br> <br> PC104形状に合わせたインタフェースボードの上にSC-OBC Module A1を搭載した形態"
	right_card_title=""
	right_card_subtitle="インタフェースボードに 搭載したSC-OBC Module A1が 組み込まれた人工衛星<br> <br> （写真は開発中のもの）"
/> }}

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

{% <price
  price_title="SC-OBC Module A1"
  price_number="30"
  price_unit="万円(税別)"
  price_note="※本価格は期間限定の特別価格となります。"
  image="sc-obc_module_a1_top.jpg"
  alt="SC-OBC Module A1本体の上面"
> %}
SC-OBC Module A1（以下、「本製品」と表記します）は自社開発衛星による宇宙実証を予定しております。本価格は宇宙実証までの期間限定の特別価格となります。特別価格が適用される条件は以下のとおりです。

- 本製品を購入いただいたことを弊社ホームページやSNS等で公開することを許諾いただきます。
- 本製品を使用した機器を宇宙へ打上げた実績、あるいは地上産業において使用された実績を弊社ホームページやSNS等で公開することを許諾いただきます。
- 本製品を宇宙で使用した際の運用データを提供いただきます（データは公開いたしません。また、今後の製品仕様へのフィードバックが目的のため、本製品の機能性能に関わるデータのみの提供を希望しております。データ提供の範囲や提供方法など、ご不明な点がございましたらお問合せ下さい。）
- 本製品の使い勝手や仕様への要望等についてアンケートにご協力いただく場合がございます。
{% </price> %}

{% <price_supp title="インタフェースボード受託開発"> %}
SC-OBC Module A1と衛星を接続するための基板開発を受託します。

詳しくは [お問い合わせフォーム](/contact) よりお問い合わせください。
{% </price_supp> %}

## DEV KIT

{% <dev_kit
  title="SC-OBC Module A1 Development Kit"
  image="a1-dev-board-rev-b.webp"
  alt="SC-OBC Module A1を搭載したDevelopment Board"
  price_number="55"
  price_unit="万円(税別)"
> %}
SC-OBC Module A1のFPGA・ソフトウェア開発や機能評価を行うことを目的とした開発キットです。

本キットには、SC-OBC Module A1本体とDevelopment Boardに加え、ACアダプタ、USBケーブルなど、開発を開始するために必要な機材一式が同梱されております。お届けしたその日からミッションに向けたFPGAおよびソフトウェアの開発・デバッグに着手することができます。

Development Boardには、機能評価に必要となる標準的なインターフェースのほか、2.54 mmピッチのユニバーサルエリアが設けられております。User IOに接続するメモリやセンサーなどの周辺回路を自由に実装でき、宇宙機に搭載する各種コンポーネントとの接続評価にもご活用いただけます。

### 開発環境

- ソフトウェア

  OSには、オープンソースソフトウェアである Zephyr RTOS が利用可能です。また、開発や動作検証に役立つサンプルアプリケーションを GitHub 上で公開しています。

- FPGA

  ユーザーのIPコアを実装するためのモジュールがFPGA上に準備されており、AXIバス規格に適合したIPコアを設計して組み込むことができます。無償の AMD Vivado Design Suite をご用意いただく必要があります。

- TRCH

  SC-OBC Module A1にはTRCH (Timing, Reset, Config & Health Controller)として、 PIC16LF877 が搭載されております。ソフトウェアを変更する際は、対応するインサーキットデバッガを別途ご用意いただく必要があります。

### 同梱物

- SC-OBC Module A1 [SC-OBC-A1001]
- Development Board [SC-EVB-A1001]
- ACアダプタ
- USBケーブル
- ピンソケット、ピンヘッダ、ジャンパソケット(部品は別添)
- 締結用スペーサ、ネジ
{% </dev_kit> %}

## DOCUMENTS

{% <docs_resources> %}
	Product Manual | SC-OBC Module A1の仕様や、開発に必要な情報が記載されています。 | https://docs.spacecubics.com/scobc-a1-ja/latest/index.html
	Zephyr Info Page | Zephyr Project 公式ドキュメントの、SC-OBC Module A1 ボード情報ページです。 | https://docs.zephyrproject.org/latest/boards/sc/scobc_a1/doc/index.html
	GitHub | その他、様々な技術情報はこちらを参照ください。 | https://github.com/spacecubics
	{% </docs_resources> %}
</section>


## AUTHORIZED DISTRIBUTORS

{{ <distributor name="NASAM INC." logo="nasam-logo.svg" url="https://www.nasam.com/" lang="ja" /> }}
