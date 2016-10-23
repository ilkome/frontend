const gulp = require('gulp')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const jade = require('gulp-jade')
const jadeGlobbing = require('gulp-jade-globbing')
const prettify = require('gulp-jsbeautifier')
const paths = require('../paths')

gulp.task('jade', () =>
  gulp.src(paths.pages.src)
    .pipe(plumber(error => gutil.log(gutil.colors.red('jade error:'), error.message)))
    .pipe(debug({ title: 'jade:' }))
    .pipe(jadeGlobbing()) // Include all atoms to app/pages/*.jade
    .pipe(jade())
    .pipe(gulp.dest(paths.build))
)

gulp.task('html-prettify', () =>
  gulp.src(paths.html.output)
    .pipe(plumber(error => gutil.log(gutil.colors.red('html-prettify error:'), error.message)))
    .pipe(debug({ title: 'html-prettify:' }))
    .pipe(prettify({
      debug: false,
      indent_char: ' ',
      indent_size: 1,
      html: {
        unformatted: ['sub', 'sup', 'b', 'i', 'u']
      }
    }))
    .pipe(gulp.dest(paths.build))
)
