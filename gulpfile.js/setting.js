'use strict';

var paths = require('./paths');

module.exports = {
	browserSync: {
		server: {baseDir: paths.build},
		open: false, //local
		logFileChanges: false,
		notify: false,
		online: false
	},
	prettyHTML: {
		html: {
			braceStyle: "collapse",
			indentChar: "\t",
			indentScripts: "keep",
			indentSize: 1,
			maxPreserveNewlines: 10,
			preserveNewlines: true,
			unformatted: ["p", "title", "sub", "sup", "b", "i", "u"],
			wrapLineLength: 0,
			breakChainedMethods: false
		},
	},
	jade: {
		pretty: {
			pretty: '\t'
		},
		minify: {
			pretty: false
		}
	},
	stylus: {
		pretty: {
			'compress': false,
			'include css': false
		},
		minify: {
			'compress': true
		}
	}
}