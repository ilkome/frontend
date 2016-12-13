const notify = require('gulp-notify')
const plumber = require('gulp-plumber')

module.exports = name => plumber({
  errorHandler: notify.onError(error => ({
    title: name,
    message: error
  }))
})
