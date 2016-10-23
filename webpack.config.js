const webpack = require('webpack')
const path = require('path')
const paths = require('./gulpfile.js/paths')

const isProd = process.env.NODE_ENV === 'production'
const plugins = []
const entry = [paths.js.entry]

if (isProd) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
} else {
  entry.push(
    'webpack-hot-middleware/client?reload=true'
  )
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = {
  devtool: isProd ? false : '#eval-source-map',
  debug: false,
  quiet: false,
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },
  entry,
  output: {
    path: path.join(__dirname, paths.js.output),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  plugins,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  }
}
