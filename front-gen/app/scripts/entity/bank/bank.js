(function (angular) {
    'use strict';

    angular.module('proApp').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('allBank',{
           	   url:'/bank',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/bank/allBank.html',
           	  			controller: 'allBankController'
           	  		}
                }
            })
            .state('addBank',{
           	   url:'/Bank/{operation}',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/bank/addEditBank.html',
           	  			controller: 'addEditBankController'
           	  		}
                }
            })
            .state('editBank',{
               url:'/Bank/{operation}',
                views:
                  {
                  'navbar':{
                    templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
                  },
                  'content':{
                    templateUrl: 'scripts/entity/bank/addEditBank.html',
                    controller: 'addEditBankController'
                  }
                }
            })
    }]);

})(angular);