"use strict";

function initGrid() {
  document.querySelectorAll('.dream-grid').forEach(function (grid) {
    var msnry = new Masonry(grid, {
      itemSelector: '.dream-column'
    });
    imagesLoaded(grid, function () {
      return msnry.layout();
    });
  });
}
initGrid();