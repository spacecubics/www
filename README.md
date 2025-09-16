# Space Cubics Website

This is a corporate website built with [Zola](https://www.getzola.org/) --
a static site generator written in Rust.

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
3. Add title (string) and date (YYYY-MM-DD) variables to front matter.
4. Add link variable under [extra] if article has external link.
5. Add your news.

   ```
   +++
   title = "「JAXAベンチャー」の認定"
   date = 2018-05-29

   [extra]
   link = "https://aerospacebiz.jaxa.jp/venture/"
   +++

   Content here...
   ```

As shown above, there are two date values: one in the file name and
one in the `date` variable. We haven’t been able to remove the
redundant `date` field due to a limitation in Zola. A fix is already
in Zola, but we need to wait for the next release, v0.22.0.  See
[issue #114](https://github.com/spacecubics/www/issues/114) for
details.

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

Or, if you are calling one of our shortcodes:

```
{% hero_element(
    title = "PRODUCTS",
    link = "@/products/_index.md",
    link_text = "Details"
) %}
```

This ensures the correct link is generated for the page, based on its
language.

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
  |-- investor-relations/    # Investor relations
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
  |-- article.html           # News article template (not currently used)
  |-- macros/                # Other globally available template functions
  |-- partials/              # Reusable page sections
  |   |-- footer.html        # Site footer
  |   `-- nav.html           # Site navigation header
  `-- shortcodes/            # Custom components
    |-- spec_sheet.html      # Production specification component
    `-- kv_list.html         # Displays key-value set of text
  ```
- static -- Contains site images and client-side JavaScript
  ```
  static/
  |-- js/                    # JavaScript that runs in the user's web browser
  |   |-- nav-toggle.js      # Navigation menu functionality
  |   `-- nav-links.js       # Navigation link handling
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

**Space Cubics, Inc.**
