// Modules
// ===============================================
var gulp = require("gulp");



// Task
// Just copy fonts to site folder
// ===============================================
gulp.task("fonts", function() {
	return gulp.src([path.fonts.src + "/*.+(eot|svg|ttf|woff|woff2)"])

	// Save files
	.pipe(gulp.dest(path.fonts.build))
});
