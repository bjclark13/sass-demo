
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const gulp = require('gulp');

const sass = require('gulp-sass');

gulp.task('compileSass', (done) => {
  sass('app/sass/*.scss') // which Sass file to grab
    .pipe(gulp.dest('app/css')) // where to put the compiled stylesheet
    .pipe(reload({ stream:true })); // if the stylesheet is altered, reload the browser!

    done();
});