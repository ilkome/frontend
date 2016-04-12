/*
	ilkome gulp
	Version 3.5.1

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


// Require all tasks from gulpfile.js/tasks
// =================================================================================================
requireDir('./tasks')


// Tasks
// =================================================================================================
gulp.task('default', (done) => {
  runSequence(
    [
      'clean',
      'replace-jade-minify-var'
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
    [
      'css-minify',
      'javascript-uglify'
    ],
    'watch',
    'browserSync',
    done
  )
})


// Watch
// =================================================================================================
gulp.task('watch', () => {
  // CSS
  gulp.watch(paths.css.input, () => runSequence('css', ''))

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

  // Stylus
  gulp.watch([paths.stylus.input, paths.components.stylus], ['stylus'])
})
