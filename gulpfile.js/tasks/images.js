// Modules
// ===============================================
var gulp = require("gulp");


// Task
// Just copy images to site folder
// ===============================================
gulp.task("images", function() {
	return gulp.src([path.images.src + "/**/*.+(jpg|png|gif)"])

	// Save files
	.pipe(gulp.dest(path.images.build))
});
