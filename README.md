# gulp.js-build
Gulpfile.js that works on js files

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
	"extension": "js"
}
```

You can change environment to **production** or extension to **ts**/**es6.js** in `config.json` or from command line: `set ENV=production` or `set ENV=ts`

## Useage
Download repository and in your command line run `npm install`, this will download `node_modules` and you are about to go.
Install `bower_components` as in example: `bower install crafty`, then open `Gulpfile.js` and add line in `js:copy` task.

- `gulp js:clean` - cleans `./dist/assets/js` directory
- `gulp js:copy` - copies files from `./bower_components`, but that task need to be updated for every component
- `gulp js:build` - concatenates `js/ts/es6.js` files from `./src/assets/js` and creates `bundle.js` in `./dist/assets/js`
- `gulp js:watch` - watches `js/ts/es6.js` files in `./src/assets/js` for chages
- `gulp js` - default task that cleans, copies, builds and watches javascript files

---

- `npm test` - sets environment to development and runs default task of gulp
- `npm start` - sets environment to production and runs default task of gulp