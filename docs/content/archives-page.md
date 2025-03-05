# Archives Page

Archives page is a list of all posts by timeline. It will be rendered as `/posts`.

## Custom Header

You can custom your archives page's header by placing a `_index.md` in `content/posts`.

For example, paste below in `_index.md`:

```markdown
---
title: Archives
---

All posts by timeline.
```

These will be rendered as:

```html
<h1 class="text-3xl">Archives</h1>
<p class="text-sm">All posts by timeline.</p>
```

One is the title, and the other is the description.

## Custom Group Layout

The timeline is grouped by year by default. You can use a custom layout to group by month or any other way.
This can be done by adding a `groupLayout` field in the front matter of the `_index.md` file.

For example, in `content/posts/_index.md`:

```markdown
---
groupLayout: Jan 2006
---
```

For how to define the layout, please refer to [layout string](https://gohugo.io/methods/pages/groupbydate/#layout-string).
