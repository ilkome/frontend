'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	paths = require('../paths'),
	gutil = require('gulp-util'),
	browserSync = require("browser-sync"),
	debug = require('gulp-debug'),
	flatten = require('gulp-flatten');


// Copy images to build folder
// ===============================================
gulp.task('images', function() {
	return gulp.src([paths.images.input, paths.components.images])

	// Show name of file in pipe
	.pipe(debug({title: 'images:'}))

	// Remove structure of folders
	.pipe(flatten({
		//includeParents: -1
	}))

	// Save files
	.pipe(gulp.dest(paths.images.output))

	.on('end', function() {
		gutil.log(gutil.colors.magenta('images'), ':', gutil.colors.green('finished'));
		gutil.log(gutil.colors.magenta('browserSync'), ':', gutil.colors.green('reload'));
		browserSync.reload();
	})
});