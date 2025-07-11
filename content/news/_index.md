+++
<<<<<<< HEAD
template = "news_section.html"
+++
=======
+++

{% section_title(bg="", title="NEWS", subtitle="お知らせ", slogan="", style_top="お知らせ") %}
<!--display element -->
{% end %}

{% auto_news_list(
  news_note = ""
) %}
<!-- Auto-generated news list -->
{% end %}

{% prefooter(
  bottom_card_image = "<!--display element -->",
  bottom_title="CONTACT",
  bottom_subtitle="お問い合わせ",
  bottom_footer_1="事業やサービスについてご相談・ご質問承ります。",
  bottom_footer_2="お気軽にお問い合わせください。",
  bottom_link="/contact",
  bg=""
) %}
<!--display element -->
{% end %}
>>>>>>> 22ffcc9 (rebase: accept deletion of templates/shortcodes/news_list.html)
