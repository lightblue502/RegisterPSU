angular.module('app.controllers')
.controller('activityDetailCtrl', ['$scope', '$stateParams', 'Activity', '$ionicNavBarDelegate', 
	'$cordovaBarcodeScanner',
 // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Activity, $ionicNavBarDelegate, $cordovaBarcodeScanner) {
	let id = $stateParams.id;
	let activity = Activity.get(id);
	$scope.title = activity.title;

	let self = this;

	let registors = activity.registors;

	self.selected = undefined;
	$scope.candidates = activity.candidates;
	$scope.registors = __loadRegistors(registors);

	$scope.register = function(){
		_.each(self.selected, function(select){
			__validateRegister(select, function(){
				candidate = _.clone(select);
				candidate.date = moment().format();
				$scope.candidates.push(candidate);
			}, function(){
			
			});
		})

		__save(id, $scope.candidates);
		__clearAll();

	}

	$scope.registByCode2d = function(){
		 $cordovaBarcodeScanner
		 	.scan()
		 	.then(function(barcodeData) {
		 		console.log(barcodeData);
		 	    // Success! Barcode data is here
		 		if(!barcodeData.cancelled){
		 			__autoRegister(barcodeData.text)
		 		}else{
		 			alert("camera cancelled !!");
		 		}

		 	}, function(error) {
		 		console.log(error);
		 	    // An error occurred
		 	});
	}

  	self.tagTransform = function (newTag) {
	    var item = {
	        code: newTag,
	        name: 'unknown',
	    };
	    return item;
  	};

  	function __autoRegister(code){
		let registor = _.find($scope.registors, function(registor){
			return registor.code == code;
		})

		console.log("have registor ", registor);
		if(!registor){
			registor = self.tagTransform(code);
		}

		__validateRegister(registor, function(success){
			candidate = _.clone(registor);
			candidate.date = moment().format();
			$scope.candidates.push(candidate);
			
			__save(id, $scope.candidates);
			__clearAll();
		}, function(){

		});
  	}

  	function __validateRegister(registor, success, fail){
  		let candidate = _.find($scope.candidates, function(c){
			return c.code == registor.code;
		})

  		if(!candidate){
			success();
		}else{
			alert("code " + registor.code + " already registered !!" );
			fail();
		}
  	}

	function __loadRegistors(registors){
		return _.differenceBy(registors, $scope.candidates, 'code');
	}

	function __clearAll(){
		self.selected = undefined;;
		
		$scope.registors = __loadRegistors(registors);
		console.log("clearALl", $scope.selected)
	}

	function __save(id, candidates){
		console.log("save !!");
		Activity.update(id, 'candidates', candidates);
	}
	
}])