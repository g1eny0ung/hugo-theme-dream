"use strict";

$(document).ready(function () {
  function initGrid() {
    var $grid = $('.dream-columns').masonry({
      itemSelector: '.dream-column'
    });
    $grid.imagesLoaded().progress(function () {
      return $grid.masonry('layout');
    });

    if (window.hasTwitterEmbed) {
      window.twttr.ready(function (twttr) {
        return twttr.events.bind('loaded', function () {
          return $grid.masonry('layout');
        });
      });
    }
  }

  initGrid();
});