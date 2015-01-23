/**
 * @description
 * @author duanjun
 * @date 2014/10/24
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 160, plusplus: true, sloppy: true*/
/*global define: true */

define([
    'angular',
    'view/page1/page1.control'
], function (
    angular,
    page1Control
) {
    'use strict';
    return angular.module('pageModule', [])
        .controller('OurClassmateController', [
            '$scope',
            '$location',
            '$route',
            'commonResource',
            page1Control
        ]);
});
