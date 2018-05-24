const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
   return gulp.src('src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/css'));
});