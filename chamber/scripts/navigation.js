const nav = document.querySelector("nav ul");
const menuButton = document.querySelector(".menu-toggle");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("open");
  }
});
