'use strict';

angular.module('mean.noodles').controller('NoodlesController', ['$scope',  '$stateParams', '$location','Global', 'Noodles',
    function ($scope, $stateParams, $location, Global, Noodle) {
        $scope.global = Global;

        $scope.noodles = {
            products: [
                {title: 'noodle 1', description: 'noodle test 1', category: 'cat1', price: 100},
                {title: 'noodle 2', description: 'noodle test 2', category: 'cat2', price: 200},
                {title: 'noodle 3', description: 'noodle test 3', category: 'cat3', price: 300},
                {title: 'noodle 4', description: 'noodle test 4', category: 'cat4', price: 400}
            ]
        }

        /**
         * select product category
         */

        var selectedCategory = null;
        $scope.selectedCategory = function(newCategory){
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || product.category == selectedCategory;
        }



    }

    /*    function($scope, Global, Noodles) {
     $scope.global = Global;
     $scope.package = {
     name: 'noodles'
     };
     }*/

]);
