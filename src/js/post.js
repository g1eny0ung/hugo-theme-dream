function savePostAsImg() {
  var post = document.querySelector('#dream-save-post-as-img')
  var style = window.getComputedStyle(post)
  var segments = $('#dream-save-post-as-img .ui.attached.segment')
  var width = $(':first-child', segments).prop('offsetWidth') + style.paddingLeft + style.paddingRight
  var height = 0
  var height = segments.each(function () {
    height + $(this).prop('offsetHeight')
  })

  var canvas = document.createElement('canvas')
  var scale = 2
  canvas.width = width * scale
  canvas.height = height * scale
  canvas.getContext('2d').scale(scale, scale)

  html2canvas(document.querySelector('#dream-save-post-as-img'), {
    canvas,
    width,
    height,
    scale,
  }).then(function (canvas) {
    var ctx = canvas.getContext('2d')

    ctx.mozImageSmoothingEnabled = false
    ctx.webkitImageSmoothingEnabled = false
    ctx.msImageSmoothingEnabled = false
    ctx.imageSmoothingEnabled = false

    var data = canvas.toDataURL('image/png')

    var link = document.createElement('a')
    link.href = URL.createObjectURL(dataURLtoBlob(data))
    link.download = `${document.title
      .split('|')
      .map((d) => d.trim())
      .join('-')}.png`
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
