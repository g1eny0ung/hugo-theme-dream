# Custom Archives Header

You can custom you `/post` page's header with a `_index.md`.

Place the `_index.md` in `content/post`.

For example, paste below in `_index.md`:

```markdown
---
title: Posts
---

All Posts.

```

These will be rendered as:

```html
<h2 class="ui header">
  {{ .Title }} <!-- title: Posts -->
  <div class="ui grey sub header">{{ .Content }}</div> <!-- All Posts. -->
</h2>
```
