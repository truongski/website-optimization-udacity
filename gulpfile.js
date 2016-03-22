/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('js', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

    gulp.src('views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'));
});

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css'));

    gulp.src('views/css/*.css')
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/views/css'));
});

gulp.task('dist', function () {
    gulp.src('views/*.html')
        .pipe(gulp.dest('dist/views'));

    gulp.src('views/images/**/*')
        .pipe(gulp.dest('dist/views/images'));

    gulp.src('*.html')
        .pipe(gulp.dest('dist'));

    gulp.src('img/**/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['js', 'css', 'dist']);