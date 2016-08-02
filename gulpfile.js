var gulp = require('gulp');
var  browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        port:8000,
        server: {
            baseDir: ".",
            notify: false,
            open: true,
            ui: false
        }
    });
    gulp.watch ([
        '*.html',
        'js/*.js',
        'css/*.css'
    ]).on('change', browserSync.reload);
});
