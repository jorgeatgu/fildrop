FILDROP
============

Fildrop is a set of custom SVG filters. Build with [Drag & Drop](https://github.com/remy/html5demos), [postCSS](https://github.com/postcss/postcss), [noUiSlider](https://github.com/leongersen/noUiSlider).

[DEMO](http://jorgeatgu.github.io/svg-filters/)

##Filters to customize

You can customize someone filters. The filter will be customized if have an icon at top-right of the button.

##How to use

Download **FILDROP**. The first thing you need to do is include the **CSS** and the **SVG** in your project. You can include the filters at the bottom of HTML. I prefer include the file at my images folder.

```html
<link rel="stylesheet" href="path/to/filter.css">
```

Add class to the element

```html
<img class="saturate" src="path/to/image.png">
```

You can view all filter effects in this [demo](http://jorgeatgu.github.io/svg-filters/demo.html)

Classes:

  * `saturotate`
  * `saturate`
  * `rotamatrix`
  * `multitable`
  * `tablen`
  * `dishue`
  * `matrix`
  * `matrix-dos`
  * `huerotate`
  * `luminance`
  * `discrete`
  * `discrete-dos`
  * `table`
  * `table-dos`
  * `identity`
  * `linear`
  * `gamma`
  * `turbulence`
  * `sepia`
  * `fematrix-uno`
  * `fematrix-dos`
  * `turbu-map`
  * `map-uno`
  * `map-dos`
  * `blur-uno`
  * `blur-dos`
  * `morpho-uno`
  * `morpho-dos`

##Browser support

- [x] **Internet Explorer 10+**
- [x] **Chrome 8+**
- [x] **Firefox 3+**
- [x] **Opera 10+**
- [x] **Safari 6+**

[CanIuse](http://caniuse.com/#feat=svg-filters)

##Contributing

To contribute to **FILDROP**, clone this repo locally, create your awesome filters and create pull request with your filter.

##License

Fildrop is licensed under the [MIT license](http://opensource.org/licenses/MIT)

##Credits

[Matthew Bystedt](http://apike.ca/prog_svg_filters.html)

[David Dailey ](http://srufaculty.sru.edu/david.dailey/svg/#Filters)

[WebPlatform SVG FILTER](http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters)

[W3C](http://www.w3.org/TR/SVG/filters.html)