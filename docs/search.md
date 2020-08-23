# Search

You can enable the search feature by setting the `enableSeach` param to `true` in `[params]`

```toml
[params]
  enableSearch = true
```

Also, you need to set Hugo outputs to include `JSON`:

```toml
# in your config.toml
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

Then you will see a search icon appear on the top of the nav. Click it or type `Win+/`(Windows) or `CMD+/`(macOS) to start searching.
