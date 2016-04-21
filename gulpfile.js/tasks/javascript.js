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

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('javascript-babel error:'), error.message)
    }))

    // Pass only unchanged files
    .pipe(changed(paths.js.output, { extension: '.js' }))

    .pipe(debug({ title: 'javascript-babel:' }))

    // Babel with sourcemap
    .pipe(sourcemaps.init())
      .pipe(babel())
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
})


// Сopy JavaScript to build folder
// =================================================================================================
gulp.task('javascript-copy', () => {
  return gulp.src(paths.jsLibs.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('javascript-copy error:'), error.message)
    }))

    // Pass only unchanged files
    .pipe(changed(paths.js.output, { extension: '.js' }))

    .pipe(debug({ title: 'javascript-copy:' }))

    .pipe(gulp.dest(paths.jsLibs.output))
    .pipe(browserSync.stream())
})

// JavaScript minify
// =================================================================================================
gulp.task('javascript-uglify', () => {
  return gulp.src([
    `${paths.jsLibs.output}/*.js`,
    `${paths.js.output}/app.js`
  ])

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('javascript-uglify error:'), error.message)
    }))

    // Show name of file in pipe
    .pipe(debug({ title: 'javascript-uglify:' }))

    // Uglify with sourcemap
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
})
