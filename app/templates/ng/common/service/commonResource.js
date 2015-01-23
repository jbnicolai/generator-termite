/**
 * @description
 * @author duanjun
 * @date 2014/12
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true */

define([], function () {
    return function () {
        var resourceList = {};
        var commonResource = {
            registerResource: function (resourceName, resource) {
                if (resourceName && resource) {
                    resourceList[resourceName] = resource;
                }
                return this;
            },

            getResource: function (name) {
                return resourceList[name];
            }
        };

        return commonResource;
    };
});
