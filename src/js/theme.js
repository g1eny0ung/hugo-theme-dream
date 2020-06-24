const dark = 'inverted'
const localStore = window.localStorage

const darkHeaderElements = () => {
  const header = $('.dream-header')

  if (header.length) {
    const segments = $('.dream-header .ui.segment')
    const title = $('.dream-header .ui.top.segment .ui.header')
    const iconList = $('.dream-header .ui.top.segment .ui.list')
    const accordion = $('.dream-header .ui.segment .ui.accordion')

    segments.map(function () {
      $(this).toggleClass(dark)
    })

    title.toggleClass(dark)
    iconList.toggleClass(dark)
    accordion.toggleClass(dark)
  }
}

const darkBack = () => {
  const segments = $('.dream-back .ui.segment')

  if (segments.length) {
    segments.map(function () {
      $(this).toggleClass(dark)
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

const darkSingle = () => {
  const segments = $('.dream-single .ui.segment')

  if (segments.length) {
    segments.map(function () {
      $(this).toggleClass(dark)
    })

    const title = $('.dream-single .ui.top.segment .ui.header')
    title.toggleClass(dark)
  }
}

const darkCards = () => {
  const cards = $('.dream-card')

  if (cards.length) {
    cards.map(function () {
      $(this).toggleClass(dark)
    })
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

let isDark = localStore.getItem('hugo-theme-dream-is-dark')
const iconSwitchs = $('.theme-switch').toArray()

// Apply theme when first entering
if (isDark) {
  iconSwitchs.forEach((s) => $(s).addClass('moon'))
  toggleDark()
} else {
  iconSwitchs.forEach((s) => $(s).addClass('sun'))
}

const themeSwitch = () => {
  if (isDark) {
    iconSwitchs.forEach((s) => $(s).removeClass('moon'))
    iconSwitchs.forEach((s) => $(s).addClass('sun'))
    localStore.removeItem('hugo-theme-dream-is-dark')
    isDark = null
  } else {
    iconSwitchs.forEach((s) => $(s).removeClass('sun'))
    iconSwitchs.forEach((s) => $(s).addClass('moon'))
    localStore.setItem('hugo-theme-dream-is-dark', 'y')
    isDark = 'y'
  }

  toggleDark()
}
