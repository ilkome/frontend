'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const debug = require('gulp-debug')


// Сopy everything to build folder
// =================================================================================================
gulp.task('etc', () => {
  return gulp.src(paths.etc.input)

    // Show name of file in pipe
    .pipe(debug({ title: 'etc:' }))

    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())
})
