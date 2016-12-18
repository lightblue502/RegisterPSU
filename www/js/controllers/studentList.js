angular.module('app.controllers')
.controller('studentListCtrl', ['$scope', '$stateParams', 'Activity', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Activity) {
	let id = $stateParams.id;
	let activity = Activity.get(id);
	
	$scope.members = _.chain(activity.candidates)
						.union(activity.registors)
						.uniqBy('code')
						.map(function(member){ 
							member.isRegister = member.date ? true: false;
							return member;
						}).value();
}])
   
