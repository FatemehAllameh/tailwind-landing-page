import "./style.css";

// Header
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenuMobile = document.querySelector(".nav-menu-mobile");
const overlay = document.querySelector(".overlay");
let isOpen = false;
hamburgerBtn.addEventListener("click", () => {
  if (isOpen) {
    hamburgerBtn.classList.remove("open");
    navMenuMobile.classList.add("-left-50", "md:-left-70");
    navMenuMobile.classList.remove("left-0");
    overlay.classList.remove("active");
    isOpen = false;
  } else {
    hamburgerBtn.classList.add("open");
    navMenuMobile.classList.remove("-left-50", "md:-left-70");
    navMenuMobile.classList.add("left-0");
    overlay.classList.add("active");
    isOpen = true;
  }
});
