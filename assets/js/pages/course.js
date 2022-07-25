import sidebarSmoothScroll from '/assets/js/modules/sidebar.js';

const lgSize = 992;

// events
window.addEventListener("DOMContentLoaded", function () {
  // register button
  const infoRegister = document.querySelector('.info__register');

  const registerBtn = () => {
    if ((sidebar.offsetTop - window.innerHeight) <= window.scrollY &&
      window.innerWidth <= lgSize) {
      infoRegister.style.position = "static";
    }
    else
      infoRegister.style.position = "";
  }

  // sidebar
  const sidebar = document.querySelector('.post-sidebar');
  sidebarSmoothScroll(sidebar, registerBtn);



});