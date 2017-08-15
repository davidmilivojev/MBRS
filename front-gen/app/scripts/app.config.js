(function(){

    'use strict';
    angular.module('proApp').config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
                                    function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'navbar': {
                        templateUrl: '/scripts/navbar/navbar.html',
                        controller: 'navbarController'
                    }
                }
        });

        //allow origin



    }]);


})();
