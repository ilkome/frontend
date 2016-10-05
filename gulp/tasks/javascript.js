const gulp = require('gulp')
const browserSync = require('browser-sync')
const debug = require('gulp-debug')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const paths = require('../paths')

// Compile JavaScript with Babel
// ==============================================
gulp.task('js', () =>
  gulp.src(paths.js.input)
    .pipe(plumber(error => gutil.log(gutil.colors.red('js error:'), error.message)))
    .pipe(changed(paths.js.output, { extension: '.js' }))
    .pipe(debug({ title: 'js:' }))

    // Babel with sourcemap
    .pipe(sourcemaps.init())
      .pipe(babel())
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
)

// Compile JavaScript with Babel and uglify
// ==============================================
gulp.task('js-min', () =>
  gulp.src(paths.js.input)
    .pipe(plumber(error => gutil.log(gutil.colors.red('js-min error:'), error.message)))
    .pipe(debug({ title: 'js-min:' }))

    .pipe(babel())
    .pipe(uglify())

    .pipe(gulp.dest(paths.js.output))
    .pipe(browserSync.stream())
)
