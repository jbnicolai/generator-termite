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
        $scope.ourClassmateList = commonResource.getResource('ourClassmateResource')
            .query($scope.urlSearch, function (data) {
                page1Service.trigger('page1PaginationControl.setPageData', data.page);
            });

        if (!$scope.urlSearch) {
            $scope.urlSearch = $location.search();
        }

        $scope.sortBy = function (sortField) {
            delete $scope.urlSearch.pn;
            $scope.urlSearch.sort_by = sortField;
            $location.search($scope.urlSearch);
        };

        //$scope.addOurClassmate = function () {
            //$scope.ourClassmateActionData.editResourceInstance = new OurClassmate();
        //};

        $scope.editOurClassmate = function (resource) {
            $scope.ourClassmateActionData.editResourceInstance = OurClassmate.get({
                id: resource.id
            });
        };


        $scope.removeOurClassmate = function (ourClassmate) {
            if (confirm("确认删除同学：" + ourClassmate.name + " 吗?")) {
                OurClassmate.remove(angular.extend({},
                    ourClassmate
                )).$promise.then(function () {
                    alert('操作成功！');
                    $route.reload();
                }, function (obj) {
                    switch (obj.no) {
                        //300000: alert("参数错误！请检查后重试！");
                        //break;
                        default: alert("删除失败！错误信息：" + obj.error + "，错误号：" + obj.no);
                        break;
                    }
                });
            }
        };
    };
});
