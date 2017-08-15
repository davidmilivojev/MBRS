(function(angular) {

	angular.module('proApp')
			.controller('addEditUserController',
			[
				'$scope',
				'$state',
				'$rootScope',
				'$stateParams',
				'userService',
				function($scope, $state, $rootScope,$stateParams, userService)
				{
						var operation = $stateParams.operation;

                        $scope.errors = false

						if (operation === undefined || operation === null)
						$state.go('allUser')

						function refresh(){

						}

						refresh();

						if( operation === 'add'){
							$scope.app = {}
							$scope.addFlag = true
							$scope.addSave = function (){

							userService.add($scope.user,
									function(response) {
										$state.go('allUser')
									},
									function(response) {
										console.log(response)
                                        $scope.errors = true
								});
							}
						}

						//editing


						if( operation === 'edit'){
							$scope.editFlag = true
							var id = sessionStorage.getItem('entityId')
							userService.get(id,
								function(response){
									$scope.user = response.data.results

								},
								function(response) {
									console.log(response)

							})

							$scope.editSave = function (){
							userService.edit($scope.user,
									function(response) {
										$state.go('allUser')
									},
									function(response) {
										console.log(response)
											$scope.errors = true
								})
							}
						}

						$scope.cancel = function(){
							$state.go('allUser')
						}

				}
			]);

})(angular);