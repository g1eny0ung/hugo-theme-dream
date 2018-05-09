# About Page

In [Quick Start](./quickstart.md), we add **About Me** as below:

> Open `content` folder and create a folder named `about`.

> Then create `desc.md` in `about` folder.

> Write somethings **about you**:

```md
First line

Second line

Third line

...
```

From version **1.0.6**, you can also add `desc-center.md`, `desc-right.md` in the same folder:

Then the page will generate as this:


`left area` | `center area` | `right area`

`desc.md` | `desc-center.md` | `desc-right.md`

## Note!

After version **1.0.6**, the legacy code `desc.toml ($.Site.Data.about.desc)` was removed.

If you start use this theme after **1.0.6**, you can safely ignore this note.
