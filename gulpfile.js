var gulp = require("gulp"),
    connect = require('gulp-connect');
    
gulp.task('connect', function() {
    connect.server({
      root: '',
      livereload: true
    });
});

gulp.task('reload', function() {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('**/*.*', ['reload']);
})


gulp.task('default', ['watch', 'connect']);