(function(angular) {

	angular.module('proApp')
			.controller('addEditOwnerController',
			[
				'$scope',
				'$state',
				'$rootScope',
				'$stateParams',
				'ownerService',
				function($scope, $state, $rootScope,$stateParams, ownerService)
				{
						var operation = $stateParams.operation;

                        $scope.errors = false

						if (operation === undefined || operation === null)
						$state.go('allOwner')

						function refresh(){

						}

						refresh();

						if( operation === 'add'){
							$scope.app = {}
							$scope.addFlag = true
							$scope.addSave = function (){

							ownerService.add($scope.owner,
									function(response) {
										$state.go('allOwner')
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
							ownerService.get(id,
								function(response){
									$scope.owner = response.data.results

								},
								function(response) {
									console.log(response)

							})

							$scope.editSave = function (){
							ownerService.edit($scope.owner,
									function(response) {
										$state.go('allOwner')
									},
									function(response) {
										console.log(response)
											$scope.errors = true
								})
							}
						}

						$scope.cancel = function(){
							$state.go('allOwner')
						}

				}
			]);

})(angular);