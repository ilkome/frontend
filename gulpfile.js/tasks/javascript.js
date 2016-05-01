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
// ===============================================================================================
gulp.task('jsBabel', () =>
  gulp.src(paths.js.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('jsBabel error:'), error.message)
    }))

    // Pass only unchanged files
    .pipe(changed(paths.js.output, { extension: '.js' }))

    .pipe(debug({ title: 'jsBabel:' }))

    // Babel with sourcemap
    .pipe(sourcemaps.init())
      .pipe(babel())
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
)


// Сopy JavaScript to build folder
// ===============================================================================================
gulp.task('jsCopyLibs', () =>
  gulp.src(paths.jsLibs.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('jsCopyLibs error:'), error.message)
    }))

    // Pass only unchanged files
    .pipe(changed(paths.js.output, { extension: '.js' }))

    .pipe(debug({ title: 'jsCopyLibs:' }))

    .pipe(gulp.dest(paths.jsLibs.output))
    .pipe(browserSync.stream())
)

// JavaScript minify
// ===============================================================================================
gulp.task('jsUglify', () =>
  gulp.src([
    `${paths.jsLibs.output}/*.js`,
    `${paths.js.output}/app.js`
  ])

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('jsUglify error:'), error.message)
    }))

    // Show name of file in pipe
    .pipe(debug({ title: 'jsUglify:' }))

    // Uglify with sourcemap
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
)
