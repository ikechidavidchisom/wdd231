const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("primaryNav");

menuButton.addEventListener("click", () => {
  nav.querySelector("ul").classList.toggle("open");
});
