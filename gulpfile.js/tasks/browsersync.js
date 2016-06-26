const paths = require('../paths')
const gulp = require('gulp')
const browserSync = require('browser-sync')


// Browsersync
// =================================================================================================
gulp.task('browserSync', () =>
  browserSync({
    server: {
      baseDir: paths.build
    },
    open: false,
    logFileChanges: false,
    notify: false,
    online: true
  })
)


// Browsersync reload for Jade
// =================================================================================================
gulp.task('browserSync-reload', () => browserSync.reload())
