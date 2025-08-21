+++
title = "IR INFO"
description = "投資家情報"

[extra]
background_image = "ir.jpg"
prefooter_cards = ["contact/_index.md"]
card_body = """
ステークホルダーの皆様に向けて

決算や適時開示情報などをご紹介しています。
"""
+++

{{ kv_list(line1="IR NEWS", line2="Space Cubics", line3="INVESTOR RELATIONS", data="blocks/ir_news.json") }}
