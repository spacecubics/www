# Space Cubics Inc. Website

A modern, multilingual corporate website built with [Zola](https://www.getzola.org/) - a fast static site generator written in Rust.

## 🚀 Quick Start

### Prerequisites
- [Zola](https://www.getzola.org/documentation/getting-started/installation/) (v0.20.0)
- Node.js (for development tools)

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

## 📁 Project Structure

```
www/
├── config.toml              # Zola configuration
├── build.sh                 # Build script with Zola installation
├── content/                 # Content files (Markdown)
│   ├── _index.md           # Homepage (Japanese)
│   ├── _index.en.md        # Homepage (English)
│   ├── about_us/           # About us section
│   ├── products/           # Products section
│   ├── news/               # News articles
│   ├── recruit/            # Recruitment section
│   ├── contact/            # Contact section
│   └── ir_info/            # Investor relations
├── templates/              # HTML templates
│   ├── base.html           # Base template
│   ├── index.html          # Homepage template
│   ├── page.html           # Generic page template
│   ├── article.html        # Article template
│   ├── partials/           # Reusable template parts
│   ├── shortcodes/         # Custom shortcodes
│   └── macros/             # Template macros
├── sass/                   # SCSS stylesheets
│   ├── style.scss          # Main stylesheet
│   ├── _variables.scss     # CSS variables
│   ├── _nav.scss          # Navigation styles
│   ├── _hero_element.scss # Hero section styles
│   ├── _news_carousel.scss # News carousel styles
│   └── ...                 # Other component styles
├── static/                 # Static assets
│   ├── js/                 # JavaScript files
│   │   ├── nav-toggle.js   # Navigation toggle
│   │   ├── nav-links.js    # Navigation links
│   │   └── news_carousel.js # Carousel functionality
│   └── ...                 # Images, fonts, etc.
├── functions/              # Cloudflare Workers
│   └── contact.js         # Contact form handler
├── i18n/                  # Internationalization
│   ├── ja.toml           # Japanese translations
│   └── en.toml           # English translations
└── docs/                  # Documentation
    └── wiki/              # Wiki documentation
```

## 🏗️ Architecture

### Technology Stack
- **Static Site Generator**: [Zola](https://www.getzola.org/) (Rust-based)
- **Styling**: SCSS with custom CSS variables
- **JavaScript**: Vanilla JS for interactivity
- **Deployment**: Cloudflare Pages with Workers
- **Forms**: Cloudflare Turnstile CAPTCHA + Slack integration

### Key Features
- **Multilingual**: Japanese (default) and English support
- **Responsive Design**: Mobile-first approach
- **Interactive Components**: News carousel, navigation, contact forms
- **SEO Optimized**: Meta tags, structured data
- **Performance**: Static generation, optimized assets

## 🎨 Design System

### Color Scheme
- **Primary**: `#ff7800` (Orange)
- **Accent**: `#ffa348` (Light Orange)
- **Background**: Dark theme with glass morphism effects

### Typography
- **Primary Font**: 'Montserrat' (Headings)
- **Secondary Font**: 'Zen Kaku Gothic New' (Body text)

### Components
The site uses custom shortcodes for reusable components:

#### Hero Elements
```html
{% hero_element(
  title="PRODUCTS",
  subtitle="Make the impossible",
  slogan="POSSIBLE",
  img="/image.png",
  link="products"
) %}
Content here
{% end %}
```

#### News Carousel
```html
{% news_carousel(
  title="NEWS",
  subtitle="Space Cubics",
  slogan="INFORMATION",
  items="
    2025.6.1 | /news/2025-06-01 | image.png | News summary
  "
) %}
{% end %}
```

#### Prefooter Cards
```html
{% prefooter(
  left_card_image="earth.png",
  left_title="RECRUIT",
  left_link="/recruit"
) %}
{% end %}
```

## 📝 Content Management

### Adding New Pages
1. Create a new `.md` file in `content/`
2. Add front matter with metadata:
```markdown
+++
title = "Page Title"
description = "Page description"
+++

Content here...
```

### Adding News Articles
1. Create a new folder in `content/news/YYYY-MM-DD/`
2. Add `index.md` and `index.en.md` files
3. Update the news carousel in `content/_index.md`

### Multilingual Content
- Japanese content: `_index.md`
- English content: `_index.en.md`
- Use the same front matter structure

## 🎯 Key Components

### Navigation (`templates/partials/nav.html`)
- Responsive navigation with mobile menu
- Language switcher
- Social media links

### News Carousel (`templates/shortcodes/news_carousel.html`)
- Horizontal scrolling carousel
- Custom JavaScript for smooth scrolling
- Responsive design with proper spacing

### Contact Form (`templates/shortcodes/contact_form.html`)
- Cloudflare Turnstile CAPTCHA integration
- Slack webhook notifications
- Honeypot anti-spam protection

## 🔧 Development Guidelines

### SCSS Structure
- `_variables.scss`: Global CSS variables
- Component-specific files: `_nav.scss`, `_hero_element.scss`, etc.
- Responsive design with mobile-first approach

### JavaScript
- Vanilla JavaScript (no frameworks)
- Modular functions for specific features
- Event-driven architecture

### Template Best Practices
- Use shortcodes for reusable components
- Keep templates DRY (Don't Repeat Yourself)
- Use macros for complex logic
- Maintain consistent naming conventions

## 🚀 Deployment

### Cloudflare Pages
The site is deployed on Cloudflare Pages with the following configuration:

```toml
# netlify.toml
[build]
publish = "public"
command = "zola build"
```

### Environment Variables
Required for contact form functionality:
- `CAPTCHA_SECRET_KEY`: Cloudflare Turnstile secret
- `SLACK_WEBHOOK`: Slack webhook URL for notifications

### Build Process
1. Zola compiles SCSS to CSS
2. Templates are processed with Tera
3. Static assets are copied to `public/`
4. Site is deployed to Cloudflare Pages

## 🐛 Troubleshooting

### Common Issues


#### SCSS Compilation
- Ensure all SCSS files are imported in `sass/style.scss`
- Check for syntax errors in SCSS files

#### JavaScript Issues
- Check browser console for errors
- Verify file paths in templates
- Test carousel functionality manually

### Performance Optimization
- Images are optimized and served via CDN
- CSS is minified in production
- JavaScript is kept minimal for fast loading

## 📚 Documentation

### Zola Documentation
- [Zola Documentation](https://www.getzola.org/documentation/)
- [Tera Templates](https://tera.netlify.app/docs)
- [Sass Documentation](https://sass-lang.com/documentation/)

### Project-Specific
- Check `docs/wiki/` for internal documentation
- Review `config.toml` for configuration options
- Examine existing shortcodes for component patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `zola serve`
5. Submit a pull request

### Code Style
- Use consistent indentation (2 spaces)
- Follow existing naming conventions
- Add comments for complex logic
- Test responsive design across devices

## 📞 Support

For questions or issues:
- Check existing documentation
- Review similar implementations in the codebase
- Contact the development team

---

**Space Cubics, Inc.**
