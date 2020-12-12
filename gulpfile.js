'use strict';

/*init variable for watching sass*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

/*init variable for watching typescript*/
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');

/*init variable for compressed image*/
const imagemin = require('gulp-imagemin');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/common.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('common.css'))
        .pipe(sourcemaps.write('.'))
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

gulp.task('image', function () {
    return gulp.src('./img_to_minified/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./img'))
})
//Gulp 4 phai su dung cu phap gulp series
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('sass','ts'));
    gulp.watch('ts/**/*.ts', gulp.series('ts'));
    gulp.watch('img_to_minified/**/*', gulp.series('image'));
});