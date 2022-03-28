---
author: Hugo Authors
title: Rich Content - Offline
date: 2019-03-10
lastmod: 2022-03-27T03:45:00Z
description: A brief description of Hugo Shortcodes
cover: /img/default1.jpg
images:
    - /img/default1.jpg
tags:
    - shortcodes",
    - privacy"
---

Hugo ships with several [Built-in Shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugo-s-built-in-shortcodes) for rich content, along with a [Privacy Config](https://gohugo.io/about/hugo-and-gdpr/) and a set of Simple Shortcodes that enable static and no-JS versions of various social media embeds.
<!--more-->

By default, these shortcodes use proprietary APIs to interact with Big Tech services. There is a risk of the source being deleted, and your site having little to show for it. So here's how to link to these services without shortcodes, preserving the content. Notably, Twitter and Instagram both require API keys and don't play nice otherwise.

---

## Instagram Simple Shortcode

Instead of this:
`{{</* instagram_simple BGvuInzyFAe hidecaption */>}}`

### Instagram Method 2
use this:
`[![koloot.design Wolfgang Weingart](/img/saas/BGvuInzyFAe.jpg)](https://www.instagram.com/p/BGvuInzyFAe/)`

[![koloot.design Wolfgang Weingart](/img/saas/BGvuInzyFAe.jpg)](https://www.instagram.com/p/BGvuInzyFAe/)

To easily download images from Instagram posts via (normally blocked) right click, I recommend [Extension for Instagram](https://chrome.google.com/webstore/detail/extension-for-instagram/dkfmiibnoifcbiblibjpfalbdfpdoeni).

### Instagram Method 3
or this (Instagram embedded posts are typically 600px wide)
```html
<a href="https://www.instagram.com/p/BGvuInzyFAe/"><img src="/img/saas/BGvuInzyFAe.jpg" alt="Instagram Post" style="display: block; margin-left: auto; margin-right: auto;" width="600"></a>
```

<a href="https://www.instagram.com/p/BGvuInzyFAe/"><img src="/img/saas/BGvuInzyFAe.jpg" alt="Instagram Post" style="display: block; margin-left: auto; margin-right: auto;" width="600"></a>

<br>

---

## YouTube Privacy Enhanced Shortcode

Instead of this:
`{{</* youtube ZJthWmvUzzc */>}}`

### YouTube Method 2

use this (download YouTube video thumbnail for inclusion):
`[![YouTube video](/img/saas/FortheLoveofType.jpg)](https://www.youtube.com/watch?v=ZJthWmvUzzc)`

[![YouTube video](/img/saas/FortheLoveofType.jpg)](https://www.youtube.com/watch?v=ZJthWmvUzzc)

(NB. relative links to images don't seem to support spaces?)


### YouTube Method 3
or this:
```html
<a href="https://www.youtube.com/watch?v=ZJthWmvUzzc"><img src="/img/saas/FortheLoveofType.jpg" alt="YouTube Video" style="display: block; margin-left: auto; margin-right: auto;" width="420"></a>
```
YouTube video embeds are normally 420px wide, or 100% width (968px on a 1920 fullscreen)

<a href="https://www.youtube.com/watch?v=ZJthWmvUzzc"><img src="/img/saas/FortheLoveofType.jpg" alt="YouTube Video" style="display: block; margin-left: auto; margin-right: auto;" width="420"></a>


<br>

---

## Twitter Simple Shortcode

Instead of this:
`{{</* twitter_simple 1085870671291310081 */>}}`

### Twitter Method 2
use this (with a smaller image, Twitter cards are about 538px wide):
`[![Tweet](/img/saas/1085870671291310081.png)](https://twitter.com/DesignReviewed/status/1085870671291310081)`

[![Tweet](/img/saas/1085870671291310081.png)](https://twitter.com/DesignReviewed/status/1085870671291310081)

### Twitter Method 3
or this:
```html 
<a href="https://twitter.com/DesignReviewed/status/108587067129131008"><img src="/img/saas/1085870671291310081.png" alt="Tweet" style="display: block; margin-left: auto; margin-right: auto;" width="538"></a>
```

<a href="https://twitter.com/DesignReviewed/status/108587067129131008"><img src="/img/saas/1085870671291310081.png" alt="Tweet" style="display: block; margin-left: auto; margin-right: auto;" width="538"></a>

Capture perfect Tweet screenshots with any of a multitude of web services or screenshotting tools, e.g. [Screenshot Guru](https://screenshot.guru/), [ShareX](), [Greenshot]()

### Twitter Method 4
or this (how Hugo quotes tweets by default), perhaps with better link formatting like [Twitter](https://twitter.com/DesignReviewed/status/1085870671291310081):
> “In addition to being more logical, asymmetry has the advantage that its complete appearance is far more optically effective than symmetry.”
> — Jan Tschichold pic.twitter.com/gcv7SrhvJb
>
> — Graphic Design History (@DesignReviewed) January 17, 2019

<br>

---

## Vimeo Simple Shortcode

Instead of this:
`{{</* vimeo_simple 48912912 */>}}`

### Vimeo Method 2
use this:
`[![Sing Jan Swing - Kinetic Type](/img/saas/48912912.jpg)](https://vimeo.com/48912912)`

[![Sing Jan Swing - Kinetic Type](/img/saas/48912912.jpg)](https://vimeo.com/48912912)

### Vimeo Method 3
or this:
```html 
<img src="/img/saas/48912912.jpg" alt="Vimeo Video" caption="Sing Jan Swing - Kinetic Type" style="display: block; margin-left: auto; margin-right: auto;" width="auto">

```
<a href="https://vimeo.com/48912912"><img src="/img/saas/48912912.jpg" alt="Vimeo Video" style="display: block; margin-left: auto; margin-right: auto;" width="100%"></a>

