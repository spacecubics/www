#!/bin/sh -e

ZOLA_VERSION="0.20.0"
ZOLA_ARCHIVE="https://github.com/getzola/zola/releases/download/v${ZOLA_VERSION}/zola-v${ZOLA_VERSION}-x86_64-unknown-linux-gnu.tar.gz"

curl -sL "$ZOLA_ARCHIVE" | tar -xz

sed -i "s/CAPTCHA_SITE_KEY_PLACEHOLDER/${CAPTCHA_SITE_KEY}/g" config.toml

./zola build
