var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browerSync = require("browser-sync").create();

gulp.task("watch", function() {
  browerSync.init({
    server: {
      notify: false,
      // baseDir: "app"
      proxy: "localhost"
    }
  });

  watch("./app/index.html", function() {
    browserSync.reload();
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });
});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./temp/styles/styles.css").pipe(browerSync.stream());
});
