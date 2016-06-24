'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
    return gulp.src('./src/styles/**/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['styles'], function() {});

gulp.task('dev', function() {
    runSequence('styles', 'watch')
});

gulp.task('watch', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/styles/**/*.scss", ['styles']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


