(function(angular) {

	angular.module('proApp')
			.controller('allCovekController',
			[
				'$scope',
				'$state',
				'$rootScope',
				'covekService',
				function($scope, $state, $rootScope, covekService)
				{
								sessionStorage.removeItem("entityId")
								$scope.gridOptions = { enableRowSelection: true, enableRowHeaderSelection: false };

								$scope.gridOptions.columnDefs = [
									{ name: 'id', visible: false },
										{ name: 'Ime', field: 'ime' }];
								$scope.gridOptions.multiSelect = false;
								$scope.gridOptions.noUnselect = true;
								$scope.gridOptions.onRegisterApi = function (gridApi) {
									$scope.gridApi = gridApi;
									gridApi.selection.on.rowSelectionChanged($scope, function (row) {
										$scope.selectedEntityId = row.entity._id;
									});
								};
                refresh = function(){
									$scope.selectedEntityId = undefined
									sessionStorage.removeItem("entityId")
									covekService.getAll(
										function(response){

											$scope.gridOptions.data = response.data.results;
									},
									function(response){
										console.log(response);
									});
								}

								$scope.add = function(){
									$state.go('addCovek', {
										"operation" : "add"
									});
								}
								$scope.edit = function(){
									if($scope.selectedEntityId !== undefined){
										sessionStorage.setItem("entityId",$scope.selectedEntityId)
										$state.go('editCovek', {
											"operation" : "edit"
										});
								 }else{
									 alert("Niste nista selektovali");
								 }
							 }

								$scope.delete = function(){
									if($scope.selectedEntityId !== undefined){
										covekService.delete($scope.selectedEntityId,
											function(response) {
												refresh()
											},
											function(response) {
												console.log(response)
										});
									}else{
										alert("Niste nista selektovali");
									}
								 }
											refresh()
				}
			]);

})(angular);