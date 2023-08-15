# Netlify CMS

If you want to use [Netlify CMS](https://www.netlifycms.org/) to manage your content. Dream provides a predefined configuration in the `netlifyCMS` folder.

To use it, create an `admin` folder in your `static` directory, then copy the contents of the netlifyCMS directory into it.

if you want to dig into the details, please view:

<https://www.netlifycms.org/docs/add-to-your-site/>

If you haven't know how to deploy your site to Netlify, please read:

<https://gohugo.io/hosting-and-deployment/hosting-on-netlify/>

## Note

If you don't want to use git submodule to track Dream updates, you can use the following build command in Netlify:

```bash
rm -rf themes/dream && git clone https://github.com/g1eny0ung/hugo-theme-dream.git themes/dream && hugo --cleanDestinationDir --minify --gc
```

Or if you don't want to use `netlify.toml`, it's needed to set the `HUGO_VERSION` environment variable to at least `0.57.2` because this is the minimum required version of Dream.
