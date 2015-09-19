/* eslint-env node */
import path from "path";
import assign from "object-assign";

import gulp from "gulp";
import gutil from "gulp-util";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

const webpackOptions = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist/"),
		filename: "bundle.js"
	},
	resolve: {
		root: path.resolve("./src")
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: "babel"
		}
		]
	}
};
const webpackDebugOptions = {
	devtool: "cheap-module-eval-source-map"
};
const webpackServerOptions = {
	contentBase: "./public"
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
	const compiler = webpack(assign({}, webpackOptions, webpackDebugOptions));

	new webpackDevServer(compiler, webpackServerOptions).listen(8080, "localhost", function(err) {
		if(err) {
			throw new gutil.PluginError("webpack-dev-server", err);
		}
		// Server listening
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

		// keep the server alive or continue?
		// callback();
	});
});
