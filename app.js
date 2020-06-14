(function() {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController); 
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.items = "";
        $scope.message = "";

        $scope.check = function () {
            var item = $scope.items.split(',');
            if ($scope.items == "") {
                $scope.message = "Please enter data first";
            } else if (item.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too Much!";
            }
        };
    };
})();
