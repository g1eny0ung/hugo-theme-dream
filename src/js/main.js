document.addEventListener('alpine:init', () => {
  Alpine.store('darkMode', {
    init() {
      const isDark = window.localStorage.getItem('hugo-theme-dream-is-dark')

      if (isDark) {
        this.on = isDark
      } else {
        this.mql.addEventListener('change', (event) => {
          this.on = event.matches ? 'y' : 'n'
        })

        this.on = 'auto'
      }

      setTimeout(() => {
        this.setThemeForUtterances()
      }, 6000) // Set a bigger timeout to make sure the utterances iframe is loaded.
    },

    mql: window.matchMedia('(prefers-color-scheme: dark)'),
    on: 'n',

    isDark() {
      return this.on === 'auto' ? this.mql.matches : this.on === 'y'
    },
    class() {
      if (this.on === 'auto') {
        return this.mql.matches ? 'dark' : 'light'
      } else {
        return this.on === 'y' ? 'dark' : 'light'
      }
    },
    theme() {
      if (this.on === 'auto') {
        return this.mql.matches ? window.darkTheme : window.lightTheme
      } else {
        return this.on === 'y' ? window.darkTheme : window.lightTheme
      }
    },

    iconMap: {
      n: 'sunny',
      y: 'moon',
      auto: 'desktop',
    },
    icon() {
      return this.iconMap[this.on]
    },

    toggle(status) {
      this.on = status

      if (status === 'auto') {
        window.localStorage.removeItem('hugo-theme-dream-is-dark')
      } else {
        window.localStorage.setItem('hugo-theme-dream-is-dark', status)
      }

      this.setThemeForUtterances()
      this.changeSyntaxHighlightingTheme()
    },

    changeSyntaxHighlightingTheme() {
      if (document.querySelector('#dream-single-post-main')) {
        const customSyntaxHighlightingUrl = this.isDark()
          ? window.customSyntaxHighlighting.dark
          : window.customSyntaxHighlighting.light

        document
          .querySelector('link[data-custom-syntax-highlighting]')
          .setAttribute('href', customSyntaxHighlightingUrl)
      }
    },

    setThemeForUtterances() {
      const utterances = document.querySelector('iframe.utterances-frame')

      if (utterances) {
        utterances.contentWindow.postMessage(
          {
            type: 'set-theme',
            theme: this.isDark() ? 'github-dark' : 'github-light',
          },
          'https://utteranc.es'
        )
      }
    },
  })
})
