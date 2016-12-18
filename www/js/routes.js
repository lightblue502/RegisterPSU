angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $ionicConfigProvider.views.maxCache(0);
  // $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');

  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.activity'
      2) Using $state.go programatically:
        $state.go('tabsController.activity');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tab/tab1/activity
      /tab/tab4/activity
  */
  .state('tabsController', {
    url: '/tab',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.activity', {
    url: '/activity',
    views: {
      'tab-activity': {
        templateUrl: 'templates/activity.html',
        controller: 'activityCtrl'
      }
    }
  })

  .state('tabsController.createActivity', {
    url: '/activity_create',
    views: {
      'tab-create': {
        templateUrl: 'templates/createActivity.html',
        controller: 'activityFormCtrl',
        controllerAs : 'c'
      }
    }
  })

  .state('tabsController.editActivity', {
    url: '/activity_edit/:id',
    views: {
      'tab-activity': {
        templateUrl: 'templates/editActivity.html',
        controller: 'activityFormCtrl',
        controllerAs : 'c'
      }
    }
  })

  .state('tabsController.report', {
    url: '/report',
    views: {
      'tab-report': {
          templateUrl: 'templates/report.html',
          controller: 'reportCtrl',
          controllerAs : 'r'
      }
    }
  })

  .state('tabsController.activityDetail', {
    url: '/activity_detail/:id',
    views: {
      'tab-activity': {
        templateUrl: 'templates/activityDetail.html',
        controller: 'activityDetailCtrl',
        controllerAs : 'detail'
      }
    }
  })

  .state('tabsController.register', {
    url: '/register/:id',
    views: {
      'tab-activity': {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl',
        controllerAs : 'regist'
      }
    }
  })

  .state('tabsController.studentList', {
    url: '/student_list/:id',
    views: {
      'tab-activity': {
        templateUrl: 'templates/studentList.html',
        controller: 'studentListCtrl'
      }
    }
  })

  .state('tabsController.candidateList', {
    url: '/candidate_list/:id',
    views: {
      'tab-activity': {
        templateUrl: 'templates/candidateList.html',
        controller: 'candidateListCtrl'
      }
    }
  })

  .state('tabsController.managePin', {
    url: '/manage_pin/:id',
    views: {
      'tab-activity': {
        templateUrl: 'templates/managePin.html',
        controller: 'managePinCtrl',
        controllerAs : 'm'
      }
    }
  })

  .state('tabsController.setting', {
    url: '/setting/:id',
    views: {
      'tab-activity': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })


  $urlRouterProvider.otherwise('/tab/activity')

  

});