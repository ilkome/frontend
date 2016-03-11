'use strict';

// Modules
// ===============================================
var gulp  = require('gulp'),
	paths = require('../paths'),
	settings = require('../setting'),
	jade = require('gulp-jade'),
	jadeInheritance = require('gulp-jade-inheritance'),
	browserSync = require('browser-sync'),
	changed = require('gulp-changed'),
	cached = require('gulp-cached'),
	gulpFilter = require('gulp-filter'),
	flatten = require('gulp-flatten'),
	plumber = require('gulp-plumber'),
	debug = require('gulp-debug'),
	gutil = require('gulp-util'),
	prettify = require('gulp-jsbeautifier');


// Compile jade
// ===============================================
gulp.task('jade', function() {
	return gulp.src(paths.pages.input)

	// Error
	.pipe(plumber(function(error) {
		gutil.log(
			gutil.colors.magenta('jade'),
			gutil.colors.red('error:'),
			error.message
		)
		this.emit('end');
	}))

	// Show jade title in console
	.pipe(debug({title: 'Jade:'}))

	// Prettify
	.pipe(jade(gutil.env.minify ? settings.jade.minify : settings.jade.pretty))
	
	// TO DO: check
	.pipe(prettify(settings.prettyHTML))

	// Remove structure of folders
	.pipe(flatten())

	// Save files
	.pipe(gulp.dest(paths.build))

	.on('end', function() {
		if(gutil.env.pretty) {
			gutil.log(gutil.colors.magenta('Jade'), ':', gutil.colors.green('pretty'));
		} else {
			gutil.log(gutil.colors.magenta('Jade'), ':', gutil.colors.green('minify'));
		}

		gutil.log(gutil.colors.magenta('Jade'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		gutil.log('----------------------------');
		browserSync.reload();
	})
});