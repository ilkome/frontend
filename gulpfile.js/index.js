/*
  ilkome frontend
  Version 4.1.1

  Ilya Komichev
  https://ilko.me
  https://github.com/ilkome/frontend
*/

const browserSync = require('browser-sync')
const changed = require('gulp-changed')
const cleanCSS = require('gulp-clean-css')
const combineMediaQueries = require('gulp-combine-mq')
const debug = require('gulp-debug')
const del = require('del')
const flatten = require('gulp-flatten')
const ftp = require('vinyl-ftp')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const gutil = require('gulp-util')
const imagemin = require('gulp-imagemin')
const jade = require('gulp-jade')
const jadeGlobbing = require('gulp-jade-globbing')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const pngquant = require('imagemin-pngquant')
const prefix = require('gulp-autoprefixer')
const prettify = require('gulp-jsbeautifier')
const rename = require('gulp-rename')
const runSequence = require('run-sequence')
const sourcemaps = require('gulp-sourcemaps')
const stylus = require('gulp-stylus')
const unCSS = require('gulp-uncss')
const watch = require('gulp-watch')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const configFTP = require('./config')
const paths = require('./paths')
const webpackConfig = require('../webpack.config')

const isDevelopment = process.env.NODE_ENV !== 'production'
const webpackBundler = webpack(webpackConfig)

const showToaster = name => plumber({
  errorHandler: notify.onError(error => ({
    title: name,
    message: error.filename
  }))
})


// Сopy everything to build folder
// ===============================================
gulp.task('assets', () =>
  gulp.src(paths.assets.src)
    .pipe(showToaster('assets'))
    .pipe(changed(paths.build))
    .pipe(debug({ title: 'assets:' }))
    .pipe(gulp.dest(paths.build))
)

// browserSync
// ===============================================
gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: paths.build,
      middleware: [
        webpackDevMiddleware(webpackBundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: {
            assets: true,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
          },
          quiet: true
        }),
        webpackHotMiddleware(webpackBundler)
      ]
    },
    open: false,
    logFileChanges: false,
    notify: false,
    online: true
  })

  browserSync.watch(paths.build).on('change', browserSync.reload)
})

// browserSync-reload
// ===============================================
gulp.task('browserSync-reload', () => browserSync.reload())

// Clean build folder
// ===============================================
gulp.task('clean', cb => del(`${paths.build}/**/*`, cb))

// Minify images
// ===============================================
gulp.task('images', () =>
  gulp.src(paths.images.src)
    .pipe(showToaster('images'))
    .pipe(changed(paths.images.output))
    .pipe(debug({ title: 'images:' }))
    .pipe(flatten())
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
          { removeViewBox: false },
          { cleanupIDs: true }
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.images.output))
)

// Jade
// ===============================================
gulp.task('jade', () =>
  gulp.src(paths.pages.src)
    .pipe(showToaster('jade'))
    .pipe(debug({ title: 'jade:' }))
    .pipe(jadeGlobbing()) // Include all atoms to app/pages/*.jade
    .pipe(jade())
    .pipe(gulp.dest(paths.build))
)

// HTML
// ===============================================
gulp.task('html-prettify', () =>
  gulp.src(paths.html.output)
    .pipe(showToaster('html'))
    .pipe(debug({ title: 'html:' }))
    .pipe(prettify({
      debug: false,
      indent_char: ' ',
      indent_size: 1,
      html: {
        unformatted: ['sub', 'sup', 'b', 'i', 'u']
      }
    }))
    .pipe(gulp.dest(paths.build))
)

// Stylus
// ===============================================
gulp.task('stylus', () =>
  gulp.src(paths.stylus.entry)
    .pipe(showToaster('stylus'))
    .pipe(debug({ title: 'stylus:' }))
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(stylus())
    .pipe(rename({ basename: 'styles' }))
    .pipe(gulpif(isDevelopment, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.stylus.output))
)

// Minify CSS in build folder
// ===============================================
gulp.task('css-min', () =>
  gulp.src(paths.css.src)
    .pipe(showToaster('css-min'))
    .pipe(debug({ title: 'css-min:' }))
    .pipe(unCSS({
      html: [paths.html.output],
      ignore: [/.js/]
    }))
    .pipe(combineMediaQueries({ beautify: false }))
    .pipe(cleanCSS({ keepSpecialComments: 0 }))
    .pipe(prefix('last 4 version', 'ie 10'))
    .pipe(gulp.dest(paths.css.output))
)

// Upload build to server
// ===============================================
const conn = ftp.create({
  host: configFTP.host,
  user: configFTP.user,
  password: configFTP.password,
  log: gutil.log
})

gulp.task('upload', () =>
  gulp.src(`${paths.build}/**/*`, { buffer: false })
    .pipe(showToaster('upload'))
    .pipe(conn.newer('/'))
    .pipe(conn.dest(configFTP.dest))
)

// Development
// ===============================================
gulp.task('default', (done) => {
  runSequence(
    ['clean'],
    ['images', 'jade', 'stylus', 'assets'],
    ['browserSync'],
    ['watcher'],
    done
  )
})

// Build
// ===============================================
gulp.task('build', (done) => {
  runSequence(
    ['clean'],
    ['images', 'jade', 'stylus', 'assets'],
    done
  )
})

// Build styles
// ===============================================
gulp.task('build:styles', () => {
  runSequence('stylus', 'css-min')
})

// Watch
// ===============================================
gulp.task('watcher', () => {
  watch(paths.assets.src, () => gulp.start('assets'))
  watch(paths.images.src, () => gulp.start('images'))
  watch(paths.jade.src, () => runSequence('jade', 'browserSync-reload'))
  watch(paths.stylus.src, () => gulp.start('stylus'))
})
