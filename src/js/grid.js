function initGrid() {
  document.querySelectorAll('.dream-grid').forEach((grid) => {
    const msnry = new Masonry(grid, {
      itemSelector: '.dream-column',
    })

    imagesLoaded(grid, () => msnry.layout())
  })
}

initGrid()
