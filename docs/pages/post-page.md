# Post Page

In [Quick Start](/), we created an example article as below:

```md
---
title: {{ replace .TranslationBaseName "-" " " | title }}
date: {{ .Date }}
lastmod: {{ .Date }}
author: Author Name
# avatar: /img/author.jpg
# authorlink: https://author.site
cover: /img/cover.jpg
# images:
#   - /img/cover.jpg
categories:
  - category1
tags:
  - tag1
  - tag2
# nolastmod: true
draft: true
---

Cut out summary from your post content here.

<!--more-->

The remaining content of your post.
```

There are some parameters in the front matter you can use to customize your post page (and also its summary).

View the below section to learn more about the parameters.

## Parameters

| Parameter    | Description                                                           | Auto-generated |
| ------------ | --------------------------------------------------------------------- | -------------- |
| `title`      | Title of the post                                                     | Yes            |
| `date`       | Date of the post                                                      | Yes            |
| `lastmod`    | Last modified date of the post                                        | Yes            |
| `author`     | Author of the post, if it's not set, the global `author` will be used | No             |
| `avatar`     | Author's avatar, if it's not set, the global `avatar` will be used    | No             |
| `authorlink` | Custom link for the current author                                    | No             |
| `cover`      | Cover image of the post                                               | No             |
| `images`     | Used in `og:image` meta tag                                           | No             |
| `categories` | Categories of the post                                                | No             |
| `tags`       | Tags of the post                                                      | No             |
| `nolastmod`  | Disable the last modified date                                        | No             |
