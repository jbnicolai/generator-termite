/**
 * @description
 * @author duanjun
 * @date 2014/12
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true */

define([], function () {
    'use strict';
    return function ($routeProvider) {
        $routeProvider
            .when('/view1', {
                templateUrl: 'view/page1/page1.html'
            })
            .when('/view1/edit/:id', {
                templateUrl: 'view/page1/page1.html'
            })
            .when('/view1/detail/:id', {
                templateUrl: 'view/page1/page1.html'
            })
            .otherwise({
                redirectTo: '/view1'
            });
    };
});
