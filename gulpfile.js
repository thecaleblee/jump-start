const gulp        = require('gulp');
const pl          = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const del          = require('del');

// generic example
//gulp.task('task-name', () => {
//  return gulp.src('source-files') // Get source files with gulp.src
//    .pipe(pl.aGulpPlugin()) // Sends it through a gulp plugin which is loaded dynamically by 'pl.'
//    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
//})

// compile sass to css
gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(pl.sass())
    .pipe(pl.cssnano())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// watch app and run different tasks
gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// live reload
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
});

// concat files and ugilfy them
gulp.task('useref', () => {
  return gulp.src('app/**/*.html')
    .pipe(pl.useref())
    .pipe(pl.if('*.js', pl.uglify()))
    .pipe(pl.if('*.css', pl.cssnano()))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// optimze images
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpg|gif|svg)')
    .pipe(pl.cache(pl.imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

// move fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// clean dist directory
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

// build project
gulp.task('build', () => {
  runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'])
});

// default task for easy start
gulp.task('default', () => {
  runSequence(['build', 'browserSync', 'watch'])
});
