var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create();

gulp.task("watch", function() {
  browserSync.init({
    server: {
      notify: false,
      // baseDir: "app"
      proxy: "localhost"
    }
  });

  watch("./index.html", function() {
    browserSync.reload();
  });

  watch("./assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });

  watch("./assets/scripts/**/*.js", function() {
    gulp.start("scriptsRefresh");
  });
});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./temp/styles/styles.css").pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], function() {
  browserSync.reload();
});
