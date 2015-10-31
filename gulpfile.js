var gulp = require('gulp'),
 autoprefixer = require('gulp-autoprefixer');
 minifyCSS = require('gulp-minify-css');
 uglify = require('gulp-uglify');
 newer = require('gulp-newer');
 imagemin = require('gulp-imagemin');
 pngquant = require('imagemin-pngquant');
 sass = require('gulp-sass');

//Optimizando todas las imagenes en formato SVG, PNG, JPG y GIF
gulp.task('imagemin', function() {
	return gulp.src('src/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('/img'));
});


//Incluyendo prefijos CSS a todas las propiedades que lo necesiten
gulp.task('autoprefixer', function() {
	//Ruta de nuestro archivo CSS
	return gulp.src('css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		//ruta donde dejaremos los archivos con prefijos
		.pipe(gulp.dest('css'));
});


//Comprimiendo los CSS
gulp.task('mincss', function() {
	//Ruta de nuestro archivo CSS
	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(size({gzip: true, showFiles: true}))
	    .pipe(rename('.min.css'))
		.pipe(gulp.dest('/css'));
});

//Comprimiendo todos los archivos JavaScript
gulp.task('compress', function() {
	//Ruta de nuestros archivos JS
	return gulp.src('js/*.js')
		.pipe(uglify())
		//Ruta donde dejaremos nuestros JS comprimidos
		.pipe(gulp.dest('dist/js'));
});

//Cada vez que incluyamos una nueva imagen solo esta sera optimizada por imagemin, las que ya estén optimizadas serán excluídas del proceso
var imgSrc = 'img/**';
var imgDest = 'dist/img';

// Minify any new images
gulp.task('images', function() {

	// Add the newer pipe to pass through newer images only
	return gulp.src(imgSrc)
		.pipe(newer(imgDest))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDest));

});

//sass

gulp.task('styles', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('/css'));
});

//Watch task
gulp.task('writing',function() {
    gulp.watch('scss/*.scss',['styles']);
});

//Tarea para lanzar todas las tasks a la vez
gulp.task('udm', ['imagemin', 'images', 'compress', 'mincss', 'autoprefixer']);