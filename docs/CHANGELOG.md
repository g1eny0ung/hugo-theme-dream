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
