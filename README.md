# ilkome gulp boilerplate
> A front-end boilerplate to create projects with Jade, Stylus, Browsersync

- Compiles Jade
- Compiles Stylus
- Browsersync
- Autoprefixer

Demo: http://ilko.me/gulp/


# Tasks
- `gulp`: Initialize default watch for changes, build site from `app` folder and run sever.
- `clean`: Delete `src` folder
- `favicon`: Copy favicon to `src` folder
- `fonts`: Copy fonts to `src` folder
- `images`: Copy images to `src` folder
- `jade`: Compiles JADE files to HTML files and put it to `src` folder
- `javascripts`: Copy JavaScripts files to `src` folder
- `stylus`: Compiles STYLUS files using Autoprefixer to `styles.css` and put it to `src/css` folder


# Installation
1. Install node.js
2. In bash/terminal/command line, cd into your project directory
3. Run `npm install` to install required files
4. Install gulp: `npm install gulp -g`
5. When it's done installing, run gulp:	`gulp`. You will see something like [this](#console-preview)


# File structure
```
gulp-boilerplate/
├── app/
│    ├── css/
|    |    └── *.css
│    ├── favicons/
|    |    └── *.png
│    ├── fonts/
|    |    └── *.(eot|svg|ttf|woff|woff2)
│    ├── images/
|    |    └── *.(png, jpg, gif)
│    ├── jade/
│    |    ├── inc/
|    |    |    └── *.jade
|    |    └── *.jade
│    ├── javascripts/
|    |    └── *.js
│    ├── stylus/
|    |    └── blocks/
│    |    |    ├── code.styl
│    |    |    ├── colors.styl
│    |    |    ├── fonts.styl
│    |    |    ├── headers.styl
│    |    |    ├── inputs.styl
│    |    |    ├── layout.styl
│    |    |    ├── links.styl
│    |    |    ├── lists.styl
│    |    |    ├── media.styl
│    |    |    ├── tables.styl
|    |    |    └── typography.styl
|    |    └── common/
|    |    |    └── *.styl
|    |    └── tools/
│    |    |    ├── animations.styl
│    |    |    ├── bgds.styl
│    |    |    ├── clearfix.styl
│    |    |    ├── columns.styl
│    |    |    ├── display.styl
│    |    |    ├── index.styl
│    |    |    ├── lists.styl
│    |    |    ├── reset.styl
|    |    |    └── texts.styl
|    |    └── styles.styl
├── gulpfile.js/
│    ├── tasks/
│    |    ├── clean.js
│    |    ├── css.js
│    |    ├── favicon.js
│    |    ├── fonts.js
│    |    ├── images.js
│    |    ├── jade.js
│    |    ├── javascripts.js
|    |    └── stylus.js
│    └── index.js
└── src/
    ├── css/
    |    ├── *.css
    ├── img/
    |    ├── *.(png, jpg, gif)
    ├── js
    |    └── *.js
    └── *.html
```


# Console Preview

```
D:\Dropbox\Working\HTML\ilkome-gulp>gulp
[13:15:24] Using gulpfile D:\Dropbox\Working\HTML\ilkome-gulp\gulpfile.js
[13:15:24] Starting 'default'...
[13:15:24] Starting 'clean'...
[13:15:24] Finished 'clean' after 6.49 ms
[13:15:24] Starting 'jade'...
[13:15:24] Starting 'stylus'...
[13:15:24] Starting 'images'...
[13:15:24] Starting 'css'...
[13:15:24] Starting 'favicon'...
[13:15:24] Finished 'css' after 15 ms
[13:15:25] Finished 'favicon' after
[13:15:25] Finished 'jade' after
[13:15:25] Finished 'stylus' after
[13:15:25] Finished 'images' after
[13:15:25] Starting 'watch'...
[13:15:25] Finished 'watch' after 22 ms
[13:15:25] Starting 'browsersync'...
[13:15:25] Finished 'browsersync' after 27 ms
[13:15:25] Finished 'default' after
[BS] Access URLs:
 --------------------------------------
         Local: http://localhost:3000
     	External: http://192.168.1.180:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.1.180:3001
 --------------------------------------
[BS] Serving files from: src
[BS] Watching files...
```
