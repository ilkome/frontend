const $ = require('gulp-load-plugins')()
const gulp = require('gulp')
const browserSync = require('browser-sync')
const paths = require('../paths')
const showToaster = require('../showToaster')

const isDevelopment = process.env.NODE_ENV !== 'production'

// Stylus
gulp.task('stylus', () =>
  gulp.src(paths.stylus.entry)
    .pipe(showToaster('stylus'))
    .pipe($.debug({ title: 'stylus:' }))
    .pipe($.if(isDevelopment, $.sourcemaps.init()))
    .pipe($.stylus())
    .pipe($.rename({ basename: 'styles' }))
    .pipe($.if(isDevelopment, $.sourcemaps.write('./')))
    .pipe(gulp.dest(paths.stylus.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
)

// Minify CSS in build folder
gulp.task('css-min', () =>
  gulp.src(paths.css.src)
    .pipe(showToaster('css-min'))
    .pipe($.debug({ title: 'css-min:' }))
    .pipe($.uncss({
      html: [paths.html.output],
      ignore: [/.js/]
    }))
    .pipe($.combineMq({ beautify: false }))
    .pipe($.cleanCss({ keepSpecialComments: 0 }))
    .pipe($.autoprefixer('last 4 version', 'ie 10'))
    .pipe(gulp.dest(paths.css.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
)
