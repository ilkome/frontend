const gulp = require('gulp')
const paths = require('../paths')
const browserSync = require('browser-sync')
const debug = require('gulp-debug')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const webpack = require('webpack-stream')


// Compile Reactjs using Webpack
// =================================================================================================
gulp.task('react', () => {
  return gulp.src(paths.react.entry)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('react error:'), error.message)
    }))

    // Pass only unchanged files
    .pipe(changed(paths.js.output, { extension: '.js' }))

    .pipe(debug({ title: 'react:' }))

    // webpack
    .pipe(webpack({
      watch: false,
      devtool: 'cheap-module-source-map',
      entry: [
        paths.react.entry
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
      resolve: {
        extensions: ['', '.js', '.jsx']
      }
    }))

    .pipe(gulp.dest(paths.react.output))
    .pipe(browserSync.stream())
})
