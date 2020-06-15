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
                document.getElementById("msg").style.color = "red";
                document.getElementById("lunch-menu").style.borderColor = "red";
                $scope.message = "Please enter data first";
            } else if (item.length <= 3) {
                $scope.message = "Enjoy!";
                document.getElementById("msg").style.color = "green";
                document.getElementById("lunch-menu").style.borderColor = "green";
            } else {
                $scope.message = "Too Much!";
                document.getElementById("msg").style.color = "green";
                document.getElementById("lunch-menu").style.borderColor = "green";
            }
        };
    };
})();
