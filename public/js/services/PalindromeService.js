
// public/js/services/PalindromeService.js
angular.module('PalindromeService', []).service('PalindromeService', ['$http', function($http) {

    return {
        check : function(str) {
            return $http.post('/api/palindrome', str);
        }
    }

}]);