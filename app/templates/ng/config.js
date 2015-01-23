/**
 * @description option
 * @author duanjun
 * @date 2013/10/24
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true */

require.config({
    baseUrl: '/',
    paths: {
        jquery: 'bower_components/jquery/jquery',
        angular: 'bower_components/angular/angular',
        angularResource: 'bower_components/angular-resource/angular-resource',
        angularRoute: 'bower_components/angular-route/angular-route',
        angularCookies: 'bower_components/angular-cookies/angular-cookies',
        angularSanitize: 'bower_components/angular-sanitize/angular-sanitize',
        uiBootstrap: 'bower_components/angular-bootstrap/ui-bootstrap',
        uiBootstrapTemplate: 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
        less: 'bower_components/less/dist/less',
        underscore : 'bower_components/underscore/underscore',

        mainApp: 'app/mainApp',

        /* common */
        commonModule : 'common/commonModule'

    },
    shim: {
        'angular' : {
            deps: ['jquery'],
            'exports' : 'angular'
        },
        'angularSanitize': {
            deps: ['angular']
        },
        'angularRoute': {
            deps: ['angular']
        },
        'angularMocks': {
            deps: ['angular']
        },
        'uiBootstrapTemplate': {
            deps: ['angular']
        },
        'uiBootstrap': {
            deps: ['angular', 'uiBootstrapTemplate']
        },
        'angularResource': {
            deps: ['angular']
        },
        'angularCookies': {
            deps: ['angular']
        },
        'jquery' : {
            exports : 'jQuery'
        },
        'underscore' : {
            deps: ['jquery'],
            exports : '_'
        },
        'less' : {
            exports : 'less'
        }
    },
    priority: [
        "angular"
    ]
});
