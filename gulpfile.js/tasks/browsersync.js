const config = require('../config')
const gulp = require('gulp')
const browserSync = require('browser-sync')


// BrowserSync
// =================================================================================================
gulp.task('browserSync', () => browserSync(config.browserSync))


// BrowserSync and compile Reactjs using Webpack
// =================================================================================================
gulp.task('browserSyncReact', () => {
  browserSync(Object.assign(config.browserSync, config.browserSyncReact))
})
