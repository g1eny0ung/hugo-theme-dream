const SemanticUIColors = [
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

function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

function initTags() {
  $('.dream-tags')
    .children()
    .map(function() {
      $(this).addClass(SemanticUIColors[randomInt(0, SemanticUIColors.length)])
    })
}

function initAccordion() {
  $('.dream-categories .ui.accordion').accordion({
    selector: {
      trigger: '.title .icon'
    },
    exclusive: false
  })
}
