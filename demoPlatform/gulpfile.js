var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    rename = require('gulp-rename'),
    //compass = require('gulp-compass'),
    //vinylPaths = require('vinyl-paths'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    replace = require('gulp-replace'),
    babel = require('gulp-babel');

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8004,
        livereload: true
    });
});

gulp.task('styles', function() {
    gulp.src('src/sass/main.scss')
        .pipe(sass({ includePaths: ['src/sass'] }))
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'Firefox < 20'],
            cascade: true,
            remove: true
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(concat('main.js'))
        //.pipe(uglify())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
    gulp.src('src/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
    gulp.src('src/communication/communication.js')
        .pipe(jshint())
        .pipe(gulp.dest('dist/communication'))
        .pipe(connect.reload());
    gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
    gulp.src('src/router.js')
    .pipe(jshint())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
    gulp.src('src/login/*.js')
    .pipe(jshint())
    .pipe(gulp.dest('dist/login'))
    .pipe(connect.reload());
    gulp.src('src/home/*.js')
    .pipe(jshint())
    .pipe(gulp.dest('dist/home'))
    .pipe(connect.reload());
    
});

gulp.task('images', function() {
    gulp.src('src/images/*.{png,jpg,gif,ico,svg,webm}')
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('copy',  function() {
    // gulp.src('src/home/help/**/*')
    //     .pipe(gulp.dest('dist/home/help'));
    gulp.src('src/*.json')
        .pipe(gulp.dest('dist'));
    gulp.src('src/software/*')
        .pipe(gulp.dest('dist/software'))
    gulp.src('src/css/*')
        .pipe(gulp.dest('dist/css'))
});


gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['styles']);
    gulp.watch('src/login/*.js' , ['scripts']);
    gulp.watch('src/home/*.js' , ['scripts']);
    gulp.watch('src/communication/*.js' , ['scripts']);
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['images']);
    gulp.watch('src/**/*.html', ['html']);
});



//gulp.task('compass', function() {
//    gulp.src('src/sass/*.scss')
//        .pipe(compass({
//            config_file: 'config.rb',
//            css: 'src/css',
//            sass: 'src/sass'
//        }))
//        .pipe(gulp.dest('dist/css'));
//});


gulp.task('clear', function() {
    return gulp.src('dist/js/bundle.js', { read: false })
    .pipe(clean());
});


gulp.task('build', ['styles', 'scripts', 'images' , 'html']);

gulp.task('default', ['build'], function() {
    gulp.start(['connect', 'watch' , 'copy']);
});
