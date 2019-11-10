const dark = 'inverted'
const localStore = window.localStorage

const darkHeaderElements = () => {
  const header = $('.dream-header')

  if (header.length) {
    const segments = $('.dream-header .ui.segment')
    const title = $('.dream-header .ui.top.segment .ui.header')
    const iconList = $('.dream-header .ui.top.segment .ui.list')
    const accordion = $('.dream-header .ui.segment .ui.accordion')

    segments.map(function() {
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
    segments.map(function() {
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
    segments.map(function() {
      $(this).toggleClass(dark)
    })

    const title = $('.dream-single .ui.top.segment .ui.header')
    title.toggleClass(dark)
  }
}

function toggleDark() {
  darkHeaderElements()
  darkBack()
  darkPostsSection()
  darkTagsSection()
  darkCategoriesSection()
  darkSingle()
}

let isDark = localStore.getItem('hugo-theme-dream-is-dark')
const iconSwitch = $('#theme-switch')

if (isDark) {
  iconSwitch.addClass('moon')
  toggleDark()
} else {
  iconSwitch.addClass('sun')
}

const themeSwitch = () => {
  if (isDark) {
    iconSwitch.removeClass('moon')
    iconSwitch.addClass('sun')
    localStore.removeItem('hugo-theme-dream-is-dark')
    isDark = null
  } else {
    iconSwitch.removeClass('sun')
    iconSwitch.addClass('moon')
    localStore.setItem('hugo-theme-dream-is-dark', 'y')
    isDark = 'y'
  }

  toggleDark()
}
