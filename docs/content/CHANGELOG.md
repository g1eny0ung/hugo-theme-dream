# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Mathematics enhancements [#387](https://github.com/g1eny0ung/hugo-theme-dream/pull/387)
  - Support `$` delimiter for inline math
  - Support `math: true` page param for whole page math rendering

## [3.12.0] - 2025-04-09

### Added

- Highlight toc items when scrolling [#383](https://github.com/g1eny0ung/hugo-theme-dream/pull/383)

### Changed

- Upgrade to tailwindcss v4 and daisyUI v5 [#374](https://github.com/g1eny0ung/hugo-theme-dream/pull/374)

### Fixed

- Escape mermaidjs code before safe [#376](https://github.com/g1eny0ung/hugo-theme-dream/pull/376)
- Use one default $navItems [#381](https://github.com/g1eny0ung/hugo-theme-dream/pull/381)

## [3.11.0] - 2025-03-04

### Added

- Add Google AdSense support [#363](https://github.com/g1eny0ung/hugo-theme-dream/pull/363)

### Changed

- Remove author display if both post author and site author are not set [#354](https://github.com/g1eny0ung/hugo-theme-dream/pull/354)
- Prioritize page descriptions over page summaries [#356](https://github.com/g1eny0ung/hugo-theme-dream/pull/356)
- Allow favicon to be specified in text format
- Support Twikoo comment system [#359](https://github.com/g1eny0ung/hugo-theme-dream/pull/359)
- Allow specifying `about` in [`reorderNavItems`](./params-configurations.mdx#reordernavitems) [#371](https://github.com/g1eny0ung/hugo-theme-dream/pull/371)

### Fixed

- Fix the background and z-index problem of the zoomable image
- Optimize layout shifts when the homepage loads [#364](https://github.com/g1eny0ung/hugo-theme-dream/pull/364)
- Disable Disqus ads

## [3.10.0] - 2025-01-07

### Added

- Add `imageZoomableInPost` param to control the zoomable of images in the single post page [#345](https://github.com/g1eny0ung/hugo-theme-dream/pull/345)
- Support mathematical equations and expressions by using [MathJax](https://www.mathjax.org/) [#350](https://github.com/g1eny0ung/hugo-theme-dream/pull/350)

### Changed

- Make TOC scrollable when it is too long [#340](https://github.com/g1eny0ung/hugo-theme-dream/pull/340)
- Bump Mermaid version to 11.4.1
- Now external links will open in a new tab by default

### Fixed

- Fix Disqus styling issues
- Add background color to the dark mode switch button

## [3.9.0] - 2024-11-17

### Added

- Now you can group posts with any layout in archives page, see [custom group layout](https://g1en.site/hugo-theme-dream/archives-page#custom-group-layout) for more details

### Changed

- Append global page footer on about page [#329](https://github.com/g1eny0ung/hugo-theme-dream/pull/329)

### Fixed

- Supplement translations in fr/pt [#327](https://github.com/g1eny0ung/hugo-theme-dream/pull/327)
- Dropdown menu links are not clickable on Safari [#334](https://github.com/g1eny0ung/hugo-theme-dream/pull/334)

## [3.8.2] - 2024-09-25

### Added

- Now you can share your post to WhatsApp [#317](https://github.com/g1eny0ung/hugo-theme-dream/pull/317)
- Add `reorderShares` param [#320](https://github.com/g1eny0ung/hugo-theme-dream/pull/320)
- Add a slot for Google AdSense on the post page, view [this issue](https://github.com/g1eny0ung/hugo-theme-dream/issues/315#issuecomment-2370701549) for more details

### Changed

- Rename `updateAt` to `updatedAt` in i18n files

### Fixed

- Tweak English translations for `minuteRead` and `updateAt` [#323](https://github.com/g1eny0ung/hugo-theme-dream/pull/323)

## [3.8.1] - 2024-09-08

### Fixed

- Fix the cache issue of `commentSystems.html`
- Add missing "about" translation to the Italian language file

## [3.8.0] - 2024-09-07

### Added

- Valine comments can now be customized using a partial file [#311](https://github.com/g1eny0ung/hugo-theme-dream/pull/311)
- Support [Waline](https://waline.js.org/en/) comments [#310](https://github.com/g1eny0ung/hugo-theme-dream/pull/310)

### Changed

- Upgrade Hugo minimum version to 0.97.0

### Deprecated

- Deprecate `VALINE_LANGUAGE` param [#309](https://github.com/g1eny0ung/hugo-theme-dream/pull/309)

## [3.7.0] - 2024-08-29

### Added

- Add [Mermaid](https://mermaid.js.org/intro/) diagrams support [#307](https://github.com/g1eny0ung/hugo-theme-dream/pull/307)
- Add [GitHub Alerts Markdown extension](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/) compatible alerts [#308](https://github.com/g1eny0ung/hugo-theme-dream/pull/308)

### Fixed

- Fix image size of summary cards in Zen mode

## [3.6.1] - 2024-08-25

### Fixed

- Render SVG images in summary
- Incorrect use of the `_internal/schema.html` template [#306](https://github.com/g1eny0ung/hugo-theme-dream/pull/306)
- Remove shortcut link type in favicon

## [3.6.0] - 2024-08-24

### Added

- Add `noDefaultSummaryCover` param [#301](https://github.com/g1eny0ung/hugo-theme-dream/pull/301)

### Changed

- Enhance Japanese translation [#303](https://github.com/g1eny0ung/hugo-theme-dream/pull/303)
- Enhance Chinese translation
- Supplement meta tags for SEO [#305](https://github.com/g1eny0ung/hugo-theme-dream/pull/305)

### Deprecated

- Deprecate `hasTwitterEmbed` param [#302](https://github.com/g1eny0ung/hugo-theme-dream/pull/302)

## [3.5.0] - 2024-08-19

🍃 Hugo Theme Dream 3.5 introduces Zen mode. View [Zen Mode](./zen-mode.mdx) for more details.

### Added

- Zen mode: a simple layout that allows you to concentrate on reading and writing [#299](https://github.com/g1eny0ung/hugo-theme-dream/pull/299)

### Changed

- Now taxonomy pages follow the same layout as the home page

### Deprecated

- If you still use `disqusShortname`, please replace it with `services.disqus.shortname`

### Fixed

- Fix height of `.flip-container` class
- Fix tabindex issue in nav menu

## [3.4.1] - 2024-08-14

### Added

- Allow text-based custom nav items

### Changed

- Refactor the implementation of localized time [#298](https://github.com/g1eny0ung/hugo-theme-dream/pull/298)

## [3.4.0] - 2024-08-10

### Added

- Add `reorderNavItems` and `collapseNavItems` params to reorder and collapse navigation items
- Add `[params.navItems]` to append custom items to the navbar

### Changed

- Minimalize the theme css

### Fixed

- Add missing descriptive attributes in some elements

## [3.3.0] - 2024-08-01

### Added

- Support arbitrary taxonomies [#292](https://github.com/g1eny0ung/hugo-theme-dream/pull/292)

### Fixed

- Fix the overflow problem of pre's content
- Fix an overflow problem when users enable always show scroll bars in the system settings
- Resources accessibility when deploying site to a subdomain [#295](https://github.com/g1eny0ung/hugo-theme-dream/pull/295)

## [3.2.0] - 2024-07-25

### Added

- Add `showPrevNextPost` param to control the display of previous and next post links in the single post page
- Add `showTableOfContents` param to control the display of the table of contents in the single post page

## [3.1.1] - 2024-07-23

### Changed

- Adjust shadow style of navbar
- Now if a paginator has only one page, the previous and next buttons will be hidden

### Fixed

- Correct the usage of semantic elements in `baseof.html` and `single.html`

## [3.1.0] - 2024-07-18

### Added

- Support image optimization for summary images. See [Image Optimization](https://g1en.site/hugo-theme-dream/summary-images#image-optimization) for more details

### Changed

- Upgrade `imagesloaded` to `5.0.0`

### Fixed

- Fix the problem of misaligned images during initial loading

## [3.0.1] - 2024-07-12

### Fixed

- Add WAI-ARIA roles to some non-semantic elements
- Fix mobile layout in term.html
- Add mobile display for nav right section

## [3.0.0] - 2024-07-09

🎉 Hugo Theme Dream 3.0 is released.

See the [migration guide](https://g1en.site/hugo-theme-dream/migrate-to-v3) for more details.
