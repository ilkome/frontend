'use strict'

const paths = require('./paths')

module.exports = {
  browserSync: {
    server: {
      baseDir: paths.build
    },
    open: false, // local
    logFileChanges: false,
    notify: false
    // online: true
  },
  prettyHTML: {
    html: {
      debug: true,
      indent_char: '\t',
      indent_size: 1,
      unformatted: ['p', 'title', 'sub', 'sup', 'b', 'i', 'u']
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
  replaceMinify: {
    minify: '- var minify = 0',
    normal: '- var minify = 1'
  }
}
