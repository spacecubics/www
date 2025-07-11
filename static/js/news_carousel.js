function newsCarouselScroll(btn, dir) {
  // Find the news-carousel section that contains this button
  const carouselSection = btn.closest('.news-carousel-section');
  const wrapper = carouselSection.querySelector('.carousel-track-wrapper');
  const track = wrapper.querySelector('.carousel-track');
  const card = track.querySelector('.carousel-card');
  if (!card) return;

  // Scroll by the width of the wrapper (visible area), or one card, whichever is smaller
  const visibleWidth = wrapper.offsetWidth;
  const cardWidth = card.offsetWidth + 16; // 16px gap
  const scrollAmount = Math.min(cardWidth, visibleWidth);

  // Calculate new scroll position
  let newScrollLeft = wrapper.scrollLeft + dir * scrollAmount;

  // Clamp scroll position to prevent overscrolling
  newScrollLeft = Math.max(0, Math.min(newScrollLeft, track.scrollWidth - wrapper.offsetWidth));

  wrapper.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
}

// Enhanced mobile touch support
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel-track-wrapper');
  
  carousels.forEach(wrapper => {
    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    // Touch events for mobile
    wrapper.addEventListener('touchstart', function(e) {
      isScrolling = true;
      startX = e.touches[0].pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    }, { passive: true });

    wrapper.addEventListener('touchmove', function(e) {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.touches[0].pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      wrapper.scrollLeft = scrollLeft - walk;
    }, { passive: false });

    wrapper.addEventListener('touchend', function() {
      isScrolling = false;
    }, { passive: true });

    // Mouse events for desktop
    let isMouseDown = false;
    let mouseStartX = 0;
    let mouseScrollLeft = 0;

    wrapper.addEventListener('mousedown', function(e) {
      isMouseDown = true;
      mouseStartX = e.pageX - wrapper.offsetLeft;
      mouseScrollLeft = wrapper.scrollLeft;
      wrapper.style.cursor = 'grabbing';
      wrapper.style.userSelect = 'none';
    });

    wrapper.addEventListener('mousemove', function(e) {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - mouseStartX) * 2;
      wrapper.scrollLeft = mouseScrollLeft - walk;
    });

    wrapper.addEventListener('mouseup', function() {
      isMouseDown = false;
      wrapper.style.cursor = 'grab';
      wrapper.style.userSelect = 'auto';
    });

    wrapper.addEventListener('mouseleave', function() {
      isMouseDown = false;
      wrapper.style.cursor = 'grab';
      wrapper.style.userSelect = 'auto';
    });
  });
});