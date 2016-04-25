const app = './app'
const build = './build'

module.exports = {
  app,
  build,

  css: {
    input: `${app}/etc/css/*.css`,
    inputClean: [
      `${build}/css/*.css`,
      `!${build}/css/styles.dev.css`,
      `!${build}/css/styles.min.css`,
      `!${build}/css/styles.pretty.css`
    ],
    output: `${build}/css`
  },

  static: {
    input: [
      `${app}/static/**/*`,
      `!${app}/static/img`
    ]
  },

  images: {
    input: [
      `${app}/static/img/**/*.+(jpg|png|gif|svg)`,
      `${app}/components/**/img/**/*.+(jpg|png|gif|svg)`
    ],
    output: `${build}/img`
  },

  jade: {
    input: `${app}/**/*.jade`
  },

  js: {
    input: `${app}/js/*.js`,
    output: `${build}/js`,
    outputApp: `${build}/js/app.js`
  },

  jsLibs: {
    input: `${app}/js/libs/*.js`,
    output: `${build}/js/libs`,
    outputFiles: `${build}/js/libs/*.js`
  },

  layout: `${app}/layout`,

  pages: {
    input: `${app}/pages/*.jade`,
    folder: `${app}/pages`
  },

  react: {
    entry: `${app}/react/app.js`,
    folder: `${app}/react`,
    output: `${build}/js/`,
    filename: 'app.js'
  },

  stylus: {
    input: [
      `${app}/stylus/**/*.styl`,
      `${app}/components/**/*.styl`
    ],
    entry: `${app}/stylus/index.styl`,
    output: `${build}/css`
  }
}
