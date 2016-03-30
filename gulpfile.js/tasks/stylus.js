'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	paths = require('../paths'),
	settings = require('../setting'),
	browserSync = require('browser-sync'),
	stylus = require('gulp-stylus'),
	prefix = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	debug = require('gulp-debug'),
	gutil = require('gulp-util');


// Compile stylus
// ===============================================
gulp.task('stylus', function() {
	return gulp.src(paths.stylus.entry)

	// Error in syntax
	.pipe(plumber(function(error) {
		gutil.log(
			gutil.colors.magenta('stylus'),
			gutil.colors.red('error:'),
			error.message
		)
		this.emit('end');
	}))

	// Show name of file in pipe
	.pipe(debug({title: 'stylus:'}))

	// Stylus
	.pipe(stylus(gutil.env.pretty ? settings.stylus.pretty : settings.stylus.minify))

	// Error in css files
	.pipe(plumber(function(error) {
		gutil.log(
			gutil.colors.magenta('stylus'),
			gutil.colors.red('error:'),
			'Hey, dude! You\'re made syntax error!'
		);
		this.emit('end');
	}))

	// Autoprefixer
	.pipe(prefix())

	// Save files
	.pipe(gulp.dest(paths.stylus.output))

	.on('end', function() {
		if(gutil.env.pretty) {
			gutil.log(gutil.colors.magenta('stylus'), ':', gutil.colors.green('pretty'));
		} else {
			gutil.log(gutil.colors.magenta('stylus'), ':', gutil.colors.green('minify'));
		}

		gutil.log(gutil.colors.magenta('stylus'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});
