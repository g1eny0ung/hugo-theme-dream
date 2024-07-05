# Syntax highlighting

Setting `customSyntaxHighlighting = true` will enable syntax highlighting in posts.

You will also need to specify what themes you want to use and generate them. They need to follow some established format:

- You must generate separate themes for light and dark modes
- They must be named `syntax-light.css` and `syntax-dark.css`
- They must be in the `assets/css` directory

For example, you can generate them using the following command:

```bash
hugo gen chromastyles --style=github > static/css/syntax-light.css
hugo gen chromastyles --style=github-dark > static/css/syntax-dark.css
```

Please refer to the [official documentation](https://gohugo.io/content-management/syntax-highlighting/) for more information.
