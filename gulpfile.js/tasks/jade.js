'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const paths = require('../paths')
const setting = require('../setting')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const gulpif = require('gulp-if')
const jade = require('gulp-jade')
const prettify = require('gulp-jsbeautifier')
const rename = require('gulp-rename')


// Compile jade
// =================================================================================================
gulp.task('jade', () => {
  return gulp.src(paths.pages.input)

    // Error
    .pipe(plumber((error) => {
      gutil.log(
        gutil.colors.magenta('jade'),
        gutil.colors.red('error:'),
        error.message
      )
    }))

    // Show jade title in console
    .pipe(debug({ title: 'Jade:' }))

    // Jade
    .pipe(jade())

    // Prettify
    .pipe(gulpif(gutil.env.pretty, prettify(setting.prettyHTML)))

    // Save files
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())

    .on('end', () => {
      if (gutil.env.pretty) {
        gutil.log(gutil.colors.magenta('Jade'), ':', gutil.colors.green('pretty'))
      } else {
        gutil.log(gutil.colors.magenta('Jade'), ':', gutil.colors.green('normal'))
      }
    })
})
