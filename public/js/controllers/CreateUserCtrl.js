/**
 * Created by jackie on 6/6/16.
 */

// public/js/controllers/UserCtrl.js
angular.module('CreateUserCtrl', []).controller('CreateUserController', ['$scope', 'UserService', '$location', function($scope, UserService, $location) {


    $scope.user = {};

    $scope.createUser = function() {
        UserService.create($scope.user)
            .then(function(response) {
                alert("User created!");
                $location.path("/");
                /*$location.path("/profile/" + response.data._id);*/
        });
    };

}]);