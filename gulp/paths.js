const app = './app'
const build = './build'

module.exports = {
  app,
  build,

  assets: {
    input: [
      `${app}/assets/**/*`,
      `!${app}/assets/img`
    ]
  },

  css: {
    input: `${app}/etc/css/*.css`,
    output: `${build}/css`
  },

  html: {
    output: `${build}/*.html`
  },

  images: {
    input: [
      `${app}/assets/img/**/*.+(jpg|png|gif|svg)`,
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
    entry: `${app}/js/app.js`,
    input: `${app}/js/*.js`,
    output: `${build}/js`
  },

  layout: `${app}/layout`,

  pages: {
    input: `${app}/pages/*.jade`
  },

  stylus: {
    entry: `${app}/stylus/styles.styl`,
    input: [
      `${app}/stylus/**/*.styl`,
      `${app}/atoms/**/*.styl`
    ],
    output: `${build}/css`
  }
}
