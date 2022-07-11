import { displayTemplate } from "/assets/js/modules/template.js";

window.addEventListener("DOMContentLoaded", function () {
  // courses cards
  const courseCardsElm = document.querySelector(".courses__products > .course-cards");
  const coursesAPI = "/assets/js/data/product-courses.json";
  displayTemplate(coursesAPI, courseCardsElm, 'course');

  // options order
  const orderSelected = document.querySelector(".options__order > .order__selected");

  orderSelected.addEventListener('click', () => {
    orderSelected.parentNode.classList.toggle('open');
  });

  // options view
  const viewGrid = document.querySelector(".options__view > .view-grid");
  const viewList = document.querySelector(".options__view > .view-list");
  const productsCards = document.querySelector(courseCardsClass);

  // view grid
  viewGrid.addEventListener('click', () => {
    viewGrid.classList.add('active');
    viewList.classList.remove('active');
    productsCards.classList.remove('view-list');
  });

  // view list
  viewList.addEventListener('click', () => {
    viewList.classList.add('active');
    viewGrid.classList.remove('active');
    productsCards.classList.add('view-list');
  });
});