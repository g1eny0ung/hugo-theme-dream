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

If you already set `backgroundDark` or `backgroundImageDark`, when switching the theme, the `background` or `backgroundImage` will be replaced.

The only note is, `darkNav` and `dark404` just work with `background` or `backgroundImage`.

For example, if the background you set is a dark color, `darkNav = true` will set the nav with inverted color.
And once the `backgroundDark` or `backgroundImageDark` defined, the `darkNav` and `dark404` will be ignored.
