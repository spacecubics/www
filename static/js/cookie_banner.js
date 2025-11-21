
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const closedBtn = document.getElementById("cookie-close");
    const modal = document.getElementById("privacy-modal");
    const privacyOpenBtn = document.getElementById("open-privacy-modal");
    const privacyCloseBtn = document.querySelector(".privacy-close");

    // Check if users closed
    const closed = localStorage.getItem("cookieClosed");

    // If not clicked, banner is displayed
    if (!closed) {
        banner.classList.add("active");
    }

    // Click close button
    closedBtn.addEventListener("click", function () {
        localStorage.setItem("cookieClosed", "true");
        banner.classList.remove("active"); // hidden
    });


    // Open privacy modal
    privacyOpenBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // Close privacy modal
    privacyCloseBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Click Background
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
