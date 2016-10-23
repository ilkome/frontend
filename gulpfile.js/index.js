/*
  ilkome frontend
  Version 4.1.0

  Ilya Komichev
  https://ilko.me
  https://github.com/ilkome/frontend
*/

const gulp = require('gulp')
const paths = require('./paths')
const watch = require('gulp-watch')
const requireDir = require('require-dir')
const runSequence = require('run-sequence')

// Require all tasks
requireDir('./tasks')

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
  watch(paths.assets.src, () => gulp.start('assets'))
  watch(paths.images.src, () => gulp.start('images'))
  watch(paths.jade.src, () => runSequence('jade', 'browserSync-reload'))
  watch(paths.stylus.src, () => gulp.start('stylus'))
})
