'use strict';

// Modules
// ===============================================
var gulp = require('gulp'),
	paths = require('../paths'),
	del = require('del');


// Clean 'build' folder
// ===============================================
gulp.task('clean', function (cb) {
	del([
		paths.build + '/**/*'
	],
	cb);
});