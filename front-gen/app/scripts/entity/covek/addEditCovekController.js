(function(angular) {

	angular.module('proApp')
			.controller('addEditCovekController',
			[
				'$scope',
				'$state',
				'$rootScope',
				'$stateParams',
				'covekService',
				function($scope, $state, $rootScope,$stateParams, covekService)
				{
						var operation = $stateParams.operation;

                        $scope.errors = false

						if (operation === undefined || operation === null)
						$state.go('allCovek')

						function refresh(){

						}

						refresh();

						if( operation === 'add'){
							$scope.app = {}
							$scope.addFlag = true
							$scope.addSave = function (){

							covekService.add($scope.covek,
									function(response) {
										$state.go('allCovek')
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
							covekService.get(id,
								function(response){
									$scope.covek = response.data.results

								},
								function(response) {
									console.log(response)
							})
							$scope.editSave = function (){
							covekService.edit($scope.covek,
									function(response) {
										$state.go('allCovek')
									},
									function(response) {
										console.log(response)
								})
							}
						}

						$scope.cancel = function(){
							$state.go('allCovek')
						}

				}
			]);

})(angular);