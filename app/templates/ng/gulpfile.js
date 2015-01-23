/**
 * @description option
 * @author duanjun
 * @date 2013/10/24
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true, require:true*/

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var path={
    dest:'../static/app/dist'
};

gulp.task('clean', function () {
    gulp.src('dist', {
            read: false
        })
        .pipe(plugins.clean());
});

var templateCache = require('gulp-angular-templatecache');
gulp.task('template', function () {
    gulp.src(['app/**/*.html', 'common/**/*.html', 'view/**/*.html'])
        .pipe(plugins.htmlmin({
            collapseWhitespace: true
        }))
        .pipe(templateCache({
            base: function (file) {
                return file.path.replace(file.cwd + '/', '');
            },
            standalone: true,
            templateHeader: 'define("templates", ["angular"], function(angular) { "use strict"; return angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {',
            templateFooter: '}]);});'
        }))
        .pipe(gulp.dest(path.dest));
});

var gulpAngularExtender = require('gulp-angular-extender');
var amdOptimize = require("amd-optimize");
var eventStream = require("event-stream");
var order = require("gulp-order");
var replace = require('gulp-replace');

gulp.task('require', function () {
    eventStream.merge(
            gulp.src("bower_components/almond/almond.js"),
            gulp.src(['**/*.js'])
            .pipe(amdOptimize('main', {
                configFile: 'config.js'
            }))
            .pipe(plugins.concat('main.js'))
            .pipe(gulp.dest(path.dest))
        )
        .pipe(order(["**/almond.js", "**/main.js"]))
        .pipe(plugins.concat("main.js"))
        .pipe(replace(/define\s*\(\s*['"]mainApp([^\]]+)['"]/mg, '$&\, "templates"'))
        .pipe(gulpAngularExtender({
            "mainApp": ["templates"]
        }))
        // .pipe(gulp.dest("dist"));
        // .pipe(gulp.dest("../static/dist"));
        .pipe(gulp.dest(path.dest));
});

gulp.task('less', function () {
    gulp.src(['style/main.less'])
        .pipe(plugins.less())
        // .pipe(gulp.dest("dist"));
        .pipe(gulp.dest(path.dest));
});

var htmlreplace = require('gulp-html-replace');
gulp.task('index', ['template', 'require'], function () {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'dist/style/main.css',
            'js': ['dist/main.js', 'dist/templates.js']
        }))
        .pipe(plugins.rename('index_build.html'))
        // .pipe(gulp.dest('.'));
        .pipe(gulp.dest(path.dest));
});

gulp.task('default', [
    'template',
    'require',
    'less',
    'index'
]);
