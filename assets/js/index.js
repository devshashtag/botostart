import { displayTemplate } from '/botostart/assets/js/modules/template.js';

window.addEventListener('DOMContentLoaded', function () {
  const courseCardsElm = document.querySelector('.home__courses > .course-cards');
  const coursesAPI = '/botostart/assets/js/data/home-courses.json';

  displayTemplate(coursesAPI, courseCardsElm, 'course');
});
