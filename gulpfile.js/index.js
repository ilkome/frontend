/*
  ilkome frontend
  Version 4.1.1

  Ilya Komichev
  https://ilko.me
  https://github.com/ilkome/frontend
*/

const gulp = require('gulp')
const paths = require('./paths')
const watch = require('gulp-watch')
const runSequence = require('run-sequence')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const flatten = require('gulp-flatten')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const del = require('del')
const jade = require('gulp-jade')
const jadeGlobbing = require('gulp-jade-globbing')
const prettify = require('gulp-jsbeautifier')
const stylus = require('gulp-stylus')
const prefix = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const combineMediaQueries = require('gulp-combine-mq')
const unCSS = require('gulp-uncss')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const gulpif = require('gulp-if')
const webpack = require('webpack')
const ftp = require('vinyl-ftp')
const configFTP = require('./config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config')

const webpackBundler = webpack(webpackConfig)
const isDevelopment = process.env.NODE_ENV !== 'production'

// Сopy everything to build folder
// ===============================================
gulp.task('assets', () =>
  gulp.src(paths.assets.src)
    .pipe(plumber(error => gutil.log(gutil.colors.red('assets error:'), error.message)))
    .pipe(changed(paths.build))
    .pipe(debug({ title: 'assets:' }))
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())
)

// Clean build folder
// ===============================================
gulp.task('clean', cb => del(`${paths.build}/**/*`, cb))

// Minify images
// ===============================================
gulp.task('images', () =>
  gulp.src(paths.images.src)
    .pipe(plumber(error => gutil.log(gutil.colors.red('images error:'), error.message)))
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
    .pipe(browserSync.stream())
)

// Jade
// ===============================================
gulp.task('jade', () =>
  gulp.src(paths.pages.src)
    .pipe(plumber(error => gutil.log(gutil.colors.red('jade error:'), error.message)))
    .pipe(debug({ title: 'jade:' }))
    .pipe(jadeGlobbing()) // Include all atoms to app/pages/*.jade
    .pipe(jade())
    .pipe(gulp.dest(paths.build))
)

// HTML
// ===============================================
gulp.task('html-prettify', () =>
  gulp.src(paths.html.output)
    .pipe(plumber(error => gutil.log(gutil.colors.red('html-prettify error:'), error.message)))
    .pipe(debug({ title: 'html-prettify:' }))
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

// Server
// ===============================================
gulp.task('browserSync', () =>
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
)

// Server: manual reload
// ===============================================
gulp.task('browserSync-reload', () => browserSync.reload())

// Compile stylus
// ===============================================
gulp.task('stylus', () =>
  gulp.src(paths.stylus.entry)
    .pipe(plumber(error => gutil.log(gutil.colors.red('stylus error:'), error.message)))
    .pipe(debug({ title: 'stylus:' }))
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(stylus())
    .pipe(rename({ basename: 'styles' }))
    .pipe(gulpif(isDevelopment, sourcemaps.write('./')))
    .pipe(gulp.dest(paths.stylus.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
)

// Minify CSS in build folder
// ===============================================
gulp.task('css-min', () =>
  gulp.src(paths.css.src)
    .pipe(plumber(error => gutil.log(gutil.colors.red('css-min error:'), error.message)))
    .pipe(debug({ title: 'css clean:' }))

    .pipe(unCSS({
      html: [paths.html.output],
      ignore: [/.js/]
    }))
    .pipe(combineMediaQueries({ beautify: false }))
    .pipe(cleanCSS({ keepSpecialComments: 0 }))
    .pipe(prefix('last 4 version', 'ie 10'))

    .pipe(gulp.dest(paths.css.output))
    .pipe(browserSync.stream({ match: '**/*.css' }))
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
    .pipe(plumber(error => gutil.log(gutil.colors.red('upload error:'), error.message)))
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

// Build CSS
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
