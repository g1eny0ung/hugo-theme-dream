"use strict";

var dark = 'inverted';
var localStore = window.localStorage;
var isDark = localStore.getItem('hugo-theme-dream-is-dark');
isDark = isDark ? isDark : window.defaultDark ? 'y' : isDark;
var darkBackground = function darkBackground() {
  if (window.backgroundDark || window.backgroundImageDark) {
    $('body').toggleClass('default').toggleClass('dark');
  }
};
var dark404 = function dark404() {
  if (window.backgroundDark || window.backgroundImageDark) {
    var dream404 = $('.dream-404-container');
    if (dream404.length) {
      $('.dream-404-container h1').toggleClass(dark);
      var button = $('.dream-404-container button');
      button.toggleClass(dark);
      button.toggleClass('secondary');
    }
  }
};
var darkNavMenu = function darkNavMenu() {
  if (window.backgroundDark || window.backgroundImageDark) {
    $('.dream-nav').toggleClass(dark);
  }
  var osInstance = window.overlayScrollbarsInstance;
  if (window.fixedNav && osInstance && osInstance.scroll().position.y > 0) {
    $('.dream-nav').css('background', window.isDark === 'y' ? window.backgroundDark : window.background);
  }
};
var darkHeaderElements = function darkHeaderElements() {
  var header = $('.dream-header');
  if (header.length) {
    var title = $('.dream-header .ui.header');
    var iconList = $('.dream-header .ui.list');
    title.toggleClass(dark);
    iconList.toggleClass(dark);
  }
};
var darkCards = function darkCards() {
  $('.dream-card').toggleClass(dark);
};
var darkSingle = function darkSingle() {
  var segments = $('.dream-single .ui.segment');
  if (segments.length) {
    segments.toggleClass(dark);
    var title = $('.dream-single h1.ui.header');
    title.toggleClass(dark);
    setThemeForUtterances();
    if (typeof setHighlightTheme === 'function') {
      setHighlightTheme();
    }
    $('.toc').toggleClass(dark);
    $('.actions').toggleClass(dark);
  }
  $('.dream-scroll-to-top').toggleClass(dark);
};
var darkTables = function darkTables() {
  $('.dream-single table').map(function () {
    if (this.style.color) {
      this.style.color = '';
    } else {
      this.style.color = 'black';
    }
  });
};
var darkPostsSection = function darkPostsSection() {
  $('.ui.segment.dream-posts-section').toggleClass(dark);
};
var darkCategoriesSection = function darkCategoriesSection() {
  $('.ui.segment.dream-categories-section').toggleClass(dark);
};
var darkTagsSection = function darkTagsSection() {
  $('.ui.segment.dream-tags-section').toggleClass(dark);
};
var darkBack = function darkBack() {
  $('.dream-back .ui.segment').toggleClass(dark);
};
var darkFooter = function darkFooter() {
  $('footer.ui.segment').toggleClass(dark);
};
var darkSearch = function darkSearch() {
  $('#dream-search').toggleClass(dark);
};
function toggleDark() {
  // darkBackground()
  dark404();
  darkNavMenu();
  darkHeaderElements();
  darkCards();
  darkSingle();
  darkTables();
  darkPostsSection();
  darkCategoriesSection();
  darkTagsSection();
  darkBack();
  darkFooter();
  darkSearch();
  if (Array.isArray(window.darkFunctions)) {
    darkFunctions.forEach(function (d) {
      return d();
    });
  }
}
var setThemeForUtterances = function setThemeForUtterances() {
  var utterances = document.querySelector('iframe.utterances-frame');
  if (utterances) {
    utterances.contentWindow.postMessage({
      type: 'set-theme',
      theme: isDark === 'y' ? 'github-dark' : 'github-light'
    }, 'https://utteranc.es');
  }
};
window.addEventListener('message', function (e) {
  if (e.origin !== 'https://utteranc.es') {
    return;
  }
  setThemeForUtterances();
});
var iconSwitchs = $('.theme-switch');

// Apply theme when first entering
if (isDark === 'y') {
  iconSwitchs.addClass('moon');
  toggleDark();
} else {
  iconSwitchs.addClass('sun');
}
function themeSwitch(e) {
  e.preventDefault();
  if (isDark === 'y') {
    iconSwitchs.removeClass('moon');
    iconSwitchs.addClass('sun');
    localStore.setItem('hugo-theme-dream-is-dark', 'n');
    isDark = 'n';
  } else {
    iconSwitchs.removeClass('sun');
    iconSwitchs.addClass('moon');
    localStore.setItem('hugo-theme-dream-is-dark', 'y');
    isDark = 'y';
  }
  toggleDark();
}