window.addEventListener("load", function () {
  const navbarToggle = document.querySelector("div.navbar-toggle");
  const navbar = document.querySelector(".header__navbar");
  const screenOverlay = document.querySelectorAll(".screen-overlay");
  const cartButton = document.querySelector("header .cart-button");
  const cartContent = document.querySelector("header .cart-content");
  const body = document.body;

  const headerHeight = document.querySelector("header").clientHeight;

  // set default height of navbar items in mobile
  document.documentElement.style.setProperty('--navbar-mobile-height', headerHeight.toString() + 'px');

  // screenOverlay events
  screenOverlay.forEach(item => {
    item.addEventListener('click', (elm) => {
      let element = elm.target.parentNode;
      element.classList.remove('active');

      if (element.classList.contains('header__navbar')) {
        navbarToggle.classList.remove('active');
        body.classList.remove('disable');
      }
    })
  });

  // navbar events
  navbarToggle.addEventListener('click', activeNavbar);
  // cart events
  cartButton.addEventListener('click', () => {
    cartContent.classList.toggle('active');
  });


  function activeNavbar() {
    navbarToggle.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('disable');
  }
});