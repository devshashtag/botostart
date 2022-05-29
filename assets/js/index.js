import { courseCards } from '/assets/js/modules/functions.js';

window.addEventListener("DOMContentLoaded", function () {
  const courseCardsClass = ".home__courses > .course-cards";
  const coursesAPI = "/assets/js/data/home-courses.json";
  courseCards(courseCardsClass, coursesAPI);
});