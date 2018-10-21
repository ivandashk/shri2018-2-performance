const gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('images', () => {
    return gulp.src('./src/assets/*.+(svg|png)')
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./docs/assets'))
})