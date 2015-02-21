// dependencies
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngHtml2Js = require("gulp-ng-html2js"),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    express = require('express'),
    http = require('http');

// paths
var sources = {
      app: {
        js: ['./app/**/*.js'],
        sass: ['./app/**/*.scss']
      },
      images: ['./assets/images/**/*.*'],
      fonts: ['./assets/fonts/**/*.*'],
      index: ['./app/index.html'],
      templates: ['./app/**/*.html', '!./app/index.html']
    },
    destinations = {
      css: './dist/css/',
      fonts: './dist/fonts/',
      images: './dist/images/',
      js: './dist/js/',
      root: './dist/'
    };

// ng-app
var angularApp = 'ne.force';

/* JAVASCRIPTS */

// concat and minify vendor js
var jsFilter = gulpFilter('*.js');

gulp.task('vendorJs', function() {
  gulp.src(mainBowerFiles())
  .pipe(jsFilter)
  .pipe(sourcemaps.init())
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(destinations.js))
});

// concat and minify app js
gulp.task('appJs', function() {
  gulp.src(sources.app.js)
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(uglify({compress: {sequences: false, join_vars: false}})) // do we need these extra params?
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(destinations.js))
});

/* STYLES */

// concat and compress application css
gulp.task('appStyles', function() {
  gulp.src(sources.app.sass)
    .pipe(sass())
    .pipe(rename('app.css'))
    //TODO: add minify & sourcemaps
    .pipe(gulp.dest(destinations.css));
});

/* HTML */

// create angular templateCache
gulp.task('templates', function() {
  gulp.src(sources.templates)
  .pipe(flatten())
  .pipe(ngHtml2Js({
    moduleName: angularApp
  }))
  .pipe(concat('template-cache.js'))
  .pipe(gulp.dest(destinations.js));
});

/* COPY */

//copy images to dist
gulp.task('images', function() {
  gulp.src(sources.images)
  .pipe(gulp.dest(destinations.images))
});

//copy index to dist
gulp.task('index', function() {
  gulp.src(sources.index)
  .pipe(gulp.dest(destinations.root))
});

//serve
gulp.task('server', function() {
  var app = express(),
      port = process.env.PORT || 3000,
      server;

  // Servce static assets
  app.use('/dist',  express.static(__dirname + '/dist'));

  // Routes - catch-all to return index.html
  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
  });

  server = http.createServer(app);
  server.listen(port, function() {
    console.log('app listenting on port: ' + port);
  });
});

/* GULP */

//build
gulp.task('build', [
  'vendorJs',
  'appJs',
  'templates',
  'appStyles',
  'images',
  'index'
]);

//watch scripts, styles, and templates
gulp.task('watch', function() {
  gulp.watch(sources.app.js, ['appJs']);
  gulp.watch(sources.app.sass, ['appStyles']);
  gulp.watch(sources.images, ['images']);
  gulp.watch(sources.index, ['index']);
  gulp.watch(sources.templates, ['templates']);
  gulp.watch('./bower_components', ['vendorJs']);
});

//default
gulp.task('default', ['build', 'watch', 'server']);
