var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jsmin = require("gulp-jsmin");
var rename = require("gulp-rename");

var source = "jquery.table_sort.js";

gulp.task("minify", function() {
  gulp.src(source)
    .pipe(jsmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("."));
});

gulp.task("default", ["minify"]);
