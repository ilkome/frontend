// Modules
// ===============================================
var gulp = require("gulp"),
	del  = require("del");


// Task
// Remove "build" folder
// ===============================================
gulp.task("clean", function (cb) {
	del([
		path.build + "/**/*"
	],
	cb);
});


// Task
// Clean files from app folder
// ===============================================
gulp.task("clean:app", function (cb) {
	del([
		path.favicons.src + "/*.*",
		path.images.src + "/**",
		path.stylus.src + "/blocks/*.*"
	],
	cb);
});
