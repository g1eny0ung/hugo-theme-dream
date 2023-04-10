"use strict";

setTimeout(function () {
  var scrollToTop = $("\n    <i class=\"big arrow circle up link icon dream-scroll-to-top".concat(window.isDark === 'y' ? ' ' + window.dark : '', "\" style=\"display: none;\"></i>\n  "));
  var osInstance = window.overlayScrollbarsInstance;
  osInstance.options('callbacks.onScrollStop', function () {
    var y = this.scroll().position.y;
    y > 0 ? scrollToTop.show(500) : scrollToTop.hide(500);
  });
  scrollToTop.click(function () {
    osInstance.scroll(0, 500);
  });
  scrollToTop.insertAfter('.os-content');
}, 1000);