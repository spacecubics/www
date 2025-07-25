function positionScrollHintAbsolute() {
  var hint = document.querySelector('.scroll-hint');
  var footer = document.querySelector('.splash-footer');
  if (!hint || !footer) return;

  var footerRect = footer.getBoundingClientRect();
  var scrollY = window.scrollY || window.pageYOffset;
  var hintHeight = hint.offsetHeight;
  var isMobile = window.innerWidth <= 1000;
  var is4k = window.innerWidth >= 3000;

  var y;
  if (isMobile) {
    // Place below the footer
    y = footerRect.top + scrollY + footerRect.height + 16;
  } else {
    // Place above the footer, with extra offset for 4K
    var desktopOffset = is4k ? 100 : 50;
    y = footerRect.top + scrollY - hintHeight + desktopOffset;
  }

  // Fallback: if the calculated y is off the visible viewport, use fixed at 55px from bottom
  var viewportBottom = scrollY + window.innerHeight;
  if (y > viewportBottom - hintHeight || y < scrollY) {
    hint.style.position = 'fixed';
    hint.style.top = '';
    hint.style.bottom = '55px';
    hint.style.left = '50%';
    hint.style.transform = 'translateX(-50%)';
  } else {
    hint.style.position = 'absolute';
    hint.style.top = y + 'px';
    hint.style.left = '50%';
    hint.style.transform = 'translateX(-50%)';
    hint.style.bottom = '';
  }
}

window.addEventListener('resize', positionScrollHintAbsolute);
document.addEventListener('DOMContentLoaded', function() {
  positionScrollHintAbsolute();
  var hint = document.querySelector('.scroll-hint');
  if (hint) {
    hint.classList.add('scroll-hint--bounce');
  }
});

window.addEventListener('scroll', function() {
  var hint = document.querySelector('.scroll-hint');
  if (!hint) return;
  if (window.scrollY > 50) {
    hint.classList.add('scroll-hint--hidden');
  } else {
    hint.classList.remove('scroll-hint--hidden');
  }
});
