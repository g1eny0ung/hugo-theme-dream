# Search

Dream has a built-in search feature that lets you find content on your site.

Currently, the search function only searches titles and descriptions. It is not a full-text search.

Add `content/search/_index.md` to enable the search page. Dream adds `noindex` to this page.
Use the following front matter to omit it from your sitemap too.

```yaml
---
sitemap:
  disable: true
---
```
