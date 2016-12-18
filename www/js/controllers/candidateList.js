angular.module('app.controllers')
.controller('candidateListCtrl', ['$scope', '$stateParams', 'Activity', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Activity, $window) {
	let id = $stateParams.id;
	let activity = Activity.get(id);

	console.log(activity);
	
	$scope.candidates = activity.candidates;

	$scope.delete = function(code){
		let candidates = _.reject($scope.candidates, function(candidate){
			return candidate.code == code;
		});
		console.log(candidates);


		$scope.candidates = candidates;
	}

	$scope.update = function(){
		if(confirm("Are you sure for update candidates ? ")){
			console.log($scope.candidates)
			Activity.update(id, 'candidates', $scope.candidates);
		}

		$window.history.back();
	}
	
}])
   
