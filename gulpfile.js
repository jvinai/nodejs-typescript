'use strict';

/* Utils
 https://github.com/ivogabe/gulp-typescript
 */

var gulp = require('gulp'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  nodemon = require('gulp-nodemon'),
  ts = require('gulp-typescript'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('script-nodejs', ['clean'], function () {
  return gulp.src(['app.ts', 'src/**/*.ts'])
    .pipe(sourcemaps.init()) // This means sourcemaps will be generated
    .pipe(ts({
      module: 'commonjs'
    }))
    .js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('script-front', function () {
  return gulp.src(['app.ts', 'src/**/*.ts'])
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
  return gulp.watch(['./src/**/*.ts'], ['script-nodejs']);
});

gulp.task('nodemon', ['script-nodejs'], function () {
  return nodemon({
    script: __dirname + '/dist/app.js',
    ext: 'ts html',
    env: {
      'NODE_ENV': 'development',
      'configServerPath': __dirname + '/dist/config/config.js',
      'loggerPath': 'server.log'
    },
    tasks: ['script-nodejs']
  });
});

gulp.task('nodemon-oauth', function () {
  return nodemon({
    script: __dirname + '/mock/oauth.js',
    ext: 'nope'
  });
});

/*gulp.task('nodemon', ['generate-js', 'watch'], function () {
 nodemon({
 script: 'built/app.js'
 });
 });
 */
gulp.task('serve', ['nodemon']);
gulp.task('oauth', ['nodemon-oauth']);
