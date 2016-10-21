/*
  ilkome front-end
  Version 4.0.0

  Ilya Komichev
  https://ilko.me
  https://github.com/ilkome/front-end
*/

const gulp = require('gulp')
const paths = require('./gulp/paths')
const watch = require('gulp-watch')
const requireDir = require('require-dir')
const runSequence = require('run-sequence')

// Require all tasks
requireDir('./gulp/tasks')

// Development
gulp.task('default', (done) => {
  runSequence(
    ['clean'],
    ['images', 'jade', 'stylus', 'assets'],
    ['browserSync'],
    ['watcher'],
    done
  )
})

// Build
gulp.task('build', (done) => {
  runSequence(
    ['clean'],
    ['images', 'jade', 'stylus', 'assets'],
    done
  )
})

// Build CSS
gulp.task('build:styles', () => {
  runSequence('stylus', 'css-min')
})

// Watch
gulp.task('watcher', () => {
  watch(paths.assets.input, () => gulp.start('assets'))
  watch(paths.images.input, () => gulp.start('images'))
  watch(paths.jade.input, () => runSequence('jade', 'browserSync-reload'))
  watch(paths.stylus.input, () => gulp.start('stylus'))
})
