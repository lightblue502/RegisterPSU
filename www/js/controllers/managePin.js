angular.module('app.controllers')
.controller('managePinCtrl', ['$scope', '$stateParams', 'Activity', '$window',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Activity, $window) {
	var self = this;
	

	self.changePIN = function(){
		let id = $stateParams.id;
		let activity = Activity.get(id);
		console.log(activity)
		console.log(activity.pin)
		console.log(self.oldPin, self.pin, self.pinConfirm, activity.pin);

		if(self.oldPin == undefined || self.pin == undefined || self.pinConfirm == undefined){
			alert('please complate form');
			return;
		}

		if(self.oldPin !== activity.pin){
			alert('wrong pin !!');
			return;
		}

		if(self.pin !== self.pinConfirm){
			alert('pin not match !!');
			return;
		}

		Activity.update(id, 'pin', self.pin);
		alert('update pin success !!');

		$window.history.back();
	}

}])
   
