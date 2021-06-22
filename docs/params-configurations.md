# Params Configurations

## Example

```toml
[params]
  background = "#fff"
  backgroundImage = "/me/background.jpg"
  linkColor = "seagreen"

  # dark mode
  # defaultDark = true
  backgroundDark = "black"
  backgroundImageDark = "/me/background-dark.jpg"
  darkLinkColor = "darkseagreen"
  # darkNav = true
  # dark404 = true

  images = [""]

  author = "g1eny0ung"
  description = "g1eny0ung 的生活记录～"
  avatar = "/me/yy.jpg"
  headerTitle = "g1eny0ung 的博客"
  motto = "与其感慨路难行，不如马上出发。"
  # maxTags = 5
  # categoriesLimitInHeader = 6 # deprecated
  # headerBottomText = "" # deprecated

  # footerBottomText = ""

  rss = true

  utterancesRepo = "g1eny0ung/g1eny0ung.github.io"

  # valine = true
  # LEANCLOUD_APP_ID = ""
  # LEANCLOUD_APP_KEY = ""

  email = "g1enyy0ung@gmail.com"
  twitter = "g1eny0ung"
  facebook = "g1eny0ung"
  instagram = "g1enyy0ung"
  # mastodon = ""
  linkedin = "钺杨g1eny0ung"
  github = "g1eny0ung"
  stackoverflow = "5676489/g1eny0ung"
  codepen = "g1eny0ung"

  siteStartYear = 2016

  favicon = "/favicon.ico"

  highlightjs = true
  # highlightjsCDN = "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js"
  highlightjsExtraLanguages = ["ocaml"]
  highlightjsTheme = "gruvbox-light"
  highlightjsThemeDark = "gruvbox-dark"

  # search
  enableSearch = true

  # options
  showSummaryCoverInPost = true
  # hasTwitterEmbed = true
  # reversePostAndAside = true
  # shareInAside = true
  fixedNav = true
  # collapsibleTags = true
  # collapseBySummary = true

  [params.advanced]
    customCSS = ["css/custom.css"]
    # customJSBefore = []
    # customJS = []

  [params.experimental]
    jsDate = true
    jsDateFormat = "yyyy年MM月dd日"
```

> For more details with dark mode related params, see [Dark Mode](dark-mode.md).

### background = "#ccc"

The site's background.

This param can be used with `backgroundImage`, when the image has not been loaded yet, it will serve as the background color.

### backgroundImage = "/me/background.jpg"

The site's background image. Will cover the `background` param.

### linkColor = "seagreen"

The site's link color.

### defaultDark = true

Set the default theme to dark.

> Note: if you set the theme to **light** manually, this param will be overridden.

### backgroundDark = "black"

The background in dark mode.

### backgroundImageDark = "/me/background-dark.jpg"

The background image in dark mode. Will cover the `backgroundDark` param.

### darkLinkColor = "darkseagreen"

The site's link color in dark mode.

### darkNav = true

Set the dark top navbar, usually use with dark `background` or `backgroundImage`.

> Note: if you already set `backgroundDark` or `backgroundImageDark`, the `darkNav` param will be ignored.

### dark404 = true

Set the inverted color in 404 page, usually use with dark `background` or `backgroundImage`.

> Note: if you already set `backgroundDark` or `backgroundImageDark`, the `dark404` param will be ignored.

### dark404Button = true

> Note: after <https://github.com/g1eny0ung/hugo-theme-dream/commit/b07d6e22183bad58a8498429bc49fca77082533c>, this param is deprecated. If you are using the latest version of dream, you can safely ignore this param.

Set the dark button in 404 page, usually use with dark `background` or `backgroundImage`.

### images = [""]

See <https://gohugo.io/templates/internal/#open-graph>.

### author = "g1eny0ung"

The author field will be used as:

- `<meta name="author" content="g1eny0ung" />`
- Header
- Post Summary

### description = "g1eny0ung 的生活记录～"

The description field will be used as:

- `<meta name="description" content="g1eny0ung 的生活记录～" />`

### avatar = "/me/yy.jpg"

Used in Header.

### headerTitle = "g1eny0ung 的博客"

Dream was originally intended to be used only as a blog theme. But with continuous development, people also use Dream in other places.

~~So this param aims to replace the legacy `blogAlias` in i18n files. If this param is set, the **header title** will use it rather than author + blogAlias (e.g. xxx's blog).~~ (`blogAlias` was deprecated and removed at 2021-05-06)

### motto = "与其感慨路难行，不如马上出发。"

Used in Header.

### maxTags = 5

Limit the number of labels displayed visually. The hidden tags will be displayed in the form of an [Accordion](https://semantic-ui.com/modules/accordion.html).

### categoriesLimitInHeader = 6

> Deprecated. Only available before `v2.0.0`

Limit the number of categories displayed in the header, the default is **6**.

### headerBottomText = ""

> Deprecated. Only available before `v2.0.0`

Add text at the bottom of the header, support html. This is usually used as a description of the website information.

### footerBottomText = ""

> Only available after `v2.0.0`

Add text at the bottom of the footer, support html. This is usually used as a description of the website information.

### rss = true

Enable RSS.

### utterancesRepo = "g1eny0ung/g1eny0ung.github.io"

Utterances is a lightweight comments widget built on GitHub Issues. By setting `utterancesRepo`, you can use it on every post page.

View <https://utteranc.es> to get more details.

### valine = true

Valine is a fast, simple & efficient Leancloud based no back end comment system.

In order to make it work, you still need to set two parameters:

```toml
[params]
  LEANCLOUD_APP_ID = ""
  LEANCLOUD_APP_KEY = ""
```

View <https://valine.js.org/en/quickstart> to get more details.

### Social Links

`email = "g1enyy0ung@gmail.com"`<br />
`twitter = "g1eny0ung"`<br />
`facebook = "g1eny0ung"`<br />
`instagram = "g1enyy0ung"`<br />
`# mastodon = ""`<br />
`linkedin = "钺杨g1eny0ung"`<br />
`github = "g1eny0ung"`<br />
`stackoverflow = "5676489/g1eny0ung"`<br />
`codepen = "g1eny0ung"`

All of these social links will be showed on about page `layouts/partials/back.html` and header `layouts/partials/header.html`.

You can open an issue or pull a request to add a social link.

Or add by yourself. Follow the template in `layouts/partials/socials.html`.

### siteStartYear = 2016

Set your site's start year, then the header will show as **siteStartYear - currentYear (eg: 2016 - 2020)**.

### favicon = "/favicon.ico"

Custom the [favicon](https://en.wikipedia.org/wiki/Favicon), place it in your `static` folder, same as `avatar`.

### highlightjs = true

View [Highlight.js](highlightjs.md) for more details.

### enableSearch = true

View [Search](search.md) for more details.

### showSummaryCoverInPost = true

As the param said, show summary cover in the single post page.

### hasTwitterEmbed = true

If you have embedded twitter components generated from <https://publish.twitter.com/>, please set this param to `true` for better performance.

After setting this, you can safely remove the async script in the generated code.

### reversePostAndAside = true

Reverse the position of the post content and its aside.

### shareInAside = true

Display share buttons in aside, not under the post title.

### fixedNav = true

Make navbar fixed when scrolling.

### collapsibleTags = true

Break tags into multiple levels by a collapsible manner.

### collapseBySummary = false

collapsibleTags collapses tags by .Title by default and by .Summary when collapseBySummary is true.

## Advanced

> Note: generally, the following advanced parameters are not necessary to be set. Their main purpose is to further customize the entire theme.

### customCSS = ["css/custom.css"]

Add your custom CSS files after the theme CSS files.

For example, create a folder named `css` under `static`, then add `custom.css` into it.

### customJSBefore = []

Like `customCSS`, add your custom JS files **before** the theme JS files.

### customJS = []

Like `customJSBefore`, add your custom JS files **after** the theme JS files.

## Experimental

> Note:
>
> The experimental parameters are often not perfect. They have advantages as well as certain disadvantages.

### jsDate

Use [Luxon](https://moment.github.io/luxon/index.html) to replace the built-in [.Format](https://gohugo.io/functions/format/) function. This allows you to define the time format more flexibly.

You may not want to use this param if you want the final date is generated at compile time. After setting this param, the date will output as an [RFC3339](https://en.wikipedia.org/wiki/ISO_8601) format and all rest format operations will be executed after the page is loaded.

For how to define the format, see below.

### jsDateFormat

Refer to this page (<https://moment.github.io/luxon/docs/manual/formatting.html>) to define your date format.

For example, `yyyy-MM-dd` represents a date format like `2021-04-17`.
