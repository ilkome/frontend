const gulp = require('gulp')
const paths = require('../paths')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const jade = require('gulp-jade')
const jadeGlobbing = require('gulp-jade-globbing')
const prettify = require('gulp-jsbeautifier')


// Compile jade
// =================================================================================================
gulp.task('jade', () =>
  gulp.src(paths.pages.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('jade error:'), error.message)
    }))

    .pipe(debug({ title: 'jade:' }))

    // Include all atoms to app/pages/*.jade
    .pipe(jadeGlobbing())

    .pipe(jade())
    .pipe(gulp.dest(paths.build))
)


// Prettify HTML
// =================================================================================================
gulp.task('html-prettify', () =>
  gulp.src(paths.html.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('html-prettify error:'), error.message)
    }))

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
