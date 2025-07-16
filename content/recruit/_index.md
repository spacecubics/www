+++
sort_by = "date"
+++

{% section_title(bg="", title="RECRUIT", subtitle="採用情報", slogan="", style_top="採用情報") %}
<!--display element -->
{% end %}

{% twocol(
  bg="earth.jpg",
  title="",
  subtitle="",
  slogan="",
  img="",
  alt="",
  link="",
  link_text="",
  img_link=""
) %}
<!-- no text -->
{% end %}

{% recruit_intro(
  title = "一緒に働くメンバーを常に募集しています。<br><br> 少しでもご興味のある方はアプリケーションフォームからご連絡下さい。",
  body_text = "
 株式会社 Space Cubicsは、宇宙とコンピューターの仕事を通じて出会ったエンジニア達が作った会社です。エンジニアリングを心から楽しみ、より過酷で極限の環境である宇宙でも使えるコンピュータを設計、開発しています。
 <br><br>
 ある人は宇宙に詳しく、ある人はコンピューターアーキテクチャやロジック、またある人はソフトウェア開発が得意だったりと、自分の領域には絶対の自信がある人達です。しかし、どうしても1人では達成できない問題が山程あり、その問題に取り組むために、信頼できる仲間と一緒に問題解決に日々取り組んでいます。そこには、だれが偉くてだれが部下だという気持ちは無く、唯一無二の仲間達がいるからこそ、達成しえる、日々研鑽できるという思いだけがあります。
 <br><br>
今の 株式会社 Space Cubicsはまだまだ小さくて、大きな仕事を自分達だけで完結できる力がありません。コンピューター、通信、推進、構造、熱流体、システムエンジニアリングなど、宇宙機を設計、製造、販売する事に興味がある人、地上で動くコンピューターなど普通すぎてツマラナク感じている人や、色々な理由で思い通りのモノが作ることが出来ていない人は、ご連絡ください。他人の仕事にケチばかり付けて代替案を提案できない人、他人を貶める人は、たとえ優秀でもご遠慮ください。 "
) %}
<!-- no text -->
{% end %}

{% jobs_list(
  title = "WANTED",
  subtitle = "Current available",
  slogan = "POSITIONS",
  jobs_note = "特記事項：募集中以外の職種に関しては、お問合せフォームよりお問合せ願います。",
  jobs = "
システムエンジニア | system-engineer/ | active
通信エンジニア |
資金調達担当 | 
FPGAエンジニア | 
ハードウェアエンジニア | 
推進系エンジニア | 
営業 | 
構造系エンジニア | 
熱流体系エンジニア |
") %}
<!-- no text -->
{% end %}

{% application_form(
  title = "APPLICATION FORM",
  subtitle = "Join us",
  slogan = "SPACE CUBICS",
  name_field="お名前"
  email_field="メールアドレス"
  role_field="希望する求人"
  message_field="メッセージを入力してください"
  button_label="送信"
  description = ""
) %}
<!-- no text -->
{% end %}

{% prefooter(
  left_card_image="sq_about_img2.jpg", 
  right_card_image="earth.jpg",

  left_title="ABOUT US",
  left_subtitle="私たちについて",
  left_footer_1="一緒に働くメンバーを常に募集しています。",
  left_footer_2="ご興味のある方はご連絡ください。",
  left_link="/about_us",

  right_title="CONTACT",
  right_subtitle="お問い合わせ",
  right_footer_1="お気軽にお問い合わせください。",
  right_footer_2="担当者よりご返信いたします",
  right_link="/contact",

  bottom_card_image = "<!--display element -->",
  bottom_title="PRODUCTS",
  bottom_subtitle="製品紹介",
  bottom_footer_1="信頼性の高い製品を提供し、",
  bottom_footer_2="宇宙開発をサポートします。",
  bottom_link="/products",

  bg=""
) %}
<!--display element -->
{% end %}
