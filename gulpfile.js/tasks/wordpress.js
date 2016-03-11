'use strict';

// Modules
// ===============================================
var gulp  = require('gulp'),
	paths = require('../paths'),
	settings = require('../setting'),
	browserSync = require('browser-sync'),
	debug = require('gulp-debug'),
	gutil = require('gulp-util');


// Copy WordPress PHP files
// ===============================================
gulp.task('wordpress', function() {
	return gulp.src(paths.wordpress.input)

	// Show name of file in pipe
	.pipe(debug({title: 'WP PHP:'}))

	// Save files
	.pipe(gulp.dest(paths.build))

	.on('end', function() {
		gutil.log(gutil.colors.magenta('WP'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});