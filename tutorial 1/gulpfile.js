var gulp = require('gulp');
var gutil = require('gulp-util'); // To print some info into command line, debug
var source = require('vinyl-source-stream'); // throwing textfiles in building process.
var browserify = require('browserify'); // load order of components
var watchify = require('watchify'); // hot reload
var reactify = require('reactify'); // transpiler

gulp.task('default', function() {
	var bundler = watchify(browserify({
		entries: ["./src/app.jsx"],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		fullPaths: true
	}));

	function build(file) {
		if(file) gutil.log("Recompiling" + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	};
	build()
	bundler.on('update', build)
});