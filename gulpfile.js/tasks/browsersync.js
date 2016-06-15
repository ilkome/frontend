const config = require('../config')
const gulp = require('gulp')
const browserSync = require('browser-sync')


// Browsersync
// =================================================================================================
gulp.task('browserSync', () => browserSync(config.browserSync))


// Browsersync reload for Jade
// =================================================================================================
gulp.task('browserSyncReload', () => browserSync.reload())


// Browsersync and compile React using Webpack
// =================================================================================================
gulp.task('browserSyncReact', () => {
  browserSync(Object.assign(config.browserSync, config.browserSyncReact))
})
