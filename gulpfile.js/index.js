/*
  ilkome front-end
  Version 3.8.0

  Ilya Komichev
  https://ilko.me
  https://github.com/ilkome/front-end
*/


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


// Development
// =================================================================================================
gulp.task('default', (done) => {
  runSequence(
    ['clean'],
    ['images', 'jade', 'js', 'stylus', 'static'],
    ['browserSync'],
    ['watcher'],
    done
  )
})


// Watchers
// =================================================================================================
gulp.task('watcher', () => {
  watch(paths.static.input, () => gulp.start('static'))
  watch(paths.images.input, () => gulp.start('images'))
  watch(paths.jade.input, () => runSequence('jade', 'browserSync-reload'))
  watch(paths.stylus.input, () => gulp.start('stylus'))
  watch(paths.js.input, () => gulp.start('js'))
})


// Upload
// =================================================================================================
gulp.task('upload', (done) => {
  runSequence(
    ['css-clean', 'js-minify'],
    ['uploading'],
    done
  )
})
