# Params Configurations

## Example

```toml
[params]
  # background = "black"
  backgroundImage = "/me/background.jpg"
  linkColor = "seagreen"

  author = "g1eny0ung"
  description = "g1eny0ung的生活记录～"
  avatar = "/me/yy.jpg"
  motto = "与其感慨路难行，不如马上出发。"

  email = "g1enyy0ung@gmail.com"
  twitter = "g1eny0ung"
  facebook = "g1eny0ung"
  instagram = "g1enyy0ung"
  linkedin = "钺杨g1eny0ung"
  github = "g1eny0ung"
  stackoverflow = "5676489/g1eny0ung"
  codepen = "g1eny0ung"

  siteStartYear = 2016

  favicon = "/favicon.ico"

  # options
  showSummaryCoverInPost = true

  # dark mode
  darkLinkColor = "darkseagreen"
  darkNav = true
  dark404 = true
```

## Explanation

### `background = "black"`

The site's background.

### `backgroundImage = "/me/background.jpg"`

The site's background image. Will cover the `background`.

### `linkColor = "seagreen"`

The site's link color.

### `author = "g1eny0ung"`

The author field will be used as:

- `<meta name="author" content="g1eny0ung" />`
- Header
- Post Summary

### `description = "g1eny0ung的生活记录～"`

The description field will be used as:

- `<meta name="description" content="g1eny0ung的生活记录～" />`

### `avatar = "/me/yy.jpg"`

Used in Header.

### `motto = "与其感慨路难行，不如马上出发。"`

Used in Header.

`email = "g1enyy0ung@gmail.com"`<br />
`twitter = "g1eny0ung"`<br />
`facebook = "g1eny0ung"`<br />
`instagram = "g1enyy0ung"`<br />
`linkedin = "钺杨g1eny0ung"`<br />
`github = "g1eny0ung"`<br />
`stackoverflow = "5676489/g1eny0ung"`<br />
`codepen = "g1eny0ung"`

All of these social links will be showed on about page `layouts/partials/back.html` and header `layouts/partials/header.html`.

You can open an issue or pull a request to add a social link.

Or add by yourself. Follow the template in `layouts/partials/socials.html`.

### `siteStartYear = 2016`

Set your site's start year, then the header will show as **siteStartYear - currentYear (eg: 2016 - 2018)**

### `repository = "BarryYan/barryyan.github.io"`

Enable github issue for your blog's comment

### `favicon = "/favicon.ico"`

Custom the [favicon](https://en.wikipedia.org/wiki/Favicon), place it in your `static` folder, same as `avatar`

### `showSummaryCoverInPost = true`

As the param said, show summary cover in the single post page.

### `darkLinkColor = "darkseagreen"`

The site's link color in dark mode.

### `darkNav = true`

Set the dark top navbar, usually use with dark `background` or `backgroundImage`.

### `dark404Button = true`

> Note: after <https://github.com/g1eny0ung/hugo-theme-dream/commit/b07d6e22183bad58a8498429bc49fca77082533c>, this param is deprecated. If you are using the latest version of dream, you can ignore this note.

Set the dark button in 404 page, usually use with dark `background` or `backgroundImage`.

### `dark404 = true`

Set the inverted color in 404 page, usually use with dark `background` or `backgroundImage`.
