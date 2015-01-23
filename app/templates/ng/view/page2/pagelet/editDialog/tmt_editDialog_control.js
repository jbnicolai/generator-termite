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

        $scope.init = function (options) {

        };

        $scope.urlSearch = $location.search();

        //$scope.ourClassmateList = OurClassmate.queryByPagination($scope.urlSearch);
        if (!$scope.urlSearch) {
            $scope.urlSearch = $location.search();
        }

        if (!$scope.ourClassmateActionData) {
            $scope.ourClassmateActionData = {};
        }

        $scope.ourClassmateActionData.editResourceInstance = null;
        if (!$scope.ourClassmateActionData) {
            $scope.ourClassmateActionData = {};
        }

        $scope.ourClassmateActionData.rateResourceInstance = null;
        $scope.ourClassmateActionData.rateOption = null;
        $scope.ourClassmateActionData.rateInfo = null;

        $scope.cancelEditOurClassmate = function () {
            $scope.ourClassmateActionData.editResourceInstance = null;
        };
        $scope.saveOurClassmate = function () {
            $scope.ourClassmateActionData.editResourceInstance.$save().then(function () {
                alert('保存成功！');
                $route.reload();
            }, function (obj) {
                switch (obj.no) {
                    //300000: alert("参数错误！请检查后重试！");
                    //break;
                    default: alert("保存失败！错误信息：" + obj.error + "，错误号：" + obj.no);
                    break;
                }
            });
        };
    };
});
