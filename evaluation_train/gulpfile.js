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
    del = require('del'),
    vinylPaths = require('vinyl-paths'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    del = require('del'),
    glob = require('glob'),
    replace = require('gulp-replace');


/**
 * 万用表的gulp配置 start
 */

var index = 'multimeter',
    paths = {

        sass: 'src/js/framework/' + index + '/sass/*.scss',

        images: 'src/js/framework/' + index + '/images/*',

        scripts: 'src/js/framework/' + index + '/js/*',

        htmls: 'src/js/framework/' + index + '/*.html',

        mds: 'src/js/framework/' + index + '/*.md',
    };


// 静态服务器
gulp.task('server:multimeter', function() {
    browserSync.init({
        // 更改默认端口
        port: 8000,
        logLevel: "debug",
        logPrefix: "multimeter",
        logConnections: true,
        server: {
            baseDir: 'dist/js/framework',
            index: 'index.html'
        },
        startPath: "/multimeter/dist"
    });
    gulp.watch(paths.sass, ['styles:multimeter']);
    gulp.watch(paths.scripts, ['scripts:multimeter']);
    gulp.watch(paths.images, ['images:multimeter']);
    gulp.watch(paths.htmls, ['htmls:multimeter']);
    gulp.watch(paths.mds, ['mds:multimeter']);
});

gulp.task('styles:multimeter', function() {
    return gulp.src('src/js/framework/' + index + '/sass/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', 'Firefox < 20'],
            cascade: true,
            remove: true
        }))
        .pipe(minifycss())
        .pipe(rename("multimeter.css"))
        .pipe(gulp.dest('src/framework/' + index + '/styles'))
        .pipe(gulp.dest('dist/js/framework/' + index + '/dist/styles'))
        .pipe(reload({ stream: true }));
});

gulp.task('scripts:multimeter', function() {
    gulp.src('src/js/framework/' + index + '/js/*.js')
        .pipe(jshint())
        .pipe(concat('multimeter.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('src/framework/' + index + '/scripts'))
        .pipe(gulp.dest('dist/js/framework/' + index + '/dist/scripts'))
        .pipe(reload({ stream: true }));

    gulp.src('src/js/framework/' + index + '/framework/*.js')
        .pipe(gulp.dest('dist/js/framework/' + index + '/dist/framework'))
        .pipe(reload({ stream: true }));
});

gulp.task('cleanjs:multimeter', function() {
    gulp.src(['src/js/framework/' + index + '/scripts/*', 'dist/js/framework/' + index + '/dist/scripts/' + index + '.js'])
        .pipe(vinylPaths(del));
});


gulp.task('images:multimeter', function() {
    gulp.src('src/js/framework/' + index + '/images/*.{png,jpg,gif,ico}')
        //.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/js/framework/' + index + '/dist/images'))
        .pipe(reload({ stream: true }));
});

gulp.task('htmls:multimeter', function() {
    gulp.src('src/js/framework/' + index + '/*.html')
        .pipe(gulp.dest('dist/js/framework/' + index + '/dist'))
        .pipe(reload({ stream: true }));
});

gulp.task('mds:multimeter', function() {
    gulp.src('src/js/framework/' + index + '/*.md')
        .pipe(gulp.dest('dist/js/framework/' + index + ''))
        .pipe(reload({ stream: true }));
});

gulp.task('build:multimeter', ['cleanjs:multimeter', 'styles:multimeter', 'scripts:multimeter', 'images:multimeter', 'htmls:multimeter', 'mds:multimeter']);
gulp.task('ml', ['build:multimeter', 'server:multimeter']);

/**
 * 万用表的gulp配置 end
 */

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8003,
        livereload: true
    });
});


gulp.task('styles', function() {
    return gulp.src('src/sass/main.scss')
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
        .pipe(concat('bundle.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
    gulp.src('src/js/framework/*.js')
        .pipe(gulp.dest('dist/js/framework'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    gulp.src('src/images/**/*.{png,jpg,gif,ico}')
        /*.pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))*/
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/images/*', ['images']);
    gulp.watch('src/**/*.html', ['html']);
});



gulp.task('compass', function() {
    gulp.src('src/sass/sprites.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'src/css',
            sass: 'src/sass'
        }))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('clear', function() {
    return gulp.src('dist/js/bundle.js', { read: false })
        .pipe(clean());
});


gulp.task('build', ['styles', 'scripts', 'images', 'html']);

gulp.task('default', ['build'], function() {
    gulp.start(['connect', 'watch']);
});



var dir = {
    input: "src/",
    dev: 'dist/',
    out: "test/"
};
/* 生成目录 */
var questionConfig = require('./question_config');

gulp.task('createQuestion', function() {
    var files = glob.sync('*.html', { cwd: dir.input }),
        filesToMove = [
            dir.dev + "css/**/*.*",
            dir.dev + "images/**/*.*",
            dir.dev + "font/**/*.*",
            dir.dev + "js/**/*.*"
        ];
    files.map(function(fileName) {
        for (var question of questionConfig.questions) {
            console.info(fileName)
            if (fileName === question.pageName) {
                for (var data of question.data) {
                    if (typeof data.folderName !== "undefined") {
                        for (folderName of data.folderName) {
                            gulp.src(dir.input + fileName)
                                .pipe(replace(/questionNum/g, data.questionNum))
                                .pipe(rename('index.html'))
                                .pipe(gulp.dest(dir.out + folderName));
                            gulp.src(filesToMove, { base: './dist/' })
                                .pipe(gulp.dest(dir.out + folderName));
                        }
                    } else {
                        var folderName = "xcj_00" + data.questionNum;
                        gulp.src(dir.input + fileName)
                            .pipe(replace(/questionNum/g, data.questionNum))
                            .pipe(rename('index.html'))
                            .pipe(gulp.dest(dir.out + folderName));
                        gulp.src(filesToMove, { base: './dist/' })
                            .pipe(gulp.dest(dir.out + folderName));
                    }
                }
            }
        }
    });
});
