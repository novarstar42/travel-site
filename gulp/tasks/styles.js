var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nestedcss = require('postcss-nested'),
  cssimport = require('postcss-import')

gulp.task('styles', function () {
  //src 位址 dest終點位址 pipe運送
  return gulp.src('./app/assets/css/style.css')
    .pipe(postcss([cssimport, cssvars, nestedcss, autoprefixer]))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/css'));
});