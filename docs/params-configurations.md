# Params Configurations

## Example

```toml
# recommended for GitHub pages
publishDir = 'docs'

[markup.goldmark.renderer] 
unsafe = true 

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
  # roundAvatar = true
  headerTitle = "g1eny0ung 的博客"
  motto = "与其感慨路难行，不如马上出发。"
  # maxTags = 5
  # categoriesLimitInHeader = 6 # deprecated
  # headerBottomText = "" # deprecated

  # footerBottomText = ""

  rss = true
  # rssHeader = true

  utterancesRepo = "g1eny0ung/g1eny0ung.github.io"

  # valine = true
  # LEANCLOUD_APP_ID = ""
  # LEANCLOUD_APP_KEY = ""
  # VALINE_LANGUAGE = ""

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

  # Set to true to load JS/CSS from CDN (higher speed, load-balancing for self hosted sites) or false to load from local files (e.g. IPFS, Tor, intranet, resilient sites)
  # true: load 3rd-party JS/CSS from CDN; false: load instead from local files
  CDNJS = false
  highlightjs = true
  # highlightjsCDN = "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js"
  highlightjsExtraLanguages = ["ocaml"]
  highlightjsTheme = "gruvbox-light"
  highlightjsThemeDark = "gruvbox-dark"

  # search
  enableSearch = true
  # topTags = false

  # Error 404 Not Found page text
  error404Header = "Oops...You are lost in dream."
  error404SubHeader = "Don't worry though, click the button below to wake up."

  # Enable/Disable Mac OS X style scrollbars - GLITCHY! Recommended false if using PhotoSwipe
  OverlayScrollbars = true

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

  # required for search
  # [outputs]
  #   home = ["HTML", "RSS", "JSON"]
```

> For more details with dark mode related params, see [Dark Mode](dark-mode.md).

### publishDir = 'docs'
GitHub pages builds from the `/docs` folder by default, rather than Hugo's default `/public` folder

### [markup.goldmark.renderer] unsafe = true 
[When using Hugo 0.60.0+, raw HTML are now silently replaced with < !-- raw HTML omitted -->.](https://discourse.gohugo.io/t/raw-html-getting-omitted-in-0-60-0/22032). This means any inline images or fancy stuff you try and do that are beyond the capabilities of Markdown will be omitted. Setting `unsafe = true` will allow it to render.

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

### roundAvatar = true

Choose between rounded avatar (best for profile pictures) or unset (best for custom brand logos)

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

### rssHeader = true
Enable RSS button in the navbar.

### utterancesRepo = "g1eny0ung/g1eny0ung.github.io"

Utterances is a lightweight comments widget built on GitHub Issues. By setting `utterancesRepo`, you can use it on every post page.

View <https://utteranc.es> to get more details.

### valine = true

Valine is a fast, simple & efficient Leancloud based no back end comment system.

In order to make it work, you still need to set first two parameters:

```toml
[params]
  LEANCLOUD_APP_ID = ""
  LEANCLOUD_APP_KEY = ""
  VALINE_LANGUAGE = ""
```

Default language param is "zh-CN" , other supported languages are "zh-TW" , "en" , "ja" .

View <https://valine.js.org/en/quickstart> to get more details.

### Social Links

> Deprecated. **Now you can do the rendering of socials with a custom data file. This file must be named `socials.toml` and must contain the array named `socials`.**
>
> Example: [../exampleSite/data/socials.toml](../exampleSite/data/socials.toml)

`email = "g1enyy0ung@gmail.com"`<br />
`twitter = "g1eny0ung"`<br />
`facebook = "g1eny0ung"`<br />
`instagram = "g1enyy0ung"`<br />
`# mastodon = ""`<br />
`linkedin = "钺杨g1eny0ung"`<br />
`github = "g1eny0ung"`<br />
`stackoverflow = "5676489/g1eny0ung"`<br />
`codepen = "g1eny0ung"`

All of these social links will be showed on about page `layouts/partials/back.html`.

You can open an issue or pull a request to add a social link.

Or add by yourself. Follow the template in `layouts/partials/socials.html`.

### siteStartYear = 2016

Set your site's start year, then the header will show as **siteStartYear - currentYear (eg: 2016 - 2020)**.

### favicon = "/favicon.ico"

Customise the 16x16px [favicon](https://en.wikipedia.org/wiki/Favicon), place it in your `static` folder, same as `avatar`. If you want all the different possible favicon sizes for iOS, Android, Firefox, PWA, etc. resize an HD favicon manually based off the examples [../exampleSite/static/favicons/](../exampleSite/static/favicons/), or use an online service like [Favicomatic](https://favicomatic.com/) or [Favicon Generator](https://www.favicon-generator.org/).

### CDNJS = false

Set to true to load JS/CSS from CDN (higher speed, load-balancing for self hosted sites) or false to load from local files (e.g. IPFS, Tor, intranet, resilient sites). This does not include SaaS JS like Twitter embeds, Disqus comments, etc. as these constantly update and you shouldn't depend on them anyway.

Food for thought articles on why remote JS (or remote anything, really) is bad:

- [Open source developer corrupts widely-used libraries, affecting tons of projects (Jan 2022, The Verge, faker.js incident)](https://www.theverge.com/2022/1/9/22874949/developer-corrupts-open-source-libraries-projects-affected)
- [Reasons to avoid Javascript CDNs (Dec 2021, Wesley Aptekar-Cassels)](https://blog.wesleyac.com/posts/why-not-javascript-cdn)
- [How an irate developer briefly broke JavaScript (Mar 2016, The Verge, leftpad incident)](https://www.theverge.com/2016/3/24/11300840/how-an-irate-developer-briefly-broke-javascript)
- [Sabotage: Code added to popular NPM package wiped files in Russia and Belarus (Mar 2022, Ars Technica, node-ipc/Vue.js protestware)](https://arstechnica.com/information-technology/2022/03/sabotage-code-added-to-popular-npm-package-wiped-files-in-russia-and-belarus/)
- [Hotlinking was bad manners on the internet, and can lead to revenge vandalism](https://old.reddit.com/r/sysadmin/comments/nmt2kq/externally_hosted_soundbite/gzr0cj4/)

See [Hugo Theme Dream, Issue #256](https://github.com/g1eny0ung/hugo-theme-dream/issues/256)

Using SRI hashes to verify remote content helps a bit.
  

### highlightjs = true

View [Highlight.js](highlightjs.md) for more details.

### enableSearch = true

View [Search](search.md) for more details.

### topTags = true
Make the Archive, Categories and Tags buttons appear in the top navbar, instead of next to the avatar above the tag cloud.

### textButtons = true
Enable text next on navbar buttons. TODO: Not yet responsive, so will overflow. Ideally, on small screens, button text disappears

### textButtonsMini = true
Enable text next to small Archive, Categories, Tags buttons; use only when `topTags = false`.

###  404_header = "Oops...You are lost in dream."
Error 404 Page Not Found header text.

> Don't worry if your custom 404 page doesn't appear when testing locally with `hugo serve -D`; for some reason, Hugo v0.96 doesn't display custom 404 pages, but it does render them correctly! It will appear when someone tries to visit a non-existent page or broken URL on your live page. 

###  404_subheader = "Don't worry though, click the button below to wake up."
Error 404 Page Not Found sub-header text, appears between header and "Go back home" button.

### OverlayScrollbars = true

Enable/Disable Mac OS X style scrollbars - GLITCHY! Causes issues with `main.js` and flip if disabled.  Recommended `false` if using PhotoSwipe, as [Hugo Easy Gallery](https://github.com/liwenyip/hugo-easy-gallery)  does not work well in combination with the scrollbars (resets position on the page after viewing album).
There is a non-jQuery version of OverlayScrollbars [available](https://github.com/KingSora/OverlayScrollbars/).

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

Make `/tags` page's tags collapsible.

### collapseBySummary = true

If your posts contain duplicate titles, you can use this param to continue grouping the titles. The lowest level will use `.Summary` to render.

## Advanced

> Note: generally, the following advanced parameters are not necessary to be set. Their main purpose is to further customize the entire theme.

### customCSS = ["css/custom.css"]

Add your custom CSS files after the theme CSS files.

For example, create a folder named `css` under `static`, then add `custom.css` into it.

**Important! If you get the following error, either your `custom.css` is missing and this param is enabled, or your CSS cannot start with comments ([see here](https://stackoverflow.com/a/48270432)):**

>Refused to apply style from 'http://localhost:1313/css/custom.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.

Solution: Check that `custom.css` is present. Else, minify your CSS, or just make sure it does **not** start with a commented out section (as is wont to happen in development)

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
