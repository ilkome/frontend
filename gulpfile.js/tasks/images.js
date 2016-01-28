// Modules
// ===============================================
var gulp    = require("gulp"),
	flatten = require('gulp-flatten');


// Task
// Just copy images to site folder
// ===============================================
gulp.task("images", function() {
	return gulp.src([path.components + '/**/img/*.+(jpg|png|gif|svg)', path.images.src + '/**/*.+(jpg|png|gif|svg)'])

	// Remove structure of folders
	.pipe(flatten({
		//includeParents: -1
	}))

	// Save files
	.pipe(gulp.dest(path.images.build))
});