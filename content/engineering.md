+++
title = "ENGINEERING"
description = "カスタマイズ・受託開発"
template = "engineering.html"

[extra]
background_image = "engineering-hero.webp"
prefooter_cards = ["products/_index.md", "recruit/_index.md", "contact/_index.md"]
+++

{% <engineering_section kind="intro" title="既製品の活用から、ミッションに合わせた開発まで"> %}

Space Cubicsは、自社のオンボードコンピュータ（OBC）の提供と、宇宙機や地上システムの受託開発を行っています。
開発の対象は、ハードウェア、FPGAロジック、ソフトウェアです。

既製品の機能拡張から、新しいシステムの設計まで対応します。
仕様を検討中の段階から、ご相談いただけます。

{% </engineering_section> %}

{% <engineering_section kind="domains"> %}

{% <engineering_card
  title="HARDWARE"
  line1="ミッションに合わせた"
  line2="ハードウェアの受託開発"
  img="engineering-hardware.webp"
  alt="開発基板に実装した電子部品の拡大写真"
> %}

自社OBC製品の提供に加え、弊社製品に接続するキャリアボードや関連する電子基板の設計から製造まで承ります。

また、既存製品では仕様が合わない場合のカスタマイズや、お客様のミッション要求に合わせた独自のOBCの開発にも対応します。

専用のOBCが必要な場合には、具体的な仕様が決まっていない段階でも、計算機アーキテクチャの検討からご相談いただけます。

{% </engineering_card> %}

{% <engineering_card
  title="FPGA / IP"
  line1="ロジック設計と"
  line2="再利用できるIPコア"
  img="engineering-fpga.webp"
  alt="開発基板に搭載したFPGAの拡大写真"
> %}

お客様の基板に搭載されるFPGAの仕様や周辺機器に合わせたロジック設計を承ります。

CPUの処理性能やFPGAのリソースを考慮し、CPUによる処理とFPGAによる自律処理の役割分担を検討することで、システム全体として最適なアーキテクチャを提案し設計します。

新規ロジックの開発から、他社が開発した既存ロジックへの機能追加や信頼性の向上まで、幅広く対応します。また、開発したロジックは可能な限りIPコア化し、将来の開発でも再利用できる形で提供します。

開発したIPコアの一部は、[SC-ORCA](https://github.com/spacecubics/sc-orca)でオープンソースとして公開しています。

{% </engineering_card> %}

{% <engineering_card
  title="SOFTWARE"
  line1="OS・デバイスドライバから"
  line2="フライトソフトウェア・地上システムまで"
  img="engineering-software.webp"
  alt="組込みソフトウェアのソースコード"
> %}

Zephyr RTOSやLinuxを中心に、デバイスドライバなどの低レイヤの開発や、ミドルウェアの導入・拡張を行っています。

NASA cFSやlibcspを活用したフライトソフトウェアの開発から、地上のミッションコントロールシステム（MCS）の設計・構築まで、お客様の仕様に合わせて対応します。

アビオニクスの試験用プログラムの設計・開発もご相談ください。

{% </engineering_card> %}

{% </engineering_section> %}

{% <engineering_section kind="open-source" title="OPEN SOURCE" subtitle="オープンソースを通じた技術と知識の共有"> %}

{% <engineering_media img="engineering-board.webp" alt="電子部品を実装した開発基板"> %}

Space Cubicsは、オープンソースを通じて他分野で培われた技術を宇宙用コンピュータの開発に取り入れています。
コードに加えて設計や検証の経験を共有できることも、オープンソースを選ぶ理由です。

共通のOSや開発・試験の仕組みを活用し、ミッション固有の機能や故障検出・復旧の設計に取り組みます。
使用するソフトウェアは、実際の製品構成とミッションの要件に合わせて検証します。

{% </engineering_media> %}

{% <engineering_media img="engineering-community.webp" alt="Zephyrを宇宙システムで活用する取り組みについての発表"> %}

製品開発で得た知見をもとに、不具合の修正や機能の追加を、利用するオープンソースの開発元へ提案しています。
自社OBCの[SC-OBC Module V1向けボードサポート](https://docs.zephyrproject.org/latest/boards/sc/scobc_v1/doc/index.html)も、Zephyr本体に取り込まれています。

Space Cubicsは[Zephyr Projectのシルバーメンバー](@/news/2026-09-11.md)です。
国内外のカンファレンスでの発表や自社イベントでも、開発の経験を共有しています。

ソースコードは[公開リポジトリ](https://github.com/spacecubics)をご覧ください。

{% </engineering_media> %}

{% <twocols title="TECHNOLOGIES" line1="組込みから運用まで" line2="活用しているオープンソース"> %}

| 技術 | 用途 |
| --- | --- |
| [Zephyr RTOS](https://www.zephyrproject.org/) | 組込み機器向けのリアルタイムOS |
| [Linux](https://www.kernel.org/) / [Yocto](https://www.yoctoproject.org/) | 組込みLinuxと、製品向けLinux環境の構築 |
| [NASA cFS](https://github.com/nasa/cFS) | 宇宙機向けソフトウェアのフレームワーク |
| [libcsp](https://github.com/libcsp/libcsp) | 小型衛星などの組込み機器間の通信 |
| [Yamcs](https://yamcs.org/) | 宇宙機を監視・操作する地上システム |

{% </twocols> %}

{% </engineering_section> %}

{% <engineering_section kind="contact" title="開発のご相談はこちら" subtitle="仕様を検討中の段階から"> %}

[CONTACT](@/contact/_index.md)

{% </engineering_section> %}
