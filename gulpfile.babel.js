/* eslint-env node */
import path from "path";

import gulp from "gulp";
import gutil from "gulp-util";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

const webpackOptions = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist/"),
		filename: "bundle.js"
	}
};

gulp.task("default", ["webpack"]);

gulp.task("webpack", function(callback) {
	webpack(webpackOptions, function(err, stats) {
		if(err) {
			throw new gutil.PluginError("webpack", err);
		}

		gutil.log("[webpack]", stats.toString({
			// output options
		}));
		callback();
	});
});

gulp.task("serve", function(callback) {
	const compiler = webpack(webpackOptions);

	new webpackDevServer(compiler, {
		// server and middleware options
	}).listen(8080, "localhost", function(err) {
		if(err) {
			throw new gutil.PluginError("webpack-dev-server", err);
		}
		// Server listening
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

		// keep the server alive or continue?
		// callback();
	});
});
