/**
 * Created by jackie on 6/6/16.
 */

// public/js/controllers/UserCtrl.js
angular.module('UserCtrl', []).controller('UserController', ['$scope', 'User', '$route', function($scope, User, $route) {



    var getListUsers = function(){
        $scope.userList = [];
        User.get().then(function(users) {
            $scope.userList = users.data;
        });
    }

    getListUsers();

    $scope.user = {};


    $scope.deleteUser = function(id){
        User.delete(id)
        .then(function(response) {
            alert("User deleted!");

            $route.reload();
        });
    }


}]);