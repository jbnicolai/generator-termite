/**
 * @description
 * @author duanjun
 * @date 2014/12
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true */
define(['angular',
        'commonModule',
        'app/config',
        'app/route',
        '../view/page.module'
        ],
    function (
        angular,
        commonModule,
        config,
        route,
        pageModule
    ) {
        'use strict';
        return angular.module('mainApp', [
            'common',
            'pageModule'
        ])
            .controller('mainCtrl',
                ['$scope', '$location', '$http', function ($scope, $location) {
                    $scope.state = 'ready';
                }])
            .config(['$routeProvider', route])
            .config(['$httpProvider', '$locationProvider', config])
            .run(['$route', function ($route) {
                $route.reload();
            }]);
    });
