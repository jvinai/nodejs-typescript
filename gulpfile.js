'use strict';

/* Utils
 https://github.com/ivogabe/gulp-typescript
 */

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  nodemon = require('gulp-nodemon'),
  ts = require('gulp-typescript'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('script-nodejs', function () {
  gulp.src(['app.ts', 'src/**/*.ts'])
    .pipe(sourcemaps.init()) // This means sourcemaps will be generated
    .pipe(ts({
      module: 'commonjs'
    }))
    .js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('script-front', function () {
  gulp.src(['app.ts', 'src/**/*.ts'])
    .pipe(sourcemaps.init()) // This means sourcemaps will be generated
    .pipe(ts({
      module: 'commonjs',
      sortOutput: true
    }))
    .js
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.ts'], ['script-nodejs']);
});

gulp.task('nodemon', ['script-nodejs', 'watch'], function () {
  nodemon({
    script: 'dist/app.js',
    ext: 'ts html',
    env: {'NODE_ENV': 'development'}
  });
});

/*gulp.task('nodemon', ['generate-js', 'watch'], function () {
 nodemon({
 script: 'built/app.js'
 });
 });
 */
gulp.task('serve', ['nodemon']);
