const gulp = require('gulp')
const browserSync = require('browser-sync')
const paths = require('../paths')

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

// Manual reload
gulp.task('browserSync-reload', () => browserSync.reload())
