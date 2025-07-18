document.addEventListener("DOMContentLoaded", function () {
	const toggle = document.getElementById("navToggle");
	const navList = document.getElementById("main-nav-list");

	if (toggle && navList) {
		toggle.addEventListener("click", function () {
			navList.classList.toggle("open");
		});
	}
});
