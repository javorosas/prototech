// var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var cssModulesify = require('css-modulesify');

gulp.task('build', function () {
  browserify('./webapp/app/app.js')
    .plugin(cssModulesify, {
      rootDir: './webapp',
      output: 'public/bundle.css'
    })
    .transform(babelify, { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('assets', function () {
  gulp.src([
    'webapp/**/*.ico'
  ], {
    base: 'webapp'
  }).pipe(gulp.dest('public'));
});

// gulp.task('css', function () {
//   browserify('./webapp/app/app.js')
//     .plugin('css-modulesify', {
//       rootDir: './webapp',
//       // output: 'public/bundle.css'
//     })
//     .bundle()
//     .pipe(source('bundle.js'))
//     .pipe(gulp.dest('public/'));
// });

gulp.task('default', ['build', 'assets']);
