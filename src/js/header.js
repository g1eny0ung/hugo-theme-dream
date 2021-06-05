$(document).ready(() => {
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
    'brown',
  ]

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
  }

  function initTags() {
    $('.dream-tags > .ui.label').each(function () {
      $(this).addClass(SemanticUIColors[getRandomInt(0, SemanticUIColors.length)])
    })
  }

  function initTagsDropdown() {
    $('.ui.accordion').accordion({
      selector: {
        trigger: '.title .dropdown',
      },
    })

    $('.tags-with-dropdown .dropdown').click(function () {
      $(this).children(':first').toggleClass('rotated')
    })
  }

  initTags()

  if (window.maxTags) {
    initTagsDropdown()
  }
})
