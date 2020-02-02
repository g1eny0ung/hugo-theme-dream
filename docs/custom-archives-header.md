# Custom Archives Header

You can custom you `/posts` page's header with a `_index.md`.

Place the `_index.md` in `content/posts`.

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
  <div class="ui grey sub header">所有文章的归档。</div>
</h2>
```
