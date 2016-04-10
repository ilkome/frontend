'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const setting = require('../setting')
const browserSync = require('browser-sync')


// BrowserSync
// =================================================================================================
gulp.task('browserSync', () => browserSync.init(setting.browserSync))
