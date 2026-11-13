function initGrid() {
  if (typeof Masonry !== 'function' || typeof imagesLoaded !== 'function') {
    return;
  }
  document.querySelectorAll('.dream-grid').forEach(grid => {
    const msnry = new Masonry(grid, {
      itemSelector: '.dream-column'
    });
    imagesLoaded(grid).on('progress', () => {
      msnry.layout();
    });
  });
}
initGrid();