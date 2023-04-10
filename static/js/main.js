"use strict";

$(document).ready(function () {
  function setClassName() {
    return (window.backgroundDark || window.backgroundImageDark ? localStore.getItem('hugo-theme-dream-is-dark') === 'y' : window.darkNav) ? 'os-theme-light' : 'os-theme-dark';
  }
  var osInstance = $('body').overlayScrollbars({
    className: setClassName(),
    scrollbars: {
      autoHide: 'scroll',
      clickScrolling: true
    }
  }).overlayScrollbars();
  if (window.fixedNav) {
    var nav = $('.dream-nav');
    osInstance.options('callbacks.onScroll', function () {
      var y = this.scroll().position.y;
      var fake = $('.fake-dream-nav');
      if (y > 0) {
        nav.addClass('fixed').css('background', window.isDark === 'y' ? window.backgroundDark : window.background);
        $('.dream-single-aside').css('top', 54);
        if (!fake.length) {
          $('<div class="fake-dream-nav" />').css('height', 54).insertBefore(nav);
        }
      } else {
        nav.removeClass('fixed').css('background', 'unset');
        $('.dream-single-aside').css('top', 0);
        fake.remove();
      }
    });
  }
  window.overlayScrollbarsInstance = osInstance;
});