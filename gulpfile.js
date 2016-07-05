var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var cssModulesify = require('css-modulesify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var gulpif = require('gulp-if');

// # Simulate production environment
// process.env.NODE_ENV = 'production';

var isProduction = process.env.NODE_ENV === 'production';

var b = browserify('./webapp/app.js');
if (!isProduction) {
  b.plugin(watchify);
}
b.plugin(
  cssModulesify, {
    rootDir: './webapp',
    output: 'public/bundle.css'
  })
  .transform(babelify, { presets: ['es2015', 'react'] });

b.on('error', console.log);
b.on('update', bundle);
b.on('log', console.log);

function bundle () {
  b
    .bundle()
    .on('error', console.log)
    .pipe(source('bundle.js'))
    .pipe(gulpif(isProduction, streamify(uglify())))
    .pipe(gulp.dest('./public/'));
}

gulp.task('build', bundle);

gulp.task('assets', function () {
  gulp.src([
    'webapp/**/*.ico',
    'webapp/**/*.png',
    'webapp/**/*.jpg',
    'webapp/**/*.mp4'
  ], {
    base: 'webapp'
  }).pipe(gulp.dest('public'));
});

gulp.task('vendor', function () {
  return gulp.src([
    'bower_components/H5F/h5f.min.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['build', 'assets', 'vendor']);
