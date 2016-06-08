/**
 * Created by jackie on 6/6/16.
 */

// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController',['$scope', 'UserService', '$location', function($scope, UserService, $location) {

    $scope.credentials = {};

    $scope.signIn = function() {
        UserService.authenticate($scope.credentials)
            .then(function(response) {
                alert("Successful");
                $scope.id = response.data.userId;
                $location.path("/profile/" + $scope.credentials.username + "/" + $scope.id);
            });
    };

}]);