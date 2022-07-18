// responsive sizes
const WINDOW_SIZE = { sm: 576, md: 768, lg: 992 };

// default selector item
const defaultSelector = 1;

// element selectors
const carousels = document.querySelectorAll('section.carousel-post');

// selector template
const selectorTemplate = (active) => `<div class="selector${active ? ' active' : ''}"></div>`;

// is ot browser firefox
const isFirefox = navigator.userAgent.indexOf("Firefox") != -1;

function getPostItems() {
  const windowWidth = window.innerWidth;

  let postItems = 1;

  // based on responsive sizes
  if (WINDOW_SIZE.lg <= windowWidth) postItems = 3;
  else if (WINDOW_SIZE.md <= windowWidth) postItems = 2;

  return postItems;
}

// update selectors
function updateSelectors() {
  // create new selectors based on window size
  for (const carousel of carousels) {
    const posts = carousel.querySelector('.carousel__posts');
    const selector = carousel.querySelector('.carousel__selector');
    const postsLength = posts.childElementCount;
    let selectorItems, activeItem;

    // post items inside each slide
    let postItems = getPostItems();

    selectorItems = Math.ceil(postsLength / postItems);
    activeItem = Math.ceil(defaultSelector / postItems);

    // if selector items are the same then return
    if (selector.childElementCount == selectorItems) break;

    // remove selectors
    selector.innerHTML = '';

    // create new selectors
    for (var i = 1; i <= selectorItems; i++) {
      const active = (activeItem == i);

      selector.insertAdjacentHTML('beforeend', selectorTemplate(active));
    }
    // reset carousel-posts scrollbar
    posts.scrollTo(0, 0);
  }
}

// update while resizing window
window.onresize = updateSelectors;

// events
window.addEventListener("DOMContentLoaded", function () {
  // initialize selectors
  updateSelectors();

  // initialize event controls
  for (const carousel of carousels) {
    const posts = carousel.querySelector('.carousel__posts');
    const selector = carousel.querySelector('.carousel__selector');
    const carouselContainer = carousel.querySelector('.carousel__container');

    // carousel controls
    carouselContainer.addEventListener('click', (e) => {
      const element = e.target;
      const parent = element.parentNode;

      // post items inside each slide
      let postItems = getPostItems();

      // horizontal alignment
      let inline = (postItems == 1) ? 'center' : (isFirefox ? 'end' : 'start');

      // get current slide index
      let selectorActive = selector.querySelector('.selector.active'); // active post
      let current = ([...selector.children].indexOf(selectorActive) * postItems) + 1;


      // next and previous, selectors check
      if (parent.classList.contains('carousel__next')) {
        current += postItems;

        if (current > posts.childElementCount)
          current = 1;
      }
      else if (parent.classList.contains('carousel__prev')) {
        current -= postItems;

        if (current < 1)
          current = posts.childElementCount;
      }
      else if (element.classList.value == 'selector') {
        // set current to clicked selector index
        current = ([...selector.children].indexOf(element) * postItems) + 1;
      }
      else return;

      // update active selector
      let selected = Math.ceil(current / postItems); // selected selector index
      let currentSelector = selector.querySelector(`.selector:nth-child(${selected})`);
      selectorActive.classList.remove('active');
      currentSelector.classList.add('active');

      // scroll to selected post
      const post = posts.querySelector(`.carousel__post:nth-child(${current})`);
      post.scrollIntoView({ behavior: "smooth", block: "nearest", inline })
    });
  }
});