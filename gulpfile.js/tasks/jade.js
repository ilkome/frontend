'use strict';

// Modules
// ===============================================
var gulp  = require('gulp'),
	paths = require('../paths'),
	jade = require('gulp-jade'),
	jadeInheritance = require('gulp-jade-inheritance'),
	browserSync = require('browser-sync'),
	changed = require('gulp-changed'),
	cached = require('gulp-cached'),
	gulpFilter = require('gulp-filter'),
	flatten = require('gulp-flatten'),
	plumber = require('gulp-plumber'),
	debug = require('gulp-debug'),
	gutil = require('gulp-util');


// Settings
// ===============================================
var config = {
	pretty: {
		pretty: true
	},
	minify: {
		pretty: false
	}
};


// Compile jade
// ===============================================
gulp.task('jade', function() {
	return gulp.src(paths.jade.input)

	// Error in syntax
	.pipe(plumber(function(error) {
		gutil.log(
			gutil.colors.magenta('jade'),
			gutil.colors.red('error:'),
			error.message
		)
		this.emit('end');
	}))

	// Keeps an in-memory cache of files
	.pipe(cached('jadecache'))

	// Only pass through changed files
	.pipe(changed(paths.build, {extension: '.html'}))

	/**
	 * Rebuild a jade file with other files
	 * that have extended or included those file
	 */
	.pipe(jadeInheritance({basedir: paths.app}))

	// Filter components
	.pipe(gulpFilter(function (file) {
		return !/\/components/.test(file.path);
	}))

	// Jade
	.pipe(debug({title: 'jade:'}))
	.pipe(jade(gutil.env.pretty ? config.pretty : config.minify))

	// Remove structure of folders
	.pipe(flatten())

	.pipe(gulp.dest(paths.build))

	.on('end', function() {
		if(gutil.env.pretty) {
			gutil.log(gutil.colors.magenta('jade'), ':', gutil.colors.green('pretty'));
		} else {
			gutil.log(gutil.colors.magenta('jade'), ':', gutil.colors.green('minify'));
		}

		gutil.log(gutil.colors.magenta('jade'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});