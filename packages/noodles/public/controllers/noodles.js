'use strict';

angular.module('mean.noodles')
    .constant('productListActiveClass', 'btn-primary')
    .controller('NoodlesController', ['$scope',  '$stateParams', '$location','Global', 'Noodles',

    function ($scope, $stateParams, $location, Global, Noodle, productListActiveClass) {

        $scope.global = Global;

        $scope.noodles = {
            products: [
                {title: 'noodle 1', description: 'noodle test 1', category: 'cat1', price: 100},
                {title: 'noodle 2', description: 'noodle test 2', category: 'cat1', price: 200},
                {title: 'noodle 3', description: 'noodle test 3', category: 'cat2', price: 300},
                {title: 'noodle 4', description: 'noodle test 4', category: 'cat2', price: 400}
            ]
        };

        /**
         * select product category
         */

        var selectedCategory = null;
        $scope.selectedCategory = function(newCategory){
            // console.log(newCategory);
            selectedCategory = newCategory;
        };

        $scope.categoryFilterFn = function(product){
            if(selectedCategory === null ||
                product.category === selectedCategory)
            return true;

            /*return selectedCategory === null ||
                products.category === selectedCategory;*/
        };

        $scope.getCategoryClass = function(category){
            console.log(selectedCategory +" ---> "+category);
            console.log('productListActiveClass'+productListActiveClass);

            return selectedCategory == category ? productListActiveClass :'';
        }

    }

    /*    function($scope, Global, Noodles) {
     $scope.global = Global;
     $scope.package = {
     name: 'noodles'
     };
     }*/

]);
