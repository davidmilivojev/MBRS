(function(angular) {

	angular.module('proApp')
			.controller('addEditAddressController',
			[
				'$scope',
				'$state',
				'$rootScope',
				'$stateParams',
				'addressService',
				function($scope, $state, $rootScope,$stateParams, addressService)
				{
						var operation = $stateParams.operation;

                        $scope.errors = false

						if (operation === undefined || operation === null)
						$state.go('allAddress')

						function refresh(){

						}

						refresh();

						if( operation === 'add'){
							$scope.app = {}
							$scope.addFlag = true
							$scope.addSave = function (){

							addressService.add($scope.address,
									function(response) {
										$state.go('allAddress')
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
							addressService.get(id,
								function(response){
									$scope.address = response.data.results

								},
								function(response) {
									console.log(response)

							})

							$scope.editSave = function (){
							addressService.edit($scope.address,
									function(response) {
										$state.go('allAddress')
									},
									function(response) {
										console.log(response)
											$scope.errors = true
								})
							}
						}

						$scope.cancel = function(){
							$state.go('allAddress')
						}

				}
			]);

})(angular);