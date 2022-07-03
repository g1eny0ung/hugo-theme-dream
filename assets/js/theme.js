"use strict";

var defaultDark = window.defaultDark;
var hasDarkMode = window.backgroundDark || window.backgroundImageDark;
var isDark = 'is-dark';
var lsIsDark = window.localStorage.getItem('hugo-theme-dream-is-dark');
lsIsDark = lsIsDark ? lsIsDark : window.defaultDark ? 'y' : 'n';

function setThemeForUtterances() {
  var utterances = document.querySelector('iframe.utterances-frame');

  if (utterances) {
    utterances.contentWindow.postMessage({
      type: 'set-theme',
      theme: lsIsDark === 'y' ? 'github-dark' : 'github-light'
    }, 'https://utteranc.es');
  }
}

window.addEventListener('message', function (e) {
  if (e.origin !== 'https://utteranc.es') {
    return;
  }

  setThemeForUtterances();
});

var darkNavbar = function darkNavbar() {
  if (!window.transparentNav) {
    $('.navbar').toggleClass(isDark);
  }

  var osInstance = window.overlayScrollbarsInstance;

  if (window.fixedNav && osInstance && osInstance.scroll().position.y > 0) {
    $('.navbar').css('background', window.isDark === 'y' ? window.backgroundDark : window.background);
  }
};

function setHighlightTheme() {
  $('link[data-highlight]').attr('href', 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/styles/' + (lsIsDark === 'y' ? window.highlightjsThemeDark : window.highlightjsTheme) + '.min.css');
}

var darkSingle = function darkSingle() {
  if ($('.dream-single')) {
    setHighlightTheme();
    setThemeForUtterances();
  }
};

function toggleDark() {
  if (hasDarkMode && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('.button, .tag').toggleClass(isDark);
    darkNavbar();
    darkSingle();

    if (Array.isArray(window.darkFunctions)) {
      darkFunctions.forEach(function (d) {
        return d();
      });
    }
  }
}

toggleDark();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleDark);