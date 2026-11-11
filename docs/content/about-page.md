# About Page

Create a Markdown file for your first About section:

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

Create `content/about/index.md` with a title and a short description for the standalone About page:

```md
---
title: About Yue Yang
description: Yue Yang's background and the projects he writes about.
---
```

Hugo publishes `/about/` and includes it in the sitemap. The other Markdown files in the folder are [page resources](https://gohugo.io/content-management/organization/#leaf-bundles). Dream uses them as sections of the About page and on the back of the site.

## Compatibility with existing sites

Sites with `headless: true` in `content/about/index.md` keep the flip-only About after upgrading Dream. Both the **About** navigation item and the avatar still flip the current page. Hugo skips publishing `/about/` in this mode.

To enable the standalone page, remove `headless: true` from `content/about/index.md` and add your own `title` and `description` as shown above. Keep the Markdown files already in `content/about/`. After rebuilding, the **About** navigation item opens `/about/` and the avatar on other pages still flips the page.

## Access the About page

- Click **About** in the navigation to open the standalone page.
- Click the avatar on the standalone About page to return to the home page.
- Click the avatar on other pages to flip the page and read the About sections.

## More descriptions

Add more Markdown files to create sections. Set their dates to control the order from oldest to newest.

```bash
hugo new about/desc1.md

hugo new about/desc2.md
```
