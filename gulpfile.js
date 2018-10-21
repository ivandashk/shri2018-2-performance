const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    responsive = require('gulp-responsive');

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

gulp.task('sh', () => {
    return gulp.src('./src/assets/sh.png')
        .pipe(responsive({
            'sh.png': {
                width: 630,
                min: true
            }
        }))
        .pipe(gulp.dest('./docs/assets'))
})