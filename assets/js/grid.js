"use strict";

function initGrid() {
  document.querySelectorAll('.dream-grid').forEach(function (grid) {
    var msnry = new Masonry(grid, {
      itemSelector: '.dream-column'
    });
    if (grid.classList.contains('dream-grid-about')) {
      window.aboutMasonry = msnry;
    }
    imagesLoaded(grid, function () {
      grid.style.opacity = 1;
      msnry.layout();
    });
  });
}
initGrid();