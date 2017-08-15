(function (angular) {
    'use strict';

    angular.module('proApp').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('allCovek',{
           	   url:'/covek',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/covek/allCovek.html',
           	  			controller: 'allCovekController'
           	  		}
                }
            })
            .state('addCovek',{
           	   url:'/Covek/{operation}',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/covek/addEditCovek.html',
           	  			controller: 'addEditCovekController'
           	  		}
                }
            })
            .state('editCovek',{
               url:'/Covek/{operation}',
                views:
                  {
                  'navbar':{
                    templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
                  },
                  'content':{
                    templateUrl: 'scripts/entity/covek/addEditCovek.html',
                    controller: 'addEditCovekController'
                  }
                }
            })
    }]);

})(angular);