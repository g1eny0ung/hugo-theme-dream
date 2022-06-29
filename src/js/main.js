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
    const body = $('body')
    const nav = $('.dream-nav')

    osInstance.options('callbacks.onScroll', function () {
      const y = this.scroll().position.y

      if (y > 0) {
        body.addClass('has-navbar-fixed-top')
        nav
          .addClass('is-fixed-top')
          .css('background', window.isDark === 'y' ? window.backgroundDark : window.background)
      } else {
        body.removeClass('has-navbar-fixed-top')
        nav.removeClass('is-fixed-top').css('background', 'unset')
      }

      $('.dream-single-aside').css('top', y > 0 ? 52 + 48 : 0)
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
