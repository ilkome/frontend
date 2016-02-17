'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	paths = require('../paths'),
	browserSync = require('browser-sync');


// BrowserSync
// ===============================================
gulp.task('browserSync', function() {
	return browserSync.init({
		server: {baseDir: paths.build},
		open: false, //local
		logFileChanges: false,
		notify: false,
		online: false
	});
});