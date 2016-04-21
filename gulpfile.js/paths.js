const app = './app'
const build = './build'

module.exports = {
  app,
  build,

  css: {
    input: `${app}/etc/css/*.css`,
    output: `${build}/css`,
    inputClean: [
      `${build}/css/*.css`,
      `!${build}/css/styles.dev.css`,
      `!${build}/css/styles.min.css`,
      `!${build}/css/styles.pretty.css`
    ]
  },

  static: {
    input: [
      `${app}/static/**/*`,
      `${app}/static/img/**/*`
    ]
  },

  images: {
    input: [
      `${app}/img/**/*.+(jpg|png|gif|svg)`,
      `${app}/components/**/img/**/*.+(jpg|png|gif|svg)`
    ],
    output: `${build}/img`
  },

  jade: {
    input: `${app}/**/*.jade`
  },

  js: {
    input: `${app}/js/*.js`,
    output: `${build}/js`
  },

  jsLibs: {
    input: `${app}/js/libs/*.js`,
    output: `${build}/js/libs`
  },

  layout: `${app}/layout`,

  pages: {
    folder: `${app}/pages`,
    input: `${app}/pages/*.jade`
  },

  react: {
    input: `${app}/react/**/*.js`,
    entry: `${app}/react/app.js`,
    output: `${build}/js/`
  },

  stylus: {
    input: [
      `${app}/stylus/**/*.styl`,
      `${app}/utils/stylus/*.styl`,
      `${app}/components/**/*.styl`
    ],
    entry: `${app}/stylus/index.styl`,
    output: `${build}/css`
  }
}
