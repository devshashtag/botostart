window.addEventListener('DOMContentLoaded', function () {
  const loginModal = document.querySelector('.account__modal .account__login');
  const registerModal = document.querySelector('.account__modal .account__register');
  const showLoginBtn = document.getElementById('showLogin');
  const showRegisterBtn = document.getElementById('showRegister');

  showRegisterBtn.addEventListener('click', toggleModals);
  showLoginBtn.addEventListener('click', toggleModals);

  function toggleModals() {
    registerModal.classList.toggle('active');
    loginModal.classList.toggle('active');
  }
});
