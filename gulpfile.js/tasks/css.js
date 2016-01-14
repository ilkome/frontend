// Modules
// ===============================================
var gulp = require("gulp");


// Task
// Just copy CSS to site folder
// ===============================================
gulp.task("css", function() {
	return gulp.src([path.css.src + "/**/*.css"])

	// Save files
	.pipe(gulp.dest(path.css.build))
});
