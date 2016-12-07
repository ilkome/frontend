const $ = require('gulp-load-plugins')()
const gulp = require('gulp')
const paths = require('../paths')
const showToaster = require('../showToaster')

// Jade
gulp.task('jade', () =>
  gulp.src(paths.pages.src)
    .pipe(showToaster('jade'))
    .pipe($.debug({ title: 'jade:' }))
    .pipe($.jadeGlobbing()) // Include all atoms to app/pages/*.jade
    .pipe($.jade())
    .pipe(gulp.dest(paths.build))
)

// HTML
gulp.task('html', () =>
  gulp.src(paths.html.output)
    .pipe(showToaster('html'))
    .pipe($.debug({ title: 'html:' }))
    .pipe($.jsbeautifier({
      debug: false,
      indent_char: ' ',
      indent_size: 2,
      html: {
        unformatted: ['sub', 'sup', 'b', 'i', 'u']
      }
    }))
    .pipe(gulp.dest(paths.build))
)
