var gulp = require('gulp');
var minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task('default', function() {
    return gulp.src('src/css/*.css')      //压缩的文件
        .pipe(minifycss())   //执行压缩
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('minified/css'));   //输出文件夹
});
