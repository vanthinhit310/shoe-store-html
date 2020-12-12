'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/common.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'));
});

gulp.task('ts', function(){
    
   return gulp.src('./ts/**/*.ts')
       .pipe(ts({
           "target": "es2015",
           "module" : "None",
           "declaration": false,
           "noImplicitAny": true,
           "inlineSourceMap": true,
           "moduleResolution": "node",
           "outFile": "common.js",
           "removeComments" : true
       }))
       .pipe(uglify())
       .pipe(gulp.dest('js'))
});
//Gulp 4 phai su dung cu phap gulp series
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('sass','ts'));
    gulp.watch('ts/**/*.ts', gulp.series('ts'));
});