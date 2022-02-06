import "../css/index.css";

// ===== Show Header Menu =====
function showMenu(menuId, toggleId, closeId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.add("show-menu");
    });
    close.addEventListener("click", () => {
      menu.classList.remove("show-menu");
    });
  }
}
showMenu("header-menu", "header-toggle", "header-close");

// ===== Sticky Header =====
const scrollY = window.pageYOffset;
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 10
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== Scrollup Section =====
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 10
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
