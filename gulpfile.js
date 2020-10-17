const { watch } = require('gulp');
let gulp = require('gulp');
let concat = require('gulp-concat');
let minifyCSS = require('gulp-minify-css');

// Minify and combine CSS files in the node_modules directory and the src directory
// Copy those to the distribution folder
function buildCSS(cb) {
  let sourceFiles = gulp.src([
    'node_modules/bulma/css/bulma.css',
    'node_modules/@fortawesome/fontawesome-free/css/all.css',
    'src/css/**/*.css'
  ]).pipe(minifyCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/css'));

    cb();
}

// Publish the HTML to the distribution folder
function publishHtml(cb) {
  gulp.src(['src/*.html'])
    .pipe(gulp.dest('dist/'));

    cb();
}

// Publish the images to the distribution folder
function publishImages(cb) {
  gulp.src(['src/images/*.jpg'])
    .pipe(gulp.dest('dist/images'));

    cb();
}

exports.default = gulp.series(buildCSS, publishImages, publishHtml);
exports.watch = function() {
  watch(
    'src/**/*.*', 
    { ignoreInitial: false },
    gulp.series(buildCSS, publishImages, publishHtml));
};