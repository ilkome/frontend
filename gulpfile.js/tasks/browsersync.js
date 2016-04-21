const gulp = require('gulp')
const settings = require('../settings')
const browserSync = require('browser-sync')


// BrowserSync
// =================================================================================================
gulp.task('browserSync', () => browserSync.init(settings.browserSync))
