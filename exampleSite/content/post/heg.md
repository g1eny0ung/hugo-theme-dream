---
title: Hugo Easy Gallery
date: 2017-03-25T00:00:00Z
lastmod: 2017-03-25T00:00:00Z
author: Li-Wen Yip
avatar: /img/authors/liwenyip.jpg
authorlink: https://www.liwen.id.au/heg/
cover: /img/authors/liwenyip.jpg
# images:
#   - /img/cover.jpg
categories:
  - Docs
tags:
  - Photoswipe
draft: false
---
*Automagical PhotoSwipe image gallery with a one-line shortcode*
<!--more-->

Hugo Easy Gallery makes Hugo image galleries easy. [Get the code and documentation on GitHub](https://github.com/liwenyip/hugo-easy-gallery/). Demo below.

## Create gallery from a directory
```
{{</* gallery dir="/img/arduino/" */>}} {{</* load-photoswipe */>}}
```

<!-- do not uncomment the gallery thing below, or it breaks the page; everything else works. Dunno why. jQuery version mismatch? EDIT: Doesn't load necessary CSS for some reason-->
{{</* gallery dir="/img/arduino/" */>}} {{< load-photoswipe >}}

Notes:

- The images are automatically captioned with the file name.
- `[image].jpg` is used for the hi-res image, and `[image]-thumb.jpg` is used for the thumbnails.
- If `[image]-thumb.jpg` doesn’t exist, then `[image].jpg` will be used for both hi-res and thumbnail images (look at the last image - `test-setup.jpg)`.
- The default thumbnail suffix is `-thumb`, but you can specify a different one e.g. `thumb="-small"` or `thumb="_150x150"`.
- The layout is repsonsive - try changing your browser window size or use Chrome [device mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/) to see the responsiveness.
- `{{</* load-photoswipe */>}}` enables PhotoSwipe. You only need to call this shortcode once per page. If you don’t enable PhotoSwipe, you’ll still get the same on-page image gallery, but when you click/tap an image, it will link directly to the hi-res image (if you’ve specified one) instead of loading the PhotoSwipe carousel/lightbox gadget. For details of how the PhotoSwipe bit works, see my [previous post](/photoswipe).
- `/static/img/arduino/` contains the following files:
```
garage-opener-inside-thumb.jpg
garage-opener-inside.jpg
garage-opener-thumb.jpg
garage-opener.jpg
lamp-setup-thumb.jpg
lamp-setup.jpg
ms-front-thumb.jpg
ms-front.jpg
ms-rear-thumb.jpg
ms-rear.jpg
ms-remote-inside-thumb.jpg
ms-remote-inside.jpg
ms-remote-thumb.jpg
ms-remote.jpg
**test**-setup.jpg
```

## Create gallery of specific files

```
{{</* gallery */>}}
{{</* figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" */>}}
{{</* figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" */>}}
{{</* figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" */>}}
{{</* /gallery */>}}
```
{{< gallery >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}

## Gallery options
Optional parameters:

- `caption-position` - determines the captions’ position over the image. Options:
 - `bottom` (default)
 - `center`
 - `none` hides captions on the page (they will only show in PhotoSwipe)
- `caption-effect` - determines if/how captions appear upon hover. Options:
 - `slide` (default)
 - `fade`
 - `none` (captions always visible)
- `hover-effect` - determines if/how images change upon hover. Options:
 - `zoom` (default)
 - `grow`
 - `shrink`
 - `slideup`
 - `slidedown`
 - `none`
- `hover-transition` - determines if/how images change upon hover. Options:
 - not set - smooth transition (default)
 - `none` - hard transition

### Caption effects: 

```
{{</* gallery hover-effect="none" caption-effect="slide" */>}} ...
{{</* gallery hover-effect="none" caption-effect="fade" */>}} ...
{{</* gallery hover-effect="none" caption-effect="appear" */>}} ...
{{</* gallery hover-effect="none" caption-effect="none" */>}} ...
```

{{< gallery hover-effect="none" caption-effect="slide" >}} 
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery hover-effect="none" caption-effect="fade" >}} 
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery hover-effect="none" caption-effect="appear" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery hover-effect="none" caption-effect="none" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}


### Caption position:
```
{{</* gallery caption-position="bottom" caption-effect="slide" */>}} ...
{{</* gallery caption-position="center" caption-effect="fade" */>}} ...
{{</* gallery caption-position="none" */>}} ...
```
{{< gallery caption-position="bottom" caption-effect="slide" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery caption-position="center" caption-effect="fade" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery caption-position="none" >}} 
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}

### Hover effects:

```
{{</* gallery hover-effect="grow" */>}} ...
{{</* gallery hover-effect="shrink" */>}} ...
{{</* gallery hover-effect="slideup" */>}} ...
{{</* gallery hover-effect="slidedown" */>}} ...
{{</* gallery hover-effect="none" */>}} ...
{{</* gallery hover-effect="grow" hover-transition="none" */>}} ...
```
{{< gallery hover-effect="grow" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery hover-effect="shrink" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery hover-effect="slideup" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery hover-effect="slidedown" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery hover-effect="none" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}
{{< gallery hover-effect="grow" hover-transition="none" >}}
{{< figure link="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour" >}}
{{< figure link="/img/homepage/cc_jeepers.jpg" caption="Capital Chorus" >}}
{{< figure link="/img/arduino/test-setup.jpg" caption="Arduino test setup" >}}
{{< /gallery >}}

## Figure options
### Specify separate thumbnail and hi-res files:
```
{{</* figure link="/img/homepage/sydney-harbour.jpg"
	src="/img/homepage/sydney-harbour-thumb.jpg" */>}}
OR
{{</* figure link="/img/homepage/sydney-harbour.jpg" thumb="-thumb" */>}}
```
{{< figure link="/img/homepage/sydney-harbour.jpg" thumb="-thumb" >}}

### Specify a hi-res file only:
```
{{</* figure link="/img/homepage/sydney-harbour.jpg" */>}}
OR
{{</* figure src="/img/homepage/sydney-harbour.jpg" */>}}
```

{{< figure link="/img/homepage/sydney-harbour.jpg" >}}

### Specify the dimensions of your hi-res image:

`size` (e.g. `size="1024x768"`) pre-defines the image size for PhotoSwipe. Use this option if you don’t want to pre-load the linked image to determine its size.
```
{{</* figure link="/img/homepage/cc_jeepers.jpg" 
    thumb="-thumb" size="1442x662" */>}}
```
{{< figure link="/img/homepage/cc_jeepers.jpg" 
    thumb="-thumb" size="1442x662" >}}

## Figure options - standalone

Use these options only on figures that are not in a gallery…

### Disable photoswipe:

`class="no-photoswipe"` prevents a `<figure>` from being loaded into PhotoSwipe. If you click on the figure you’ll instead a good ol’ fashioned hyperlink to a bigger image (or - if you haven’t specified a bigger image - the same one).
```
{{</* figure link="/img/homepage/sydney-harbour.jpg"
	thumb="-thumb" class="no-photoswipe" */>}}
```
{{< figure link="/img/homepage/sydney-harbour.jpg"
	thumb="-thumb" class="no-photoswipe" >}}

### Reduced width:

`width` defines the `max-width` of the image displayed on the page. If using a thumbnail for a standalone figure, set this equal to your thumbnail’s native width to make the captions behave properly (or feel free to come up with a better solution and submit a pull request :-)). Also use this option if you don’t have a thumbnail and you don’t want the hi-res image to take up the entire width of the screen/container.

```
{{</* figure src="/img/homepage/sydney-harbour.jpg"
	width="400px" */>}}
```

{{< figure src="/img/homepage/sydney-harbour.jpg"
	width="400px" >}}

### With caption:

By default no CSS styles are applied to the caption. You probably don’t want to do this unless you’ve got your own CSS styles for the <figcaption> element.

```
{{</* figure src="/img/homepage/sydney-harbour.jpg"
	width="400px" caption="Sydney Harbour" */>}}
```
{{< figure src="/img/homepage/sydney-harbour.jpg"
	width="400px" caption="Sydney Harbour" >}}

### With pretty captions:

You can specify the following options to make your captions pretty:

- `caption-position` - determines the captions’ position over the image. Options:
 - `bottom` (default)
 - `center`
  - `none` hides captions on the page (they will only show in PhotoSwipe)
- `caption-effect` - determines if/how captions appear upon hover. Options:
  - `slide` (default)
  - `fade`
  - `none` (captions always visible)

```
{{</* figure src="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour"
	width="400px" caption-position="bottom" */>}}
{{</* figure src="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour"
	width="400px" caption-position="bottom" caption-effect="appear" */>}}
{{</* figure ... caption-effect="slide" */>}}
{{</* figure ... caption-effect="fade" */>}}
```

{{< figure src="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour"
	width="400px" caption-position="bottom" >}}
{{< figure src="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour"
	width="400px" caption-position="bottom" caption-effect="appear" >}}
{{< figure src="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour"
	width="400px" caption-position="bottom" caption-effect="slide" >}}
{{< figure src="/img/homepage/sydney-harbour.jpg" caption="Sydney Harbour"
	width="400px" caption-position="bottom" caption-effect="fade" >}}
