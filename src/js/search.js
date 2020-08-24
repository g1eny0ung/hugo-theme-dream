let searchVisible = false

function toggleSearch() {
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
    if (e.metaKey && e.which === 191 && !searchVisible) {
      toggleSearch()
    }

    if (e.keyCode === 27 && searchVisible) {
      toggleSearch()
    }
  })
})
