# Quick Start

**_I assume you have already been browsed [Hugo Docs](https://gohugo.io/documentation/), if you want to use this theme, the docs will help you to understand the configurations._**

## First, add i18n Support

Open `config.toml` and write:

```toml
defaultContentLanguage = "en"
```

View the `i18n` folder for more details.

## Website Analytics

Dream support [Google Analytics](https://www.google.com/analytics/) for website analytics.

In `config.toml`, set:

```toml
googleAnalytics = "..."
```

## Social Comments

Dream now use [Disqus](https://disqus.com/) for social comments.

In `config.toml`, set:

```toml
disqusShortname = "..."
```

## Add "About Me"

Type in your terminal:

```bash
hugo new about/me.md
```

Write somethings **about you**:

```md
---
title: About Me
---

Hi, my name is Yue Yang.

This is my blog.
```

Then create an `index.md` in the about folder and put below contents into it:

```md
---
headless: true
---
```

Finally, click the button on the top left corner of the page. You will see what you just wrote.

## OK, write a post for your blog

All of your posts must in the `content/posts` folder.

You can generate it by:

```bash
hugo new posts/articleTitle.md
```

By default, the new md file's template will contain:

```md
---
title: {{ replace .TranslationBaseName "-" " " | title }}
date: {{ .Date }}
lastmod: {{ .Date }}
author: Author Name
# avatar: /img/author.jpg
# authorlink: https://author.site
cover: /img/cover.jpg
categories:
  - category1
tags:
  - tag1
  - tag2
draft: true
---

Cut out summary from your post content here.

<!--more-->

The remaining content of your post.
```

You only need to change `author`, `cover`, `categories` and `tags` fields, the others will generate automatically.

- author: **Your name**
- cover: **Current post's image**, for _quick start_, now you can delete this line, because the theme has been placed some default images for posts.
- categories and tags: if you haven’t thought about it, you can ignore them for now.

At last, remove `draft: true` and run `hugo` to generate your site.

If your want to have a preview in editing, run:

```bash
hugo server -D
```

in your blog folder, the `-D` represent to build draft posts.

## End

View more details and configurations on the left sidebar.
