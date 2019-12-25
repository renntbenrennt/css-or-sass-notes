const { src, dest, watch, series } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const srcPath = {
    scssPath: '*.scss'
};

const resPath = {
    cssPath: '.'
};

function scssTask() {
    return src(srcPath.scssPath)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer()]))
            .pipe(sourcemaps.write('.'))
            .pipe(dest(resPath.cssPath));
}

function watchTask() {
    watch([srcPath.scssPath], scssTask)
}

exports.default = series(
    scssTask,
    watchTask
);