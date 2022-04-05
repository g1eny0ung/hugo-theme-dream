---
author: Hugo Authors
title: Rich Content - Offline
date: 2019-03-10
lastmod: 2022-03-27T03:45:00Z
description: A brief description of Hugo Shortcodes
avatar: /img/authors/hugo.jpg
authorlink: https://gohugo.io
cover: /img/default1.jpg
images:
    - /img/default1.jpg
tags:
    - shortcodes
    - privacy
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
<a href="https://twitter.com/DesignReviewed/status/1085870671291310081"><img src="/img/saas/1085870671291310081.png" alt="Tweet" style="display: block; margin-left: auto; margin-right: auto;" width="538"></a>
```

<a href="https://twitter.com/DesignReviewed/status/1085870671291310081"><img src="/img/saas/1085870671291310081.png" alt="Tweet" style="display: block; margin-left: auto; margin-right: auto;" width="538"></a>

Capture perfect Tweet screenshots with any of a multitude of web services or screenshotting tools, e.g. [Screenshot Guru](https://screenshot.guru/), [ShareX](https://getsharex.com/), [Greenshot](https://getgreenshot.org/)

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

<br>

---

## GitHub Gist shortcode

Instead of
`{{</* gist spf13 7896402 "img.html" */>}}`

Just copy the Gist content and post it as below:

> #### [GitHub Gist: img.html shortcode](https://gist.github.com/spf13/7896402#file-img-html)
```html
<!-- image -->
<figure {{ if isset .Params "class" }}class="{{ index .Params "class" }}"{{ end }}>
    {{ if isset .Params "link"}}<a href="{{ index .Params "link"}}">{{ end }}
        <img src="{{ index .Params "src" }}" {{ if or (isset .Params "alt") (isset .Params "caption") }}alt="{{ if isset .Params "alt"}}{{ index .Params "alt"}}{{else}}{{ index .Params "caption" }}{{ end }}"{{ end }} />
    {{ if isset .Params "link"}}</a>{{ end }}
    {{ if or (or (isset .Params "title") (isset .Params "caption")) (isset .Params "attr")}}
    <figcaption>{{ if isset .Params "title" }}
        <h4>{{ index .Params "title" }}</h4>{{ end }}
        {{ if or (isset .Params "caption") (isset .Params "attr")}}<p>
        {{ index .Params "caption" }}
        {{ if isset .Params "attrlink"}}<a href="{{ index .Params "attrlink"}}"> {{ end }}
            {{ index .Params "attr" }}
        {{ if isset .Params "attrlink"}}</a> {{ end }}
        </p> {{ end }} 
    </figcaption>
    {{ end }}
</figure>
<!-- image -->
```

<br>

---

## `ref` and `relref`
These shortcodes will look up the pages by their relative path (e.g., `blog/post.md`) or their logical name (`post.md`) and return the permalink (`ref`) or relative permalink (`relref`) for the found page.

`ref` and `relref` also make it possible to make fragmentary links that work for the header links generated by Hugo.

> Read a more extensive description of `ref` and `relref` in the [cross references](https://gohugo.io/content-management/cross-references/) documentation.

### Example `ref` and `relref` Input
```
[Neat]({{</* ref "blog/neat.md" */>}})
[Who]({{</* relref "about.md#who" */>}})
```
(NB. ignore the `/*escape*/` characters)

### Example `ref` and `relref` Output 

Assuming that standard Hugo pretty URLs are turned on.
```
<a href="https://example.com/blog/neat">Neat</a>
<a href="/about/#who">Who</a>
```

## Further info from Hugo Documentation
[See here for more info](https://gohugo.io/content-management/shortcodes/)
