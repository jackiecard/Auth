/**
 * Created by jackie on 6/6/16.
 */

// public/js/services/UserService.js
angular.module('UserService', []).service('UserService', ['$http', function($http) {

    return {
        // call to GET all users
        get : function() {
            return $http.get('/api/users');
        },

        // call to GET all users
        getById : function(id) {
            return $http.get('/api/users/' + id);
        },

        // call to Authenticate
        authenticate : function(credentials) {
            return $http.post('/api/auth', credentials);
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new user
        create : function(userData) {
            return $http.post('/api/sign', userData);
        },

        // call to POST and create a new user
        update : function(id) {
            return $http.put('/api/users/' + id);
        },

        // call to DELETE a users
        delete : function(id) {
            return $http.delete('/api/users/' + id);
        }
    }

}]);