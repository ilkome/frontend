const gulp = require('gulp')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const flatten = require('gulp-flatten')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const paths = require('../paths')

// Minify images
gulp.task('images', () =>
  gulp.src(paths.images.src)
    .pipe(plumber(error => gutil.log(gutil.colors.red('images error:'), error.message)))
    .pipe(changed(paths.images.output))
    .pipe(debug({ title: 'images:' }))
    .pipe(flatten())
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
          { removeViewBox: false },
          { cleanupIDs: true }
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.images.output))
    .pipe(browserSync.stream())
)
