"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var jsmin = require("gulp-jsmin");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var path = require("path");
var del = require("del");
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("./build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./build/css"))
    .pipe(server.stream());
});

gulp.task("del", function() {
	return del("./build")
});

gulp.task("runsec", function(callback){
  run("del",["style","jsmin","img","copyhtml","copyfonts"],callback);
});

gulp.task("copyhtml", function(){
	gulp.src(["*.html","sprite.svg"])
	  .pipe(gulp.dest("./build"))
	});

gulp.task("copyfonts", function(){
	gulp.src("./fonts/*.{woff,woff2}")
	  .pipe(gulp.dest("./build/fonts"))
	});

gulp.task("jsmin", function(){
  gulp.src("./js/*.js")
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("./build/js"))
	});

gulp.task("img", function() {
	gulp.src("./img/*")
	  .pipe(imagemin())
	  .pipe(gulp.dest("./build/img"))
	});

gulp.task("serve", ["runsec"], function() {
  server.init({
    server: "./build",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("js/**/*.js", ["jsmin"]);
  gulp.watch("*.html", ["copyhtml"]);
  gulp.watch("*.html").on("change", server.reload);
});
