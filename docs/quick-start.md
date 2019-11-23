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

```sh
hugo new about/desc.md
```

Write somethings **about you**:

```md
---
title: desc
---

Hi, my name is Yue Yang.

This is my blog.
```

Then, click the button on the top left corner of the page. You will see what you just wrote.

## OK, write a post for your blog

All of your posts must in the `content/posts` folder.

You can generate it by:

```sh
hugo new posts/articleTitle.md
```

By default, the new md file's template will contain:

```md
---
title: {{ replace .TranslationBaseName "-" " " | title }}
date: {{ .Date }}
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

You only need to change `author`, `cover`, `categories` and `tags` fields, the others will generate automatically.

- author => **Your name**
- cover => **Current post's image**, for _quick start_, now you can delete this line, because the theme has been placed some default images for posts.
- categories => If you're not ready, place "category1"
- tags => If you're not ready, place "tag1"

At last, remove `draft: true` and run `hugo` to generate your site.

If your want to have a preview in editing, run:

```sh
hugo server -D
```

in your blog folder, the `-D` represent to build draft posts.

## End

View more details and configurations on the left sidebar.
