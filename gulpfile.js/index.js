/*
  ilkome gulp
  Version 3.6.1

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
const env = gutil.env


// Require all tasks from gulpfile.js/tasks
// =================================================================================================
requireDir('./tasks')


// Default task
// =================================================================================================
gulp.task('default', (done) => {
  runSequence(
    ['clean', 'replaceInculdeWay'],
    [
      'images',
      'jade',
      'jsBabel',
      'jsCopyLibs',
      'static',
      'stylus'
    ],
    // [
    //   'cssClean',
    //   'jsUglify'
    // ],
    [
      'browserSync'
      // 'browserSyncReact'
    ],
    [
      'watcher',
      'watcherJS'
    ],
    done
  )
})


// Common watcher
// =================================================================================================
gulp.task('watcher', () => {
  // Static
  // ============================================
  watch(paths.static.input, () => gulp.start('static'))

  // Images
  // ============================================
  watch(paths.images.input, () => gulp.start('images'))

  // Jade
  // ============================================
  if (env.minify || env.pretty) {
    watch(paths.jade.input, () => runSequence('jade', 'cssClean', 'browserSyncReload'))
  } else {
    watch(paths.jade.input, () => runSequence('jade', 'browserSyncReload'))
  }

  // Styles
  // ============================================
  if (env.minify || env.pretty) {
    watch(paths.css.input, () => runSequence('css', 'cssClean'))
    watch(paths.stylus.input, () => runSequence('stylus', 'cssClean'))
  } else {
    watch(paths.css.input, () => gulp.start('css'))
    watch(paths.stylus.input, () => gulp.start('stylus'))
  }
})


// JavaScript watcher
// =================================================================================================
gulp.task('watcherJS', () => {
  watch(paths.js.input, () => gulp.start('jsBabel'))
  watch(paths.jsLibs.input, () => gulp.start('jsCopyLibs'))

  if (env.minify) {
    watch([paths.jsLibs.outputFiles, paths.js.outputApp], () => gulp.start('jsUglify'))
  }
})
