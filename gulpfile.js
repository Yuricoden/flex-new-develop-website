'use strict';

global.$ = {
	package: require('./package.json'),
	config: require('./gulp/config'),
	path: {
		task: require('./gulp/paths/tasks.js'),
		template: require('./gulp/paths/template.js'),
		jsFoundation: require('./gulp/paths/js.foundation.js'),
		cssFoundation: require('./gulp/paths/css.foundation.js'),
		app: require('./gulp/paths/app.js')
	},
	gulp: require('gulp'),
	rimraf: require('rimraf'),
	rsp: require('remove-svg-properties').stream,
	browserSync: require('browser-sync').create(),
	gp: require('gulp-load-plugins')()
};

 console.log ($.gp)
$.path.task.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'svgSprite',
		'sass',
		'jade',
		'js.lint',
		'js.process',
		'copy.image',
		'css.foundation',
		'js.foundation',
		'copy_fonts'
		),
	$.gulp.parallel(
		'watch',
		'serve'
		)
	));
