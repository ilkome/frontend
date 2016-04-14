/*
	ilkome gulp
	Version 3.5.3

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


// Default task
// =================================================================================================
gulp.task('default', (done) => {
  runSequence(
    ['clean', 'replace-include'],
    ['css', 'etc', 'fonts', 'images', 'jade', 'javascript-babel', 'javascript-copy', 'stylus'],
    ['css-clean', 'javascript-uglify'],
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
  gulp.watch(paths.img.input, ['images'])

  // Jade
  if (currentState.minify || currentState.pretty) {
    gulp.watch(paths.jade.input, () => runSequence('jade', 'css-clean'))
  } else {
    gulp.watch(paths.jade.input, ['jade'])
  }


  // JavaScript
  gulp.watch(paths.js.input, ['javascript-babel'])
  gulp.watch(paths.jslibs.input, ['javascript-copy'])
  if (currentState.minify) {
    gulp.watch([paths.jslibs.output, paths.js.output + '/app.js'], ['javascript-uglify'])
  }

  // CSS
  if (currentState.minify || currentState.pretty) {
    gulp.watch(paths.css.input, () => runSequence('css', 'css-clean'))
    gulp.watch(paths.stylus.input, () => runSequence('stylus', 'css-clean'))
  } else {
    gulp.watch(paths.css.input, ['css'])
  }
})
