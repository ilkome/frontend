# ilkome gulp boilerplate
> A front-end boilerplate to create projects with Jade, Stylus, Autoprefixer, Browsersync

- Compiles Jade. Preprocessor HTML.
- Compiles Stylus. Preprocessor CSS.
- Browsersync. Server with sync scroll, click, forms between devices.
- Autoprefixer. Parse CSS and add vendor prefixes to rules.
- Includes helpful stylus mixins.
- Error notifications when you make mistakes in Jade, Stylus files.

Demo: http://ilko.me/gulp/


# Tasks
- `gulp`: build site from `app` folder, run sever and initialize watch for changes
- `clean`: Delete `src` folder
- `favicon`: Copy favicon to `src` folder
- `fonts`: Copy fonts to `src/fonts` folder
- `images`: Copy images to `src/img` folder
- `jade`: Compiles Jade files to HTML files and put it to `src` folder
- `javascripts`: Copy JavaScripts files to `src/js` folder
- `stylus`: Compiles Stylus files using Autoprefixer to `styles.css` and put it to `src/css` folder


# Installation
1. Install node.js
2. Open project directory
3. In bash/terminal/command line run `npm install` to install required files
4. Install gulp: `npm install gulp -g`


# Usage
Open project directory and run: `gulp`. It's runs defult gulp task:
```JavaScript
gulp.task('default', function(callback) {
	runSequence(
		'clean',
		['css', 'favicon', 'fonts', 'images', 'jade', 'javascripts', 'stylus'],
		['watch', 'browsersync'],
		callback);
});
```

- `clean` task remove everything inside `src` folder.
- `css`, `favicon`, `fonts`, `images`, `jade`, `javascripts`, `stylus` tasks do compiles or just copies files in to `src`.
- `watch` task starts to watch for changes in `app` folder. When you change any file gulp will do some magic with it and put it in `src` folder.
- `browsersync` task start a mini-server and provide a URL to view your site. Use `External` URL to sync scroll, clicks on all your devices.