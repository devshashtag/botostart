const navbarToggle = document.querySelector("div.navbar-toggle");
const navbar = document.querySelector(".header__navbar");
const screenOverlay = document.querySelector(".screen-overlay");
const headerHeight = document.querySelector("header").clientHeight;
const body = document.body;
// set default height of navbar items in mobile
document.documentElement.style.setProperty('--navbar-mobile-height', headerHeight.toString() + 'px');

screenOverlay.addEventListener('click', activeNavbar);
navbarToggle.addEventListener('click', activeNavbar);


function activeNavbar() {
  navbarToggle.classList.toggle('active');
  navbar.classList.toggle('active');
  body.classList.toggle('disable');
}