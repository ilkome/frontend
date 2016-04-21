# ilkome gulp starter kit
> A front-end boilerplate to create projects with HTML5 & CSS3, Jade, Stylus, ES6, Autoprefixer, Browsersync


# Futures
### HTML
Template engine using Jade. Jade it's preprocessor HTML.

### CSS
- Modules system with Stylus. Style it's preprocessor CSS. It's also can be SASS, LESS.
- Helpful mixins.
- Minify and combine CSS files.
- Remove unused CSS code. For example from CSS libraries like bootstrap, normalize.
- Autoprefixer. Parse CSS and add vendor prefixes to rules.

### JavaScript
- Compiles ES6 to ES5.
- Minify and combine JavaScript files.

### Productivity
- Browsersync. It's runs local server and reload browser when you make changes in code or add new files in your application folder.
- Minify images: svg, png, jpg, gif

Demo: http://ilko.me/



# Installation

1. Install nodejs
5. Install gulp: `npm install gulp -g`
2. Clone this repo
3. `cd` to project directory
4. Run `npm install` to install required files


# Usage
Open project directory and run:


### gulp
`gulp` It's runs gulp in dev mode and watch for changes.


### gulp build
`gulp build` Build app.


### gulp --minify
`gulp --minify` Minify and combine all JS, CSS files.


### gulp --pretty
`gulp --pretty` Minify and combine all JS, CSS files.


It's also set `- var minify = 1` in app/component/layout.jade. It's used for include minified JS and CSS files on the page.


# Tasks
This tasks can be run separately.
- `clean`: Remove everything inside `build` folder.
- `static`: Copy everything inside. Used for favicons, fonts, css, images. app/static => build
- `images`: Minify images. app/images | app/components/**/img/ => build/img
- `jade`: Compiles Jade files. app/jade => build
- `javascript-babel`: Compiles JavaScript ES6 to ES5. app/js => build/js
- `javascript-copy`: Copy JavaScript libs. app/js/libs => build/js/libs
- `javascript-uglify`: Combines JavaScript files. app/js/* => build/js/bundle.min.js
- `react`: ...
- `replace`: ...
- `stylus`: Compiles Stylus files using Autoprefixer. app/stylus => build/css/styles.css
- `css-clean`: Analyze HTML files and clean unused CSS styles. Ignore styles with prefix `.js-`
- `upload`: ...
