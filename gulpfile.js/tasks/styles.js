const gulp = require('gulp')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const stylus = require('gulp-stylus')
const prefix = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const combineMediaQueries = require('gulp-combine-mq')
const unCSS = require('gulp-uncss')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const gulpif = require('gulp-if')
const paths = require('../paths')

const isDevelopment = process.env.NODE_ENV !== 'production'

// Compile stylus
gulp.task('stylus', () =>
  gulp.src(paths.stylus.entry)
    .pipe(plumber(error => gutil.log(gutil.colors.red('stylus error:'), error.message)))
    .pipe(debug({ title: 'stylus:' }))
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(stylus())
    .pipe(rename({ basename: 'styles' }))
    .pipe(gulpif(isDevelopment, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.stylus.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
)

// Minify CSS in build folder
gulp.task('css-min', () =>
  gulp.src(paths.css.src)
    .pipe(plumber(error => gutil.log(gutil.colors.red('css-min error:'), error.message)))
    .pipe(debug({ title: 'css clean:' }))

    .pipe(unCSS({
      html: [paths.html.output],
      ignore: [/.js/]
    }))
    .pipe(combineMediaQueries({ beautify: false }))
    .pipe(cleanCSS({ keepSpecialComments: 0 }))
    .pipe(prefix('last 4 version', 'ie 10'))

    .pipe(gulp.dest(paths.css.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
)
