$(document).ready(initGrid)

function initGrid() {
  const $grid = $('.dream-grid').masonry({
    itemSelector: '.dream-column',
  })

  $grid.imagesLoaded().progress(() => $grid.masonry('layout'))
}
