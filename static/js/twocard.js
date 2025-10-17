
  function adjustTwocardImageHeights() {
  const containers = document.querySelectorAll('.twocard-container');

  containers.forEach(container => {
    const imageContainers = container.querySelectorAll('.twocard-column-image');
    let maxImageHeight = 0;
    let loadedCount = 0;

    const images = container.querySelectorAll('.twocard-column-image img');

    images.forEach(img => {
      img.addEventListener('load', () => {
        loadedCount++;
        const height = img.offsetHeight;
        if (height > maxImageHeight) maxImageHeight = height;

        // Once all are loaded, unify the height of only that pair.
        if (loadedCount === images.length) {
          imageContainers.forEach(div => {
            div.style.height = (maxImageHeight *1.05) + 'px';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'center';
          });
        }
      });

      // Supports cached images
      if (img.complete) {
        img.dispatchEvent(new Event('load'));
      }
    });
  });
}

// When loading for the first time
window.addEventListener('load', adjustTwocardImageHeights);

// When resizing (with delay to reduce load)
window.addEventListener('resize', () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(adjustTwocardImageHeights, 150);
});

// Ensures immediate caching
document.addEventListener('DOMContentLoaded', adjustTwocardImageHeights);
