const dark = 'inverted'
const localStore = window.localStorage
let isDark = localStore.getItem('hugo-theme-dream-is-dark')
isDark = isDark ? isDark : window.defaultDark ? 'y' : isDark

const darkBackground = () => {
  if (window.backgroundDark || window.backgroundImageDark) {
    $('body').toggleClass('default').toggleClass('dark')
  }
}

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

const darkNavMenu = () => {
  if (window.backgroundDark || window.backgroundImageDark) {
    $('.dream-nav').toggleClass(dark)
  }

  const osInstance = window.overlayScrollbarsInstance
  if (window.fixedNav && osInstance && osInstance.scroll().position.y > 0) {
    $('.dream-nav').css('background', window.isDark === 'y' ? window.backgroundDark : window.background)
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
  $('.dream-card').toggleClass(dark)
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

  $('.dream-scroll-to-top').toggleClass(dark)
}

const darkTables = () => {
  $('.dream-single table').map(function () {
    if (this.style.color) {
      this.style.color = ''
    } else {
      this.style.color = 'black'
    }
  })
}

const darkPostsSection = () => {
  $('.ui.segment.dream-posts-section').toggleClass(dark)
}

const darkCategoriesSection = () => {
  $('.dream-categories').toggleClass(dark)
}

const darkTagsSection = () => {
  $('.dream-tags').toggleClass(dark)
}

const darkBack = () => {
  $('.dream-back .ui.segment').toggleClass(dark)
}

const darkFooter = () => {
  $('footer.ui.segment').toggleClass(dark)
}

const darkSearch = () => {
  $('#dream-search').toggleClass(dark)
}

function toggleDark() {
  darkBackground()
  dark404()
  darkNavMenu()
  darkHeaderElements()
  darkCards()
  darkSingle()
  darkTables()
  darkPostsSection()
  darkCategoriesSection()
  darkTagsSection()
  darkBack()
  darkFooter()
  darkSearch()

  if (Array.isArray(window.darkFunctions)) {
    darkFunctions.forEach((d) => d())
  }
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

const themeSwitchItem = $('.theme-switch')
const themeSwitchItemIcon = $('.theme-switch i')

// Apply theme when first entering
if (isDark === 'y') {
  themeSwitchItemIcon.addClass('fa-moon')

  toggleDark()
} else {
  themeSwitchItemIcon.addClass('fa-sun')
}

themeSwitchItem.click(themeSwitch)

function themeSwitch(e) {
  e.preventDefault()

  if (isDark === 'y') {
    themeSwitchItemIcon.removeClass('fa-moon')
    themeSwitchItemIcon.addClass('fa-sun')
    localStore.setItem('hugo-theme-dream-is-dark', 'n')
    isDark = 'n'
  } else {
    themeSwitchItemIcon.removeClass('fa-sun')
    themeSwitchItemIcon.addClass('fa-moon')
    localStore.setItem('hugo-theme-dream-is-dark', 'y')
    isDark = 'y'
  }

  toggleDark()
}
