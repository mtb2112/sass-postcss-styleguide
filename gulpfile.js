var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var styleGuide = require('postcss-style-guide')

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass())
  .pipe(postcss([
    styleGuide({
      project: 'Project name',
      dest: 'styleguide/index.html',
      showCode: false,
      themePath: 'theme/',
      })
    ]))
  .pipe(gulp.dest('./'))
})

gulp.task('default', function() {
  gulp.watch('sass/**/*.scss',['styles'])
})