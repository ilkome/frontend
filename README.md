# ilkome gulp boilerplate
> A front-end boilerplate to create projects with Jade, Stylus, Browsersync

- Compiles Jade
- Compiles Stylus
- Browsersync
- Autoprefixer
- Includes helpful stylus mixins

Demo: http://ilko.me/gulp/


# Tasks
- `gulp`: Initialize default watch for changes, build site from `app` folder and run sever.
- `clean`: Delete `src` folder
- `favicon`: Copy favicon to `src` folder
- `fonts`: Copy fonts to `src` folder
- `images`: Copy images to `src` folder
- `jade`: Compiles Jade files to HTML files and put it to `src` folder
- `javascripts`: Copy JavaScripts files to `src` folder
- `stylus`: Compiles Stylus files using Autoprefixer to `styles.css` and put it to `src/css` folder


# Installation
1. Install node.js
2. Open project directory
3. In bash/terminal/command line run `npm install` to install required files
4. Install gulp: `npm install gulp -g`


# Usage
- Run gulp in project directory: `gulp`
- You will see `Access URLs` 
- Open `External` URL in all your devices to sync it toghether. Browsersync sync scroll.
- Now you can change everything in `app` folder. Changes automatically reload page in all yours opened browsers.


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
|    |    |    └── *.styl
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