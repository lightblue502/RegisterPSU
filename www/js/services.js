angular.module('app.services', ['app.mocks'])

.factory('Activity', function(Mock){
  let activities = Mock.activities;

	return {
    all: function() {
      return activities;
    },
    remove: function(activity) {
      activities.splice(activities.indexOf(activity), 1);
    },
    update: function(activityId, key, data){
      activities = _.map(activities, function(activity){
        if(activity.id == activityId){
          activity[key] = data;
        }
        return activity;
      });
    },
    get: function(activityId) {
      return _.find(activities, function(activity){
        return activity.id == activityId;
      });
    }
  };
})

.service('BlankService', [function(){

}]);

