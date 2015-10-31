var gulp = require('gulp'),
 uglify = require('gulp-uglify');
 newer = require('gulp-newer');
 imagemin = require('gulp-imagemin');
 pngquant = require('imagemin-pngquant');
 postcss = require('gulp-postcss');
 precss = require('precss');
 autoprefixer = require('autoprefixer');
 cssnano = require('cssnano');


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

gulp.task('compress', function() {

	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

var imgSrc = 'src/img/**';
var imgDest = 'dist/img';

gulp.task('images', function() {
	return gulp.src(imgSrc)
		.pipe(newer(imgDest))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDest));

});

gulp.task('css', function () {
  var processors = [
  	autoprefixer({browsers: ['last 1 version']}),
  	cssnano,
 	precss,
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});
