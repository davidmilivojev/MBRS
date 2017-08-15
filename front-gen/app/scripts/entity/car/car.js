(function (angular) {
    'use strict';

    angular.module('proApp').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('allCar',{
           	   url:'/car',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/car/allCar.html',
           	  			controller: 'allCarController'
           	  		}
                }
            })
            .state('addCar',{
           	   url:'/Car/{operation}',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/car/addEditCar.html',
           	  			controller: 'addEditCarController'
           	  		}
                }
            })
            .state('editCar',{
               url:'/Car/{operation}',
                views:
                  {
                  'navbar':{
                    templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
                  },
                  'content':{
                    templateUrl: 'scripts/entity/car/addEditCar.html',
                    controller: 'addEditCarController'
                  }
                }
            })
    }]);

})(angular);