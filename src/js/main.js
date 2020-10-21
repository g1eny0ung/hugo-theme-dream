$(document).ready(() => {
  function setClassName() {
    const result =
      window.backgroundDark || window.backgroundImageDark
        ? localStore.getItem('hugo-theme-dream-is-dark')
        : window.darkNav
    return result ? 'os-theme-light' : 'os-theme-dark'
  }

  $('body').overlayScrollbars({
    className: setClassName(),
    nativeScrollbarsOverlaid: {
      initialize: false,
    },
    scrollbars: {
      autoHide: 'scroll',
    },
  })

  initFilp()
})

function initFilp() {
  $('.dream-flip-toggle').click(() => {
    $('.flip-container').toggleClass('flip-it')
  })
}
