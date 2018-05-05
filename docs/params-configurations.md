# Params Configurations

An example:

```
[params]
  author = "g1eny0ung"
  description = "g1eny0ung的生活记录～"
  avatar = "/me/yy.jpg"
  motto = "In My Head."

  email = "g1enyy0ung@gmail.com"
  github = "g1eny0ung"
  linkedin = "钺杨g1eny0ung"
  codepen = "g1eny0ung"
  stackoverflow = "5676489/g1eny0ung"

  siteStartYear = 2016
  aboutHeader = "About"

  paginate = 4

  favicon = "/favicon.ico"
```

`author = "g1eny0ung"`

The author field will be used as:

* `<meta name="author" content="g1eny0ung" />`
* Header
* Post Summary

`description = "g1eny0ung的生活记录～"`

The description field will be used as:

* `<meta name="description" content="g1eny0ung的生活记录～" />`

`avatar = "/me/yy.jpg"`

Used in Header.

`motto = "In My Head."`

Used in Header.

`email = "g1enyy0ung@gmail.com"`<br />
`github = "g1eny0ung"`<br />
`linkedin = "钺杨g1eny0ung"`<br />
`codepen = "g1eny0ung"`<br />
`stackoverflow = "5676489/g1eny0ung"`

All of these social links will be showed on about page `layouts/partials/back.html`.

You can open an issue or pull a request to add a social link.

Or Add by yourself. Follow the template in `layouts/partials/back.html`.

`siteStartYear = 2016`

Set your site's start year, then the header will show as **siteStartYear - currentYear (eg: 2016 - 2018)**

`aboutHeader = "About"`

Custom your `about info` header, in `back.html`

`paginate = 4`

Custom numbers of post will be displayed per page

`favicon = "/favicon.ico"`

Custom the [favicon](https://en.wikipedia.org/wiki/Favicon), place it in your `static` folder, same as `avatar`
