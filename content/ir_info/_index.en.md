+++
title = "IR INFO"
description = "Investor Relations"

[extra]
background_image = "ir.jpg"
prefooter_cards = ["contact/_index.en.md"]
card_body = """
We provide information on financial results

and timely disclosures for our stakeholders.
"""
+++

{# TODO: this must be generated from news #}
{{ kv_list(line1="IR NEWS", line2="Space Cubics", line3="INVESTOR RELATIONS", data="blocks/ir_news.json") }}
