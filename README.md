# Space Cubics Website

This is a corporate website built with [Zola](https://www.getzola.org/) - a static site generator written in Rust.

## 🚀 Quick Start

### Prerequisites
- Install [Zola](https://www.getzola.org/documentation/getting-started/installation/)
- We use Version [0.19.2](https://github.com/getzola/zola/releases/tag/v0.19.2) (builds easily with Cloudflare).

### Development
```bash
# Clone the repository
git clone https://github.com/spacecubics/www.git
cd www

# Install Zola (if not already installed)
# See: https://www.getzola.org/documentation/getting-started/installation/

# Update the CAPTCHA_SITE_KEY_PLACEHOLDER value in config.toml
# This is required when testing the contact page

# Build the site
zola build

# Serve locally for development
zola serve

# Test with Cloudflare environment
zola build && wrangler pages dev public
```

## Project Structure

This repository is organized into only a few main folders...

- content -- Contains all the website pages
	```
	content/
	├── _index.en.md     # English homepage
	├── _index.md        # Japanese homepage
	├── about_us.md      # About us page
	├── about_us.en.md   # About us English page
	├── contact/         # Contact forms
	├── ir_info/         # Investor relations
	├── news/            # News articles
	├── products/        # Products section
	└── recruit/         # Recruitment section
	```
- functions -- Contains JavaScript files used as Cloudflare Workers
- i18n -- Config files for Japanese and English
- sass -- Visual style files
- templates -- Contains HTML files
	```
	templates/
	├── base.html                    # Main layout for site
	├── article.html                 # News article template (not currently used)
	├── macros/                      # Other globally available template functions
	├── partials/                    # Reusable page sections
	│   ├── footer.html              # Site footer
	│   └── nav.html                 # Site navigation header
	└── shortcodes/                  # Custom components
		├── spec_sheet.html          # Production specification component
		└── kv_list.html			 # Displays key-value set of text
	```
- static -- Contains site images and client-side JavaScript
	```
	static/
	├── js/                       # JavaScript that runs in the user's web browser
	│   ├── nav-toggle.js         # Navigation menu functionality
	│   └── nav-links.js          # Navigation link handling
	├── logo_black.webp
	├── logo_white.webp
	└── sc-obc_module_a1.jpg
	```

...and some important configuration files such as...

- config.toml
- netlify.toml
- wrangler.toml
- README.md


## Architecture

### Technology Stack
- **Static Site Generator**: [Zola](https://www.getzola.org/) (Rust-based)
- **Styling**: SCSS with custom CSS variables
- **JavaScript**: JS for interactivity
- **Deployment**: Cloudflare Pages with Workers
- **Forms**: Cloudflare Turnstile CAPTCHA + Slack integration

## Design System

### Color Scheme
- **Primary**: `#ff7800` (Orange)
- **Accent**: `#ffa348` (Light Orange)
- **Background**: `#353946` (Dark Purple)

### Typography
- **Alphanumeric**: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Japanese**: [Zen Kaku Gothic New](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New)

### Components
The site uses custom shortcodes for reusable components.

Examples on how to use these shortcodes on a page are shown below:

#### Hero Elements
```html
{% hero_element(
	title="PRODUCTS",
	subtitle="Make the impossible",
	slogan="POSSIBLE",
	img="image.png",
	link="products"
) %}
Content here
{% end %}
```

#### Prefooter Cards

Prefooter cards appear near the bottom of the page and allow users to
navigate between sections. Most pages or sections can specify which
cards to display using the prefooter_cards field in the TOML front
matter.

```toml
[extra]
prefooter_cards = ["products/_index.md", "recruit/_index.md", "contact/_index.md"]
```

## Content Management

### Adding New Section
1. Create a new folder, such as: `content/your_new_section/`
2. Add `_index.md` and `_index.en.md` files
2. Add front matter and content (text and shortcode elements)
   ```markdown
   +++
   title = "Section Title"
   description = "Section description"
   +++

   Content here...

   ```

### Adding New Page
1. Create a new file, such as: `content/your_new_page.md`
2. Add front matter and content (text and shortcode elements)
   ```markdown
   +++
   title = "Page Title"
   description = "Page description"
   +++

   Content here...

   ```

### Adding New News Articles
1. Create a new file in `content/news/`
2. Name it by date. ex) `2025-06-01.md` and `2025-06-01.en.md`
3. Add title (string) and date (YYYY-MM-DD) variables to front matter.
4. Add link variable under [extra] if article has external link.
5. Example:
   ```toml
	+++
	title = "「JAXAベンチャー」の認定"
	date = 2018-05-29

	[extra]
	link = "http://aerospacebiz.jaxa.jp/venture/"
	+++
   ```

## Deployment

### Cloudflare Pages
The site is deployed on Cloudflare Pages using the `zola build` command.

### Environment Variables
Required for contact form functionality:
- `CAPTCHA_SECRET_KEY`: Cloudflare Turnstile secret
- `SLACK_WEBHOOK`: Slack webhook URL for notifications

## Troubleshooting

### Following Tera Rules
Some common programming syntax is not supported by Tera.

For example, ternary operators are not supported in Tera templates - instead use `if`/`else` blocks:
	```
	/* ❌ Incorrect - This will not work: */
	{{ is_active ? "active" : "inactive" }}

	/* ✅ Correct - Use if/else blocks instead: */
	{% if is_active %}
	active
	{% else %}
	inactive
	{% endif %}
	```

See the Tera documentation for more details.

### SCSS Compilation
- Ensure new SCSS files are prefixed with an underscore (`_`)
- Ensure all SCSS files are imported in `sass/style.scss`
- Check for syntax errors in SCSS files (they can break the site)

## Helpful Documentation
- [Zola](https://www.getzola.org/documentation/)
- [Tera](https://docs.rs/tera/latest/tera/)
- [Sass](https://sass-lang.com/documentation/)

## Contributing

Please feel free to submit a pull request and/or post an issue.

---

**Space Cubics, Inc.**
