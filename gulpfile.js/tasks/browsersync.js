// Modules
// ===============================================
var gulp = require("gulp"),
	browsersync = require("browser-sync");


// Browsersync task
// ===============================================
gulp.task("browsersync", function() {
	return browsersync.init({
		files: [
			path.build + "/*.html",
			path.css.build + "/*.css",
			path.javascripts.build + "/**/*.js",
			path.images.build + "/**/*.+(jpg|png|gif|svg)"
		],
		server: {baseDir: "src"},
		open: false, //local
		notify: true,
		logFileChanges: false,
		notify: false
	});
});
