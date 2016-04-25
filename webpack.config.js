const webpack = require('webpack')
const path = require('path')
const paths = require('./gulpfile.js/paths')


module.exports = {
  debug: false,
  devtool: 'eval',

  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    paths.react.entry
  ],

  output: {
    path: path.join(__dirname, paths.js.output),
    publicPath: '/js/',
    filename: paths.react.filename
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  }
}
