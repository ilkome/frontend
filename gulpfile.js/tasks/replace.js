const gulp = require('gulp')
const paths = require('../paths')
// const config = require('../config')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
// const gulpif = require('gulp-if')
// const replace = require('gulp-replace')


// Replace minify var in layout
// =================================================================================================
gulp.task('env', () =>
  gulp.src(paths.layout + '/layout.jade')

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('env error:'), error.message)
    }))

    .pipe(debug({ title: 'env' }))

    // // Replace to dev
    // .pipe(replace(config.replace.line, '- var ENV = "dev"'))
    //
    // // Replace to minify
    // .pipe(gulpif(
    //   gutil.env.minify,
    //   replace(config.replace.line, '- var ENV = "minify"')))
    //
    // // Replace to pretty
    // .pipe(gulpif(
    //   gutil.env.pretty,
    //   replace(config.replace.line, '- var ENV = "pretty"')
    // ))

    .pipe(gulp.dest(paths.layout))

    // .on('end', () => {
    //   if (gutil.env.pretty) {
    //     gutil.log('env:', gutil.colors.green('pretty'))
    //   } else if (gutil.env.minify) {
    //     gutil.log('env:', gutil.colors.green('minify'))
    //   } else {
    //     gutil.log('env:', gutil.colors.green('dev'))
    //   }
    // })
)
