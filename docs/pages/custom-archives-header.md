# Custom archives header

You can custom your `/posts` page's header by placing a `_index.md` in `content/posts`.

For example, paste below in `_index.md`:

```markdown
---
title: Archives
---

All posts by timeline.
```

These will be rendered as:

```html
<h1 class="text-3xl">
  Archives
</h1>
<p class="text-sm">All posts by timeline.</p>
```

One is the title, and the other is the description.
