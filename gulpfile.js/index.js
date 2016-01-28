/*
	ilkome gulp boilerplate
	Version 3.2.1

	Ilya Komichev
	https://ilko.me
	https://github.com/ilkome/gulp-boilerplate
*/


// Modules
// ===============================================
var gulp        = require('gulp'),
	watch       = require('gulp-watch'),
	requireDir  = require('require-dir'),
	runSequence = require('run-sequence');


// Paths
// ===============================================
path = {
	tasks: './tasks',
	build: 'src',
	components: 'app/components/**',
	css: {
		src: 'app/css',
		build: 'src/css',
	},
	favicons: {
		src: 'app/favicons',
		build: 'src',
	},
	fonts: {
		src: 'app/fonts',
		build: 'src/fonts',
	},
	images: {
		src: 'app/images',
		build: 'src/img',
	},
	jade: {
		src: 'app/jade',
		inc: 'app/jade/inc',
		ignore: '!app/jade/inc/*.jade',
	},
	javascripts: {
		src: 'app/javascripts',
		build: 'src/js',
	},
	stylus: {
		src: 'app/stylus',
	}
}


// Require all tasks from gulpfile.js/tasks
// ===============================================
requireDir(path.tasks);


// Default build task
// ===============================================
gulp.task('default', function(callback) {
	runSequence(
		'clean',
		['css', 'favicon', 'fonts', 'images', 'jade', 'jade:php', 'javascripts', 'stylus'],
		['watch', 'browsersync'],
		callback);
});


// Watch tasks
// ===============================================
gulp.task('watch', function() {
	// Process jade on change
	watch(path.jade.src + '/*.jade', function(event, cb) {
		gulp.start('jade');
	});

	// Process jade.php
	watch(["app/php/*.jade"], function(event, cb) {
		gulp.start('jade:php');
	});

	// Process all jade when file form 'inc' folder was change
	watch([path.components + '/*.jade', path.jade.inc + '/*.jade'], function(event, cb) {
		gulp.start('jade:nocache');
	});

	// Process stylus
	watch([path.components + "/*.styl", path.stylus.src + "/**/*.styl"], function(event, cb) {
		gulp.start('stylus');
	});
	
	// Copy CSS
	watch(path.css.src + '/**/*.css', function(event, cb) {
		gulp.start('css');
	});

	// Copy Favicon
	watch([path.favicons.src + "/**/*.png"], function(event, cb) {
		gulp.start('favicon');
	});

	// Copy images
	watch([path.components + '/**/img/*.+(jpg|png|gif|svg)', path.images.src + '/**/*.+(jpg|png|gif|svg)'], function(event, cb) {
		gulp.start('images');
	});

	// Copy JavaScripts
	watch(path.javascripts.src + '/**/*.js', function(event, cb) {
		gulp.start('javascripts');
	});
});