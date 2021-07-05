let searchVisible = false

function toggleSearch(e) {
  e.preventDefault()

  if (searchVisible) {
    $('#dream-search').css('display', '')
  } else {
    $('#dream-search').css('display', 'block')
    setTimeout(() => $('#dream-search input').focus())
  }

  searchVisible = !searchVisible
}

$(document).ready(() => {
  $(document).on('keydown', (e) => {
    if (e.metaKey && e.key === '/' && !searchVisible) {
      toggleSearch(e)
    }

    if (e.key === 'Escape' && searchVisible) {
      toggleSearch(e)
    }
  })
})
