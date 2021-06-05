setTimeout(function () {
  const scrollToTop = $(`
    <i class="big arrow circle up link icon dream-scroll-to-top${
      window.isDark === 'y' ? ' ' + window.dark : ''
    }" style="display: none;"></i>
  `)

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
