window.addEventListener('scroll', function() {
	const scrollHint = document.querySelector('.scroll-hint');
	if (!scrollHint) return;
	if (window.scrollY > 100) {
		scrollHint.style.opacity = '0';
		scrollHint.style.pointerEvents = 'none';
	} else {
		scrollHint.style.opacity = '1';
		scrollHint.style.pointerEvents = 'auto';
	}
});
