"use strict";

setTimeout(function () {
  var scrollToTop = $("\n    <span class=\"icon is-large dream-scroll-to-top\">\n      <i class=\"fa-solid fa-circle-arrow-up fa-2x\"></i>\n    </span>\n  ").hide();
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