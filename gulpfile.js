'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/common.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'));
});
//Gulp 4 phai su dung cu phap gulp series
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('sass'));
});