# Custom theme

This doc describes how to add `CSS` and `JS` to customize the theme within a certain range.

Before customization, you need to add the related fields to your configuration, below is an example:

```toml
[params]
  [params.advanced]
    customCSS = ["css/custom.css"] # files in the list will be loaded in order
    customJS = ["js/custom.js"]
```

## CSS

It’s very easy to change the theme through CSS. Dream theme base on [Semantic UI](https://semantic-ui.com/), and nearly all the custom classes start with the `dream-` prefix. So in most cases, you only need to customize in these two ways:

- **Override Semantic UI classes**
- **Override Dream specified classes** (Can be found in [site.scss](https://github.com/g1eny0ung/hugo-theme-dream/blob/master/src/sass/site.scss))

Here are some examples:

### Dim background in dark mode

This CSS snippet is useful when you want the `backgroundImage` and `backgroundImageDark` params to be the same and adapt to dark mode.

```css
body.dark .os-viewport {
  background-color: rgba(0, 0, 0, 0.6);
}
```

### Change dark mode color

Due to the Dream theme use Semantic UI `.ui.inverted` as the color of dark mode, so you can change it by:

```css
.ui.inverted.segment,
#dream-search.inverted .results {
  background-color: #333;
}
```

### Custom masonry layouts' item

```css
.ui.attached.segment.dream-card {
  border: none;
  border-radius: 1.5em;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%); /* Bulma Box */
}
```

### Custom TOC

```css
.ui.segment.toc {
  padding: 0;
  background: none;
  border: none;
  box-shadow: none;
  float: right;
}
```

## JS
