'use strict'

// Modules
// =================================================================================================
const gulp = require('gulp')
const gutil = require('gulp-util')
const ftp = require('vinyl-ftp')
const plumber = require('gulp-plumber')

const passwordEnv = gutil.env.pass
const userEnv = gutil.env.user

// gulp upload --user=user --pass=password
const conn = ftp.create({
  host: 'style-nes.myjino.ru',
  user: userEnv,
  password: passwordEnv,
  parallel: 10,
  log: gutil.log
})


// Upload files to server
// =================================================================================================
gulp.task('upload', () => {
  return gulp.src('./build/**/*', { base: './build', buffer: false })

    // Error
    .pipe(plumber((error) => {
      gutil.log(
        gutil.colors.magenta('upload'),
        gutil.colors.red('error:'),
        error.message
      )
    }))

    .pipe(conn.newer('/'))
    .pipe(conn.dest('/'))
})
