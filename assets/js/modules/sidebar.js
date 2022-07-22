export default function sidebarSmoothScroll(sidebar) {
  const sidebarContainer = sidebar.querySelector('.sidebar__container');

  // heights
  const headerHeight = document.querySelector('header.main-header').offsetHeight || 0;
  const containerHeight = sidebarContainer.offsetHeight;
  const lgSize = 992;

  let oldScroll;

  window.onscroll = function (e) {
    let isScrollUp = oldScroll > window.scrollY;
    oldScroll = window.scrollY;

    if (window.scrollY <= sidebar.offsetTop ||
      containerHeight <= (window.innerHeight - headerHeight) ||
      window.innerWidth <= lgSize) {
      sidebarContainer.style.top = '';
      return;
    }

    sidebarContainer.style.top = `calc(100vh - ${containerHeight}px - 2rem)`;

    if (isScrollUp)
      sidebarContainer.style.top = `calc(${headerHeight}px + 1rem)`;

  }
}