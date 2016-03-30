# Gulp boilerplate
> A front-end boilerplate to create projects with Jade, Stylus, Autoprefixer, Browsersync


# Futures
- Compiles Jade. Preprocessor HTML.
- Compiles Stylus. Preprocessor CSS.
- Browsersync. Server with sync scroll, click, forms between devices.
- Autoprefixer. Parse CSS and add vendor prefixes to rules.
- Includes helpful stylus mixins.
- Error notifications when you make mistakes in Jade, Stylus files.

Demo: http://ilko.me/gulp-demo/


# What is Gulp?
Gulp is a task runner. It automates tasks that you have to do repeatedly when developing.


# Installation Gulp
Gulp is very easy to get.

1. Install nodejs
2. Open project directory
3. Run `npm install` to install required files
4. Install gulp: `npm install gulp -g`


# Usage
Open project directory and run:
- `gulp`
- `gulp --pretty`


# Tasks
- `gulp`: build site from `app` folder, run sever and initialize watch for changes
- `clean`: remove everything inside `build` folder.
- `favicon`: Copy favicon to `build` folder
- `fonts`: Copy fonts to `build/fonts` folder
- `images`: Copy images to `build/img` folder
- `jade`: Compiles Jade files to HTML files and put it to `build` folder
- `javascripts`: Copy JavaScripts files to `build/js` folder
- `stylus`: Compiles Stylus files using Autoprefixer to `styles.css` and put it to `build/css` folder
