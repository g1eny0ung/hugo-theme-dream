# Highlight.js

You can use [highlight.js](https://highlightjs.org/) to replace the default markup syntax highlight in Hugo.

This is all params which you can setting:

```toml
[params]
  highlightjs = true
  # highlightjsCDN = "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js"
  highlightjsExtraLanguages = ["ocaml"]
  highlightjsTheme = "gruvbox-light"
  highlightjsThemeDark = "gruvbox-dark"
```

## Explanation

### highlightjs = true

If you want to use this feature, you must set `highlightjs` to `true`.

### highlightjsCDN

Override default cdn of highlightjs, the default is <https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js>.

### highlightjsExtraLanguages = ["ocaml"]

The additional languages.

### highlightjsTheme = "gruvbox-light"

Syntax theme in light mode.

### highlightjsThemeDark = "gruvbox-dark"

Syntax theme in dark mode.
