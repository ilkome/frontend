/*
	ilkome gulp boilerplate
	Version 3.4.4

	Ilya Komichev
	https://ilko.me
	https://github.com/ilkome/gulp-boilerplate
*/


'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	paths = require('./paths'),
	watch = require('gulp-watch'),
	requireDir = require('require-dir'),
	gutil = require('gulp-util'),
	runSequence = require('run-sequence');


// Require all tasks from gulpfile.js/tasks
// ===============================================
requireDir('./tasks');


// Default task
// ===============================================
gulp.task('default', function(callback) {
	runSequence(
		'clean', [
			'css',
			'favicon',
			'fonts',
			'images',
			'jade',
			'javascript',
			'stylus',
			'wordpress'
		],
		'watch',
		'browserSync',
		callback
	);
});


// Watch
// ===============================================
gulp.task('watch', function() {

	// CSS
	watch(paths.css.input, function() {
		gulp.start('css');
	});

	// Favicon
	watch(paths.favicons.input, function() {
		gulp.start('favicon');
	});

	// Fonts
	watch(paths.fonts.input, function() {
		gulp.start('fonts');
	});

	// Images
	watch([paths.components.images, paths.images.input], function() {
		gulp.start('images');
	});

	// Jade
	watch(paths.jade.input, function() {
		gulp.start('jade');
	});

	// JS
	watch(paths.js.input, function() {
		gulp.start('javascript');
	});

	// Stylus
	watch([paths.stylus.input, paths.components.stylus], function() {
		gulp.start('stylus');
	});

	// WordPess
	watch(paths.wordpress.input, function() {
		gulp.start('wordpress');
	});
});
