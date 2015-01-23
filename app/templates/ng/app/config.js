/**
 * @description
 * @author duanjun
 * @date 2014/12
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true */
define(['angular'], function (angular) {
    'use strict';

    function param(obj) {
        var query = '';
        var name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            if (obj.hasOwnProperty(name)) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        if (value.hasOwnProperty(subName)) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) +
                        '=' + encodeURIComponent(value) + '&';
                }
            }
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    }

    return function ($httpProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $httpProvider.defaults.headers.post['Content-Type'] =
            'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.transformRequest = [
            function (data) {
                return angular.isObject(data) && String(data) !==
                    '[object File]' ? param(data) : data;
            }
        ];
    };
});
