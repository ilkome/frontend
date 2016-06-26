const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const stylus = require('gulp-stylus')
const prefix = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const combineMq = require('gulp-combine-mq')
const unCSS = require('gulp-uncss')
const rename = require('gulp-rename')


// Compile stylus
// =================================================================================================
gulp.task('stylus', () =>
  gulp.src(paths.stylus.entry)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('stylus error:'), error.message)
    }))

    // Show name of file in pipe
    .pipe(debug({ title: 'stylus:' }))

    // Stylus
    .pipe(stylus())

    // Rename
    .pipe(rename({ basename: 'styles' }))

    .pipe(gulp.dest(paths.stylus.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
)


// Minify CSS in build folder
// =================================================================================================
gulp.task('css-clean', () =>
  gulp.src(paths.css.inputClean)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('css-clean error:'), error.message)
    }))

    // Show name of file in pipe
    .pipe(debug({ title: 'css clean:' }))

    // Remove unused styles
    .pipe(unCSS({
      html: `${paths.build}/*.html`,
      ignore: /.js/
    }))

    // Combine Media queries
    .pipe(combineMq({ beautify: false }))

    // Minify
    .pipe(cleanCSS({ keepSpecialComments: 0 }))

    // Autoprefixer
    .pipe(prefix('last 4 version', 'ie 10'))

    .pipe(gulp.dest(paths.css.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
)
