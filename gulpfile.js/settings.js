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
  pretty: {
    debug: false,
    indent_char: ' ',
    indent_size: 1,
    html: {
      unformatted: ['sub', 'sup', 'b', 'i', 'u']
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
  replace: {
    line: /- var inculdeWay = "(.*)"/g,
    dev: '- var inculdeWay = "dev"',
    minify: '- var inculdeWay = "minify"',
    pretty: '- var inculdeWay = "pretty"'
  }
}
