(function(angular) {

	angular.module('proApp')
			.controller('allOwnerController',
			[
				'$scope',
				'$state',
				'$rootScope',
				'ownerService',
				function($scope, $state, $rootScope, ownerService)
				{
								sessionStorage.removeItem("entityId")
								$scope.gridOptions = { enableRowSelection: true, enableRowHeaderSelection: false };

								$scope.gridOptions.columnDefs = [
									{ name: 'id', visible: false },
										{ name: 'Car', field: 'car' },
										{ name: 'Home', field: 'home' }];
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
									ownerService.getAll(
										function(response){

											$scope.gridOptions.data = response.data.results;
									},
									function(response){
										console.log(response);
									});
								}

								$scope.add = function(){
									$state.go('addOwner', {
										"operation" : "add"
									});
								}
								$scope.edit = function(){
									if($scope.selectedEntityId !== undefined){
										sessionStorage.setItem("entityId",$scope.selectedEntityId)
										$state.go('editOwner', {
											"operation" : "edit"
										});
								 }else{
									 alert("Niste nista selektovali");
								 }
							 }

								$scope.delete = function(){
									if($scope.selectedEntityId !== undefined){
										ownerService.delete($scope.selectedEntityId,
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