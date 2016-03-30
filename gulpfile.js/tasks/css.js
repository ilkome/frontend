'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	paths = require('../paths'),
	gutil = require('gulp-util'),
	browserSync = require("browser-sync"),
	debug = require('gulp-debug'),
	changed = require('gulp-changed');


// Copy CSS to build folder
// ===============================================
gulp.task('css', function() {
	return gulp.src(paths.css.input)

	// Pass only unchanged files
	.pipe(changed(paths.css.output))

	// Show name of file in pipe
	.pipe(debug({
		title: 'css:'
	}))

	// Save files
	.pipe(gulp.dest(paths.css.output))

	.on('end', function() {
		gutil.log(gutil.colors.magenta('css'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});