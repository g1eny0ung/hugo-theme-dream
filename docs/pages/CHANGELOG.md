# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

- Support image optimization for summary images. See [Image Optimization](https://g1en.site/hugo-theme-dream/summary-images#image-optimization) for more details.

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

## [2.0.0-beta.1] - 2021-05-06

### Added

- Add param `reversePostAndAside`
- Add single page param `nolastmod`
- Add `experimental.jsDate` param
- Add param `maxTags`
- Add param `shareInAside`
- Italian translation (#191)

### Changed

- Hide themeSwitch when no dark params
- Construct $termLink with relLangURL (#173)
- Keep the original taxonomy name
- Consider motto as safeHTML (#185)

### Removed

- Remove `blogAlias` in i18n

## [2.0.0-beta] - 2021-01-31

### The next version is out

> If you still want to use the old version, you can check out the branch to `release-1.6`.

The new version brings some new design elements and bug fixes. When it stabilizes, it will be released as `v2.0.0`.

### Added

- New `header` component
- Add share buttons in post page

### Changed

- Remove some clutter or repetitive elements
- Improve semantic HTML tags

### Deprecated

- Deprecate `categoriesLimitInHeader` param
- Replace `headerBottomText` param to `footerBottomText`

## [1.6.0] - 2021-01-30

### Added

- Support TOC
- Add `avatar` post param
- Add `defaultDark` param
- Add advanced params
  - `customCSS`
  - `customJS`
- Add portuguese translation (#167)
- Add portuguese dates (#168)

### Changed

- Process term name with `humanize | title`

## [1.5.0] - 2020-10-22

### Added

- Support [Netlify CMS](https://www.netlifycms.org/)
- Valine comments support (#144)
- Add `hasTwitterEmbed` param
- Add `headerTitle` param to replace legacy `blogAlias`
- Add backgroundDark and backgroundImageDark params (#153)

### Changed

- `backgroundImage` fallback to `background` when not defined
- Rewrite `showSummaryCoverInPost`

## [1.4.0] - 2020-08-24

### Added

- Add search
- Add [highlight.js](https://highlightjs.org/) support
- Add `headerBottomText` param
- Add `authorlink` param in post frontmatter
- Add `categoriesLimitInHeader` param

### Changed

- Change style of paginator

## [1.3.0] - 2020-07-19

### Added

- Add RSS support
- Support utterances (#132)

### Changed

- SEO optimization
- Unify the scrollbar style
- Optimize resource loading

### Fixed

- Fix image overflow in summary description (#134)

## [1.2.0] - 2020-07-03

### Changed

- Now the date in summary card can be localized, currently supported:
  - es
  - zh

### Fixed

- Fix the problem of Disqus identifier
- Fix table display in dark mode (#127)

## [1.1.0] - 2020-06-24

### Note after v1.1.0

It's needed to set the **`about`** folder to **`Headless Bundle`**.

Related docs:

- <https://g1en.site/hugo-theme-dream/#add-about-me>
- <https://g1en.site/hugo-theme-dream/about-page>
- <https://gohugo.io/content-management/page-bundles/#headless-bundle>

### Changed

- Treat `about` folder as Headless Bundle

## [1.0.0] - 2019-11-10

### Major update in 2019-11-10

I completely rewrote the page layout to a [masonry layout](https://masonry.desandro.com/), and because of the site rewriting, I started to calculate the version again.

Correspondingly, the configuration (`config.toml`) has some breaking changes. Please refer to the documentation for details.

If you have any problems, feel free to open an issue at <https://github.com/g1eny0ung/hugo-theme-dream/issues>.

### Added

- masonry layout
