const gulp = require('gulp')
const paths = require('../paths')
const debug = require('gulp-debug')
const config = require('../config')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
// const webpack = require('webpack')
const webpackStream = require('webpack-stream')


// React minify
// ===============================================================================================
gulp.task('reactMinify', () =>
  gulp.src(paths.react.entry)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('reactMinify error:'), error.message)
    }))

    .pipe(debug({ title: 'reactMinify:' }))

    // webpack
    .pipe(webpackStream(config.webpackReact))

    .pipe(gulp.dest(paths.react.output))
)
