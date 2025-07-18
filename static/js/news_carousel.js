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
