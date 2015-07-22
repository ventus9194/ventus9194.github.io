var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');

gulp.task('styles', function() {
    gulp.src('style.styl')
        .pipe(stylus({
            use: [typographic(), nib()]
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch:styles', function() {
    gulp.watch('**/*.styl', ['styles']);
});