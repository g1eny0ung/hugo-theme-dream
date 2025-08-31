"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function tocHighlighter() {
  return {
    headings: [],
    links: [],
    debouncedScroll: null,
    init: function init() {
      var toc = document.querySelector('#TableOfContents');
      if (!toc || window.getComputedStyle(toc.parentElement).display === 'none') {
        return;
      }
      this.links = _toConsumableArray(toc.querySelectorAll('a'));
      this.headings = this.links.map(function (link) {
        var _link$getAttribute;
        return document.getElementById((_link$getAttribute = link.getAttribute('href')) === null || _link$getAttribute === void 0 ? void 0 : _link$getAttribute.replace('#', ''));
      }).filter(Boolean);
      this.debouncedScroll = this.debounce(this.onScroll.bind(this), 300);
      this.debouncedScroll();
    },
    onScroll: function onScroll() {
      var closest = null;
      var minOffset = Infinity;
      this.headings.forEach(function (el, index) {
        var rect = el.getBoundingClientRect();
        var offset = Math.abs(rect.top);
        if (rect.top < window.innerHeight && offset < minOffset) {
          minOffset = offset;
          closest = index;
        }
      });
      if (closest !== null && this.links[closest]) {
        this.setActive(this.links[closest]);
      }
    },
    setActive: function setActive(activeLink) {
      this.links.forEach(function (link) {
        return link.classList.remove('menu-active');
      });
      activeLink.classList.add('menu-active');
    },
    debounce: function debounce(fn, delay) {
      var timeout;
      return function () {
        var _this = this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          return fn.apply(_this, args);
        }, delay);
      };
    }
  };
}