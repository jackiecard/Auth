/**
 * Created by jackie on 6/6/16.
 */

// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/users', {
            templateUrl: 'views/users.html',
            controller: 'UserController'
        })


        .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateUserController'
        });

    $locationProvider.html5Mode(true);

}]);