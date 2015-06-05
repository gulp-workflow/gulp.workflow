# gulp.workflow
Gulpfile.js that does the great things

[![Build Status](https://semaphoreci.com/api/v1/projects/42b05518-3be1-401e-9447-78c094200f41/444086/badge.svg)](https://semaphoreci.com/zgabievi/gulp-workflow)

## Dependencies
- ["browser-sync": "^2.7.6"](https://www.npmjs.com/package/browser-sync/)
- ["del": "^1.2.0"](https://www.npmjs.com/package/del/)
- ["gulp": "^3.8.11"](https://www.npmjs.com/package/gulp/)
- ["gulp-autoprefixer": "^2.3.0"](https://www.npmjs.com/package/gulp-autoprefixer/)
- ["gulp-babel": "^5.1.0"](https://www.npmjs.com/package/gulp-babel/)
- ["gulp-cache": "^0.2.9"](https://www.npmjs.com/package/gulp-cache/)
- ["gulp-concat": "^2.5.2"](https://www.npmjs.com/package/gulp-concat/)
- ["gulp-if": "^1.2.5"](https://www.npmjs.com/package/gulp-if/)
- ["gulp-imagemin": "^2.2.1"](https://www.npmjs.com/package/gulp-imagemin/)
- ["gulp-load-plugins": "^0.10.0"](https://www.npmjs.com/package/gulp-load-plugins/)
- ["gulp-minify-css": "^1.1.3"](https://www.npmjs.com/package/gulp-minify-css/)
- ["gulp-plumber": "^1.0.1"](https://www.npmjs.com/package/gulp-plumber/)
- ["gulp-rename": "^1.2.2"](https://www.npmjs.com/package/gulp-rename/)
- ["gulp-sass": "^2.0.1"](https://www.npmjs.com/package/gulp-sass/)
- ["gulp-size": "^1.2.1"](https://www.npmjs.com/package/gulp-size/)
- ["gulp-sourcemaps": "^1.5.2"](https://www.npmjs.com/package/gulp-sourcemaps/)
- ["gulp-sync": "^0.1.4"](https://www.npmjs.com/package/gulp-sync/)
- ["gulp-tsc": "^0.10.0"](https://www.npmjs.com/package/gulp-tsc/)
- ["gulp-uglify": "^1.2.0"](https://www.npmjs.com/package/gulp-uglify/)
- ["gulp.spritesmith": "^3.8.0"](https://www.npmjs.com/package/gulp.spritesmith/)
- ["imagemin-pngquant": "^4.1.0"](https://www.npmjs.com/package/imagemin-pngquant/)

## Configuration
```json
{
	"environment": "development",
	
	"js": {
		"extension": "js",
		"filename": "bundle.js",
		
		"copy": [
			"./bower_components/crafty/dist/crafty*"
		]
	},
	
	"css": {
		"extension": "scss",
		
		"copy": [
			{
				"name": "bourbon",
				"path": "./bower_components/bourbon/app/assets/stylesheets/**/*"
			},
			
			{
				"name": "neat",
				"path": "./bower_components/neat/app/assets/stylesheets/**/*"
			}
		]
	}
}
```

You can change environment to **production** and js:extension to **ts**/**es6.js** and css:extension to **sass** in `config.json` or from command line: `set ENV=production` or `set JS_ENV=ts` or `CSS_ENV=sass`

## Usage
- run `bower install` from command line
- run `npm install` from command line

---

- `npm test` - sets environment to development and runs default task of gulp
- `npm start` - sets environment to production and runs default task of gulp

## Other Repositories
- [gulp.js-build](https://github.com/zgabievi/gulp.js-build)
- [gulp.css-build](https://github.com/zgabievi/gulp.css-build)
- [gulp.image-build](https://github.com/zgabievi/gulp.image-build)
