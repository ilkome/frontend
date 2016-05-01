const gulp = require('gulp')
const paths = require('../paths')
const configFTP = require('../config-ftp')
const gutil = require('gulp-util')
const ftp = require('vinyl-ftp')
const plumber = require('gulp-plumber')

// Example
// configFTP = {
//   host: 'ilko.me',
//   user: 'ilkome',
//   password: 'superpasword',
//   dest: '/any_folder_from_root'
// }

const conn = ftp.create({
  host: configFTP.host,
  user: configFTP.user,
  password: configFTP.password,
  parallel: 10,
  log: gutil.log
})


// Upload files to server
// =================================================================================================
gulp.task('upload', () =>
  gulp.src(paths.build + '/**/*', { base: paths.build, buffer: false })

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('upload error:'), error.message)
    }))

    .pipe(conn.newer('/'))
    .pipe(conn.dest(configFTP.dest))
)
