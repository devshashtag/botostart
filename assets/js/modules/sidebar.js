export default function sidebarSmoothScroll(sidebar, callback) {
  const sidebarContainer = sidebar.querySelector('.sidebar__container');
  const padding = 20;
  const lgSize = 992;

  // heights
  const headerHeight = document.querySelector('header.main-header').offsetHeight || 0;
  let headerHeightPadding = headerHeight + padding;

  let oldScroll;

  window.onscroll = function (e) {
    const containerHeight = sidebarContainer.offsetHeight;
    let isScrollUp = oldScroll > this.scrollY;
    oldScroll = this.scrollY;

    // run extra function to onscroll event
    if (callback) callback();

    // dont scroll until its visible
    if (
      this.scrollY <= sidebar.offsetTop - headerHeightPadding ||
      containerHeight <= this.innerHeight - headerHeightPadding ||
      this.innerWidth <= lgSize
    ) {
      sidebarContainer.style.top = '';
      return;
    }

    if (isScrollUp) sidebarContainer.style.top = `${headerHeightPadding}px`;
    else sidebarContainer.style.top = `calc(100vh - ${containerHeight + padding}px)`;
  };
}
