var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', function () {
  return gulp.src(['public/**/*.png', 'public/**/*.gif', 'public/**/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest('public'));
});
