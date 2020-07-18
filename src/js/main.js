$(document).ready(() => {
  $('body').overlayScrollbars({})
  initFilp()
})

function initFilp() {
  $('.dream-flip-toggle').click(() => {
    $('.flip-container').toggleClass('flip-it')
  })
}
