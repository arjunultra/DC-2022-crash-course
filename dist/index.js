// Declarations
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
// Open Nav
menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
// Close Nav
close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
