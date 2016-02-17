'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	paths = require('../paths'),
	gutil = require('gulp-util'),
	browserSync = require("browser-sync"),
	changed = require('gulp-changed');


// Сopy javascript to build folder
// ===============================================
gulp.task('js', function() {
	return gulp.src(paths.js.input)

	// Pass only unchanged files
	.pipe(changed(paths.js.output, {extension: '.js'}))

	// Save files
	.pipe(gulp.dest(paths.js.output))

	.on('end', function() {
		gutil.log(gutil.colors.magenta('js'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});