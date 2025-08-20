+++
title = "RECRUIT"
description = "採用情報"

[extra]
background_image = "earth.jpg"
prefooter_cards = ["products/_index.md", "about_us.md", "contact/_index.md"]
card_body = """一緒に働くメンバーを常に募集しています。

ご興味のある方はご連絡ください
"""
+++

{{ recruit_intro(
	title = "一緒に働くメンバーを常に募集しています。<br><br> 少しでもご興味のある方はアプリケーションフォームからご連絡下さい。",
	body_text = "
 Space Cubicsは、宇宙とコンピューターの仕事を通じて出会ったエンジニア達が作った会社です。エンジニアリングを心から楽しみ、より過酷で極限の環境である宇宙でも使えるコンピュータを設計、開発しています。
 <br><br>
 ある人は宇宙に詳しく、ある人はコンピューターアーキテクチャやロジック、またある人はソフトウェア開発が得意だったりと、自分の領域には絶対の自信がある人達です。しかし、どうしても1人では達成できない問題が山程あり、その問題に取り組むために、信頼できる仲間と一緒に問題解決に日々取り組んでいます。そこには、だれが偉くてだれが部下だという気持ちは無く、唯一無二の仲間達がいるからこそ、達成しえる、日々研鑽できるという思いだけがあります。
 <br><br>
今の Space Cubicsはまだまだ小さくて、大きな仕事を自分達だけで完結できる力がありません。コンピューター、通信、推進、構造、熱流体、システムエンジニアリングなど、宇宙機を設計、製造、販売する事に興味がある人、地上で動くコンピューターなど普通すぎてツマラナク感じている人や、色々な理由で思い通りのモノが作ることが出来ていない人は、ご連絡ください。他人の仕事にケチばかり付けて代替案を提案できない人、他人を貶める人は、たとえ優秀でもご遠慮ください。 "
) }}

{{ jobs_list(
	title = "WANTED",
	subtitle = "Current available",
	slogan = "POSITIONS",
	jobs = "
ソフトウェアエンジニア | software_engineer | active
通信エンジニア |
資金調達担当 |
FPGAエンジニア |
ハードウェアエンジニア |
推進系エンジニア |
営業 |
構造系エンジニア |
熱流体系エンジニア |
システムエンジニア |
") }}

{% twocols(line1="APPLICATION FORM", line2="Join us", line3="SPACE CUBICS") %}
{{ application_form(
	name_field="お名前"
	email_field="メールアドレス"
	role_field="希望する求人"
	message_field="メッセージを入力してください"
	button_label="送信"
	description = ""
) }}
{% end %}
