/* global process */

// gulp modules
var del = require('del');
var gulp = require('gulp');
var sync = require('gulp-sync')(gulp);
var $ = require('gulp-load-plugins')();
var pngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');

// configuration
var config = require('./config');

// NODE_ENV
var ENV = process.env.ENV || config.environment;
var JS_EXT = process.env.JS_EXT || config.js.extension;
var CSS_EXT = process.env.CSS_EXT || config.css.extension;

/**
 * JS Tasks
 */

// clean task
gulp.task('js:clean', function() {
	del(['./src/assets/js/*']);
});

// copy task
gulp.task('js:copy', function() {
	gulp.src(config.js.copy).pipe(gulp.dest('./dist/assets/js'));
});

// build task
gulp.task('js:build', ['js:clean', 'js:copy'], function() {
	return gulp.src('./src/assets/js/**/*.' + JS_EXT.trim())
		.pipe($.plumber())
			.pipe($.sourcemaps.init())
				.pipe($.if(JS_EXT.trim() == 'ts', $.tsc({target: 'ES5'}), $.if(JS_EXT.trim() == 'es6.js', $.babel())))
				.pipe($.concat(config.js.filename))
			.pipe($.sourcemaps.write())
		.pipe($.plumber.stop())
		.pipe($.size())			
		.pipe($.if(ENV.trim() == 'production', gulp.dest('./dist/assets/js')))
		.pipe($.plumber())
			.pipe($.rename({suffix: '.min'}))
			.pipe($.if(ENV.trim() == 'production', $.uglify()))
		.pipe($.plumber.stop())
		.pipe(gulp.dest('./dist/assets/js'));
});

// watch task
gulp.task('js:watch', ['js:build'], function() {
	gulp.watch('./src/assets/js/*.' + JS_EXT.trim(), ['js:build']);
});

// default task
gulp.task('js', ['js:watch']);

/**
 * CSS Tasks
 */
 
// clean task
gulp.task('css:clean', function() {
	del(['./dist/assets/css/*']);
});

// copy task
gulp.task('css:copy', function() {
	for (var i = 0; i < config.css.copy.length; i++) {
		gulp.src(config.css.copy[i].path).pipe(gulp.dest('./src/assets/sass/' + config.css.copy[i].name));
	}
});

// build task
gulp.task('css:build', ['css:clean', 'css:copy'], function() {
	return gulp.src('./src/assets/sass/*.' + CSS_EXT.trim())
		.pipe($.plumber())
			.pipe($.sourcemaps.init())
				.pipe($.sass({outputStyle: 'expanded'}))
				.pipe($.autoprefixer(['last 2 versions']))
			.pipe($.sourcemaps.write())
		.pipe($.plumber.stop())
		.pipe($.size())			
		.pipe($.if(ENV.trim() == 'production', gulp.dest('./dist/assets/css')))
		.pipe($.plumber())
			.pipe($.rename({suffix: '.min'}))
			.pipe($.if(ENV.trim() == 'production', $.minifyCss({advanced: false})))
		.pipe($.plumber.stop())
		.pipe(gulp.dest('./dist/assets/css'));
});

// watch task
gulp.task('css:watch', ['css:build'], function() {
	gulp.watch('./src/assets/sass/**/*.' + CSS_EXT.trim(), ['css:build']);
});

// default task
gulp.task('css', ['css:watch']);

/**
 * IMAGE Tasks
 */

// clear cache
gulp.task('cache:clear', function(done) {
	return $.cache.clearAll(done);
});

// clean task
gulp.task('image:clean', function() {
	del(['./dist/assets/images/*']);
});

// sprite task
gulp.task('sprite:build', function() {
	var spriteData = gulp.src('./src/assets/icons/*.png')
		.pipe(spritesmith({
			retinaSrcFilter: ['./src/assets/icons/*-2x.png'],
			retinaImgName: 'icons-2x.png',
			cssName: '_icons.scss',
			imgName: 'icons.png'
		}));
		
	spriteData.img.pipe(gulp.dest('./src/assets/images'));
	spriteData.css.pipe(gulp.dest('./src/assets/sass'));
});

// build task
gulp.task('image:build', ['image:clean'], function() {
	return gulp.src('./src/assets/images/**/*.{jpg,jpeg,png,svg,gif}')
		.pipe($.plumber())
		.pipe($.cache($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
		.pipe($.plumber.stop())
		.pipe($.size())			
		.pipe(gulp.dest('./dist/assets/images'));
});

// watch task
gulp.task('image:watch', ['image:build'], function() {
	gulp.watch('./src/assets/images/**/*.{jpg,jpeg,png,svg,gif}', ['image:build']);
	gulp.watch('./src/assets/icons/*.png', ['sprite:build']);
});

// default task
gulp.task('image', sync.sync(['cache:clear', 'sprite:build', 'image:watch']));

// default
gulp.task('default', sync.sync(['image', 'js', 'css']));