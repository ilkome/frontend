const gulp = require('gulp')
const browserSync = require('browser-sync')
const webpack = require('webpack')
const paths = require('../paths')
const webpackConfig = require('../../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackBundler = webpack(webpackConfig)

gulp.task('browserSync', () =>
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
)

// Manual reload
gulp.task('browserSync-reload', () => browserSync.reload())
