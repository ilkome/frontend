'use strict'

const pathApp = 'app'
const pathBuild = 'build'

module.exports = {
  app: pathApp,
  build: pathBuild,
  pages: {
    folder: pathApp + '/pages',
    input: pathApp + '/pages/*.jade'
  },
  components: {
    folder: pathApp + '/components',
    stylus: pathApp + '/components/**/*.styl',
    images: pathApp + '/components/**/img/**/*.+(jpg|png|gif|svg)',
    layout: pathApp + '/components/layout'
  },
  css: {
    input: pathApp + '/css/*.css',
    output: pathBuild + '/css'
  },
  etc: {
    input: pathApp + '/etc/**/*'
  },
  fonts: {
    input: pathApp + '/fonts/*.+(eot|svg|ttf|woff|woff2)',
    output: pathBuild + '/fonts'
  },
  images: {
    input: pathApp + '/img/**/*.+(jpg|png|gif|svg)',
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
      pathApp + '/utils/stylus/*.styl'
    ],
    entry: pathApp + '/stylus/styles.styl',
    output: pathBuild + '/css'
  }
}
