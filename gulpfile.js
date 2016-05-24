var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");

gulp.task("sass", function () {
  return gulp.src('./public/sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task("sass:watch", function () {
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task("start", function () {
  connect.server({
    root: "public",
    port: 3000,
    livereload: true
  });
});

gulp.task('default', ['sass', 'start', 'sass:watch']);