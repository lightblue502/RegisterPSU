angular.module('app.controllers')

.controller('activityFormCtrl', ['$scope', '$stateParams', 'Activity', '$window', '$state', '$ionicHistory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Activity, $window, $state, $ionicHistory) {
	var self = this;
	const INIT_ACTIVITY = {title :null, date: null, registors: []};
	const INIT_REGISTOR = {code: null, name: null};
	
	console.log("activity form");

	let id = $stateParams.id;
	let activity;
	if(id){
		activity =  Activity.get(id);
		activity.date = new Date(activity.date);
	}

	self.pin = null;
	self.pinConfirm = null;
	$scope.activity = activity || INIT_ACTIVITY ;
	$scope.registor = activity ? activity.registor : INIT_REGISTOR ;

	$scope.activity = {
		title :"test Activity", date: new Date(), registors: []
	}

	$scope.addRegistor = function(){
		let registor = $scope.registor;
		console.log("registor", registor);
		if(!__haveRegister(registor)){
			let newRegistor = _.clone(registor);
			$scope.activity.registors.push(newRegistor);
		}else{
			alert("code " + registor.code + " already registered !!" );
		}
		$scope.registor = {code: null, name: null};
	}	

	$scope.delRegistor = function(code){
		let registors = _.reject($scope.activity.registors, function(registor){
			return registor.code == code;
		});

		$scope.activity.registors = registors;
	}

	$scope.create = function(activity){
		if(confirm("Create This Activity ?!")){
			if(__validatePin()){
				Activity.create(activity);
				alert("Create Success!!");
				$ionicHistory.nextViewOptions({
				    disableBack: true
				});
				$state.go('tabsController.activity')
			}else{
				alert("PIN not match!!")
			}
		}

	}

	$scope.edit = function(){
		console.log("edit id :" + id);
		Activity.update(id, 'all', activity);
		alert('Edit Success !!')
		$window.history.back();
	}

	function __validatePin(){
		return self.pin === self.pinConfirm;
	}

	function __haveRegister(curRegistor){
		let registor =_.find($scope.activity.registors, function(registor){
			return registor.code == curRegistor.code;
		});
		return registor? true: false;
	}



}])