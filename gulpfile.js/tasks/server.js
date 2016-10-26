const browserSync = require('browser-sync')
const gulp = require('gulp')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const paths = require('../paths')
const webpackConfig = require('../../webpack.config')

const webpackBundler = webpack(webpackConfig)

// browserSync
gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: paths.build,
      middleware: [
        webpackDevMiddleware(webpackBundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: {
            assets: true,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
          },
          quiet: true
        }),
        webpackHotMiddleware(webpackBundler)
      ]
    },
    open: false,
    logFileChanges: false,
    notify: false,
    online: true
  })
})

// Manual reload
gulp.task('browserSync-reload', () => browserSync.reload())
