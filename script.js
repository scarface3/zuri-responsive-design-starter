const menuToggle = document.querySelector(".toggle");
const nav = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");
const CloseMenu = document.querySelector(".close-navigation");
// const openNavigation = function () {
//   nav.classList.remove("hidden");
//
// };

menuToggle.addEventListener("click", function () {
  nav.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

CloseMenu.addEventListener("click", function () {
  nav.classList.add("hidden");
  overlay.classList.add("hidden");
});
