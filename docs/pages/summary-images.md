# Summary Images

Each post can be associated with a cover image. This image will be displayed in the summary of the post in the home page:

```md
---
cover: /img/build-a-chrome-extension-with-figwheel-main.png
---
```

For a better visualization, it's recommended to set a cover image for each post (although it's not mandatory). I personally
go to [Unsplash](https://unsplash.com/) or [Pexels](https://www.pexels.com/) to select my posts' cover images (choose the small size).

## Image Optimization

Dream will transform summary images to webp format automatically if you are using
[page bundles](https://gohugo.io/content-management/page-bundles/) to organize your posts.
This will make the first load of your site faster.

The way it works is that Dream will look for the presence of the specified cover image
in the [page resources](https://gohugo.io/content-management/page-resources/).
If it exists, the image is processed.

For example, you can organize your posts like this:

```txt
content
├── posts
│   ├── post-1
│   │   ├── index.md
│   │   └── cover.jpg
```

Then in the front matter of `index.md`:

```md
---
cover: cover.jpg
images:
  - cover.jpg
---
```
