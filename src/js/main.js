$(document).ready(() => {
  function setClassName() {
    return (
      window.backgroundDark || window.backgroundImageDark
        ? localStore.getItem('hugo-theme-dream-is-dark') === 'y'
        : window.darkNav
    )
      ? 'os-theme-light'
      : 'os-theme-dark'
  }

  const osInstance = $('body')
    .overlayScrollbars({
      className: setClassName(),
      scrollbars: {
        autoHide: 'scroll',
        clickScrolling: true,
      },
    })
    .overlayScrollbars()

  if (window.fixedNav) {
    const nav = $('.dream-nav')

    osInstance.options('callbacks.onScroll', function () {
      const y = this.scroll().position.y

      y > 0
        ? nav.addClass('fixed').css('background', window.isDark === 'y' ? window.backgroundDark : window.background)
        : nav.removeClass('fixed').css('background', 'unset')
    })
  }

  window.overlayScrollbarsInstance = osInstance

  initFilp()
})

function initFilp() {
  $('.dream-flip-toggle').click(() => {
    $('.flip-container').toggleClass('flip-it')
  })
}
