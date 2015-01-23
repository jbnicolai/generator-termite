/**
 * @description
 * @author duanjun
 * @date 2014/10/24
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 160, plusplus: true, sloppy: true*/
/*global define: true */

define([
    'angular',
    'view/page1/page1.service',
    'view/page1/pagelet/search/tmt_search_control',
    'view/page1/pagelet/pagination/tmt_pagination_control',
    'view/page1/pagelet/editDialog/tmt_editDialog_control',
    'view/page1/pagelet/table/tmt_table_control'
], function (
    angular,
    page1Service,
    page1SearchControl,
    page1PaginationControl,
    page1EditDialogControl,
    page1TableControl
) {
    'use strict';
    return angular.module('page1Module', [])
        .service('page1Service', page1Service)
        .controller('page1SearchControl', ['page1Service', '$scope', '$location', 'commonResource', page1SearchControl])
        .controller('page1TableControl', ['page1Service', '$scope', '$location', 'commonResource', page1TableControl])
        .controller('page1PaginationControl', ['page1Service', '$scope', '$location', 'commonResource', page1SearchControl])
        .controller('page1EditDialogControl', ['page1Service', '$scope',  '$location', 'commonResource', page1EditDialogControl])
        .controller('OurClassmateController', [
            '$scope',
            '$location',
            '$route',
            'page1Service',
            'commonResource',

            function ($scope, $location, $route, page1Service) {
                page1Service.register($scope);
            }
        ]);
});
