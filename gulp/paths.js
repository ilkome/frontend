const app = './app'
const build = './build'

module.exports = {
  app,
  build,

  css: {
    input: `${app}/etc/css/*.css`,
    output: `${build}/css`
  },

  html: {
    output: `${build}/*.html`
  },

  images: {
    input: [
      `${app}/static/img/**/*.+(jpg|png|gif|svg)`,
      `${app}/atoms/**/img/**/*.+(jpg|png|gif|svg)`
    ],
    output: `${build}/img`
  },

  jade: {
    input: [
      `${app}/atoms/**/*.jade`,
      `${app}/pages/**/*.jade`,
      `${app}/layout/**/*.jade`
    ]
  },

  js: {
    input: `${app}/js/*.js`,
    output: `${build}/js`
  },

  layout: `${app}/layout`,

  pages: {
    input: `${app}/pages/*.jade`
  },

  static: {
    input: [
      `${app}/static/**/*`,
      `!${app}/static/img`
    ]
  },

  stylus: {
    input: [
      `${app}/stylus/**/*.styl`,
      `${app}/atoms/**/*.styl`
    ],
    entry: `${app}/stylus/styles.styl`,
    output: `${build}/css`
  }
}
