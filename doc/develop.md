# Development

## Prerequisites
- Install [Zola](https://www.getzola.org/documentation/getting-started/installation/)
  - We use Version [0.19.2](https://github.com/getzola/zola/releases/tag/v0.19.2) (builds easily with Cloudflare).
  - We are currently using Cloudflare Build Image v1, which has Zola 0.19.2 pre-installed.

## Technology Stack
- **Static Site Generator**: [Zola](https://www.getzola.org/) (Rust-based)
- **Styling**: SCSS with custom CSS variables
- **JavaScript**: JS for interactivity
- **Deployment**: Cloudflare Pages with Workers
- **Forms**: Cloudflare Turnstile CAPTCHA + Slack integration

## Indentation
- **Use spaces, not tabs** for indentation
- **2 spaces** per indentation level
- This is configured in `.editorconfig` and should be followed by all contributors

## Design System
### Color Scheme
This site is designed with white text on a navy blue (primary color) background.
Orange is used as an accent color (hover highlight, dividers, scroll bar, etc.)
- **Primary**: `#353946` (navy blue)
- **Accent**: `#ff7800` (orange)

### Typography
- **Alphanumeric**: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- **Japanese**: [Zen Kaku Gothic New](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New)

### Components
The site uses custom shortcodes for reusable components.

Examples on how to use these shortcodes on a page are shown below:

### Templates
#### Linking to Local Pages

Use `get_url()` with the `@/` prefix and the current page's `lang`
variable to link to local pages within the site.

**Example of calling `get_url()` in a template or shortcode

```html
<a href="{{ get_url(path=link, lang=lang) }}">{{ link_text }}</a>
```
See [this PR](https://github.com/spacecubics/www/pull/158) for more details.

We ask content writers to pass in a local link with "@/" prefix.

```
{% hero_element(
    title = "PRODUCTS",
    link = "@/products/_index.md",
    link_text = "Details"
) %}
```

Shortcode and template authors must handle local links with
`get_url()` to generate the correct URL.


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

#### HTML heade line

It seems H1 headline tag should be used for once in a page. All
segment titles should be converted to H2.

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
   link = "https://aerospacebiz.jaxa.jp/venture/"
   +++
   ```

## Deployment
### Cloudflare Pages
The site is deployed on Cloudflare Pages using the `zola build` command.

### Test with Cloudflare environment

```
zola build && wrangler pages dev public
```

### Environment Variables
Required for contact form functionality:
- `CAPTCHA_SECRET_KEY`: Cloudflare Turnstile secret
- `SLACK_WEBHOOK`: Slack webhook URL for notifications

## Playwright Integration
We use [Playwright](https://playwright.dev/) for Visual Regression
Test (VRT).

#### Configuration
Playwright is configured via `test/playwright.config.ts`.
This file can be expanded to define test variables (URLs), and web server details.

All Playwright related files are under `test/` directory. `cd test` to
run the following commands.

#### How to Install

```
cd test
npm install
npx playwright install --with-deps
```

#### How to Use
- `npx playwright test` - Run all tests in `test/tests/` directory
- `npx playwright test --update-snapshots` - Update reference screenshots
- `npx playwright show-report /path/to/playwright-report/` - View test results

We do not keep reference screenshots in the repository. Therefore, you
need to generate them first before running the actual tests.

#### Use with CI
We use GitHub workflows to automate tests.
Test results are uploaded as `GitHub Artifacts` for download and analysis.
- First, download and unzip the artifact.
- Second, confirm both `playwright-report/` and `test-results/` are present.
- Third, view test results by `npx playwright show-report /path/to/playwright-report/`.

#### Writing Tests
Tests are located in the `tests/` directory and use Playwright's testing framework:
- Use `.spec.ts` extension when creating new test files
- Workflow file `visual-regression-test.yml` currently triggers `tests/visual-regression-test.spec.ts`

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

### Server Behavior Differences

- Zola uses https://github.com/hyperium/hyper
- Cloudflare uses https://github.com/cloudflare/workerd

When accessing a directory, say `foo`, these two servers behave
differently. Zola returns a 404 if there is no `foo.md`, even if
`foo/_index.md` exists. Cloudflare, on the other hand, redirects
`/foo` to `/foo/` with a 308 status code.
