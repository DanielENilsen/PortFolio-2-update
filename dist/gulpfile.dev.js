"use strict";

/*
The code for minify images are from:https://www.npmjs.com/package/gulp-imagemin
Half of the watch() are from noroff moudle
*/
var gulp = require('gulp');

var browserSync = require('browser-sync').create();

var _require = require('gulp'),
    src = _require.src,
    dest = _require.dest;

var sass = require('gulp-sass');

function style() {
  return src('./scss/**/*.scss').pipe(sass()).pipe(dest('../css')).pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./page/**/*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.watch = watch;