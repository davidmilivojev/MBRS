(function (angular) {
    'use strict';

    angular.module('proApp').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('allAddress',{
           	   url:'/address',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/address/allAddress.html',
           	  			controller: 'allAddressController'
           	  		}
                }
            })
            .state('addAddress',{
           	   url:'/Address/{operation}',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/address/addEditAddress.html',
           	  			controller: 'addEditAddressController'
           	  		}
                }
            })
            .state('editAddress',{
               url:'/Address/{operation}',
                views:
                  {
                  'navbar':{
                    templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
                  },
                  'content':{
                    templateUrl: 'scripts/entity/address/addEditAddress.html',
                    controller: 'addEditAddressController'
                  }
                }
            })
    }]);

})(angular);