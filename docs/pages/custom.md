# Custom theme

This doc describes how to add `CSS` and `JS` to customize the theme within a certain range.

Before customization, you need to add the related fields to your configuration, below is an example:

```toml
[params]
  [params.advanced]
    customCSS = ["css/custom.css"] # files in the list will be loaded in order
    customJSBefore = ["js/custom-before.js"]
    customJS = ["js/custom.js"]
```

## CSS

It’s very easy to change the theme through CSS. Dream theme base on [Semantic UI](https://semantic-ui.com/), and nearly
all the custom classes start with the `dream-` prefix. So in most cases, you only need to customize in these two ways:

- **Override Semantic UI classes**
- **Override Dream specified classes** (Can be found in [site.scss](https://github.com/g1eny0ung/hugo-theme-dream/blob/master/src/sass/site.scss))

Here are some examples:

### Custom fonts

> Note: Since semantic-ui is close to being unmaintained, it is difficult to customize the theme **through source code**.
>
> So, to be more convenient and fast, I suggest using the following example method to override the font.

For global:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif !important;
}
```

For post content:

```css
.markdown-body .main {
  font-family: 'Roboto', sans-serif !important;
}
```

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

By customizing JS, you can manipulate the whole theme more freely. For example, some params will output to the global
so you can achieve custom behaviors through them.

Here are the current output params (Can be found in [footer.html](https://github.com/g1eny0ung/hugo-theme-dream/blob/master/layouts/partials/footer.html)):

```js
window.background = {{ .Site.Params.background }}
window.defaultDark = {{ .Site.Params.defaultDark }}
window.backgroundDark = {{ .Site.Params.backgroundDark }}
window.backgroundImageDark = {{ .Site.Params.backgroundImageDark }}
window.darkNav = {{ .Site.Params.darkNav }}
window.maxTags = {{ .Site.Params.maxTags }}
window.hasTwitterEmbed = {{ .Site.Params.hasTwitterEmbed }}
window.fixedNav = {{ .Site.Params.fixedNav }}
```

But mostly, you only need to insert the function into the reserved interface.

Here are some examples:

### inject functions into theme switching

You can add custom functions into `window.darkFunctions` to call them when switching the theme:

```toml
[params]
  [params.advanced]
    customJSBefore = ["js/custom-before.js"]
```

```js
// js/custom-before.js
function darkFunc() {
  console.log(`Now in ${window.isDark === 'y' ? 'dark' : 'light'} mode`)
}

window.darkFunctions = [darkFunc]
```
