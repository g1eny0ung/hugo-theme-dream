# Custom archives header

You can custom your `/posts` page's header by placing a `_index.md` in `content/posts`.

For example, paste below in `_index.md`:

```markdown
---
title: 归档
---

所有文章的归档。
```

These will be rendered as:

```html
<h2 class="ui header">
  归档
  <span class="ui grey sub header">所有文章的归档。</span>
</h1>
```
