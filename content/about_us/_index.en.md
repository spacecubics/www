+++
+++

{{ section_title(bg="", title="ABOUT US", subtitle="Company information", slogan="", style_top="About Us") }}

{{ twocol(bg="about.jpg") }}

{{ threecard(
	title="To drink beer on the moon.",
	subtitle="Space Cubics is a JAXA venture developing affordable and reliable space computers so everyone can go to the moon.",
	left_card_image="",
	middle_card_image="",
	right_card_image="",
	left_card_title="Affordable",
	left_card="blocks/affordable.en.md",
	middle_card_title="Easy",
	middle_card="blocks/easy.en.md",
	right_card_title="To Space",
	right_card="blocks/to_space.en.md",
	bg=""
) }}

{% about_company(
	title="COMPANY",
	subtitle="Space Cubics",
	slogan="OVERVIEW",
	bg="",
	image="map.png"
) %}
Company Name｜Space Cubics, Inc.
Established｜2018
Representative｜Yasushi Shoji
Address｜Venture Square 301, 1, South-3 East-2, Chuo-ku, Sapporo, Japan 060-0053
TEL｜+81-50-7112-6213
{% end %}

{% board_members (
	title="BOARD MEMBERS",
	subtitle="Executive",
	slogan="PROFILES"
) %}
Yasushi Shoji (荘司 靖)｜CEO｜Software Engineer｜Graduating from Salem State University, MA, USA in 2000, Mr. Shoji has been engaged in embedded CPU board development since 2002. Leveraging extensive knowledge and experience, he previously led software development for a space drone (Int-Ball) project in 2016.
Daisuke Sasaki (佐々木 大輔)｜CTO｜LSI Logic Engineer｜Since 2001, Mr. Sasaki has gained extensive experience in various LSI design processes over his 11 years of experience in the semiconductor industry. Since 2013, he has worked to develop embedded CPU boards equipped with LSIs. Mr. Sasaki is also a skilled software developer.
Fumito Morishima (森島 史仁)｜CFO｜Sales, Finance Control｜For 16 years, Mr. Morishima was involved in the development, sales, marketing, and management of embedded CPU boards. He also started a business in Southeast Asia and possesses a broad network of industry connections.
Takuya Sasaki (佐々木 拓也)｜CAO｜Software Engineer, Sales｜Starting in 1998, Mr. Sasaki has been working as a software engineer for a Japanese electronics manufacturer, mainly developing network management systems for government agencies. In 2013, he worked as a field application engineer (FAE) for an embedded CPU board manufacturer, supporting both development and mass production.
Tomohiro Namitsuka (波塚 朋広)｜CPO｜Electronics Engineer｜Starting in 2002, Mr. Namitsuka worked as a hardware engineer for an embedded CPU board manufacturer where he was responsible for the development of numerous circuit boards. Leveraging extensive knowledge and experience in circuit designs that require special environmental resistance, he now works to provide affordable and reliable spacecraft computers.
Masayuki Goto (後藤 雅享)｜Founding Member｜Space System Engineer｜ Mr. Goto worked on manned space development at JAXA. He has been responsible for numerous development projects for the International Space Station, and has extensive experience in how computers function during launch and space operation. More broadly, Mr. Goto's aim is to advance space development in both the public and private sectors.
{% end %}

{% hero_element(
	title="PARTNERS",
	img="spaceone.png",
	alt="",
	link="https://www.space-one.co.jp/",
	link_text="Read More",
	img_link="",
	bg="",
	subtitle="Other teams who",
	slogan="WORK WITH US"
) %}
Space Cubics and Space One were both selected for an industrial development grant by Japan's Ministry of Economy, Trade and Industry.
<br><br>
Now, we deploy our space computers in CubeSats using Space One's KAIROS rocket. Every launch provides valuable telemetry data that drives refinement.
{% end %}

{{ prefooter(
	left_card_image="white_pcb_dark.jpg",
	right_card_image="earth.jpg",

	left_title = "PRODUCTS"
	left_subtitle = "Board introduction"
	left_footer_1 = "Even in extreme environments,"
	left_footer_2 = "these computers function normally."
	left_link = "/en/products"

	right_title="RECRUIT",
	right_subtitle="Employment details",
	right_footer_1="We are always looking for new people to join our team.",
	right_footer_2="If you are interested, please contact us.",
	right_link="/en/recruit",

	bottom_card_image = "",
	bottom_title = "CONTACT",
	bottom_subtitle="Reach out to us.",
	bottom_footer_1="We welcome inquiries about our business and services.",
	bottom_footer_2="Please feel free to contact us.",
	bottom_link="/en/contact",

	bg=""
) }}
