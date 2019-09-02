var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nestedcss = require('postcss-nested')

gulp.task('default', function () {
  console.log('hello world')
});

gulp.task('html', function () {
  console.log('something important');
});

gulp.task('styles', function () {
  //src 位址 dest終點位址 pipe運送

  return gulp.src('./app/assets/css/style.css')
    .pipe(postcss([cssvars, nestedcss, autoprefixer]))
    .pipe(gulp.dest('./app/temp/css'))
});

gulp.task('watch', function () {

  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/css/*.css', function () {
    gulp.start('styles');
  });
})