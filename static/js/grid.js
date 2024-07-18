"use strict";

function initGrid() {
  document.querySelectorAll('.dream-grid').forEach(function (grid) {
    var msnry = new Masonry(grid, {
      itemSelector: '.dream-column'
    });
    imagesLoaded(grid, function () {
      return msnry.layout();
    });
    if (window.hasTwitterEmbed) {
      window.twttr.ready(function (twttr) {
        return twttr.events.bind('loaded', function () {
          return msnry.layout();
        });
      });
    }
  });
}
initGrid();