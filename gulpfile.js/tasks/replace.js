const gulp = require('gulp')
const paths = require('../paths')
const config = require('../config')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const gulpif = require('gulp-if')
const replace = require('gulp-replace')


// Replace minify var in layout
// =================================================================================================
gulp.task('replaceInculdeWay', () =>
  gulp.src(paths.layout + '/layout.jade')

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('replaceInculdeWay error:'), error.message)
    }))

    .pipe(debug({ title: 'replaceInculdeWay' }))

    // Replace to dev
    .pipe(replace(config.replace.line, '- var inculdeWay = "dev"'))

    // Replace to minify
    .pipe(gulpif(
      gutil.env.minify,
      replace(config.replace.line, '- var inculdeWay = "minify"')))

    // Replace to pretty
    .pipe(gulpif(
      gutil.env.pretty,
      replace(config.replace.line, '- var inculdeWay = "pretty"')
    ))

    .pipe(gulp.dest(paths.layout))

    .on('end', () => {
      if (gutil.env.pretty) {
        gutil.log('replaceInculdeWay:', gutil.colors.green('pretty'))
      } else if (gutil.env.minify) {
        gutil.log('replaceInculdeWay:', gutil.colors.green('minify'))
      } else {
        gutil.log('replaceInculdeWay:', gutil.colors.green('dev'))
      }
    })
)
