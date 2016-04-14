/*
	ilkome gulp
	Version 3.5.2

	Ilya Komichev
	https://ilko.me
	https://github.com/ilkome/gulp
*/

'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const paths = require('./paths')
const watch = require('gulp-watch')
const requireDir = require('require-dir')
const runSequence = require('run-sequence')
const gutil = require('gulp-util')

const currentState = gutil.env


// Require all tasks from gulpfile.js/tasks
// =================================================================================================
requireDir('./tasks')


// Tasks
// =================================================================================================
gulp.task('default', (done) => {
  runSequence(
    [
      'clean',
      'replace-include'
    ],
    [
      'css',
      'etc',
      'fonts',
      'images',
      'jade',
      'javascript-babel',
      'javascript-copy',
      'stylus'
    ],
    ['javascript-uglify', 'css-clean'],
    'browserSync',
    'watch',
    done
  )
})


// Watch
// =================================================================================================
gulp.task('watch', () => {
  // Etc
  gulp.watch(paths.etc.input, ['etc'])

  // Fonts
  gulp.watch(paths.fonts.input, ['fonts'])

  // Images
  gulp.watch([paths.components.images, paths.images.input], ['images'])

  // Jade
  gulp.watch(paths.jade.input, ['jade'])

  // JavaScript
  gulp.watch(paths.js.input, ['javascript-babel'])
  gulp.watch(paths.jslibs.input, ['javascript-copy'])


  // Check current env
  if (currentState.minify || currentState.pretty) {
    gutil.log(gutil.colors.magenta('gulp'), ':', gutil.colors.green('minify or pretty'))

    // CSS
    gulp.watch(paths.css.input, () => runSequence('css', 'css-clean'))

    // Stylus
    gulp.watch(
      [paths.stylus.input, paths.components.stylus], () =>
        runSequence('stylus', 'css-clean'))

    gulp.watch([paths.jslibs.output, paths.js.output + '/app.js'], ['javascript-uglify'])
  } else {
    gutil.log(gutil.colors.magenta('gulp'), ':', gutil.colors.green('dev'))

    // CSS
    gulp.watch(paths.css.input, ['css'])

    // Stylus
    gulp.watch([paths.stylus.input, paths.components.stylus], ['stylus'])
  }
})
