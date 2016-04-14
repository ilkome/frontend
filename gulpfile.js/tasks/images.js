'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const debug = require('gulp-debug')
const flatten = require('gulp-flatten')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')


// Copy images to build folder
// =================================================================================================
gulp.task('images', () => {
  return gulp.src(paths.img.input)

    // Show name of file in pipe
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

    .pipe(gulp.dest(paths.img.output))
    .pipe(browserSync.stream())
})
