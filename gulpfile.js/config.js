const paths = require('./paths')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackBundler = webpack(webpackConfig)


module.exports = {
  browserSync: {
    server: {
      baseDir: paths.build
    },
    open: false,
    logFileChanges: false,
    notify: false,
    online: true
  },

  browserSyncReact: {
    server: {
      baseDir: paths.build,
      middleware: [
        webpackDevMiddleware(webpackBundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: { colors: true },
          quiet: true
        }),
        webpackHotMiddleware(webpackBundler)
      ]
    },
    files: [
      paths.react.entry
    ]
  },

  pretty: {
    debug: false,
    indent_char: ' ',
    indent_size: 1,
    html: {
      unformatted: ['sub', 'sup', 'b', 'i', 'u']
    }
  },

  cleanCSS: {
    keepSpecialComments: 0
  },

  combineMq: {
    beautify: false
  },

  unCSS: {
    html: [paths.build + '/*.html'],
    ignore: [/.js/]
  },

  replace: {
    line: /- var inculdeWay = "(.*)"/g,
    dev: '- var inculdeWay = "dev"',
    minify: '- var inculdeWay = "minify"',
    pretty: '- var inculdeWay = "pretty"'
  }
}
