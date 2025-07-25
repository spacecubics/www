function positionScrollHintAbsolute() {
  var hint = document.querySelector('.scroll-hint');
  var footer = document.querySelector('.splash-footer');
  if (!hint || !footer) return;

  var footerRect = footer.getBoundingClientRect();
  var scrollY = window.scrollY || window.pageYOffset;
  var hintHeight = hint.offsetHeight;
  var isMobile = window.innerWidth <= 1000;

  var y;
  if (isMobile) {
    // Place below the footer
    y = footerRect.top + scrollY + footerRect.height + 16;
  } else {
    // Place above the footer
    y = footerRect.top + scrollY - hintHeight + 50; // 50px above
  }

  hint.style.position = 'absolute';
  hint.style.top = y + 'px';
  hint.style.left = '50%';
  hint.style.transform = 'translateX(-50%)';
  hint.style.bottom = '';
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
