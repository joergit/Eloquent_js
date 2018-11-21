const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'src/'
    }
  })
  gulp.watch('src/js/values-types-operators.js').on('change', browserSync.reload)
  gulp.watch('src/index.html').on('change', browserSync.reload)
})