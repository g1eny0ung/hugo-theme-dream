# Quick Start

**_I assume you have already been browsed [Hugo Docs](https://gohugo.io/documentation/), if you want to use this theme, the doc will help you to understand the configurations._**

## First, Add i18n Support

Open `config.toml` and write:

```
defaultContentLanguage = "en"
```

View the i18n folder for more details.

## Website Analytics

Dream support [Google Analytics](https://www.google.com/analytics/) for website analytics.

In `config.toml`, set:

```
googleAnalytics = "..."
```

## Social Comments

Dream now use [Disqus](https://disqus.com/) for social comments.

In `config.toml`, set:

```
disqusShortname = "..."
```

## Add "About Me"

Open `content` folder and create a folder named `about`.

Then create `desc.md` in `about` folder.

Write somethings **about you**:

```md
First line

Second line

Third line

...
```

## OK, Write a post for your blog.

All of your posts must in the `content/post` folder.

You can generate it by:

```
hugo new post/articleTitle.md
```

By default, the new md file's template will contain:

```
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
- categories => If you're not ready, placed "category1"
- tags => If you're not ready, placed "tag1"

At last, remove `draft: true` and run `hugo` to generate your site.

If your want to have a preview in editing, run:

```
hugo server -D
```

in your blog folder, the `-D` represent to build draft posts.

## End

View more details and configurations on the left sidebar.
