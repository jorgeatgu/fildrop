var gulp = require('gulp'),
 autoprefixer = require('gulp-autoprefixer');
 minifyCSS = require('gulp-minify-css');
 uglify = require('gulp-uglify');
 newer = require('gulp-newer');
 imagemin = require('gulp-imagemin');
 pngquant = require('imagemin-pngquant');
 sass = require('gulp-sass');


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



gulp.task('autoprefixer', function() {

	return gulp.src('css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))

		.pipe(gulp.dest('css'));
});



gulp.task('mincss', function() {

	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(size({gzip: true, showFiles: true}))
	    .pipe(rename('.min.css'))
		.pipe(gulp.dest('/css'));
});


gulp.task('compress', function() {

	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

var imgSrc = 'img/**';
var imgDest = 'dist/img';


gulp.task('images', function() {


	return gulp.src(imgSrc)
		.pipe(newer(imgDest))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDest));

});

gulp.task('styles', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('css',function() {
    gulp.watch('scss/*.scss',['styles']);
});

