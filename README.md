# ilkome gulp
> A front-end boilerplate to create projects with Jade, Stylus, ES6, Autoprefixer, Browsersync


# Futures
### HTML
Template engine using Jade. Jade it's preprocessor HTML.

### CSS
- Modules system with Stylus. Style it's preprocessor CSS. It's also can be SASS, LESS.
- Helpful mixins.
- Minify and / or combine CSS files.
- Remove unused CSS code. For example from CSS libraries like bootstrap, normalize.
- Autoprefixer. Parse CSS and add vendor prefixes to rules.

### JavaScript
- Compiles ES6 to ES5.
- Minify and/or combine JavaScript files.

### Productivity
- Browsersync. It's runs local server and reload browser when you make changes in code or add new files in your application.
- Minify images: svg, png, jpg

Demo: http://ilko.me/



# Installation
Gulp is very easy to get.

1. Install nodejs
5. Install gulp: `npm install gulp -g`
2. Copy this repo
3. `cd` to project directory
4. Run `npm install` to install required files


# Usage
Open project directory and run:

`gulp --minify`

Minify and combine all JS, CSS files.

It's also set `- var minify = 1` in app/component/layout.jade. It's used for include minified JS and CSS files on the page.


# Tasks
This tasks can be run separately.
- `clean`: Remove everything inside `build` folder.
- `etc`: Copy everything inside. Used for favicons and etc. app/etc => build
- `images`: Minify images. app/images => build/img
- `fonts`: Copy fonts. app/fonts => build/fonts
- `jade`: Compiles Jade files. app/jade => build
- `javascript-babel`: Compiles JavaScript ES6 to ES5. app/js => build/js
- `javascript-copy`: Copy JavaScript libs. app/js/libs => build/js/libs
- `javascript-uglify`: Combines JavaScript files. app/js/**/*,  => build/js/bundle.min.js
- `stylus`: Compiles Stylus files using Autoprefixer. app/stylus => build/css/styles.css
