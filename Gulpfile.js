const gulp = require('gulp');
const babel = require('gulp-babel');
const uglifyjs = require('gulp-uglifyjs');

gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(uglifyjs())
    .pipe(gulp.dest('dist'))
});