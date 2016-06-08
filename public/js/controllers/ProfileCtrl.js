/**
 * Created by jackie on 6/6/16.
 */

// public/js/controllers/UserCtrl.js
angular.module('ProfileCtrl', []).controller('ProfileController', ['$scope', 'UserService', '$routeParams', function($scope, UserService, $routeParams) {

    $scope.user = {};

    $scope.id = $routeParams.id;
    $scope.username = $routeParams.username;
    console.log('param ' + $scope.id);

    UserService.getById($scope.id)
        .then(function(response) {
            $scope.user = response.data;
        });


}]);