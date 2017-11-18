# hugo-theme-dream

Dream is a [Hugo](https://gohugo.io/) theme. I build it for [my blog](http://g1eny0ung.site).

The main feature is full page flip and random color background ~.

![screenshot](https://raw.githubusercontent.com/g1eny0ung/hugo-theme-dream/master/images/screenshot.png)

## Installation

Go to your blog folder, and:

```
cd themes
git clone https://github.com/g1eny0ung/hugo-theme-dream.git dream
```

Then in your `config.toml`, edit `theme = "dream"` and save.

## Let's configure this theme!

***I assume you have already viewd [Hugo Docs](https://gohugo.io/documentation/), if you want to use this theme, the doc will help you to understand the configuration.***

> i18n support

Now the theme has

* en
* zh

Open `config.toml` and write:

```
languageCode = "en" // <html lang="en">
defaultContentLanguage = "en" // English i18n
```

View the i18n folder for more details.

> Params configure

```
[params]
  author = "" // Site author or as default article author
  motto = ""
  description = "" // <meta name="description" content="">
  avatar = "" // your logo
  
  email = ""
  github = ""
  linkedin = ""
  codepen = ""
  stackoverflow = ""
```

> Website Analytics

Dream support [Google Analytics](https://www.google.com/analytics/)

In `config.toml`, set:

```
googleAnalytics = ""
```

> Social Comments

Dream now use [Disqus](https://disqus.com/)

In `config.toml`, set:

```
disqusShortname = ""
```

> Copyright

You can set copyright, it will show in about page and the footer of article page.

```
copyright = ""
```

Support html tag in copyright.

> How to write about info?

First, open data folder and create a file named `about.toml`.

Then write:

```
desc = [
  "First line",
  "Second line",
  "Third line",
  ...
]
```

Every string(item) in **[]** will be wrapped in `<p></p>` tag in html.

Also, support html tag in string.

## OK, Write a article for your blog.

All of your articles must in the content/post folder.

You can generate it by:

```
hugo new post/articleTitle.md
```

By default, the new md file will contain:

```
---
title: {{ replace .TranslationBaseName "-" " " | title }}
date: {{ .Date }} // Will be replaced with your current time
lastmod: {{ .Date }}
author: Author Name
cover: /img/cover.jpg
categories: ["category1"]
tags: ["tag1", "tag2"]
draft: true
---

Cut out summary from your post content here.

<!--more-->

The remaining content of your post.
```

**I recommend you go to [Pexels](https://www.pexels.com/) to select your article cover image.(Small size 640 x 426)**

When your finish your article, remove `draft: true` and run `hugo` to publish your site.

If your want to have a preview in editing, run:

```
hugo server -D
```

in your blog folder, the `-D` represent to build draft post.

## Publish

View [hugo hosting-and-deployment](https://gohugo.io/hosting-and-deployment/)

# License

MIT © [g1eny0ung](https://github.com/g1eny0ung)