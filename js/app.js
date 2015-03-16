'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'n3-line-chart',
    'ngRoute',
  'phonecatAnimations',

  'controllers',
  'phonecatFilters',
  'phonecatServices',
  'mgcrea.ngStrap'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
//      when('/phones', {
//        templateUrl: 'partials/phone-list.html',
//        controller: 'PhoneListCtrl'
//      }).
//      when('/phones/:phoneId', {
//        templateUrl: 'partials/phone-detail.html',
//        controller: 'PhoneDetailCtrl'
//      }).
      when('/bg', {
        templateUrl: 'partials/bg.html',
        controller: 'BGCtrl'
      }).
        when('/data', {
            templateUrl: 'partials/data.html',
            controller: 'BGCtrl'
        }).
      otherwise({
        redirectTo: '/bg'
        });
  }]);
