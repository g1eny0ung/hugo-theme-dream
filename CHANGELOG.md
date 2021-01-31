# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

> **The Major Update in 2019-11-10:**

Because of the site rewriting, I started to calculate the version again.

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
