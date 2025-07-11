#!/bin/bash

echo "Generating news data from content/news folders..."
node generate_news_data.js

echo "News data updated! You can now rebuild your site with: ./zola build" 