angular.module('app.controllers')
  
.controller('activityCtrl', ['$scope', '$stateParams', 'Activity', '$state',
function ($scope, $stateParams, Activity, $state) {
	console.log("activityCtrl");
	$scope.activities = Activity.all();


	// $state.go('tabsController.activityDetail',{id : 1});
	// $scope.createActiviy = function(){
	// 	console.log
	// }

}])