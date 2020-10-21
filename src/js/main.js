$(document).ready(() => {
  function setClassName() {
    if (window.backgroundDark || window.backgroundImageDark) {
      return localStore.getItem('hugo-theme-dream-is-dark') ? 'os-theme-light' : 'os-theme-dark'
    } else {
      return window.darkNav ? 'os-theme-light' : 'os-theme-dark'
    }
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
