#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to read news folders and generate data for a specific language
function generateNewsData(language = 'ja') {
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
      
      // Determine which file to read based on language
      let indexPath;
      if (language === 'en') {
        indexPath = path.join(folderPath, 'index.en.md');
        // Fallback to Japanese if English doesn't exist
        if (!fs.existsSync(indexPath)) {
          indexPath = path.join(folderPath, 'index.md');
        }
      } else {
        indexPath = path.join(folderPath, 'index.md');
      }
      
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
          
          // Determine link based on language
          const link = language === 'en' ? `/en/news/${folder}/` : `/news/${folder}/`;
          
          newsData.push({
            date: displayDate,
            link: link,
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

// Generate data for both languages
const jaNewsData = generateNewsData('ja');
const enNewsData = generateNewsData('en');

// Write language-specific files
const jaOutputPath = path.join(__dirname, 'static', 'js', 'news_data_ja.json');
const enOutputPath = path.join(__dirname, 'static', 'js', 'news_data_en.json');

fs.writeFileSync(jaOutputPath, JSON.stringify(jaNewsData, null, 2));
fs.writeFileSync(enOutputPath, JSON.stringify(enNewsData, null, 2));

console.log(`Japanese news data written to: ${jaOutputPath}`);
console.log(`English news data written to: ${enOutputPath}`); 