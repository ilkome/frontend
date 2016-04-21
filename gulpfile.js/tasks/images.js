const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const flatten = require('gulp-flatten')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')


// Minify images
// =================================================================================================
gulp.task('images', () => {
  return gulp.src(paths.images.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('images error:'), error.message)
    }))

    // Pass only unchanged files
    .pipe(changed(paths.images.output))

    .pipe(debug({ title: 'images:' }))

    // Remove structure of folders
    .pipe(flatten())

    // Minify
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
})
