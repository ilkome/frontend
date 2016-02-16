'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserSync = require("browser-sync"),
	paths = require('../paths');


// Copy fonts to build folder
// ===============================================
gulp.task('fonts', function() {
	return gulp.src(paths.fonts.input)

	// Save files
	.pipe(gulp.dest(paths.fonts.output))

	.on('end', function() {
		gutil.log(gutil.colors.magenta('fonts'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});