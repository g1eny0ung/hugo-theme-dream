function initGrid() {
  document.querySelectorAll('.dream-grid').forEach((grid) => {
    const msnry = new Masonry(grid, {
      itemSelector: '.dream-column',
    })

    imagesLoaded(msnry).on('process', () => msnry.masonry('layout'))

    if (window.hasTwitterEmbed) {
      window.twttr.ready((twttr) => twttr.events.bind('loaded', () => msnry.masonry('layout')))
    }
  })
}

initGrid()
