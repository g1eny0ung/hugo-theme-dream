var SemanticUIColors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown"]

$(document).ready(function () {
  $('.dream-flip-toggle')
    .click(function () {
      var c = $('.flip-container')

      if (dreamBodyBgSwitchIndex === 0) {
        c.css('overflow', 'hidden')
        setBackground(dreamBody, dreamBodyBgSwitch[1])
        dreamBodyBgSwitchIndex = 1
      } else {
        c.removeAttr('style')
        setBackground(dreamBody, dreamBodyBgSwitch[0])
        dreamBodyBgSwitchIndex = 0
      }

      c.toggleClass('flip-it')
    })

  var postList = $('.post-list')
  var pMaxHeight = $(window).height() - $('.ui.menu').outerHeight(true)
  postList.css('max-height', pMaxHeight)

  $('.ui.cards .image')
    .dimmer({
      opacity: .6,
      closable: false
    })
    .dimmer('show')

  $('.ui.accordion')
    .accordion()

  $('#tag-category-pop').click(function () {
    var dt = $('.dream-tags')
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
