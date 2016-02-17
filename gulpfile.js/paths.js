'use strict';

var pathApp = 'app';
var pathBuild = 'build';

module.exports = {
	app: pathApp,
	build: pathBuild,
	pages: {
		folder: pathApp + '/pages',
		input: pathApp + '/pages/*.jade'
	},
	components: {
		input: pathApp + '/components',
		stylus: pathApp + '/components/**/*.styl',
		images: pathApp + '/components/**/*.+(jpg|png|gif|svg)'
	},
	css: {
		input: pathApp + '/css/*.css',
		output: pathBuild + '/css'
	},
	favicons: {
		input: pathApp + '/favicons/*.png'
	},
	fonts: {
		input: pathApp + '/fonts/*.+(eot|svg|ttf|woff|woff2)',
		output: pathBuild + '/fonts'
	},
	images: {
		input: pathApp + '/images/*.+(jpg|png|gif|svg)',
		output: pathBuild + '/img'
	},
	jade: {
		input: pathApp + '/**/*.jade',
	},
	js: {
		input: pathApp + '/js/*.js',
		output: pathBuild + '/js',
	},
	stylus: {
		input: pathApp + '/stylus/**/*.styl',
		entry: pathApp + '/stylus/styles.styl',
		output: pathBuild + '/css'
	}
};