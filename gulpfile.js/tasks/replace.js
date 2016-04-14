'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const paths = require('../paths')
const setting = require('../setting')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const gulpif = require('gulp-if')
const replace = require('gulp-replace')


// Replace minify var in layaot
// =================================================================================================
gulp.task('replace-include', () => {
  return gulp.src(paths.components.layout.input)

    // Error
    .pipe(plumber((error) => {
      gutil.log(
        gutil.colors.magenta('replace-minify'),
        gutil.colors.red('error:'),
        error.message
      )
    }))

    // Show name of file in pipe
    .pipe(debug({ title: 'stylus:' }))

    // Replace to dev
    .pipe(
      replace(setting.replace.line, '- var inculdeWay = "dev"'))

    // Replace to minify
    .pipe(
      gulpif(
        gutil.env.minify,
        replace(setting.replace.line, '- var inculdeWay = "minify"')))

    // Replace to pretty
    .pipe(
      gulpif(
        gutil.env.pretty,
        replace(setting.replace.line, '- var inculdeWay = "pretty"')))

    .pipe(gulp.dest(paths.components.layout.output))
})
