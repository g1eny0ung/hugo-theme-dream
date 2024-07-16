function initGrid() {
  document.querySelectorAll('.dream-grid').forEach((grid) => {
    const m = new Masonry(grid, {
      itemSelector: '.dream-column',
    })

    imagesLoaded(grid).on('process', () => m.masonry('layout'))

    if (window.hasTwitterEmbed) {
      window.twttr.ready((twttr) => twttr.events.bind('loaded', () => m.masonry('layout')))
    }
  })
}

initGrid()
