const app = './app'
const build = './build'

module.exports = {
  app,
  build,
  assets: {
    src: [
      `${app}/assets/**/*`,
      `!${app}/assets/img`
    ]
  },
  css: {
    styles: `${build}/css/styles.css`,
    src: `${build}/css/*.css`,
    output: `${build}/css`
  },
  html: {
    output: `${build}/*.html`
  },
  images: {
    src: [
      `${app}/assets/img/**/*.+(jpg|png|gif|svg)`,
      `${app}/atoms/**/img/**/*.+(jpg|png|gif|svg)`
    ],
    output: `${build}/img`
  },
  jade: {
    src: [
      `${app}/atoms/**/*.jade`,
      `${app}/pages/**/*.jade`,
      `${app}/layout/**/*.jade`
    ]
  },
  js: {
    entry: `${app}/js/index.js`,
    output: `${build}/js`
  },
  pages: {
    src: `${app}/pages/*.jade`
  },
  stylus: {
    entry: `${app}/stylus/index.styl`,
    src: [
      `${app}/stylus/**/*.styl`,
      `${app}/atoms/**/*.styl`
    ],
    output: `${build}/css`
  }
}
