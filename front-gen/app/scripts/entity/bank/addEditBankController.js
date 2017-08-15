(function(angular) {

	angular.module('proApp')
			.controller('addEditBankController',
			[
				'$scope',
				'$state',
				'$rootScope',
				'$stateParams',
				'bankService',
				function($scope, $state, $rootScope,$stateParams, bankService)
				{
						var operation = $stateParams.operation;

                        $scope.errors = false

						if (operation === undefined || operation === null)
						$state.go('allBank')

						function refresh(){

						}

						refresh();

						if( operation === 'add'){
							$scope.app = {}
							$scope.addFlag = true
							$scope.addSave = function (){

							bankService.add($scope.bank,
									function(response) {
										$state.go('allBank')
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
							bankService.get(id,
								function(response){
									$scope.bank = response.data.results

								},
								function(response) {
									console.log(response)

							})

							$scope.editSave = function (){
							bankService.edit($scope.bank,
									function(response) {
										$state.go('allBank')
									},
									function(response) {
										console.log(response)
											$scope.errors = true
								})
							}
						}

						$scope.cancel = function(){
							$state.go('allBank')
						}

				}
			]);

})(angular);