var gulp = require('gulp'),
    uglify = require('gulp-uglify');
newer = require('gulp-newer');
imagemin = require('gulp-imagemin');
pngquant = require('imagemin-pngquant');
postcss = require('gulp-postcss');
precss = require('precss');
autoprefixer = require('autoprefixer');
atImport = require('postcss-import');
nano = require('gulp-cssnano');
rename = require('gulp-rename');
pxtorem = require('postcss-pxtorem');
stylelint = require('stylelint');
reporter = require('postcss-reporter');
rucksack = require('rucksack-css');
sourcemaps = require('gulp-sourcemaps');


gulp.task('imagemin', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('minify', function() {
    return gulp.src('./dist/css/styles.css')
        .pipe(nano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'));
});


var imgSrc = './src/img/**';
var imgDest = './dist/img';

gulp.task('images', function() {
    return gulp.src(imgSrc)
        .pipe(newer(imgDest))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDest));
});

gulp.task('compress', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function() {
    var processors = [
        atImport,
        precss,
        rucksack,
        autoprefixer({
            browsers: ['last 2 version']
        }),
        pxtorem({
            root_value: 16,
            unit_precision: 2,
            prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing', 'margin', 'padding'],
            replace: true,
            media_query: false
        }),
        reporter({
            clearMessages: true
        })
    ];
    return gulp.src('./src/css/styles.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('default', function() {
    gulp.watch('./src/css/*.css', ['css']);
    gulp.watch('./src/img/**', ['images']);
    gulp.watch('./src/js/**', ['compress']);
    gulp.watch('./src/css/*.css', ['minify']);
});