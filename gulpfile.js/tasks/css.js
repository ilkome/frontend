'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserSync = require("browser-sync"),
	paths = require('../paths');


// Copy CSS to build folder
// ===============================================
gulp.task('css', function() {
	return gulp.src(paths.css.input)

	// Save files
	.pipe(gulp.dest(paths.css.output))

	.on('end', function() {
		gutil.log(gutil.colors.magenta('css'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});