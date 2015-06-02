# gulp.workflow
Gulpfile.js that does the great things

## Dependencies
- ["gulp": "^3.8.11"](https://npmjs.org/package/gulp/)
- ["del": "^1.2.0"](https://www.npmjs.com/package/del/)
- ["gulp-babel": "^5.1.0"](https://www.npmjs.com/package/gulp-babel/)
- ["gulp-concat": "^2.5.2"](https://www.npmjs.com/package/gulp-concat/)
- ["gulp-if": "^1.2.5"](https://www.npmjs.com/package/gulp-if/)
- ["gulp-load-plugins": "^0.10.0"](https://www.npmjs.com/package/gulp-load-plugins/)
- ["gulp-plumber": "^1.0.1"](https://www.npmjs.com/package/gulp-plumber/)
- ["gulp-rename": "^1.2.2"](https://www.npmjs.com/package/gulp-rename/)
- ["gulp-size": "^1.2.1"](https://www.npmjs.com/package/gulp-size/)
- ["gulp-sourcemaps": "^1.5.2"](https://www.npmjs.com/package/gulp-sourcemaps/)
- ["gulp-tsc": "^0.10.0"](https://www.npmjs.com/package/gulp-tsc/)
- ["gulp-uglify": "^1.2.0"](https://www.npmjs.com/package/gulp-uglify/)

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

You can change environment to **production** or extension to **ts**/**es6.js** in `config.json` or from command line: `set ENV=production` or `set ENV=ts`

## Usage
