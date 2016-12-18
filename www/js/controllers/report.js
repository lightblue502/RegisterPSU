// var json2csv = require('json2csv');
// var fs = require('fs');

angular.module('app.controllers')

.controller('reportCtrl', ['$scope', '$stateParams', 'Activity', '$cordovaFile', '$cordovaEmailComposer', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Activity, $cordovaFile, $cordovaEmailComposer) {
	console.log("reportCtrl")
	var self = this
	$scope.activitiesTitle = Activity.all().map(function(activity){
		var obj = {}
		obj.id = activity.id
		obj.title = activity.title
		return obj
	})

    console.log($scope.activitiesTitle)
	self.activity = ''

	function ConvertToCSV(objArray) {
        var arr = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var array = []
        str = "no. , title, date, code, name, check-in" + '\r\n'
        console.log("array: " , array)
        if(arr.length == undefined){
        	array.push(arr)
        }else{
        	array = arr
        }
        for (var i = 0; i < array.length; i++) {
        	// console.log("array: " , array[i])
            var line = '';
            var activityId = array[i].id
            var title = array[i].title
            var date = array[i].date
            line += activityId + ',' + title + ',' + date + ','
            var students = getAllStudentWithRemark(array[i])
            var cnt = 0
            for (var index in students) {
                cnt++;
                var code = students[index].code
                var name = students[index].name
                var date = students[index].date ? students[index].date : 'x'
                if(cnt == 1){
                	line += code + ',' + name + ',' + date + '\n'
                }else{
                	line += ' ,' + ' ,' + ' ,' + code + ',' + name + ',' + date + '\n'
                }
                
                                
            }

            str += line + '\r\n';
        }

        return str;
    }

    function getAllStudentWithRemark(activity){
    	var member = _.chain(activity.candidates)
						.union(activity.registors)
						.uniqBy('code')
						.map(function(member){ 
							member.isRegister = member.date ? true: false;
							return member;
						}).value();
		return member
    }
    $scope.convertToCSV = function(){
    	// console.log(ConvertToCSV(Activity.all()))
    	exportCSV(ConvertToCSV(Activity.all()))
    }
    $scope.exportCSVbyTitle = function(){
    	// console.log(ConvertToCSV(Activity.get(self.activity.id)))
    	if(self.activity.id != undefined){
    		exportCSV(ConvertToCSV(Activity.get(self.activity.id)))
    	}else{
    		alert("Please choose activity")
    	}
    }
    $scope.date = new Date();
    $scope.exportCSVbyDate = function(date){
    	// console.log(ConvertToCSV(Activity.getByDate(date)))
    	if(date != undefined){
    		exportCSV(ConvertToCSV(Activity.getByDate(date)))	
    	}else {
    		alert("Please choose date")
    	}
    	
    }

    var filename = ''
    var filePath = ''
    var exportCSV = function (convertToCSV){
    	console.log("exportCSV")
    	filename = "result.csv";
    	filePath = cordova.file.externalRootDirectory
    	var jsonObject = ''
    	console.log("================== path: ", filePath + filename)
    	// console.log('================== title: ' , title)
    	// if(type == 'all'){
    	// 	jsonObject = JSON.stringify(Activity.all());
    	// }
		// console.log(jsonObject);
		var finalCSV = convertToCSV
		console.log("================== finalCSV: ", finalCSV);
		$cordovaFile.createFile(filePath, filename, true).then(function() {
        	$cordovaFile.writeFile(filePath, filename, finalCSV, true).then(function(result){
				console.log("================== path: ", filePath)
				alert('Success! Export created!');
			}, function(err) {
				console.log("ERROR");
			})
		});

		// path >> file:///storage/emulated/0/
	}
	
    if(ionic.Platform.device().platform == 'Android'){
        $cordovaEmailComposer.isAvailable().then(function() {
        // is available
          console.log("available");
        }, function () {
        // not available
            alert("not available");
        });
    }
	
	$scope.sendEmailTo = 'joiiremy@gmail.com'
	$scope.sendEmail = function(sendEmailTo){
		console.log("================== sendEmail ==================")
	 	var sendTo = sendEmailTo
		var email = {
			to: sendTo,
			attachments: [
				filePath + filename
			],
			subject: '[WebApp] CSV',
			body: 'รายงานสรุปกิจกรรม',
			isHtml: true
		};
		if(sendEmailTo != undefined){
			$cordovaEmailComposer.open(email).then(null, function () {
			// user cancelled email
				console.log("================== open ================== ")
			});	
		}else{
			alert("Please fill email input")
		}
		
	}
	
		  //alert('cordova.file.dataDirectory: ' + cordova); //I get [object Object]
		 //  alert('cordova.file.dataDirectory: ' + cordova.file.dataDirectory); // I get file is undefined

}])
 