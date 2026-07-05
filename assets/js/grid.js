function initGrid() {
  document.querySelectorAll('.dream-grid').forEach(grid => {
    const msnry = new Masonry(grid, {
      itemSelector: '.dream-column'
    });
    if (grid.classList.contains('dream-grid-about')) {
      window.aboutMasonry = msnry;
    }
    imagesLoaded(grid, () => {
      grid.style.opacity = 1;
      msnry.layout();
    });
  });
}
initGrid();