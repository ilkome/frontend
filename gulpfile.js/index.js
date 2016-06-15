/*
  ilkome gulp
  Version 3.7.1

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
// const gutil = require('gulp-util')
// const env = gutil.env


// Require all tasks from gulpfile.js/tasks
// =================================================================================================
requireDir('./tasks')


// Default task
// reactMinify
// =================================================================================================
gulp.task('default', (done) => {
  runSequence(
    ['clean', 'env'],
    ['images', 'jade', 'babel', 'stylus', 'static'],
    ['browserSync'],
    ['watcher'],
    done
  )
})


// Common watcher
// =================================================================================================
gulp.task('watcher', () => {
  // Static
  watch(paths.static.input, () => gulp.start('static'))

  // Images
  watch(paths.images.input, () => gulp.start('images'))

  // Jade
  watch(paths.jade.input, () => runSequence('jade', 'browserSyncReload'))

  // Styles
  watch(paths.stylus.input, () => gulp.start('stylus'))

  // JS
  watch(paths.js.input, () => gulp.start('babel'))
})


gulp.task('upload', (done) => {
  runSequence(
    ['cssClean', 'babelUglify'],
    ['uploading'],
    done
  )
})
