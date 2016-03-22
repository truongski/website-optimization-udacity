/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var jpegoptim = require('imagemin-jpegoptim');

gulp.task('js', function () {
    gulp.src(['js/*.js', '!js/*-min.*'])
        .pipe(uglify())
        .pipe(rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest('js'));

    gulp.src(['views/js/*.js', '!views/js/*-min.*'])
        .pipe(uglify())
        .pipe(rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest('views/js'));
});

gulp.task('css', function () {
    gulp.src(['css/*.css', '!css/*-min.*'])
        .pipe(uglifycss())
        .pipe(rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest('css'));

    gulp.src(['views/css/*.css', '!views/css/*-min.*'])
        .pipe(uglifycss())
        .pipe(rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest('views/css'));
});

gulp.task('image', function () {
    gulp.src(['img/*.*', '!img/*-min.*'])
        .pipe(imagemin({
            progressive: true,
            use: [jpegoptim({ progressive: true, size: 10 })()]
        }))
        .pipe(rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest('img'));

    gulp.src(['views/images/*.*', '!views/images/*-min.*'])
        .pipe(imagemin({
            progressive: true,
            use: [jpegoptim({ progressive: true, size: 10})()]
        }))
        .pipe(rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest('views/images'));
});

gulp.task('default', ['js', 'css', 'image']);