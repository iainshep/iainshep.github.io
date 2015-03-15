'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'n3-line-chart',
    'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/bg', {
            templateUrl: 'partials/bg.html',
            controller: 'BGCtrl'
        }).
      otherwise({
        redirectTo: '/phones'
        });
  }]);