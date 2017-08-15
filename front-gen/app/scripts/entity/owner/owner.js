(function (angular) {
    'use strict';

    angular.module('proApp').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('allOwner',{
           	   url:'/owner',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/owner/allOwner.html',
           	  			controller: 'allOwnerController'
           	  		}
                }
            })
            .state('addOwner',{
           	   url:'/Owner/{operation}',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/owner/addEditOwner.html',
           	  			controller: 'addEditOwnerController'
           	  		}
                }
            })
            .state('editOwner',{
               url:'/Owner/{operation}',
                views:
                  {
                  'navbar':{
                    templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
                  },
                  'content':{
                    templateUrl: 'scripts/entity/owner/addEditOwner.html',
                    controller: 'addEditOwnerController'
                  }
                }
            })
    }]);

})(angular);