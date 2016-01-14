// Modules
// ===============================================
var gulp    = require("gulp"),
	changed = require("gulp-changed");



// Task
// Just copy javascript to site folder
// ===============================================
gulp.task("javascripts", function() {
	return gulp.src([path.javascripts.src + "/**/*.js"])

	// Pass only unchanged files
	.pipe(changed(path.javascripts.build, {extension: ".js"}))

	// Save files
	.pipe(gulp.dest(path.javascripts.build))
});
