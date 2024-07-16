# About Page

In [Quick Start](/), we added **About Me** as below:

```bash
hugo new about/me.md
```

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

You will be curious why it's needed to create an `index.md`. Because Dream don't want the about folder to be output as `RegularPages`.

Related docs: <https://gohugo.io/content-management/page-bundles/#headless-bundles>

## Access the About page

There are two ways to access the About page:

- Click the **About** link in the top right navigation bar
- Click the avatar in the top left navigation bar

## More descriptions

You can add multiple `.md` files, all of them will be rendered one by one in the masonry layout.

```bash
hugo new about/desc1.md

hugo new about/desc2.md
```
