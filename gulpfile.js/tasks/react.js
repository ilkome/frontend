const gulp = require('gulp')
const paths = require('../paths')
const debug = require('gulp-debug')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')


// React minify
// ===============================================================================================
gulp.task('reactMinify', () => {
  return gulp.src(paths.react.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('reactMinify error:'), error.message)
    }))

    .pipe(debug({ title: 'reactMinify:' }))

    // webpack
    .pipe(webpackStream({
      watch: true,
      devtool: 'cheap-module-source-map',
      entry: [
        paths.react.input
      ],
      output: {
        filename: 'app.js'
      },
      module: {
        loaders: [{
          exclude: /node_modules/,
          loader: 'babel'
        }]
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          include: /\.js?$/,
          minimize: true
        })
      ],
      resolve: {
        extensions: ['', '.js', '.jsx']
      }
    }))

    .pipe(gulp.dest(paths.react.output))
})
