const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')


// Сopy everything to build folder
// =================================================================================================
gulp.task('static', () =>
  gulp.src(paths.static.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('static error:'), error.message)
    }))

    // Pass only unchanged files
    .pipe(changed(paths.build))

    .pipe(debug({ title: 'static:' }))

    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())
)
