$(document).ready(() => {
  initFilp()
  initGrid()
  initTags()
  initAccordion()
})

function initGrid() {
  const $grid = $('.dream-grid').masonry({
    itemSelector: '.dream-column'
  })

  $grid.imagesLoaded().progress(() => {
    $grid.masonry('layout')
  })
}

function savePostAsImg() {
  var postList = $('.post-list')
  var useWidth = postList.prop('scrollWidth')
  var useHeight = postList.prop('scrollHeight')
  var removedHeight = $('.post-list .post-disqus-area').prop('scrollHeight')

  var canvas = document.createElement('canvas')
  var width = useWidth
  var height = useHeight - removedHeight
  var scale = 2
  canvas.width = width * scale
  canvas.height = height * scale
  canvas.getContext('2d').scale(scale, scale)

  html2canvas(document.querySelector('.post-single-main'), {
    canvas: canvas,
    width: width,
    height: height,
    scale: scale,
    useCORS: true
  }).then(function(canvas) {
    var ctx = canvas.getContext('2d')

    ctx.mozImageSmoothingEnabled = false
    ctx.webkitImageSmoothingEnabled = false
    ctx.msImageSmoothingEnabled = false
    ctx.imageSmoothingEnabled = false

    var data = canvas.toDataURL('image/png')

    var link = document.createElement('a')
    link.href = URL.createObjectURL(dataURLtoBlob(data))
    link.download = 'screenshot.png'
    link.click()
  })
  return false
}

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
