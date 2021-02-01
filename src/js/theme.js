const dark = 'inverted'
const localStore = window.localStorage
let isDark = localStore.getItem('hugo-theme-dream-is-dark')
isDark = isDark ? isDark : window.defaultDark ? 'y' : isDark

const dark404 = () => {
  if (window.backgroundDark || window.backgroundImageDark) {
    const dream404 = $('.dream-404-container')

    if (dream404.length) {
      $('.dream-404-container h1').toggleClass(dark)

      const button = $('.dream-404-container button')
      button.toggleClass(dark)
      button.toggleClass('secondary')
    }
  }
}

const darkBackground = () => {
  if (window.backgroundDark || window.backgroundImageDark) {
    $('body').toggleClass('default').toggleClass('dark')
  }
}

const darkNavMenu = () => {
  if (window.backgroundDark || window.backgroundImageDark) {
    $('nav.dream-menu').toggleClass(dark)
  }
}

const darkHeaderElements = () => {
  const header = $('.dream-header')

  if (header.length) {
    const title = $('.dream-header .ui.header')
    const iconList = $('.dream-header .ui.list')

    title.toggleClass(dark)
    iconList.toggleClass(dark)
  }
}

const darkCards = () => {
  const cards = $('.dream-card')

  if (cards.length) {
    cards.toggleClass(dark)
  }
}

const darkSingle = () => {
  const segments = $('.dream-single .ui.segment')

  if (segments.length) {
    segments.toggleClass(dark)

    const title = $('.dream-single h1.ui.header')
    title.toggleClass(dark)

    setThemeForUtterances()
    if (typeof setHighlightTheme === 'function') {
      setHighlightTheme()
    }

    $('.toc').toggleClass(dark)
    $('.actions').toggleClass(dark)
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

const darkBack = () => {
  const segments = $('.dream-back .ui.segment')

  if (segments.length) {
    segments.toggleClass(dark)
  }
}

const darkFooter = () => {
  $('footer.ui.segment').toggleClass(dark)
}

function toggleDark() {
  dark404()
  darkBackground()
  darkNavMenu()
  darkHeaderElements()
  darkCards()
  darkSingle()
  darkTables()
  darkPostsSection()
  darkTagsSection()
  darkCategoriesSection()
  darkBack()
  darkFooter()
}

const setThemeForUtterances = () => {
  const utterances = document.querySelector('iframe.utterances-frame')

  if (utterances) {
    utterances.contentWindow.postMessage(
      {
        type: 'set-theme',
        theme: isDark === 'y' ? 'github-dark' : 'github-light',
      },
      'https://utteranc.es'
    )
  }
}

window.addEventListener('message', (e) => {
  if (e.origin !== 'https://utteranc.es') {
    return
  }

  setThemeForUtterances()
})

const iconSwitchs = $('.theme-switch')

// Apply theme when first entering
if (isDark === 'y') {
  iconSwitchs.addClass('moon')
  toggleDark()
} else {
  iconSwitchs.addClass('sun')
}

function themeSwitch() {
  if (isDark === 'y') {
    iconSwitchs.removeClass('moon')
    iconSwitchs.addClass('sun')
    localStore.setItem('hugo-theme-dream-is-dark', 'n')
    isDark = 'n'
  } else {
    iconSwitchs.removeClass('sun')
    iconSwitchs.addClass('moon')
    localStore.setItem('hugo-theme-dream-is-dark', 'y')
    isDark = 'y'
  }

  toggleDark()
}
