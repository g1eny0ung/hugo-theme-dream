# Note

Since the documentation is deployed on a sub-path of my personal site, I use the
`IN_NETLIFY` environment variable to determine whether the site is deployed on
the root path or not (for previewing purposes).

```js
module.exports = withNextra({
  output: 'export',
  ...(process.env.NODE_ENV === 'production' &&
    process.env.IN_NETLIFY !== 'true' && {
      basePath: '/hugo-theme-dream',
    }),
  images: {
    unoptimized: true,
  },
})
```
