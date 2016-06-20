
// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController',['$scope', 'PalindromeService', '$location', function($scope, PalindromeService, $location) {

    $scope.str = "";

    $scope.check = function() {
        PalindromeService.check({str: $scope.str})
            .then(function(response) {
                if (response.status !==400) {
                    alert($scope.str + response.data.message);
                } else {
                    return $q.reject(response.data);
                }

            }, function (response) {
                alert($scope.str + response.data.message);
                return $q.reject(response);
            });
    };

}]);