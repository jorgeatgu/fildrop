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
 rename = require("gulp-rename");
 pxtorem = require('postcss-pxtorem');
 stylelint = require("stylelint");
 reporter = require("postcss-reporter");


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

gulp.task('css', function () {
  var processors = [
  	atImport,
  	precss,
  	autoprefixer({
  		browsers: ['last 2 version']
  		}),
  	pxtorem({
  		    root_value: 16,
  		    unit_precision: 4,
  		    prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing'],
  		    replace: true,
  		    media_query: false
  		}),
  	stylelint({
	  "rules": {
	    "indentation": [2, "tab", {
	      except: ["_reset.css"],
	    }],
	    "declaration-block-semicolon-newline-before": [2, "always"],
	    "declaration-colon-space-after": [2, "always"],
	    "no-eol-whitespace": [2, "always"],
	    "number-leading-zero": [2, "always"],
	    "number-max-precision": [2, "always"],
	    "number-zero-length-no-unit": [2, "always"],
	    "rule-no-single-line": [2, "always"],
	    "selector-no-id": [2, "always"],
	    "selector-no-attribute": [2, "always"]
	  }
	}),
  	reporter({ clearMessages: true })
  ];
  return gulp.src('./src/css/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(nano())
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('default',function() {
    gulp.watch('./src/css/*.css',['css']);
    gulp.watch('./src/img/**',['images']);
});