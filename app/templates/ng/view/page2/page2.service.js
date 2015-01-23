/**
 * @description
 * @author duanjun
 * @date 2014/10/24
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 160, plusplus: true, sloppy: true*/
/*global define: true, $: true */

define(['jquery'], function (jQuery) {
    'use strict';

    return function () {
        var pagelets = {};
        var service = {
            register: function (scope) {
                if (scope) {
                    pagelets[scope.name] = scope;
                }
            },

            trigger: function (eventName) {
                var envList = eventName.split('.');
                if (envList.length === 2) {
                    var pagelet = pagelets[envList[0]];
                    var func = pagelets[envList[1]];
                    if (pagelet && $.isFunction(func)) {
                        func.apply(pagelet, [].slice.call(arguments, 1));
                    }
                }
            }
        };

        $.extend(this, service);
    };
});
