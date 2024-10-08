window.addEventListener('DOMContentLoaded', function () {
  // screenOverlay [navbar, cart, login-modal]
  const screenOverlay = document.querySelectorAll('.screen-overlay');
  // navbar
  const navbarToggle = document.querySelector('div.navbar-toggle');
  const navbar = document.querySelector('.header__navbar');
  // cart
  const cartButton = document.querySelector('.main-header .cart-button');
  const cartContent = document.querySelector('.main-header .cart-content');
  // login
  const loginButton = document.querySelector('.header__buttons .login-button');
  const loginModal = document.querySelector('.buttons__content .login-modal');
  const loginClose = document.querySelector('.login__header .login--close');
  // body
  const body = document.body;

  // screenOverlay events
  screenOverlay.forEach((item) => {
    item.addEventListener('click', (elm) => {
      let element = elm.target.parentNode;
      element.classList.remove('active');

      if (element === navbar) {
        navbarToggle.classList.remove('active');
        body.classList.remove('disable');
      } else if (element === loginModal) {
        hideLoginModal();
      }
    });
  });

  // navbar events
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('disable');
  });

  // cart events
  cartButton.addEventListener('click', () => {
    cartContent.classList.toggle('active');
  });

  // login events
  loginButton.addEventListener('click', () => {
    loginModal.classList.toggle('active');
    body.classList.toggle('disable');
  });

  loginClose.addEventListener('click', hideLoginModal);

  function hideLoginModal() {
    loginModal.classList.remove('active');
    body.classList.toggle('disable');
  }
});
