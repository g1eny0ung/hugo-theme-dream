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
    },
    mql: window.matchMedia('(prefers-color-scheme: dark)'),
    on: 'n',
    "class": function _class() {
      if (this.on === 'auto') {
        return this.mql.matches ? 'dark' : 'light';
      } else {
        return this.on === 'y' ? 'dark' : 'light';
      }
    },
    theme: function theme() {
      if (this.on === 'auto') {
        return this.mql.matches ? 'forest' : 'garden';
      } else {
        return this.on === 'y' ? 'forest' : 'garden';
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
    onMap: {
      sunny: 'n',
      moon: 'y',
      desktop: 'auto'
    },
    toggle: function toggle(icon) {
      var on = this.onMap[icon];
      this.on = on;
      if (on === 'auto') {
        window.localStorage.removeItem('hugo-theme-dream-is-dark');
      } else {
        window.localStorage.setItem('hugo-theme-dream-is-dark', on);
      }
    }
  });
});