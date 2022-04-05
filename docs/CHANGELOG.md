# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog v1.0.0](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning v2.0.0](http://semver.org/spec/v2.0.0.html).

## Version History Notes

### The next version is out

> If you still want to use the old version, you can check out the branch to `release-1.6`.

The new version brings some new design elements and bug fixes. When it stabilizes, it will be released as `v2.0.0`.

All changes will be committed to the `master` branch. You can check the screenshot below to see the rough interface changes.

For more detail, please refer to the [Release v2.0.0-beta](https://github.com/g1eny0ung/hugo-theme-dream/releases/tag/v2.0.0-beta).

### Note After v1.1.0

> It's necessary to set the **`about`** folder to **`Headless Bundle`**.

Related docs:

<https://g1eny0ung.site/hugo-theme-dream/#/quick-start?id=add-quotabout-mequot>
[Quickstart](quick-start.md)

<https://g1eny0ung.site/hugo-theme-dream/#/about-page>
[About Page](about-page.md)

<https://gohugo.io/content-management/page-bundles/#headless-bundle>

### **The Major Update in 2019-11-10:**

Because of the site rewrite, I reset the versioning.

I completely rewrote the page layout to [masonry layout](https://masonry.desandro.com/).

Correspondingly, the configuration (`config.toml`) also has some breaking changes.

Please refer to the documentation for details.

If you have other problems, you can also ask in the [issues](https://github.com/g1eny0ung/hugo-theme-dream/issues).

## Next plans
- compatibility fixes for Internet Explorer, Firefox, iOS safari (the site breaks in all those browsers and loads the About flip page on top of, or just below, the main article selection)
- performance fixes: scrolling is sometimes juddery, and the navbar doesn't always stick cleanly to the top of the page
- collapsible "Share" menu in articles, with various socials, to avoid clutter.
- option to use 2 avatars, one for the main homepage, 1 for the About flip page
- separate out the flip page into its own separate thing? since it seems to be part of the main page at the moment and loads on top of it when CSS breaks.
- remove (or make optional) custom scrollbars and jQuery
- add Photoswipe
- maybe add [StPageFlip](https://nodlik.github.io/StPageFlip/)???
- Consolidate i18n into one folder
- Custom navbar buttons, e.g. to other social media, Etsy/Shopify, etc.
- siteParam: rounded corners (from `custom.css`) 
- Linkable headings (similar to index) with hyperlink icon

## [2.9.8] - 2022.04.05
- Added exampleSite data, including:
 -  many social network URI schemes
 -  example graphics
 -  example favicons in all sizes
- Improved documentation formatting and grammar
- i18n: `ar`, `ca`, `de`, `he`, `ja`, `lv`, `ro`, `ru`, `sl` (and deduplication of translation code)
- opt out of Google FLoC
- update miscellaneous dependencies
- Sub-Resource Integrity hashes for all remote content
- site params:
 - `CDNJS` - site is now **offline capable**, you can choose to load JS/CSS locally or from a CDN)
 - `TopTags` - optionally display all buttons in top navbar instead of mixed with tag cloud
 - `roundAvatar` - choose whether to have a round avatar or unset image to better display custom logos
 - `OverlayScrollbars` - disable the Mac OS X style scrollbars if you prefer system scrollbars or for compatibility reasons (e.g. Hugo Easy Gallery workarounds)
 - `textButtons`,`textButtonsMini` - optional text labels on the navbar buttons (and the Archive/Categories/Tags buttons even when they're small), for accessibility improvements.
 - `rssHeader` - optional "subscribe" RSS button in the navbar; RSS is good and more people should use it!
- Accessibility improvements (alt tags, NoScript warning)
- Customisable 404 page text
- Enable inline html in Markdown files
- ~~fix SRI hash for imagesloaded js (seems to be called 2x in the code, but I can only find 1x with the correct SRI)~~ EDIT: It was in `layouts\index.html`
### Work in progress:
- [WIP] Start implementing PWA service worker and manifest (**v2.9.x**)
- [WIP] Start implementing [Photoswipe](https://photoswipe.com/) via [Hugo Easy Gallery](https://github.com/liwenyip/hugo-easy-gallery/) in an [unofficial fork](https://github.com/Darthagnon/hugo-easy-gallery) (jQuery-free version!) (**v3.0.0?**)
- [WIP] update i18n with missing words for the `textButtons`
- [WIP] Pretty RSS/tag XML that is human-readable via XSL styling; still needs adapting, site avatar, etc. ([Making RSS Pretty, sburke@inerglacial.com](https://interglacial.com/~sburke/stuff/pretty_rss.html), [How to style RSS feed with XSL, Hsiaoming@lepture.com](https://lepture.com/en/2019/rss-style-with-xsl), [Hugo RSS templates](https://gohugo.io/templates/rss/), [Default Hugo RSS](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/rss.xml))
## [2.0.0-beta] - 2021.01.31

- New `header` component
- At the same time, remove some clutter or repetitive elements
- Deprecate `categoriesLimitInHeader` param
- Replace `headerBottomText` param to `footerBottomText`
- Improve semantic HTML tags
- Add share buttons in post page

## [1.6.0] - 2021.01.30

- Process term name with humanize | title
- Support TOC
- Add `avatar` post param
- Add `defaultDark` param
- Add advanced params
  - `customCSS`
  - `customJS`
- Add portuguese translation (#167)
- Add portuguese dates (#168)
- Bugs fixes

## [1.5.0] - 2020.10.22

- Support [Netlify CMS](https://www.netlifycms.org/)
- `backgroundImage` fallback to `background` when not defined
- Rewrite `showSummaryCoverInPost`
- Valine comments support (#144)
- Add `hasTwitterEmbed` param
- Add `headerTitle` param to replace legacy `blogAlias`
- Add backgroundDark and backgroundImageDark params (#153)
- Bugs fixes

## [1.4.0] - 2020.08.24

- Add search
- Change style of paginator
- Add [highlight.js](https://highlightjs.org/) support
- Add `headerBottomText` param
- Add `authorlink` param in post frontmatter
- Add `categoriesLimitInHeader` param

## [1.3.0] - 2020.07.19

- Add RSS support
- Fix image overflow in summary description (#134)
- utterances comments support (#132)
- SEO optimization
- Unify the scrollbar style
- Optimize resource loading

## [1.2.0] - 2020.07.03

- Fix disqus identifier's problem
- Fix table display in dark mode (#127)
- Now the summary card's date can be localized, currently dream already support:
  - zh
  - es

## [1.1.0] - 2020.06.24

- Treat `about` folder as Headless Bundle

## [1.0.0] - 2019.11.10

- masonry layout
