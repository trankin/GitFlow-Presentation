var gulp = require('gulp');
var rev = require('gulp-rev-append');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('revisions', function() {
    gulp.src('./**/*.html')
        .pipe(rev())
        .pipe(gulp.dest('.'));
});


gulp.task('watch', function () {

    watch('./**/*.js', batch(function (events, done) {
        gulp.start('revisions', done);
    }));

    watch('./**/*.css', batch(function (events, done) {
        gulp.start('revisions', done);
    }));



});

gulp.task('default', ['revisions', 'watch']);