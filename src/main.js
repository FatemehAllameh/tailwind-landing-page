import "./style.css";

// Header
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenuMobile = document.querySelector(".nav-menu-mobile");
let isOpen = false;
hamburgerBtn.addEventListener("click", () => {
  if (isOpen) {
    hamburgerBtn.classList.remove("open");
    navMenuMobile.classList.add("-left-50", "md:-left-70");
    navMenuMobile.classList.remove("left-0");
    isOpen = false;
  } else {
    hamburgerBtn.classList.add("open");
    navMenuMobile.classList.remove("-left-50", "md:-left-70");
    navMenuMobile.classList.add("left-0");
    isOpen = true;
  }
});
