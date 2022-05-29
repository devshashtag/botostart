import { courseCards } from '/assets/js/modules/functions.js';

window.addEventListener("DOMContentLoaded", function () {
  const courseCardsClass = ".courses__products > .course-cards";
  const coursesAPI = "/assets/js/data/product-courses.json";
  courseCards(courseCardsClass, coursesAPI);
});