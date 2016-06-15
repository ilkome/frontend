const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const debug = require('gulp-debug')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')


// Compile JavaScript with Babel
// ===============================================================================================
gulp.task('babel', () =>
  gulp.src(paths.js.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('babel error:'), error.message)
    }))

    // Pass only unchanged files
    .pipe(changed(paths.js.output, { extension: '.js' }))

    .pipe(debug({ title: 'babel:' }))

    // Babel with sourcemap
    .pipe(sourcemaps.init())
      .pipe(babel())
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
)


// Compile JavaScript with Babel and minify
// ===============================================================================================
gulp.task('babelUglify', () =>
  gulp.src(paths.js.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('babelUglify error:'), error.message)
    }))

    .pipe(debug({ title: 'babelUglify:' }))

    // Babel
    .pipe(babel())

    // Uglify
    .pipe(uglify())

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
)
