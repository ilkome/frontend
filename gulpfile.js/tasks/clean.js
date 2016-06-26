const gulp = require('gulp')
const paths = require('../paths')
const del = require('del')


// Clean build folder
// =================================================================================================
gulp.task('clean', cb => del(paths.buildAllFiles, cb))
