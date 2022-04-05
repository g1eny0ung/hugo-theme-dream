# Recommended Plugins
Did you know Hugo can use multiple "themes" at once? This means you can use partial, one-function-only themes as plugins. Here are some recommended plugins for use with Hugo Theme Dream!

## [Hugo Easy Gallery](https://github.com/Darthagnon/hugo-easy-gallery)
[Originally by Li-Wen Yip](https://github.com/liwenyip/hugo-easy-gallery), Hugo Easy Gallery is a simple implementation of [PhotoSwipe](https://photoswipe.com/). Photoswipe has been used to great effect in other Hugo themes and sites (e.g. [Stack](https://github.com/CaiJimmy/hugo-theme-stack/), [Just a Blog in the Park](https://justabloginthepark.com/photos/)) for an Instagram-style photo gallery, but it is not straight-forward to use. Hugo Easy Gallery fixes that.

### Usage

1. Clone the [Hugo Easy Gallery repo](https://github.com/Darthagnon/hugo-easy-gallery) into your site's `/themes` folder (or download and extract the zip, or add it as a Git submodule). You might want to rename the folder to something short like `heg`.
2. Add it to your site's `config.toml` with ```theme = ["dream", "heg"]``` - this way, both Dream and Hugo Easy Gallery will be loaded and used by Hugo when building your site.
3. Make a new post with `hugo new content/posts/article.md` and, anywhere within that article, call `{{</* load-photoswipe */>}}` (without the /* comments, which are there just to prevent Hugo from interpreting this as a shortcode)
4. Use either `{{</* gallery dir="/img/arduino/" */>}}` (captions will be interpreted from filenames) or
```
{{</* gallery */>}}
{{</* figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" */>}}
{{</* figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" */>}}
{{</* figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" */>}}
{{</* /gallery */>}}
```
... to create a beautiful image gallery on the page. For more examples, see Hugo Easy Gallery's documentation and `exampleSite` pages

## [Pagecrypt](https://github.com/MaxLaumeister/pagecrypt)
Not yet implemented as a Hugo plugin, but a very useful project if you need some secret, password-protected pages on your site.