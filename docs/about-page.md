# About Page

In [Quick Start](./quickstart.md), we add **About Me** as below:

Type in your terminal:

```sh
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

You will be curious why it's needed to create an `index.md`. Because we won't want the about folder to be output as `RegularPages`.

Related docs: <https://gohugo.io/content-management/page-bundles/#headless-bundle>

## Multiple describes

**You can add multiple `.md` files, all of them will be rendered as masonry layouts.**

```sh
hugo new about/desc1.md

hugo new about/desc2.md
```
