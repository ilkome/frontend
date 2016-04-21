/*
	ilkome gulp
	Version 3.5.4

	Ilya Komichev
	https://ilko.me
	https://github.com/ilkome/gulp
*/


// Modules
// =================================================================================================
const gulp = require('gulp')
const paths = require('./paths')
const watch = require('gulp-watch')
const requireDir = require('require-dir')
const runSequence = require('run-sequence')
const gutil = require('gulp-util')
const includeWay = gutil.env


// Require all tasks from gulpfile.js/tasks
// =================================================================================================
requireDir('./tasks')


// Default task
// =================================================================================================
gulp.task('default', (done) => {
  runSequence(
    'build',
    'watch',
    'browserSync',
    done
  )
})

gulp.task('build', (done) => {
  runSequence(
    ['clean', 'replace-include'],
    [
      'images',
      'jade',
      'javascript-babel',
      'javascript-copy',
      'static',
      'stylus'
    ],
    ['css-clean', 'javascript-uglify'],
    // 'react',
    done
  )
})


// Watch
// =================================================================================================
gulp.task('watch', () => {
  // Static
  // ============================================
  gulp.watch(paths.static.input, ['static'])

  // Images
  // ============================================
  gulp.watch(paths.images.input, ['images'])

  // Jade
  // ============================================
  if (includeWay.minify || includeWay.pretty) {
    gulp.watch(paths.jade.input, () => runSequence('jade', 'css-clean'))
  } else {
    gulp.watch(paths.jade.input, ['jade'])
  }

  // JavaScript
  // ============================================
  gulp.watch(paths.js.input, ['javascript-babel'])
  gulp.watch(paths.jsLibs.input, ['javascript-copy'])
  gulp.watch(paths.react.input, ['react'])

  if (includeWay.minify) {
    gulp.watch([paths.jsLibs.output + '/*.js', paths.js.output + '/app.js'], ['javascript-uglify'])
  }

  // Styles
  // ============================================
  if (includeWay.minify || includeWay.pretty) {
    gulp.watch(paths.css.input, () => runSequence('css', 'css-clean'))
    gulp.watch(paths.stylus.input, () => runSequence('stylus', 'css-clean'))
  } else {
    gulp.watch(paths.css.input, ['css'])
    gulp.watch(paths.stylus.input, ['stylus'])
  }
})
