window.addEventListener('scroll', function() {
	var hint = document.querySelector('.scroll-hint');
	if (!hint) return;
	if (window.scrollY > 50) {
		hint.classList.add('scroll-hint--hidden');
	} else {
		hint.classList.remove('scroll-hint--hidden');
	}
});

document.addEventListener('DOMContentLoaded', function() {
	var hint = document.querySelector('.scroll-hint');
	if (hint) {
		hint.classList.add('scroll-hint--bounce');
	}
});
