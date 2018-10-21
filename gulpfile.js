const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify-es').default,
    cleanCSS = require('gulp-clean-css');

gulp.task('images', () => {
    return gulp.src('./src/assets/*.+(svg)')
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./docs/assets'))
})

gulp.task('js', () => {
    return gulp.src('./src/scripts.js')
        .pipe(uglify())
        .pipe(gulp.dest('./docs'))
})

gulp.task('css', () => {
    return gulp.src('./src/styles.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./docs'))
});