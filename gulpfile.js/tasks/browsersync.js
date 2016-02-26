'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	paths = require('../paths'),
	settings = require('../setting'),
	browserSync = require('browser-sync');


// BrowserSync
// ===============================================
gulp.task('browserSync', function() {
	return browserSync.init(settings.browserSync);
});