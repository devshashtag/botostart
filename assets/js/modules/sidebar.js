export default function sidebarSmoothScroll(sidebar) {
  const sidebarContainer = sidebar.querySelector('.sidebar__container');

  // heights
  const headerHeight = document.querySelector('header.main-header').offsetHeight || 0;
  const containerHeight = sidebarContainer.offsetHeight;

  window.onscroll = function (e) {
    let isScrollUp = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;

    sidebarContainer.style.top = `calc(100vh - ${containerHeight}px - 2rem)`;

    if (this.scrollY >= sidebar.offsetTop && isScrollUp)
      sidebarContainer.style.top = `calc(${headerHeight}px + 1rem)`;

  }
}