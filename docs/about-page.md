# About Page

In [Quick Start](./quick-start.md), we add **About Me** as below:

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

You will be curious why it's needed to create an `index.md`. Because dream won't want the about folder to be output as `RegularPages`.

Related docs: <https://gohugo.io/content-management/page-bundles/#headless-bundle>

## More describes

**You can add multiple `.md` files, all of them will also be rendered as masonry layout.**

```bash
hugo new about/desc1.md

hugo new about/desc2.md
```
