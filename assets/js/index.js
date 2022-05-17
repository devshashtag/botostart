import { courseCard } from "/assets/js/modules/template.js";

fetch("/assets/js/data/courses.json").then(response => response.json())
  .then(courses => {
    courses.forEach(item => {
      document.querySelector(".home__courses > .course__cards").insertAdjacentHTML('beforeend', courseCard(item));
    });
  });
