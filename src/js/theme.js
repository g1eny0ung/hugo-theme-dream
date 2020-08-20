const dark = 'inverted'
const localStore = window.localStorage
let isDark = localStore.getItem('hugo-theme-dream-is-dark')

const setThemeForUtterances = () => {
  const utterances = document.querySelector('iframe.utterances-frame')

  if (utterances) {
    utterances.contentWindow.postMessage(
      {
        type: 'set-theme',
        theme: isDark ? 'github-dark' : 'github-light',
      },
      'https://utteranc.es'
    )
  }
}

const darkHeaderElements = () => {
  const header = $('.dream-header')

  if (header.length) {
    const segments = $('.dream-header .ui.segment')
    const title = $('.dream-header .ui.top.segment .ui.header')
    const iconList = $('.dream-header .ui.top.segment .ui.list')
    const accordion = $('.dream-header .ui.segment .ui.accordion')

    segments.toggleClass(dark)

    title.toggleClass(dark)
    iconList.toggleClass(dark)
    accordion.toggleClass(dark)
  }
}

const darkBack = () => {
  const segments = $('.dream-back .ui.segment')

  if (segments.length) {
    segments.toggleClass(dark)
  }
}

const darkPostsSection = () => {
  const segment = $('.ui.segment.dream-posts-section')

  if (segment.length) {
    segment.toggleClass(dark)
  }
}

const darkTagsSection = () => {
  const segment = $('.ui.segment.dream-tags-section')

  if (segment.length) {
    segment.toggleClass(dark)
  }
}

const darkCategoriesSection = () => {
  const segment = $('.ui.segment.dream-categories-section')

  if (segment.length) {
    segment.toggleClass(dark)
  }
}

const darkSingle = () => {
  const segments = $('.dream-single .ui.segment')

  if (segments.length) {
    segments.toggleClass(dark)

    const title = $('.dream-single .ui.top.segment .ui.header')
    title.toggleClass(dark)

    setThemeForUtterances()
    if (typeof setHighlightTheme === 'function') {
      setHighlightTheme()
    }
  }
}

const darkCards = () => {
  const cards = $('.dream-card')

  if (cards.length) {
    cards.toggleClass(dark)
  }
}

const darkTables = () => {
  const tables = $('.dream-single table')

  if (tables.length) {
    tables.map(function () {
      if (this.style.color) {
        this.style.color = ''
      } else {
        this.style.color = 'black'
      }
    })
  }
}

function toggleDark() {
  darkHeaderElements()
  darkCards()
  darkSingle()
  darkTables()
  darkPostsSection()
  darkTagsSection()
  darkCategoriesSection()
  darkBack()
}

const iconSwitchs = $('.theme-switch')

// Apply theme when first entering
if (isDark) {
  iconSwitchs.addClass('moon')
  toggleDark()
} else {
  iconSwitchs.addClass('sun')
}

window.addEventListener('message', (e) => {
  if (e.origin !== 'https://utteranc.es') {
    return
  }

  setThemeForUtterances()
})

const themeSwitch = () => {
  if (isDark) {
    iconSwitchs.removeClass('moon')
    iconSwitchs.addClass('sun')
    localStore.removeItem('hugo-theme-dream-is-dark')
    isDark = null
  } else {
    iconSwitchs.removeClass('sun')
    iconSwitchs.addClass('moon')
    localStore.setItem('hugo-theme-dream-is-dark', 'y')
    isDark = 'y'
  }

  toggleDark()
}
