# Dark Mode

Dream supports dark mode out of the box. The below params are used with it:

```toml
# dark mode
backgroundDark = "black"
backgroundImageDark = "/me/background-dark.jpg"
darkLinkColor = "darkseagreen"
darkNav = true
dark404 = true
```

If you already set `backgroundDark` or `backgroundImageDark`, when switching the theme, the `background` or `backgroundImage` will be replaced by them.

The only note is, **`darkNav` and `dark404` just work with `background` or `backgroundImage`**. Once the `backgroundDark` or `backgroundImageDark` defined, the `darkNav` and `dark404` will be ignored.

## When to use darkNav or dark404

if the `background` param you set is a dark color, you will need them.

Add `darkNav = true` will set the nav with inverted color.
