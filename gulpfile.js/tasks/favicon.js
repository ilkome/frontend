'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserSync = require("browser-sync"),
	paths = require('../paths');


// Сopy favicon to build folder
// ===============================================
gulp.task('favicon', function() {
	return gulp.src(paths.favicons.input)

	// Save files
	.pipe(gulp.dest(paths.build))

	.on('end', function() {
		gutil.log(gutil.colors.magenta('favicon'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});
