document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.jump-button').forEach(button => {
		button.addEventListener('click', () => {
			const targetId = button.dataset.targetId;
			if (!targetId) return;

			const target = document.getElementById(targetId);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			} else {
				console.warn(`No element found with id: ${targetId}`);
			}
		});
	});
});
