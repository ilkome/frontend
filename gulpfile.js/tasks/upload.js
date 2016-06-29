const gulp = require('gulp')
const paths = require('../paths')
const configFTP = require('../config-ftp')
const gutil = require('gulp-util')
const ftp = require('vinyl-ftp')
const plumber = require('gulp-plumber')

const conn = ftp.create({
  host: configFTP.host,
  user: configFTP.user,
  password: configFTP.password,
  log: gutil.log
})


// Upload build to server
// =================================================================================================
gulp.task('uploading', () =>
  gulp.src(paths.buildAllFiles, { base: paths.build, buffer: false })

    .pipe(plumber(error => gutil.log(gutil.colors.red('upload error:'), error.message)))

    .pipe(conn.newer('/'))
    .pipe(conn.dest(configFTP.dest))
)
