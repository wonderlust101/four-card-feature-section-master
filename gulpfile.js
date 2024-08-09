const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const browserSync = require("browser-sync").create();

function style(){
    return gulp
        .src("./assets/scss/**/*.scss")
        .pipe(sass())
        .pipe(postcss([cssnano]))
        .pipe(gulp.dest('./assets/css/'));
}

// Browser Sync
function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
        },
    });
    gulp.watch("./src/scss/**/*.scss", style);
    gulp.watch("./**/*.html").on("change", browserSync.reload);
    gulp.watch("./**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
