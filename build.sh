#!/bin/sh -e

echo "Starting Space Cubics website build..."

ZOLA_VERSION="0.19.2"
ZOLA_ARCHIVE="https://github.com/getzola/zola/releases/download/v${ZOLA_VERSION}/zola-v${ZOLA_VERSION}-x86_64-unknown-linux-gnu.tar.gz"

echo "Downloading Zola v${ZOLA_VERSION}..."
curl -sL "$ZOLA_ARCHIVE" | tar -xz

# Replace placeholder with actual CAPTCHA_SITE_KEY environment variable
echo "Configuring environment variables..."

sed -i "s/CAPTCHA_SITE_KEY_PLACEHOLDER/${CAPTCHA_SITE_KEY}/g" config.toml

# Generate news data for auto carousel
echo "Generating news data for carousel..."
node generate_news_data.js

echo "Building site with Zola..."
./zola build

echo "Build completed successfully!"
echo "Site built to: public/"
