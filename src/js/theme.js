const defaultDark = window.defaultDark
const hasDarkMode = window.backgroundDark || window.backgroundImageDark
const isDark = 'is-dark'

let lsIsDark = window.localStorage.getItem('hugo-theme-dream-is-dark')
lsIsDark = lsIsDark ? lsIsDark : window.defaultDark ? 'y' : 'n'

const darkNavbar = () => {
  if (!window.transparentNav) {
    $('.navbar').toggleClass(isDark)
  }

  const osInstance = window.overlayScrollbarsInstance
  if (window.fixedNav && window.transparentNav && osInstance && osInstance.scroll().position.y > 0) {
    $('.navbar').css('background', window.isDark === 'y' ? window.backgroundDark : window.background)
  }
}

function setThemeForUtterances() {
  const utterances = document.querySelector('iframe.utterances-frame')

  if (utterances) {
    utterances.contentWindow.postMessage(
      {
        type: 'set-theme',
        theme: lsIsDark === 'y' ? 'github-dark' : 'github-light',
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

function setHighlightTheme() {
  $('link[data-highlight]').attr(
    'href',
    'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/styles/' +
      (lsIsDark === 'y' ? window.highlightjsThemeDark : window.highlightjsTheme) +
      '.min.css'
  )
}

const darkSingle = () => {
  if ($('.dream-single')) {
    setHighlightTheme()
    setThemeForUtterances()
  }
}

function toggleDark() {
  if (hasDarkMode && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('.button, .tag').toggleClass(isDark)

    darkNavbar()
    darkSingle()

    if (Array.isArray(window.darkFunctions)) {
      darkFunctions.forEach((d) => d())
    }
  }
}

toggleDark()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleDark)
