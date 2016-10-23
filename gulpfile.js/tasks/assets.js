const gulp = require('gulp')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const paths = require('../paths')

// Сopy everything to build folder
gulp.task('assets', () =>
  gulp.src(paths.assets.src)
    .pipe(plumber(error => gutil.log(gutil.colors.red('assets error:'), error.message)))
    .pipe(changed(paths.build))
    .pipe(debug({ title: 'assets:' }))
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())
)
