# Params Configurations

An example:

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
  github = "g1eny0ung"
  linkedin = "钺杨g1eny0ung"
  codepen = "g1eny0ung"
  stackoverflow = "5676489/g1eny0ung"

  siteStartYear = 2016

  favicon = "/favicon.ico"

  # dark mode
  darkLinkColor = "darkseagreen"
  darkNav = true
  dark404Button = true
```

## Explanation

`background = "black"`

The site's background.

`backgroundImage = "/me/background.jpg"`

The site's background image. Will cover the `background`.

`linkColor = "seagreen"`

The site's link color.

`author = "g1eny0ung"`

The author field will be used as:

- `<meta name="author" content="g1eny0ung" />`
- Header
- Post Summary

`description = "g1eny0ung的生活记录～"`

The description field will be used as:

- `<meta name="description" content="g1eny0ung的生活记录～" />`

`avatar = "/me/yy.jpg"`

Used in Header.

`motto = "与其感慨路难行，不如马上出发。"`

Used in Header.

`email = "g1enyy0ung@gmail.com"`<br />
`github = "g1eny0ung"`<br />
`linkedin = "钺杨g1eny0ung"`<br />
`codepen = "g1eny0ung"`<br />
`stackoverflow = "5676489/g1eny0ung"`

All of these social links will be showed on about page `layouts/partials/back.html`.

You can open an issue or pull a request to add a social link.

Or add by yourself. Follow the template in `layouts/partials/back.html`.

`siteStartYear = 2016`

Set your site's start year, then the header will show as **siteStartYear - currentYear (eg: 2016 - 2018)**

`favicon = "/favicon.ico"`

Custom the [favicon](https://en.wikipedia.org/wiki/Favicon), place it in your `static` folder, same as `avatar`

`darkLinkColor = "darkseagreen"`

The site's link color in dark mode.

`darkNav = true`

Set the dark top navbar, usually use with `background` or `backgroundImage`.

`dark404Button = true`

Set the dark button in 404 page, usually use with `background` or `backgroundImage`.
