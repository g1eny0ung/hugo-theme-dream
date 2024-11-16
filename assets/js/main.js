"use strict";

document.addEventListener('alpine:init', function () {
  Alpine.store('darkMode', {
    init: function init() {
      var _this = this;
      var isDark = window.localStorage.getItem('hugo-theme-dream-is-dark');
      if (isDark) {
        this.on = isDark;
      } else {
        this.mql.addEventListener('change', function (event) {
          _this.on = event.matches ? 'y' : 'n';
        });
        this.on = 'auto';
      }
      setTimeout(function () {
        _this.setThemeForUtterances();
      }, 6000);
    },
    mql: window.matchMedia('(prefers-color-scheme: dark)'),
    on: 'n',
    isDark: function isDark() {
      return this.on === 'auto' ? this.mql.matches : this.on === 'y';
    },
    "class": function _class() {
      if (this.on === 'auto') {
        return this.mql.matches ? 'dark' : 'light';
      } else {
        return this.on === 'y' ? 'dark' : 'light';
      }
    },
    theme: function theme() {
      if (this.on === 'auto') {
        return this.mql.matches ? window.darkTheme : window.lightTheme;
      } else {
        return this.on === 'y' ? window.darkTheme : window.lightTheme;
      }
    },
    iconMap: {
      n: 'sunny',
      y: 'moon',
      auto: 'desktop'
    },
    icon: function icon() {
      return this.iconMap[this.on];
    },
    toggle: function toggle(status) {
      this.on = status;
      if (status === 'auto') {
        window.localStorage.removeItem('hugo-theme-dream-is-dark');
      } else {
        window.localStorage.setItem('hugo-theme-dream-is-dark', status);
      }
      this.setThemeForUtterances();
      this.changeSyntaxHighlightingTheme();
    },
    changeSyntaxHighlightingTheme: function changeSyntaxHighlightingTheme() {
      if (document.querySelector('#dream-single-post-main')) {
        var customSyntaxHighlightingUrl = this.isDark() ? window.customSyntaxHighlighting.dark : window.customSyntaxHighlighting.light;
        document.querySelector('link[data-custom-syntax-highlighting]').setAttribute('href', customSyntaxHighlightingUrl);
      }
    },
    setThemeForUtterances: function setThemeForUtterances() {
      var utterances = document.querySelector('iframe.utterances-frame');
      if (utterances) {
        utterances.contentWindow.postMessage({
          type: 'set-theme',
          theme: this.isDark() ? 'github-dark' : 'github-light'
        }, 'https://utteranc.es');
      }
    }
  });
});