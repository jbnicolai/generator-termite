/**
 * @description option
 * @author duanjun
 * @date 2013/10/24
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true */

require([
    'jquery',
    'angular',
    'mainApp'
], function (
    jQuery,
    angular,
    mainApp
) {
    'use strict';
    angular.bootstrap(document, [mainApp.name]);
});
