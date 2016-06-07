/**
 * Created by jackie on 6/6/16.
 */

// public/js/controllers/UserCtrl.js
angular.module('CreateUserCtrl', []).controller('CreateUserController', ['$scope', 'User', '$location', function($scope, User, $location) {


    $scope.user = {};

    $scope.createUser = function() {
        User.create($scope.user)
            .then(function(response) {
                alert("User created!");
                $location.path("/users");
        });
    };

}]);