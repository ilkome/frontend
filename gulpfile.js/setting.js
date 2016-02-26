'use strict';

var paths = require('./paths');

module.exports = {
	browserSync: {
		server: {baseDir: paths.build},
		open: false, //local
		logFileChanges: false,
		notify: false,
		online: false
	}
}