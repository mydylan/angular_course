var gulp = require("gulp"),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');
    
gulp.task('connect', function() {
    connect.server({
      root: '',
      livereload: true
    });
});

gulp.task("jsBuild", function() {
    gulp.src(['src/scripts/module/*.js',
              'src/scripts/controllers/*.js',
              'src/scripts/directives/*.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('reload', function() {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['reload']);
    gulp.watch('src/**/*.*', ['jsBuild', 'reload']);
})


gulp.task('default', ['jsBuild', 'watch', 'connect']); 