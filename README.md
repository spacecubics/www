# Space Cubics Website

This is a corporate website built with [Zola](https://www.getzola.org/) --
a static site generator written in Rust.

Use the exact Zola version recorded in [`ZOLA_VERSION`](ZOLA_VERSION).

## 🚀 Quick Start


### Install Zola

See: https://www.getzola.org/documentation/getting-started/installation/

### Clone

```
git clone https://github.com/spacecubics/www
cd www
```

### Build

```
zola build
```

### Check

```
zola serve
```

## 📰 Add a News Article
1. Create a new file in `content/news/`
2. Name it by date. ex) `2025-06-01.md` and `2025-06-01.en.md`
3. Add title (string) variable to front matter.
4. Add link variable under [extra] if article has external link.
5. Add your news.

   ```
   +++
   title = "「JAXAベンチャー」の認定"

   [extra]
   link = "https://aerospacebiz.jaxa.jp/venture/"
   +++

   Content here...
   ```

If you need a line break, do not use two trailing spaces at the end of
a line, because they are very hard to notice and, as programmers, we
are not used to writing any trailing whitespace. Please use an
explicit `<br>` tag for line breaks.

    ```
    These lines<br>
    should be two lines.
    ```

On news pages, we use an `<h1>` tag outside the article, so the news
title itself is an `<h2>`. This means you should only use level-3 or
lower headers within the article. In other words, start from `###` or
deeper for your section headings.

### Linking to Local Pages

A link to a local page must include the `@/` prefix.

In your `.md` file, create a link like this:

```
[here](@/products/scobc_a1.md)
```

Or, if you are calling one of our components:

```
{{ <product_display
    lang
    img="sc-obc_module_v1.png"
    title="SC-OBC Module V1"
    details_link="@/products/scobc_v1.md"
/> }}
```

This ensures the correct link is generated for the page, based on its
language.

## 📊 Add Investor Relations Information

1. If required, prepare a PDF locally, using a unique, descriptive filename
   that identifies the document. Include a relevant date, fiscal year, or
   version where appropriate. For example, a balance sheet could be named
   `spacecubics-balance-sheet-fy8-2026-05-31.pdf`.
2. For the PDF prepared in step 1, ask the infrastructure contact
   to upload it to the file server and provide its public URL.
3. Create files in `content/investor-relations/`, named by publication date.
   For example: `2026-08-19.md` and `2026-08-19.en.md`.
4. Add a `title` in the front matter.
5. Add the information to the body and, if required, a PDF link. Use a Markdown
   reference link to keep the URL separate from the link text. Use the public
   file server URL provided by the infrastructure contact in both languages.

   ```markdown
   +++
   title = "第8期 貸借対照表(2026年5月31日現在)"
   +++

   [第8期 貸借対照表(2026年5月31日現在)(PDF)][1]

   [1]: https://downloads.spacecubics.com/investor-relations/balance-sheet/spacecubics-balance-sheet-fy8-2026-05-31.pdf
   ```

## 💻 Add a New Job Position
1. Create a new file in `content/recruit/`.
   - If you are posting in Japanese, end the file name with `.md`.
   - If you are posting in English, end the file name with `.en.md`.
2. The file name can be anything, unlike news articles.
3. Add a title in the front matter. The title will appear on the job card.
4. Add `active = true` under the `[extra]` section.
5. Add the job description.

   ```
   +++
   title = "Software Engineer"

   [extra]
   active = true
   +++

   Content here...
   ```

Note that since the job page uses "RECRUIT" as the H1 and the job
title as H2, job description files should only use H3:(`###`) or
smaller for section headings.

## 🏗️ Project Structure

This repository is organized into only a few main folders...

- content -- Contains all the website pages
  ```
  content/
  |-- _index.en.md           # English homepage
  |-- _index.md              # Japanese homepage
  |-- about-us.md            # About us page
  |-- about-us.en.md         # About us English page
  |-- contact/               # Contact forms
  |-- investor-relations/    # IR listing and dated information pages
  |-- news/                  # News articles
  |-- products/              # Products section
  `-- recruit/               # Recruitment section
  ```
- functions -- Contains JavaScript files used as Cloudflare Workers
- i18n -- Config files for Japanese and English
- sass -- Visual style files
- templates -- Contains HTML files
  ```
  templates/
  |-- base.html              # Main layout for site
  |-- investor_relations.html # IR listing template
  |-- ir_info.html           # IR information page template
  |-- news_article.html      # News article template
  |-- components/            # Components callable from content and templates
  `-- partials/              # Reusable page sections
      |-- footer.html        # Site footer
      `-- nav.html           # Site navigation header
  ```
- static -- Contains site images and client-side JavaScript
  ```
  static/
  |-- js/                    # JavaScript that runs in the user's web browser
  |   |-- contact.js         # Contact form submission
  |   `-- cookie_banner.js   # Cookie notice behavior
  |-- logo_black.webp
  |-- logo_white.webp
  `-- sc-obc_module_a1.jpg
  ```

...and some important configuration files such as...

- config.toml
- wrangler.toml
- README.md

## 🔧 Development

See [develop.md](doc/develop.md).

## 🆘 Helpful Documentation
- [Zola](https://www.getzola.org/documentation/)
- [Tera](https://docs.rs/tera/latest/tera/)
- [Sass](https://sass-lang.com/documentation/)

## 🙌 Contributing

Please feel free to submit a pull request and/or post an issue.

---

**Space Cubics Inc.**
