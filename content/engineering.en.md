+++
title = "ENGINEERING"
description = "Customization and contract development"
template = "engineering.html"

[extra]
background_image = "engineering-hero.webp"
prefooter_cards = [
  "products/_index.en.md",
  "recruit/_index.en.md",
  "contact/_index.en.md",
]
+++

{% <engineering_section
  kind="intro"
  title="Products and custom development for your mission"
> %}

Space Cubics supplies its own onboard computers (OBCs) and develops
spacecraft and ground systems to customer requirements.  Our work
covers hardware, FPGA logic, and software.

We can extend an existing product or design a new system.
You can consult us while you are still defining your requirements.

{% </engineering_section> %}

{% <engineering_section kind="domains"> %}

{% <engineering_card
  title="HARDWARE"
  line1="For your mission"
  line2="Custom hardware development"
  img="engineering-hardware.webp"
  alt="Close-up of electronic components on a development board"
> %}

In addition to our OBC products, we offer design and manufacturing
services for carrier boards and related electronic boards that connect
to our products.

We also customize existing products when their specifications do not
meet your needs, and develop custom OBCs for your mission
requirements.

For a dedicated OBC, you can consult us about the computing
architecture before you have settled on detailed specifications.

{% </engineering_card> %}

{% <engineering_card
  title="FPGA / IP"
  line1="Logic design"
  line2="Reusable IP cores"
  img="engineering-fpga.webp"
  alt="Close-up of an FPGA on a development board"
> %}

We design FPGA logic to suit the device specifications and peripherals
on your board.

We consider CPU performance and available FPGA resources to decide how
to divide work between the CPU and autonomous FPGA logic.  We then
propose and design an architecture optimized for the system as a
whole.

We develop new logic and extend existing logic developed by other
companies, including adding features and improving reliability.
Wherever possible, we deliver the logic as IP cores that can be reused
in future development.

We publish some of our IP cores as open source through
[SC-ORCA][ip-cores].

[ip-cores]: https://github.com/spacecubics/sc-orca

{% </engineering_card> %}

{% <engineering_card
  title="SOFTWARE"
  line1="From operating systems and drivers"
  line2="To flight software and ground systems"
  img="engineering-software.webp"
  alt="Embedded software source code"
> %}

We develop device drivers and other low-level software primarily for
Zephyr RTOS and Linux.  We also integrate and extend middleware.

We develop flight software using NASA cFS and libcsp, and design and
build ground-based mission control systems (MCS) to your
specifications.

We also design and develop software for avionics testing.

{% </engineering_card> %}

{% </engineering_section> %}

{% <engineering_section
  kind="open-source"
  title="OPEN SOURCE"
  subtitle="Sharing technology and knowledge through open source"
> %}

{% <engineering_media
  img="engineering-board.webp"
  alt="Development board with electronic components"
> %}

Space Cubics uses open source to bring technology developed in other
industries into space computing.  We value the design and testing
experience shared through open source alongside the code itself.

By using shared operating systems and tools for development and
testing, we can focus on mission-specific functions and fault
detection and recovery.  We verify the software against the actual
product configuration and mission requirements.

{% </engineering_media> %}

{% <engineering_media
  img="engineering-community.webp"
  alt="Conference presentation about using Zephyr in space systems"
> %}

We submit bug fixes and features to the open source projects we use,
drawing on our product development experience.  Zephyr has merged
[board support for our SC-OBC Module V1][board-support] into its main
codebase.

Space Cubics is a [Silver Member of the Zephyr Project][membership].
We also share our development experience through presentations at
conferences in Japan and abroad, as well as events we host.

Browse our [public repositories][repositories] for source code.

[board-support]:
  https://docs.zephyrproject.org/latest/boards/sc/scobc_v1/doc/index.html
[membership]: @/news/2026-09-11.en.md
[repositories]: https://github.com/spacecubics

{% </engineering_media> %}

{% <twocols
  title="TECHNOLOGIES"
  line1="From embedded systems to operations"
  line2="Open source technologies we use"
> %}

| Project | Use |
| --- | --- |
| [Zephyr RTOS] | Real-time operating system for embedded devices |
| [Linux] / [Yocto] | Embedded Linux and tools for building product-specific Linux systems |
| [NASA cFS] | Software framework for spacecraft |
| [libcsp] | Communication between embedded devices, including those in small satellites |
| [Yamcs] | Ground system for monitoring and operating spacecraft |

[Zephyr RTOS]: https://www.zephyrproject.org/
[Linux]: https://www.kernel.org/
[Yocto]: https://www.yoctoproject.org/
[NASA cFS]: https://github.com/nasa/cFS
[libcsp]: https://github.com/libcsp/libcsp
[Yamcs]: https://yamcs.org/

{% </twocols> %}

{% </engineering_section> %}

{% <engineering_section
  kind="contact"
  title="Discuss your development project"
  subtitle="Get in touch while you are defining requirements"
> %}

[CONTACT](@/contact/_index.en.md)

{% </engineering_section> %}
