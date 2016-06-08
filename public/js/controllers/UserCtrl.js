/**
 * Created by jackie on 6/6/16.
 */

// public/js/controllers/UserCtrl.js
angular.module('UserCtrl', []).controller('UserController', ['$scope', 'UserService', '$route', function($scope, UserService, $route) {



    var getListUsers = function(){
        $scope.userList = [];
        UserService.get().then(function(users) {
            $scope.userList = users.data;
        });
    }

    getListUsers();

    $scope.user = {};


    $scope.deleteUser = function(id){
        UserService.delete(id)
        .then(function(response) {
            alert("User deleted!");

            $route.reload();
        });
    }


}]);