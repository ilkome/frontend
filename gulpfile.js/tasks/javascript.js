'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const debug = require('gulp-debug')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')


// Compile JavaScript with Babel
// =================================================================================================
gulp.task('javascript-babel', () => {
  return gulp.src(paths.js.input)

    // Pass only unchanged files
    .pipe(changed(paths.js.output, { extension: '.js' }))

    // Show name of file in pipe
    .pipe(debug({ title: 'js babel:' }))

    // Error
    .pipe(plumber((error) => {
      gutil.log(
        gutil.colors.magenta('JavaScript-babel'),
        gutil.colors.red('error:'),
        error.message
      )
    }))

    // Babel
    .pipe(sourcemaps.init())
      .pipe(babel())
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
})


// Сopy JavaScript to build folder
// =================================================================================================
gulp.task('javascript-copy', () => {
  return gulp.src(paths.jslibs.input)

    // Pass only unchanged files
    .pipe(changed(paths.js.output, { extension: '.js' }))

    // Show name of file in pipe
    .pipe(debug({ title: 'js copy:' }))

    .pipe(gulp.dest(paths.jslibs.output))
    .pipe(browserSync.stream())
})

// JavaScript minify
// =================================================================================================
gulp.task('javascript-uglify', () => {
  return gulp.src([
    paths.jslibs.output + '/*.js',
    paths.js.output + '/app.js'
  ])

    // Show name of file in pipe
    .pipe(debug({ title: 'js uglify:' }))

    // Uglify
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream({ match: '**/*.js' }))
})
