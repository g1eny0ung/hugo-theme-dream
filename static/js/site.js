var SemanticUIColors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown'
]

$(document).ready(function() {
  $('.dream-flip-toggle').click(function() {
    var c = $('.flip-container')

    if (dreamBodyBgSwitchIndex === 0) {
      c.css('overflow', 'hidden')
      setBackground(dreamBody, dreamBodyBgSwitch[1])
      dreamBodyBgSwitchIndex = 1
      $('.flipper .front .ui.menu').css('overflow-x', '')
    } else {
      c.removeAttr('style')
      setBackground(dreamBody, dreamBodyBgSwitch[0])
      dreamBodyBgSwitchIndex = 0
      $('.flipper .front .ui.menu').css('overflow-x', 'auto')
    }

    c.toggleClass('flip-it')
  })

  var postList = $('.post-list')
  var pMaxHeight = $(window).height() - $('.ui.menu').outerHeight(true)
  postList.css('max-height', pMaxHeight)

  $('.ui.cards .image')
    .dimmer({
      opacity: 0.6,
      closable: false
    })
    .dimmer('show')

  $('.ui.accordion').accordion()

  $('#tag-category-pop').click(function() {
    var dt = $('.dream-header-tags.dream-tags')
    var dc = $('.dream-categories')
    var dtDisplay = dt.css('display')
    var dcDisplay = dc.css('display')
    if (dtDisplay === 'none') {
      dt.css('display', 'block')
      dc.css('display', 'block')
    } else {
      dt.css('display', 'none')
      dc.css('display', 'none')
    }
  })

  setSemanticUIColor()
})

function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  random = Math.floor(Math.random() * (max - min)) + min
  return random
}

function setSemanticUIColor() {
  var tagsParent = $('.dream-tags')
  tagsParent.children().map(function() {
    $(this).addClass(SemanticUIColors[randomInt(0, SemanticUIColors.length)])
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
