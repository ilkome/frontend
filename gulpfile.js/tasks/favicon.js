// Modules
// ===============================================
var gulp = require("gulp");


// Task
// Just copy favicon to site folder
// ===============================================
gulp.task("favicon", function() {
	return gulp.src([path.favicons.src + "/**/*.png"])

	// Save files
	.pipe(gulp.dest(path.favicons.build))
});
