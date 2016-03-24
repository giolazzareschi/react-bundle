var gulp  = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');
var open = require('gulp-open');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('transform', function () {
  return gulp.src('./components/*.jsx')
        .pipe(react({harmony: false, es6module: true}))
        .pipe(gulp.dest('dist/prepare'));
});

gulp.task('bundle', function() {
    return browserify({entries: './dist/prepare/index.js', extensions: ['.js','.jsx'], debug: true})
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default',['transform','bundle']);