$(document).ready(() => {
  $('body').overlayScrollbars({
    className: window.darkNav ? 'os-theme-light' : 'os-theme-dark',
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
