'use strict';

angular.module('mean.noodles').controller('NoodlesController', ['$scope', 'Global', 'Noodles',
    function($scope, Global, Noodles) {
        $scope.global = Global;
        $scope.package = {
            name: 'noodles'
        };
    }
]);
