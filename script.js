const ham = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

ham.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});