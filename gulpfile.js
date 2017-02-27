const gulp = require('gulp');
const webpack = require("webpack")
const gutil = require('gulp-util');
const del = require('del');
let webpackConfig = require('./webpack.config.js');


gulp.task('bundle:dev', function(cb) {

    webpackDevConfig = Object.assign({}, webpackConfig);
    webpackDevConfig.devtool = "sourcemap";
    webpackDevConfig.plugins = webpackDevConfig.plugins.concat(
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    );

    webpack(webpackDevConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("bundle:dev", err);
        
        gutil.log("[bundle:dev]", stats.toString({
            colors: true
        }));

        cb();
    });
});

gulp.task('bundle', function(cb) {
    webpackConfig.plugins = webpackConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        })
    );

    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("bundle", err);
        
        gutil.log("[bundle]", stats.toString({
            colors: true
        }));

        cb();
    });
});

gulp.task('cleanjs', function () {
  return del([
    'assets/bundle.js*'
  ]);
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*', 'routes.js'], ['bundle:dev']);
});

gulp.task('dev', ['cleanjs', 'bundle:dev', 'watch']);
gulp.task('release', ['cleanjs', 'bundle']);