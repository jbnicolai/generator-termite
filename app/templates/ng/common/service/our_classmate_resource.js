/**
 * @description
 * @author duanjun
 * @date 2014/12
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true */

define([], function () {
    return function ($resource, $http) {
        var OurClassmate = $resource('', {
            ie: 'utf-8'
        }, {
            query: {
                method: 'GET',
                url: '/our_classmate/list',
                /*请自己修改*/
                isArray: false //认为会通过queryByPagination方法调用，故接口返回为对象而非数组
            },
            save: {
                method: 'POST',
                url: '/our_classmate/save'
            },
            get: {
                method: 'POST',
                url: '/our_classmate/get'
            },
            remove: {
                method: 'POST',
                url: '/our_classmate/remove'
            },
            rate: {
                method: 'POST',
                url: '/rate'
            },
            getRateInfo: {
                method: 'POST',
                url: '/getRateInfo'
            },
            batchCheck: {
                method: 'POST',
                url: '/our_classmate/batch_check'
            }
        });

        return OurClassmate;
    };
});
