(function(angular) {

	angular.module('proApp')
			.controller('addEditCarController',
			[
				'$scope',
				'$state',
				'$rootScope',
				'$stateParams',
				'carService',
				function($scope, $state, $rootScope,$stateParams, carService)
				{
						var operation = $stateParams.operation;

                        $scope.errors = false

						if (operation === undefined || operation === null)
						$state.go('allCar')

						function refresh(){

						}

						refresh();

						if( operation === 'add'){
							$scope.app = {}
							$scope.addFlag = true
							$scope.addSave = function (){

							carService.add($scope.car,
									function(response) {
										$state.go('allCar')
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
							carService.get(id,
								function(response){
									$scope.car = response.data.results

								},
								function(response) {
									console.log(response)

							})

							$scope.editSave = function (){
							carService.edit($scope.car,
									function(response) {
										$state.go('allCar')
									},
									function(response) {
										console.log(response)
											$scope.errors = true
								})
							}
						}

						$scope.cancel = function(){
							$state.go('allCar')
						}

				}
			]);

})(angular);