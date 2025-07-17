document.addEventListener('DOMContentLoaded', function() {
	// Handle navigation link clicks
	document.querySelectorAll('.main-navbar-link').forEach(function(link) {
		link.addEventListener('click', function() {
			const href = this.getAttribute('data-href');
			if (href) {
				window.location.href = href;
			}
		});

		// Handle Enter key for accessibility
		link.addEventListener('keydown', function(e) {
			if (e.key === 'Enter') {
				const href = this.getAttribute('data-href');
				if (href) {
					window.location.href = href;
				}
			}
		});
	});
});
