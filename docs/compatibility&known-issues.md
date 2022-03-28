# Compatibility & Known Issues

## Browser compatibility

iOS browsers
Android browsers
Desktop browsers
Modern
Legacy

Chromium derivatives new
Chromium derivatives old

Edge Spartan

Internet Explorer

Opera Presto (v12.13)

Firefox derivatives new (Proton, Photon, Tor etc.)
Firefox derivatives old (Waterfox, Palemoon)

Safari for Windows
Safari for Mac 
Safari for iOS



| Browser | Version | Compatibility? |
| --- | --- | --- |
| Chrome | v90 | Yes |
| Ungoogled Chromium | v90 | Yes |
| Edge (Chromium) | 
| Vivaldi |
| Brave |
| Opera |
|

## Known Issues & Limitations
- About/Flip page loads inline html images from incorrect paths (example: visit any page other than Home and then click About/Flip)
- Internet Explorer 11 weird laggy/zoom scrolling (Win10)
- Older Safari (iOS, Windows) loads About/Flip page content on top of homepage content
- hugo easy gallery pointed at a folder `{{</* gallery dir="/img/arduino/" */>}}` does not load `hugo-easy-gallery.css`, so images will repeat. If you force the CSS to load (`config.toml` >> `[params.advanced]`), they will display in a correctly formatted grid, but `load-photoswipe.js` is not loaded (so images function as hotlinks only). It also prevents the rest of the page from being rendered. Workaround: reference images directly, rather than as a folder. See [hugo-easy-gallery, Issue #65](https://github.com/liwenyip/hugo-easy-gallery/issues/65)
- TODO:rich-content-offline - figure out some alternate shortcodes to include, instead of inline HTML 
- Make sure to set `baseURL` in `config.toml` correctly, e.g. `baseURL = 'https://site-name.github.io/'`. For example, if you forget to set "https" and put "http", but then your site is served over https, the search function will break, as modern browsers will block its attempts to `insecure XMLHttpRequest` the search index over http from an https site.