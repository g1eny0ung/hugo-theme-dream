"use strict";

function initGrid() {
  document.querySelectorAll('.dream-grid').forEach(function (grid) {
    var m = new Masonry(grid, {
      itemSelector: '.dream-column'
    });
    imagesLoaded(grid).on('process', function () {
      return m.masonry('layout');
    });
    if (window.hasTwitterEmbed) {
      window.twttr.ready(function (twttr) {
        return twttr.events.bind('loaded', function () {
          return m.masonry('layout');
        });
      });
    }
  });
}
initGrid();