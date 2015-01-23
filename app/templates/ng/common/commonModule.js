/**
 * @description
 * @author duanjun
 * @date 2014/12
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 160, plusplus: true, sloppy: true*/
/*global define: true */

define(['angular',
        'angularRoute',
        'angularResource',
        'angularSanitize',
        'common/service/commonResource',
        'common/service/our_classmate_resource',
        'uiBootstrapTemplate'
        ],

    function (
        angular,
        angularRoute,
        angularResource,
        angularSanitize,
        commonResource,
        ourClassmateResource
    ) {

        'use strict';
        return angular.module('common', [
            'ngRoute',
            'ngResource',
            'ui.bootstrap'
        ])
            .service('commonResource', [commonResource])
            .service('ourClassmateResourceService', ['$resource', '$http', ourClassmateResource])
            .run(['ourClassmateResourceService', 'commonResource', function (ourClassmateResourceService, commonResource) {
                commonResource.registerResource('ourClassmateResource', ourClassmateResourceService);
            }]);

    });
