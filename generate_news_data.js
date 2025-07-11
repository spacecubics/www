#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to read news folders and generate data
function generateNewsData() {
  const newsDir = path.join(__dirname, 'content', 'news');
  const newsData = [];
  
  try {
    const folders = fs.readdirSync(newsDir)
      .filter(item => {
        const itemPath = path.join(newsDir, item);
        return fs.statSync(itemPath).isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(item);
      })
      .sort((a, b) => new Date(b) - new Date(a)); // Sort by date descending
    
    folders.forEach(folder => {
      const folderPath = path.join(newsDir, folder);
      const indexPath = path.join(folderPath, 'index.md');
      
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8');
        
        // Extract front matter
        const frontMatterMatch = content.match(/^\+\+\+([\s\S]*?)\+\+\+/);
        if (frontMatterMatch) {
          const frontMatter = frontMatterMatch[1];
          
          // Extract title
          const titleMatch = frontMatter.match(/title\s*=\s*"([^"]+)"/);
          const title = titleMatch ? titleMatch[1] : 'News';
          
          // Extract date
          const dateMatch = frontMatter.match(/date\s*=\s*(\d{4}-\d{2}-\d{2})/);
          const date = dateMatch ? dateMatch[1] : folder;
          
          // Extract image from front matter [extra] section
          const extraMatch = frontMatter.match(/\[extra\]([\s\S]*?)(?=\[|$)/);
          let image = null;
          
          if (extraMatch) {
            const extraSection = extraMatch[1];
            const imageMatch = extraSection.match(/image\s*=\s*"([^"]+)"/);
            image = imageMatch ? imageMatch[1] : null;
          }
          
          // If no image specified, use a default based on date hash
          if (!image) {
            const imageOptions = ['jts.png', 'brainchild.png', 'square_cubics.png', 'about.png', 'earth.png'];
            const dateHash = date.split('-').join('').length;
            const imageIndex = dateHash % imageOptions.length;
            image = imageOptions[imageIndex];
          }
          
          // Format date for display
          const displayDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1.$2.$3');
          
          newsData.push({
            date: displayDate,
            link: `/news/${folder}/`,
            img: `/news/${image}`,
            summary: title
          });
        }
      }
    });
    
    return newsData;
  } catch (error) {
    console.error('Error generating news data:', error);
    return [];
  }
}

// Generate and output the data
const newsData = generateNewsData();
console.log('Generated news data:');
console.log(JSON.stringify(newsData, null, 2));

// Write to a file for use in templates
const outputPath = path.join(__dirname, 'static', 'js', 'news_data.json');
fs.writeFileSync(outputPath, JSON.stringify(newsData, null, 2));
console.log(`\nNews data written to: ${outputPath}`); 