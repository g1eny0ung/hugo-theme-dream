setTimeout(function () {
  const scrollToTop = $(`
    <span class="icon is-large dream-scroll-to-top">
      <i class="fa-solid fa-circle-arrow-up fa-2x"></i>
    </span>
  `).hide()

  const osInstance = window.overlayScrollbarsInstance
  osInstance.options('callbacks.onScrollStop', function () {
    const y = this.scroll().position.y

    y > 0 ? scrollToTop.show(500) : scrollToTop.hide(500)
  })

  scrollToTop.click(function () {
    osInstance.scroll(0, 500)
  })

  scrollToTop.insertAfter('.os-content')
}, 1000)
