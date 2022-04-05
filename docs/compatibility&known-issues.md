# Compatibility & Known Issues

## Known Issues & Limitations
- Lots of stuff is broken or performs poorly in Firefox (and derivatives)
- ~~About/Flip page loads inline html images from incorrect paths (example: visit any page other than Home and then click About/Flip)~~ You need to be careful to use a leading slash `/img/pepe.jpg` so as to load relative to the site root, rather than relative to the page root `img/pepe.jpg`.
- Internet Explorer 11 weird laggy/zoom scrolling (Win10)
- Older Safari (iOS, Windows) loads About/Flip page content on top of homepage content
- TODO: rich-content-offline.md - figure out some alternate shortcodes to include, instead of inline HTML 
- Make sure to set `baseURL` in `config.toml` correctly, e.g. `baseURL = 'https://site-name.github.io/'`. For example, if you forget to set "https" and put "http", but then your site is served over https, the search function will break, as modern browsers will block its attempts to `insecure XMLHttpRequest` the search index over http from an https site.
- Clicking on a `tag` will load plain XML, rather than a filter by that tag.
- `siteParam textButtons` is not responsive and results in text/icon overflow on small screens if enabled
- CSS is prone to breaking easily in development. Usually, it's just your browser caching some broken CSS. Clear your browser cache, and test in Incognito windows to avoid this.

### Hugo Easy Gallery compatibility
- Hugo Easy Gallery pointed at a folder `{{</* gallery dir="/img/arduino/" */>}}` does not load `hugo-easy-gallery.css`, so images will repeat. If you force the CSS to load (`config.toml` >> `[params.advanced]`), they will display in a correctly formatted grid, but `load-photoswipe.js` is not loaded (so images function as hotlinks only). It also prevents the rest of the page from being rendered. Workaround: reference images directly, rather than as a folder. See [hugo-easy-gallery, Issue #65](https://github.com/liwenyip/hugo-easy-gallery/issues/65)
- Upon dismissing Hugo Easy Gallery's Photoswipe lightbox, scroll position on page is reset to top
- Hugo Easy Gallery's thumbnails are rectangular, rather than square, with weird gaps between them

## Browser compatibility
Browser compatibility matrix, according to user reports and developer testing.

| Browser | Version | Compatibility? |
| --- | --- | --- |
| **Desktop Browsers** |
| Chrome | v90 | Yes |
| Ungoogled Chromium | v90 | Yes |
| Edge (Chromium) | v? | Untested |
| Edge Spartan | Win10 v1709 | Flip animation is laggy |
| Internet Explorer | 11 | Slightly glitchy scrolling |
| Vivaldi | v? | Untested |
| Brave | v? | Untested |
| Opera | v? | Untested |
| Cent Browser | v? | Untested |
| Firefox Proton | v89+ | Untested |
| Firefox Photon | v78.15 | Poor scrolling performance, wallpaper image doesn't appear|
| Tor Browser Proton | based on Firefox v89+ | Untested
| Tor Browser Photon | based on Firefox v78.15 | Untested |
| Waterfox | v? | Untested |
| Palemoon | v? | Untested |
| Safari | MacOS v? | Untested |
| ** Legacy Desktop Browsers** |
| Ungoogled Chromium (material tabs)| v70-80ish | Untested |
| Ungoogled Chromium (pre-material trapezoid tabs) | v30/v50 something | Untested |
| Internet Explorer | 9 | Untested |
| Internet Explorer | 8 | Untested |
| Internet Explorer | 6 | Untested |
| Safari for Windows | v5.1.7 (2012) | Flip/about renders on top of page content |
| Opera Presto | v12.13 | Untested |
| Firefox Australis | v? | Untested |
| **Mobile Browsers** |
| Safari | iOS 7.1.2 | Flip/about renders on top of page content |
| Puffin browser | iOS | Untested |
| Chrome (Android) | v? | Untested |
| Bromite | v? | Untested |
| [Kiwi](https://kiwibrowser.com/) | Android v? | Untested |
| [EInkBro](https://f-droid.org/en/packages/info.plateaukao.einkbro/) | Android eReader | Untested |
| Firefox | Android | Untested |
| [Fennec](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/) (Firefox Android) | Android | Untested |
| Opera Mini | v? | Untested |
