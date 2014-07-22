'use strict';

angular.module('mean.noodles').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('noodles example page', {
            url: '/noodles/example',
            templateUrl: 'noodles/views/index.html'
        });
    }
]);
