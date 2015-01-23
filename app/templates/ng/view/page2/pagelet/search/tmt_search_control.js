/**
 * @description
 * @author duanjun
 * @date 2014/10/24
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 160, plusplus: true, sloppy: true*/
/*global define: true */

define([], function () {
    'use strict';
    return function (
        page1Service,
        $scope,
        $location,
        commonResource
    ) {
        page1Service.register($scope);
        $scope.urlSearch = $location.search();
        $scope.search = function () {
            delete $scope.urlSearch.pn;
            $location.search($scope.urlSearch);
        };
    };
});
