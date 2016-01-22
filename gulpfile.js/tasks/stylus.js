// Modules
// ===============================================
var gulp        = require("gulp"),
	stylus      = require("gulp-stylus"),
	prefix      = require("gulp-autoprefixer"),
	notify      = require("gulp-notify");


// Task
// ===============================================
gulp.task("stylus", function() {
	return gulp.src([path.components + "/*.styl", path.stylus.src + "/**/*.styl"])

	// Process jade templates
	.pipe(stylus({
		"include css": true
	}))

	// Error notify
	.on("error", notify.onError({
		message: "<%= error.message %>",
		title: "Stylus error"
	}))

	// Autoprefixer
	.pipe(prefix())

	// CSS Beautify
	.pipe(cssbeautify({
		indent: "	",
		openbrace: "end-of-line"
	}))

	// Save files
	.pipe(gulp.dest(path.css.build))
});
