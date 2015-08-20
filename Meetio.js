Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {

  // This code only runs on the client
  var app = angular.module('meetio', ['angular-meteor', 'ui.router']);

  app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'views/loginPage.ng.html',
        controller: 'meetioCtrl'
      })
      
      .state('rooms', {
        url: '/rooms',
        templateUrl: 'views/roomsView.ng.html',
        controller: 'roomsCtrl'
      })

      .state('calendar', {
        url: '/calendar',
        templateUrl: 'views/calendarView.ng.html',
        controller: 'calendarCtrl'
      })

      .state('help', {
        url: '/help',
        templateUrl: 'views/helpView.ng.html',
        controller: 'helpCtrl'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'views/aboutView.ng.html',
        controller: 'aboutCtrl'
      });

      $urlRouterProvider.otherwise('/');
}]);

  app.controller('meetioCtrl', ['$scope', '$meteor', function($scope, $meteor) {

    $scope.IsakT = "Isak was here";

  }]);

}