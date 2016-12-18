angular.module('app.controllers')
.controller('activityDetailCtrl', ['$scope', '$stateParams', 'Activity', '$state',
 // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Activity, $state) {
	let id = $stateParams.id;
	let activity = Activity.get(id);
	$scope.title = activity.title;


	$scope.register = function(){
		$state.go('tabsController.register', {id: id});
	}

	$scope.studentList = function(){
		$state.go('tabsController.studentList', {id: id});
	}

	$scope.setting = function(){
		$state.go('tabsController.setting', {id: id});
	}
	
}])