+++
template = "contact.html"
+++

{% twocoltwo(
  title="CONTACT",
  img="",
  alt="",
  link="products",
  link_text="",
  img_link="product1.png",
  bg="earth.png",
  subtitle="Be part of something bigger",
  slogan=""
) %}
お気軽に<br>お問い合わせ<br>ください。
<br><br>
担当者より<br>ご返信いたします
{% end %}


{% contact_form(
  title="お問い合わせ",
  subtitle="一緒に働くメンバーを常に募集しています。",
  name_field="お名前"
  email_field="メールアドレス"
  role_field="役職"
  message_field="メッセージを入力してください"
  button_label="送信"
) %}
~render~
{% end %}

{% prefooter(
  left_card_image="about.png", 
  right_card_image="ide.webp",

  left_title="ABOUT US",
  left_subtitle="採用情報",
  left_footer_1="一緒に働くメンバーを常に募集しています。",
  left_footer_2="ご興味のある方はご連絡ください。",
  left_link="/about_us",

  right_title="RECRUIT",
  right_subtitle="お問い合わせ",
  right_footer_1="お気軽にお問い合わせください。",
  right_footer_2="担当者よりご返信いたします",
  right_link="/recruit",

  bottom_card_image="white_pcb.png",
  bottom_title="PRODUCTS",
  bottom_subtitle="Be part of something bigger",
  bottom_footer_1="We believe in collaboration, creativity, and community.",
  bottom_footer_2="Start your journey with us today.",
  bottom_link="/products",

  bg=""
) %}
~render~
{% end %}
