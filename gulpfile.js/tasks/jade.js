// Modules
// ===============================================
var gulp        = require("gulp"),
	changed     = require("gulp-changed"),
	jade        = require("gulp-jade"),
	notify      = require("gulp-notify");


// Task
// Process jade files wit cache
// ===============================================
gulp.task("jade", function() {
	return gulp.src([path.jade.src + "/*.jade", path.jade.ignore])

	// Pass only unchanged files
	.pipe(changed(path.build, {extension: ".html"}))

	// Process jade templates
	.pipe(jade({
		pretty: "\t"
	}))

	// Error notify
	.on("error", notify.onError({
		message: "<%= error.message %>",
		title: "Jade error"
	}))

	// Save files
	.pipe(gulp.dest(path.build))
});


// Task
// Process jade files without cache
// ===============================================
gulp.task("jade:nocache", function() {
	return gulp.src([path.jade.src + "/*.jade", path.jade.ignore])

	// Process jade templates
	.pipe(jade({
		pretty: "\t"
	}))

	// Error notify
	.on("error", notify.onError({
		message: "<%= error.message %>",
		title: "Jade inc error"
	}))

	// Save files
	.pipe(gulp.dest(path.build));
});
