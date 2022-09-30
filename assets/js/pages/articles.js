
import { displayTemplate } from "/botostart/assets/js/modules/template.js";

window.addEventListener("DOMContentLoaded", function () {
  const courseCardsElm = document.querySelector(".article__blog > .article__posts");
  const coursesAPI = "/botostart/assets/js/data/article-posts.json";

  displayTemplate(coursesAPI, courseCardsElm, 'article');
});