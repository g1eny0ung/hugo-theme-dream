$(document).ready(() => {
  function initGrid() {
    const $grid = $('.dream-grid').masonry({
      itemSelector: '.dream-column',
    })

    $grid.imagesLoaded().progress(() => $grid.masonry('layout'))

    if (window.hasTwitterEmbed) {
      window.twttr.ready((twttr) => twttr.events.bind('loaded', () => $grid.masonry('layout')))
    }
  }

  initGrid()
})
