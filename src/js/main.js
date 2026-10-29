document.addEventListener('alpine:init', () => {
  Alpine.store('darkMode', {
    init() {
      const isDark = window.localStorage.getItem('hugo-theme-dream-is-dark')

      this.on = isDark || 'auto'
      this.systemDark = this.mql.matches

      this.mql.addEventListener('change', (event) => {
        this.systemDark = event.matches
        this.changeSyntaxHighlightingTheme()
        this.setThemeForUtterances()
      })

      window.addEventListener('message', (event) => {
        const utterances = document.querySelector('iframe.utterances-frame')

        if (
          event.origin === 'https://utteranc.es' &&
          event.source === utterances?.contentWindow &&
          event.data?.type === 'resize'
        ) {
          this.setThemeForUtterances()
        }
      })

      this.setThemeForUtterances()
    },

    mql: window.matchMedia('(prefers-color-scheme: dark)'),
    on: 'n',
    systemDark: false,

    isDark() {
      return this.on === 'auto' ? this.systemDark : this.on === 'y'
    },
    theme() {
      return this.isDark() ? window.darkTheme : window.lightTheme
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
      const stylesheet = document.querySelector('link[data-custom-syntax-highlighting]')

      if (stylesheet) {
        const customSyntaxHighlightingUrl = this.isDark()
          ? window.customSyntaxHighlighting.dark
          : window.customSyntaxHighlighting.light

        stylesheet.setAttribute('href', customSyntaxHighlightingUrl)
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
