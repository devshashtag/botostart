import { displayTemplate } from '/assets/js/modules/template.js';

window.addEventListener('DOMContentLoaded', function () {
  const courseCardsElm = document.querySelector('.article__blog > .article__posts');
  const coursesAPI = '/assets/js/data/article-posts.json';

  displayTemplate(coursesAPI, courseCardsElm, 'article');
});
