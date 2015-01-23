 /**
 * @description
 * @author duanjun
 * @date 2014/10/24
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 160, plusplus: true, sloppy: true*/
/*global define: true , $: true*/

define(['jquery'], function (jQuery) {
    'use strict';
    return function (
        page1Service,
        $scope,
        $location,
        commonResource
    ) {
        page1Service.register($scope);
        $scope.page = {
            total_pn: 0,
            current_pn: 0
        };

        $scope.setPageData = function (pageData) {
            $scope.page = pageData;
        };

        $scope.changePage = function (pageNumber) {
            $scope.urlSearch = $location.search();
            $location.search($.extend($scope.urlSearch, {
                pn: pageNumber
            }));
        };
    };
});
