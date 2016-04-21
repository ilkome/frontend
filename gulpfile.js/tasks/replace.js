const gulp = require('gulp')
const paths = require('../paths')
const settings = require('../settings')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const gulpif = require('gulp-if')
const replace = require('gulp-replace')


// Replace minify var in layout
// =================================================================================================
gulp.task('replace-include', () => {
  return gulp.src(paths.layout + '/layout.jade')

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('replace-include error:'), error.message)
    }))

    .pipe(debug({ title: 'replace-include' }))

    // Replace to dev
    .pipe(replace(settings.replace.line, '- var inculdeWay = "dev"'))

    // Replace to minify
    .pipe(gulpif(
      gutil.env.minify,
      replace(settings.replace.line, '- var inculdeWay = "minify"')))

    // Replace to pretty
    .pipe(gulpif(
      gutil.env.pretty,
      replace(settings.replace.line, '- var inculdeWay = "pretty"')
    ))

    .pipe(gulp.dest(paths.layout))

    .on('end', () => {
      if (gutil.env.pretty) {
        gutil.log('replace-include:', gutil.colors.green('pretty'))
      } else if (gutil.env.minify) {
        gutil.log('replace-include:', gutil.colors.green('minify'))
      } else {
        gutil.log('replace-include:', gutil.colors.green('dev'))
      }
    })
})
