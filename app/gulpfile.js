var gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import");
browerSync = require("browser-sync").create();

gulp.task("default", function() {
  console.log("HOORAY - you created a Gulp task.");
});

gulp.task("html", function() {
  browerSync.reload();
});

gulp.task("styles", function() {
  return gulp
    .src("./assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./temp/styles"));
});

gulp.task("watch", function() {
  browerSync.init({
    server: {
      notify: false,
      baseDir: "app"
    }
  });

  watch("./index.html", function() {
    browserSync.reload();
  });

  watch("./assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });
});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./temp/styles/styles.css").pipe(browerSync.stream());
});
