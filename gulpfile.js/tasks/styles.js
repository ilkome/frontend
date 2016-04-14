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
const stylus = require('gulp-stylus')
const prefix = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const combineMq = require('gulp-combine-mq')
const unCSS = require('gulp-uncss')
const concatCSS = require('gulp-concat-css')
const prettify = require('gulp-jsbeautifier')


// Compile stylus
// =================================================================================================
gulp.task('stylus', () => {
  return gulp.src(paths.stylus.entry)

    // Error
    .pipe(plumber((error) => {
      gutil.log(
        gutil.colors.magenta('stylus'),
        gutil.colors.red('error:'),
        error.message
      )
    }))

    // Show name of file in pipe
    .pipe(debug({ title: 'stylus:' }))

    // Stylus
    .pipe(stylus())

    // Autoprefixer
    // .pipe(prefix('last 4 version', 'ie 10'))

    .pipe(gulp.dest(paths.stylus.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
})


// Copy CSS to build folder
// =================================================================================================
gulp.task('css', () => {
  return gulp.src(paths.css.input)

    // Show name of file in pipe
    .pipe(debug({ title: 'css:' }))

    .pipe(gulp.dest(paths.css.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
})


// Minify CSS in build folder
// =================================================================================================
gulp.task('css-clean', () => {
  return gulp.src(paths.css.clean)

    // Show name of file in pipe
    .pipe(debug({ title: 'css clean:' }))

    // Contat all CSS
    .pipe(concatCSS('styles.dev.css'))
    .pipe(gulpif(gutil.env.minify, concatCSS('styles.min.css')))
    .pipe(gulpif(gutil.env.pretty, concatCSS('styles.pretty.css')))

    // Remove unused styles
    .pipe(unCSS(setting.unCSS))

    // Combine Media queries
    .pipe(combineMq(setting.combineMq))

    // Minify
    .pipe(cleanCSS(setting.cleanCSS))
    .pipe(gulpif(gutil.env.pretty, prettify(setting.pretty)))

    // Autoprefixer
    .pipe(prefix('last 4 version', 'ie 10'))

    .pipe(gulp.dest(paths.css.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
})
