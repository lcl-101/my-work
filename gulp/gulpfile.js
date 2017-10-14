var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync');

gulp.task('minfy',function(){
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('index.js'))
        .pipe(gulp.dest('build'))
        .pipe(livereload());
});

gulp.task('browser-sync',function(){
    var files = [
        'templates/*.tmpl.html'
    ];
    browserSync.init(files,{
        server: {
            baseDir: './templates/'
        }
    })
});

gulp.task('build',function(){
    gulp.src('templates/*.tmpl.html')
        .pipe(gulp.dest('html'))
});

gulp.task('watch', function () {
    gulp.watch('templates/*.tmpl.html',['build']);
});

gulp.task('default',['minfy']);