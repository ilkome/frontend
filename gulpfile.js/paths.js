'use strict'

const pathApp = 'app'
const pathBuild = 'build'

module.exports = {
  app: pathApp,
  build: pathBuild,

  components: {
    layout: {
      input: pathApp + '/components/layout/layout.jade',
      output: pathApp + '/components/layout'
    }
  },

  css: {
    input: pathApp + '/css/*.css',
    output: pathBuild + '/css',
    clean: [
      pathBuild + '/css/*.css',
      '!' + pathBuild + '/css/styles.pretty.css',
      '!' + pathBuild + '/css/styles.min.css'
    ]
  },

  etc: {
    input: pathApp + '/etc/**/*'
  },

  fonts: {
    input: pathApp + '/fonts/*.+(eot|svg|ttf|woff|woff2)',
    output: pathBuild + '/fonts'
  },

  img: {
    input: [
      pathApp + '/img/**/*.+(jpg|png|gif|svg)',
      pathApp + '/components/**/img/**/*.+(jpg|png|gif|svg)'
    ],
    output: pathBuild + '/img'
  },

  jade: {
    input: pathApp + '/**/*.jade'
  },

  js: {
    input: pathApp + '/js/*.js',
    output: pathBuild + '/js'
  },

  jslibs: {
    input: pathApp + '/js/libs/*.js',
    output: pathBuild + '/js/libs/'
  },

  stylus: {
    input: [
      pathApp + '/stylus/**/*.styl',
      pathApp + '/utils/stylus/*.styl',
      pathApp + '/components/**/*.styl'
    ],
    entry: pathApp + '/stylus/styles.styl',
    output: pathBuild + '/css'
  },

  pages: {
    folder: pathApp + '/pages',
    input: pathApp + '/pages/*.jade'
  }
}
