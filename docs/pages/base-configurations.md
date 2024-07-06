# Base Configurations

> View the [full configuration](https://gohugo.io/getting-started/configuration/#all-configuration-settings) for more details.

## Basic

### baseURL = "https://g1en.site"

The site URL, usually the domain name.

### languageCode = "zh-Hans"

LanguageCode will be used as `<html lang="zh-Hans">` and in RSS feeds.

### title = "g1eny0ung 的博客"

The site title.

### enableRobotsTXT = true

Optional. Here is this config's [doc](https://gohugo.io/templates/robots).

### hasCJKLanguage = true

Because my blog was written in Chinese, I need to set this to correct the post's `{{ .ReadingTime }}`.
