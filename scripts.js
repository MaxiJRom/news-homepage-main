const burgerButton = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

burgerButton.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        burgerButton.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        burgerButton.setAttribute("aria-expanded", false);
    }

})