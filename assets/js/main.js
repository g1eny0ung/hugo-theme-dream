"use strict";

$(document).ready(function () {
  function setClassName() {
    return (window.backgroundDark || window.backgroundImageDark ? window.localStorage.getItem('hugo-theme-dream-is-dark') === 'y' : window.darkNav) ? 'os-theme-light' : 'os-theme-dark';
  }

  var osInstance = $('body').overlayScrollbars({
    className: setClassName(),
    scrollbars: {
      autoHide: 'scroll',
      clickScrolling: true
    }
  }).overlayScrollbars();

  if (window.fixedNav) {
    var body = $('body');
    var nav = $('.navbar');
    osInstance.options('callbacks.onScroll', function () {
      var y = this.scroll().position.y;

      if (y > 0) {
        body.addClass('has-navbar-fixed-top');
        nav.addClass('is-fixed-top');

        if (window.transparentNav) {
          nav.css('background', window.isDark === 'y' ? window.backgroundDark : window.background);
        }
      } else {
        body.removeClass('has-navbar-fixed-top');
        nav.removeClass('is-fixed-top');

        if (window.transparentNav) {
          nav.css('background', '');
        }
      }

      $('.dream-single-aside').css('top', y > 0 ? 52 + 12 : 0);
    });
  }

  window.overlayScrollbarsInstance = osInstance;

  function initFilp() {
    $('.dream-flip-toggle').click(function () {
      $('.flip-container').toggleClass('flip-it');
    });
  }

  initFilp();
});