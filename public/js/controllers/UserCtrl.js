/**
 * Created by jackie on 6/6/16.
 */

// public/js/controllers/UserCtrl.js
angular.module('UserCtrl', []).controller('UserController', ['$scope', 'User', function($scope, User) {



    getListUsers = function(){
        $scope.userList = [];
        User.get().then(function(users) {
            $scope.userList = users.data;
        });
    }

    getListUsers();

    $scope.user = {};

    $scope.createUser = function() {
        User.create($scope.user)
            .then(function(response) {
            alert("User created!");
                getListUsers();
        });
    };

    $scope.deleteUser = function(id){
        console.log(id);
        User.delete(id).then(function(response) {
            alert("User deleted!");

            // Fix refresh page after deleting user
            getListUsers();
        });
    }

}]);