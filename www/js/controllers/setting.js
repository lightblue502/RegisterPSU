angular.module('app.controllers')

.controller('settingCtrl', ['$scope', '$stateParams', 'Activity', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Activity, $state) {
	console.log("hello setting Ctrl")
	let id = $stateParams.id;
	let activity = Activity.get(id);

	$scope.delete = function(){
		console.log("--------")
		Activity.remove(activity);
		console.log(Activity.all());
		$state.go('tabsController.activity', {id : id});
	}

	$scope.edit = function(){
		console.log("edit id : ", id);
		$state.go('tabsController.editActivity', {id : id});
	}

	$scope.candidateList = function(){
		$state.go('tabsController.candidateList', {id: id});
	}

	$scope.managePin = function(){
		$state.go('tabsController.managePin', {id: id});
	}

	function __validatePin(){
		return $scope.pin === $scope.pinConfirm;
	}




}])