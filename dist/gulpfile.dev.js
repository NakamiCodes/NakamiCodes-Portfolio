"use strict";

var gulp = require("gulp");

var gap = require("gulp-append-prepend");

gulp.task("licenses", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // this is to add Creative Tim licenses in the production mode for the minified js
          gulp.src("build/static/js/*chunk.js", {
            base: "./"
          }).pipe(gap.prependText("/*Nakami*/")).pipe(gulp.dest("./", {
            overwrite: true
          })); // this is to add Creative Tim licenses in the production mode for the minified html

          gulp.src("build/index.html", {
            base: "./"
          }).pipe(gap.prependText("<!-Nakami-->")).pipe(gulp.dest("./", {
            overwrite: true
          })); // this is to add Creative Tim licenses in the production mode for the minified css

          gulp.src("build/static/css/*chunk.css", {
            base: "./"
          }).pipe(gap.prependText("/*Nakami*/")).pipe(gulp.dest("./", {
            overwrite: true
          }));
          return _context.abrupt("return");

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});