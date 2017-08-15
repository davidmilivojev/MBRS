(function (angular) {
    'use strict';

    angular.module('proApp').config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('allUser',{
           	   url:'/user',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/user/allUser.html',
           	  			controller: 'allUserController'
           	  		}
                }
            })
            .state('addUser',{
           	   url:'/User/{operation}',
           	  	views:
           	  	  {
           	  		'navbar':{
           	  			templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
           	  		},
           	  		'content':{
           	  			templateUrl: 'scripts/entity/user/addEditUser.html',
           	  			controller: 'addEditUserController'
           	  		}
                }
            })
            .state('editUser',{
               url:'/User/{operation}',
                views:
                  {
                  'navbar':{
                    templateUrl: 'scripts/navbar/navbar.html',
                    controller : 'navbarController'
                  },
                  'content':{
                    templateUrl: 'scripts/entity/user/addEditUser.html',
                    controller: 'addEditUserController'
                  }
                }
            })
    }]);

})(angular);