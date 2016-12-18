angular.module('app.services', ['app.mocks'])

.factory('Activity', function(Mock){
  let activities = Mock.activities;

	return {
    create: function(activity){
      let maxId = _.maxBy(activities, 'id').id;
      activity.id = maxId + 1;
      activity.candidates = [];
      Mock.activities.push(activity);
    },
    all: function() {
      return activities;
    },
    remove: function(activity) {
      activities.splice(activities.indexOf(activity), 1);
    },
    update: function(activityId, key, data){
   
      activities = _.map(activities, function(activity){
        if(activity.id == activityId){
          if(_.isArray(data)){
            activity = data;
          }else{
            activity[key] = data;
          }
        }
        return activity;
      });

    },
    get: function(activityId) {
      return _.find(activities, function(activity){
        return activity.id == activityId;
      });
    },
    getByDate: function(date){
      var result  = activities.filter(function(activity){
        return moment(activity.date).isSame(date, 'day')
      })
      console.log("result : " , result)

      return result
    }
  };
})

.service('BlankService', [function(){

}]);

