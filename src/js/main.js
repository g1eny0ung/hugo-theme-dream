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
      const fake = $('.fake-dream-nav')

      if (y > 0) {
        nav.addClass('fixed').css('background', window.isDark === 'y' ? window.backgroundDark : window.background)
        $('.dream-single-aside').css('top', 54)
        if (!fake.length) {
          $('<div class="fake-dream-nav" />').css('height', 54).insertBefore(nav)
        }
      } else {
        nav.removeClass('fixed').css('background', 'unset')
        $('.dream-single-aside').css('top', 0)
        fake.remove()
      }
    })
  }

  window.overlayScrollbarsInstance = osInstance

  function initFilp() {
    $('.dream-flip-toggle').click(() => {
      $('.flip-container').toggleClass('flip-it')
    })
  }

  initFilp()
})
