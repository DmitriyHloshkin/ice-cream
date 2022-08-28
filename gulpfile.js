// Modules
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

// files src
const cssStyle = './src/css/**/*.css';
const indexFile = './src/*.html';
const sassStyle = './src/sass/**/*.+(scss|sass)';

// browserSync server
gulp.task('startServer', function () {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch(cssStyle).on('change', browserSync.reload);
    gulp.watch(indexFile).on('change', browserSync.reload);
});

// Compilate scss|sass in css
gulp.task('compileSass', function () {
    return gulp.src(sassStyle)
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({
            dirname: "",
            basename: "style",
            prefix: "",
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

//  Auto compile sass to css
gulp.task("watchSass", function () {
    gulp.watch(sassStyle, gulp.parallel("compileSass"))
})

//  Start Gulp
gulp.task("default", gulp.parallel("startServer", "watchSass"));

