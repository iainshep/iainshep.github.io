'use strict';

/* Controllers */

//function HeaderController($scope, $location)
//{
//    $scope.isActive = function (viewLocation) {
//        return $location.path().indexOf(viewLocation) == 0;
//    }
//}


var controllers = angular.module('controllers', []);

//phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//    function($scope, Phone) {
//        $scope.phones = Phone.query();
//        $scope.orderProp = 'age';
//    }]);
//
//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//    function($scope, $routeParams, Phone) {
//        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//            $scope.mainImageUrl = phone.images[0];
//        });
//
//        $scope.setImage = function(imageUrl) {
//            $scope.mainImageUrl = imageUrl;
//        }
//    }]);

controllers.controller('BGCtrl', function($scope) {
    var data = [
        { TestTime: "00:02", TestDate: "2015-01-09", Result: 15.1, TestFlag: "Bedtime" },
        { TestTime: "00:02", TestDate: "2015-01-31", Result: 14.4, TestFlag: "Bedtime" },
        { TestTime: "00:04", TestDate: "2015-01-19", Result: 6.8, TestFlag: "Bedtime" },
        { TestTime: "00:04", TestDate: "2015-01-30", Result: 3.0 },
        { TestTime: "00:06", TestDate: "2015-01-24", Result: 6.7, TestFlag: "Bedtime" },
        { TestTime: "00:11", TestDate: "2015-01-06", Result: 13.9, TestFlag: "Bedtime" },
        { TestTime: "00:11", TestDate: "2015-01-14", Result: 24.7 },
        { TestTime: "00:13", TestDate: "2015-01-03", Result: 14.9 },
        { TestTime: "00:13", TestDate: "2015-02-05", Result: 2.4 },
        { TestTime: "00:15", TestDate: "2015-02-22", Result: 19.9, TestFlag: "Bedtime" },
        { TestTime: "00:16", TestDate: "2015-01-05", Result: 5.5 },
        { TestTime: "00:16", TestDate: "2015-02-03", Result: 10.6 },
        { TestTime: "00:18", TestDate: "2015-01-17", Result: 7.7, TestFlag: "Bedtime" },
        { TestTime: "00:20", TestDate: "2015-01-25", Result: 12.8 },
        { TestTime: "00:26", TestDate: "2015-01-23", Result: 8.9, TestFlag: "Bedtime" },
        { TestTime: "00:29", TestDate: "2015-01-04", Result: 7.2, TestFlag: "Bedtime" },
        { TestTime: "00:29", TestDate: "2015-02-11", Result: 12.9 },
        { TestTime: "00:34", TestDate: "2015-03-03", Result: 9.9, TestFlag: "Bedtime" },
        { TestTime: "00:43", TestDate: "2015-02-10", Result: 5.3 },
        { TestTime: "00:45", TestDate: "2015-01-26", Result: 11.2, TestFlag: "Bedtime" },
        { TestTime: "00:46", TestDate: "2015-01-17", Result: 11.2 },
        { TestTime: "00:46", TestDate: "2015-02-15", Result: 10.6, TestFlag: "Bedtime" },
        { TestTime: "00:48", TestDate: "2015-01-08", Result: 16.2 },
        { TestTime: "00:49", TestDate: "2015-02-22", Result: 15.9 },
        { TestTime: "01:00", TestDate: "2015-01-09", Result: 11.5 },
        { TestTime: "01:02", TestDate: "2015-01-02", Result: 7.3, TestFlag: "Bedtime" },
        { TestTime: "01:13", TestDate: "2015-01-05", Result: 5.3, TestFlag: "Bedtime" },
        { TestTime: "01:17", TestDate: "2015-01-25", Result: 11.4, TestFlag: "Before Meal" },
        { TestTime: "01:29", TestDate: "2015-02-25", Result: 2.9 },
        { TestTime: "01:32", TestDate: "2015-02-14", Result: 12.1 },
        { TestTime: "01:37", TestDate: "2015-02-14", Result: 12.0 },
        { TestTime: "01:54", TestDate: "2015-02-22", Result: 14.8 },
        { TestTime: "02:00", TestDate: "2015-01-25", Result: 11.3 },
        { TestTime: "02:02", TestDate: "2015-01-01", Result: 4.8, TestFlag: "Bedtime" },
        { TestTime: "02:06", TestDate: "2015-02-04", Result: 2.2 },
        { TestTime: "02:08", TestDate: "2015-02-10", Result: 7.6, TestFlag: "Before Meal" },
        { TestTime: "02:17", TestDate: "2015-01-15", Result: 2.8 },
        { TestTime: "02:26", TestDate: "2015-01-16", Result: 2.7 },
        { TestTime: "03:08", TestDate: "2015-02-26", Result: 6.3 },
        { TestTime: "03:15", TestDate: "2015-01-09", Result: 2.3 },
        { TestTime: "03:24", TestDate: "2015-02-11", Result: 9.6 },
        { TestTime: "03:25", TestDate: "2015-02-13", Result: 2.9 },
        { TestTime: "03:27", TestDate: "2015-01-25", Result: 6.2 },
        { TestTime: "03:44", TestDate: "2015-01-09", Result: 3.7 },
        { TestTime: "03:53", TestDate: "2015-01-31", Result: 2.2 },
        { TestTime: "04:07", TestDate: "2015-01-09", Result: 5.7 },
        { TestTime: "04:15", TestDate: "2015-02-10", Result: 13.1 },
        { TestTime: "04:21", TestDate: "2015-01-01", Result: 2.9 },
        { TestTime: "04:34", TestDate: "2015-01-14", Result: 17.3 },
        { TestTime: "04:50", TestDate: "2015-01-14", Result: 16.6 },
        { TestTime: "04:51", TestDate: "2015-02-24", Result: 9.2 },
        { TestTime: "05:09", TestDate: "2015-02-11", Result: 7.0 },
        { TestTime: "05:30", TestDate: "2015-01-13", Result: 3.6 },
        { TestTime: "05:35", TestDate: "2015-01-14", Result: 14.7 },
        { TestTime: "06:07", TestDate: "2015-01-20", Result: 5.1 },
        { TestTime: "06:11", TestDate: "2015-02-23", Result: 3.4 },
        { TestTime: "06:12", TestDate: "2015-02-19", Result: 9.2 },
        { TestTime: "06:29", TestDate: "2015-01-04", Result: 8.4 },
        { TestTime: "06:35", TestDate: "2015-02-12", Result: 6.9 },
        { TestTime: "06:40", TestDate: "2015-01-06", Result: 3.7 },
        { TestTime: "06:58", TestDate: "2015-01-08", Result: 8.2 },
        { TestTime: "06:58", TestDate: "2015-02-28", Result: 14.2 },
        { TestTime: "07:04", TestDate: "2015-02-22", Result: 3.4 },
        { TestTime: "07:06", TestDate: "2015-01-29", Result: 16.0 },
        { TestTime: "07:08", TestDate: "2015-01-03", Result: 7.4 },
        { TestTime: "07:08", TestDate: "2015-02-10", Result: 8.3 },
        { TestTime: "07:09", TestDate: "2015-02-14", Result: 10.2 },
        { TestTime: "07:15", TestDate: "2015-01-14", Result: 13.1 },
        { TestTime: "07:16", TestDate: "2015-01-10", Result: 14.9, TestFlag: "Before Meal" },
        { TestTime: "07:21", TestDate: "2015-03-02", Result: 12.1 },
        { TestTime: "07:23", TestDate: "2015-01-16", Result: 8.9 },
        { TestTime: "07:24", TestDate: "2015-01-12", Result: 7.7 },
        { TestTime: "07:26", TestDate: "2015-02-11", Result: 3.3 },
        { TestTime: "07:32", TestDate: "2015-01-09", Result: 10.9 },
        { TestTime: "07:33", TestDate: "2015-02-24", Result: 9.7 },
        { TestTime: "07:34", TestDate: "2015-01-21", Result: 5.9 },
        { TestTime: "07:34", TestDate: "2015-02-20", Result: 5.8 },
        { TestTime: "07:45", TestDate: "2015-01-11", Result: 12.7 },
        { TestTime: "07:45", TestDate: "2015-02-15", Result: 8.5 },
        { TestTime: "07:56", TestDate: "2015-01-18", Result: 10.8 },
        { TestTime: "08:05", TestDate: "2015-01-19", Result: 7.2 },
        { TestTime: "08:06", TestDate: "2015-01-27", Result: 4.8 },
        { TestTime: "08:06", TestDate: "2015-01-29", Result: 10.7 },
        { TestTime: "08:07", TestDate: "2015-01-01", Result: 10.5 },
        { TestTime: "08:11", TestDate: "2015-01-14", Result: 12.7 },
        { TestTime: "08:16", TestDate: "2015-01-08", Result: 3.3 },
        { TestTime: "08:20", TestDate: "2015-02-06", Result: 11.4 },
        { TestTime: "08:22", TestDate: "2015-02-17", Result: 13.0, TestFlag: "Before Meal" },
        { TestTime: "08:33", TestDate: "2015-01-05", Result: 6.6 },
        { TestTime: "08:33", TestDate: "2015-01-15", Result: 13.4 },
        { TestTime: "08:40", TestDate: "2015-02-07", Result: 10.5, TestFlag: "Before Meal" },
        { TestTime: "08:41", TestDate: "2015-02-05", Result: 5.6 },
        { TestTime: "08:51", TestDate: "2015-01-17", Result: 14.3 },
        { TestTime: "08:52", TestDate: "2015-03-02", Result: 9.2, TestFlag: "Before Meal" },
        { TestTime: "08:57", TestDate: "2015-02-12", Result: 7.8, TestFlag: "Before Meal" },
        { TestTime: "09:00", TestDate: "2015-02-16", Result: 7.7, TestFlag: "Before Meal" },
        { TestTime: "09:01", TestDate: "2015-01-14", Result: 13.0 },
        { TestTime: "09:02", TestDate: "2015-01-02", Result: 6.8, TestFlag: "Before Meal" },
        { TestTime: "09:02", TestDate: "2015-01-25", Result: 6.9 },
        { TestTime: "09:06", TestDate: "2015-02-24", Result: 10.8, TestFlag: "Before Meal" },
        { TestTime: "09:08", TestDate: "2015-01-08", Result: 6.6, TestFlag: "Before Meal" },
        { TestTime: "09:08", TestDate: "2015-02-25", Result: 4.6, TestFlag: "Before Meal" },
        { TestTime: "09:16", TestDate: "2015-02-18", Result: 9.0, TestFlag: "Before Meal" },
        { TestTime: "09:17", TestDate: "2015-01-04", Result: 9.3 },
        { TestTime: "09:18", TestDate: "2015-02-09", Result: 9.9, TestFlag: "Before Meal" },
        { TestTime: "09:18", TestDate: "2015-02-13", Result: 9.9, TestFlag: "Before Meal" },
        { TestTime: "09:23", TestDate: "2015-01-22", Result: 5.7 },
        { TestTime: "09:24", TestDate: "2015-01-09", Result: 3.6 },
        { TestTime: "09:26", TestDate: "2015-01-23", Result: 3.7, TestFlag: "Before Meal" },
        { TestTime: "09:28", TestDate: "2015-01-26", Result: 5.4 },
        { TestTime: "09:28", TestDate: "2015-02-19", Result: 4.1 },
        { TestTime: "09:31", TestDate: "2015-02-28", Result: 6.3 },
        { TestTime: "09:32", TestDate: "2015-01-13", Result: 7.4, TestFlag: "Before Meal" },
        { TestTime: "09:39", TestDate: "2015-02-01", Result: 13.5, TestFlag: "Before Meal" },
        { TestTime: "09:46", TestDate: "2015-02-21", Result: 11.8 },
        { TestTime: "09:47", TestDate: "2015-01-17", Result: 12.9 },
        { TestTime: "09:48", TestDate: "2015-01-28", Result: 8.2 },
        { TestTime: "09:49", TestDate: "2015-01-16", Result: 10.2 },
        { TestTime: "09:49", TestDate: "2015-02-02", Result: 10.6 },
        { TestTime: "09:53", TestDate: "2015-01-07", Result: 8.7, TestFlag: "Before Meal" },
        { TestTime: "09:55", TestDate: "2015-01-31", Result: 2.1 },
        { TestTime: "09:55", TestDate: "2015-02-08", Result: 6.8, TestFlag: "Before Meal" },
        { TestTime: "10:02", TestDate: "2015-02-22", Result: 12.3 },
        { TestTime: "10:08", TestDate: "2015-02-23", Result: 10.6, TestFlag: "Before Meal" },
        { TestTime: "10:11", TestDate: "2015-01-20", Result: 8.7, TestFlag: "Before Meal" },
        { TestTime: "10:19", TestDate: "2015-02-15", Result: 7.3 },
        { TestTime: "10:20", TestDate: "2015-02-17", Result: 9.2 },
        { TestTime: "10:22", TestDate: "2015-02-26", Result: 7.5, TestFlag: "Before Meal" },
        { TestTime: "10:27", TestDate: "2015-01-15", Result: 12.6 },
        { TestTime: "10:33", TestDate: "2015-02-04", Result: 7.8 },
        { TestTime: "10:37", TestDate: "2015-01-11", Result: 10.3 },
        { TestTime: "10:42", TestDate: "2015-01-14", Result: 14.2 },
        { TestTime: "10:43", TestDate: "2015-01-01", Result: 7.2 },
        { TestTime: "10:45", TestDate: "2015-02-01", Result: 9.1 },
        { TestTime: "10:47", TestDate: "2015-02-10", Result: 4.7 },
        { TestTime: "10:48", TestDate: "2015-01-26", Result: 11.3 },
        { TestTime: "10:48", TestDate: "2015-02-20", Result: 3.8, TestFlag: "Before Meal" },
        { TestTime: "10:51", TestDate: "2015-02-03", Result: 8.8 },
        { TestTime: "10:56", TestDate: "2015-01-19", Result: 10.5 },
        { TestTime: "10:56", TestDate: "2015-02-27", Result: 9.4, TestFlag: "Before Meal" },
        { TestTime: "10:58", TestDate: "2015-01-25", Result: 6.9 },
        { TestTime: "11:01", TestDate: "2015-01-17", Result: 15.9 },
        { TestTime: "11:09", TestDate: "2015-02-13", Result: 11.2 },
        { TestTime: "11:10", TestDate: "2015-03-03", Result: 14.1, TestFlag: "Before Meal" },
        { TestTime: "11:11", TestDate: "2015-02-24", Result: 12.0 },
        { TestTime: "11:12", TestDate: "2015-01-29", Result: 11.4 },
        { TestTime: "11:13", TestDate: "2015-01-15", Result: 11.2 },
        { TestTime: "11:16", TestDate: "2015-02-25", Result: 4.9 },
        { TestTime: "11:21", TestDate: "2015-01-10", Result: 3.9 },
        { TestTime: "11:23", TestDate: "2015-01-14", Result: 14.9 },
        { TestTime: "11:23", TestDate: "2015-01-30", Result: 3.4 },
        { TestTime: "11:28", TestDate: "2015-01-09", Result: 4.8 },
        { TestTime: "11:30", TestDate: "2015-02-18", Result: 4.5, TestFlag: "Before Meal" },
        { TestTime: "11:31", TestDate: "2015-01-31", Result: 10.7 },
        { TestTime: "11:31", TestDate: "2015-02-03", Result: 6.7, TestFlag: "Before Meal" },
        { TestTime: "11:37", TestDate: "2015-02-20", Result: 6.0, TestFlag: "Before Meal" },
        { TestTime: "11:38", TestDate: "2015-01-04", Result: 7.9 },
        { TestTime: "11:38", TestDate: "2015-02-05", Result: 9.9 },
        { TestTime: "11:39", TestDate: "2015-01-08", Result: 4.0, TestFlag: "Before Meal" },
        { TestTime: "11:39", TestDate: "2015-02-12", Result: 2.6 },
        { TestTime: "11:44", TestDate: "2015-01-06", Result: 4.6, TestFlag: "Before Meal" },
        { TestTime: "11:45", TestDate: "2015-01-05", Result: 6.2, TestFlag: "Before Meal" },
        { TestTime: "11:48", TestDate: "2015-01-23", Result: 5.2, TestFlag: "Before Meal" },
        { TestTime: "11:51", TestDate: "2015-02-10", Result: 10.3 },
        { TestTime: "11:52", TestDate: "2015-01-10", Result: 4.4 },
        { TestTime: "11:53", TestDate: "2015-01-26", Result: 11.7 },
        { TestTime: "11:57", TestDate: "2015-02-16", Result: 3.8 },
        { TestTime: "12:02", TestDate: "2015-01-20", Result: 8.9 },
        { TestTime: "12:04", TestDate: "2015-02-19", Result: 3.9, TestFlag: "Before Meal" },
        { TestTime: "12:04", TestDate: "2015-02-28", Result: 4.6, TestFlag: "After Meal" },
        { TestTime: "12:05", TestDate: "2015-02-08", Result: 7.6 },
        { TestTime: "12:06", TestDate: "2015-03-02", Result: 4.1, TestFlag: "Before Meal" },
        { TestTime: "12:09", TestDate: "2015-02-15", Result: 4.2 },
        { TestTime: "12:11", TestDate: "2015-02-26", Result: 9.8, TestFlag: "Before Meal" },
        { TestTime: "12:14", TestDate: "2015-02-24", Result: 8.9 },
        { TestTime: "12:16", TestDate: "2015-01-24", Result: 4.9 },
        { TestTime: "12:17", TestDate: "2015-01-14", Result: 12.2 },
        { TestTime: "12:20", TestDate: "2015-02-06", Result: 2.8 },
        { TestTime: "12:22", TestDate: "2015-01-17", Result: 15.2 },
        { TestTime: "12:23", TestDate: "2015-01-29", Result: 11.4 },
        { TestTime: "12:24", TestDate: "2015-01-21", Result: 4.8, TestFlag: "Before Meal" },
        { TestTime: "12:26", TestDate: "2015-02-25", Result: 3.5 },
        { TestTime: "12:27", TestDate: "2015-02-01", Result: 5.6 },
        { TestTime: "12:30", TestDate: "2015-01-28", Result: 6.3 },
        { TestTime: "12:33", TestDate: "2015-01-12", Result: 5.5, TestFlag: "Before Meal" },
        { TestTime: "12:42", TestDate: "2015-01-13", Result: 8.0, TestFlag: "Before Meal" },
        { TestTime: "12:45", TestDate: "2015-02-23", Result: 6.7, TestFlag: "Before Meal" },
        { TestTime: "12:47", TestDate: "2015-01-15", Result: 10.2 },
        { TestTime: "12:49", TestDate: "2015-02-17", Result: 5.0 },
        { TestTime: "13:01", TestDate: "2015-01-07", Result: 3.0 },
        { TestTime: "13:03", TestDate: "2015-01-01", Result: 7.8 },
        { TestTime: "13:06", TestDate: "2015-01-16", Result: 12.9 },
        { TestTime: "13:07", TestDate: "2015-02-24", Result: 6.9, TestFlag: "Before Meal" },
        { TestTime: "13:10", TestDate: "2015-01-27", Result: 3.2 },
        { TestTime: "13:14", TestDate: "2015-02-09", Result: 3.1 },
        { TestTime: "13:16", TestDate: "2015-01-20", Result: 4.9, TestFlag: "Before Meal" },
        { TestTime: "13:16", TestDate: "2015-02-04", Result: 4.9, TestFlag: "Before Meal" },
        { TestTime: "13:21", TestDate: "2015-01-26", Result: 10.1, TestFlag: "Before Meal" },
        { TestTime: "13:21", TestDate: "2015-02-11", Result: 6.8, TestFlag: "Bedtime" },
        { TestTime: "13:23", TestDate: "2015-01-10", Result: 6.2 },
        { TestTime: "13:26", TestDate: "2015-02-28", Result: 3.4 },
        { TestTime: "13:28", TestDate: "2015-01-19", Result: 4.2, TestFlag: "Before Meal" },
        { TestTime: "13:28", TestDate: "2015-02-07", Result: 3.2 },
        { TestTime: "13:33", TestDate: "2015-01-17", Result: 9.1 },
        { TestTime: "13:36", TestDate: "2015-01-03", Result: 4.4 },
        { TestTime: "13:37", TestDate: "2015-02-05", Result: 5.6 },
        { TestTime: "13:46", TestDate: "2015-02-10", Result: 7.7 },
        { TestTime: "13:48", TestDate: "2015-02-27", Result: 11.8 },
        { TestTime: "13:53", TestDate: "2015-01-29", Result: 12.3 },
        { TestTime: "13:55", TestDate: "2015-01-11", Result: 5.1 },
        { TestTime: "13:59", TestDate: "2015-01-17", Result: 6.5 },
        { TestTime: "13:59", TestDate: "2015-01-24", Result: 5.8 },
        { TestTime: "14:00", TestDate: "2015-02-25", Result: 7.6 },
        { TestTime: "14:01", TestDate: "2015-03-03", Result: 12.1 },
        { TestTime: "14:03", TestDate: "2015-02-15", Result: 3.2 },
        { TestTime: "14:04", TestDate: "2015-01-04", Result: 10.7 },
        { TestTime: "14:06", TestDate: "2015-02-18", Result: 4.3 },
        { TestTime: "14:10", TestDate: "2015-01-30", Result: 12.3 },
        { TestTime: "14:14", TestDate: "2015-01-18", Result: 7.5, TestFlag: "Before Meal" },
        { TestTime: "14:15", TestDate: "2015-01-31", Result: 7.1 },
        { TestTime: "14:18", TestDate: "2015-02-14", Result: 4.0 },
        { TestTime: "14:24", TestDate: "2015-01-17", Result: 6.8 },
        { TestTime: "14:28", TestDate: "2015-02-22", Result: 8.7 },
        { TestTime: "14:34", TestDate: "2015-01-09", Result: 9.1 },
        { TestTime: "14:34", TestDate: "2015-02-21", Result: 6.5 },
        { TestTime: "14:36", TestDate: "2015-02-07", Result: 3.7, TestFlag: "Before Meal" },
        { TestTime: "14:37", TestDate: "2015-01-24", Result: 5.2 },
        { TestTime: "14:39", TestDate: "2015-01-02", Result: 8.3, TestFlag: "After Meal" },
        { TestTime: "14:41", TestDate: "2015-03-01", Result: 6.4 },
        { TestTime: "14:50", TestDate: "2015-02-13", Result: 6.7 },
        { TestTime: "14:55", TestDate: "2015-02-12", Result: 6.0 },
        { TestTime: "15:01", TestDate: "2015-02-02", Result: 7.0, TestFlag: "After Meal" },
        { TestTime: "15:04", TestDate: "2015-01-27", Result: 3.9 },
        { TestTime: "15:11", TestDate: "2015-01-30", Result: 12.1 },
        { TestTime: "15:11", TestDate: "2015-02-01", Result: 11.6 },
        { TestTime: "15:13", TestDate: "2015-02-09", Result: 5.4, TestFlag: "Before Meal" },
        { TestTime: "15:15", TestDate: "2015-02-23", Result: 6.4, TestFlag: "After Meal" },
        { TestTime: "15:21", TestDate: "2015-02-04", Result: 10.8 },
        { TestTime: "15:23", TestDate: "2015-01-25", Result: 4.3 },
        { TestTime: "15:25", TestDate: "2015-02-20", Result: 3.5 },
        { TestTime: "15:31", TestDate: "2015-01-16", Result: 19.5 },
        { TestTime: "15:33", TestDate: "2015-01-19", Result: 7.9 },
        { TestTime: "15:35", TestDate: "2015-01-10", Result: 5.8 },
        { TestTime: "15:36", TestDate: "2015-01-01", Result: 3.9 },
        { TestTime: "15:36", TestDate: "2015-01-21", Result: 5.9 },
        { TestTime: "15:43", TestDate: "2015-01-06", Result: 3.6 },
        { TestTime: "15:43", TestDate: "2015-02-03", Result: 3.3 },
        { TestTime: "15:52", TestDate: "2015-01-14", Result: 14.0 },
        { TestTime: "15:54", TestDate: "2015-02-17", Result: 6.2 },
        { TestTime: "16:00", TestDate: "2015-02-20", Result: 3.9 },
        { TestTime: "16:01", TestDate: "2015-01-17", Result: 7.2 },
        { TestTime: "16:03", TestDate: "2015-01-22", Result: 4.9 },
        { TestTime: "16:05", TestDate: "2015-01-11", Result: 7.7 },
        { TestTime: "16:10", TestDate: "2015-01-26", Result: 5.9 },
        { TestTime: "16:11", TestDate: "2015-02-15", Result: 8.7 },
        { TestTime: "16:21", TestDate: "2015-01-18", Result: 11.2 },
        { TestTime: "16:24", TestDate: "2015-01-29", Result: 20.5 },
        { TestTime: "16:29", TestDate: "2015-02-06", Result: 6.2 },
        { TestTime: "16:29", TestDate: "2015-02-13", Result: 7.3 },
        { TestTime: "16:31", TestDate: "2015-01-25", Result: 5.6 },
        { TestTime: "16:35", TestDate: "2015-02-14", Result: 9.8 },
        { TestTime: "16:36", TestDate: "2015-02-12", Result: 5.6 },
        { TestTime: "16:37", TestDate: "2015-02-22", Result: 5.4 },
        { TestTime: "16:38", TestDate: "2015-01-03", Result: 5.7 },
        { TestTime: "16:40", TestDate: "2015-01-25", Result: 8.5 },
        { TestTime: "16:41", TestDate: "2015-01-20", Result: 5.1 },
        { TestTime: "16:43", TestDate: "2015-01-27", Result: 3.6 },
        { TestTime: "16:44", TestDate: "2015-01-24", Result: 4.8 },
        { TestTime: "16:56", TestDate: "2015-01-26", Result: 1.9 },
        { TestTime: "17:00", TestDate: "2015-01-28", Result: 5.2 },
        { TestTime: "17:02", TestDate: "2015-01-09", Result: 8.5 },
        { TestTime: "17:03", TestDate: "2015-02-23", Result: 3.8 },
        { TestTime: "17:04", TestDate: "2015-03-02", Result: 4.1 },
        { TestTime: "17:14", TestDate: "2015-01-12", Result: 8.7 },
        { TestTime: "17:14", TestDate: "2015-02-24", Result: 14.8 },
        { TestTime: "17:15", TestDate: "2015-03-02", Result: 3.8 },
        { TestTime: "17:17", TestDate: "2015-02-10", Result: 5.1, TestFlag: "After Meal" },
        { TestTime: "17:20", TestDate: "2015-02-20", Result: 4.9 },
        { TestTime: "17:23", TestDate: "2015-01-30", Result: 2.7 },
        { TestTime: "17:25", TestDate: "2015-02-05", Result: 4.5 },
        { TestTime: "17:25", TestDate: "2015-02-16", Result: 9.1 },
        { TestTime: "17:28", TestDate: "2015-01-19", Result: 10.3 },
        { TestTime: "17:34", TestDate: "2015-01-13", Result: 8.5 },
        { TestTime: "17:34", TestDate: "2015-02-06", Result: 3.6 },
        { TestTime: "17:36", TestDate: "2015-01-15", Result: 13.5 },
        { TestTime: "17:36", TestDate: "2015-01-26", Result: 4.6 },
        { TestTime: "17:38", TestDate: "2015-01-18", Result: 8.4 },
        { TestTime: "17:39", TestDate: "2015-01-07", Result: 7.0 },
        { TestTime: "17:42", TestDate: "2015-01-06", Result: 3.1 },
        { TestTime: "17:42", TestDate: "2015-01-16", Result: 19.3 },
        { TestTime: "17:43", TestDate: "2015-02-16", Result: 8.7 },
        { TestTime: "17:47", TestDate: "2015-01-14", Result: 9.8 },
        { TestTime: "17:52", TestDate: "2015-02-19", Result: 3.4 },
        { TestTime: "17:53", TestDate: "2015-01-08", Result: 4.9 },
        { TestTime: "17:56", TestDate: "2015-01-31", Result: 6.7 },
        { TestTime: "17:58", TestDate: "2015-02-02", Result: 4.5, TestFlag: "Before Meal" },
        { TestTime: "18:00", TestDate: "2015-02-01", Result: 6.1 },
        { TestTime: "18:08", TestDate: "2015-01-29", Result: 22.9 },
        { TestTime: "18:09", TestDate: "2015-02-09", Result: 15.0, TestFlag: "Before Meal" },
        { TestTime: "18:12", TestDate: "2015-01-14", Result: 5.8 },
        { TestTime: "18:14", TestDate: "2015-02-24", Result: 14.8 },
        { TestTime: "18:20", TestDate: "2015-03-01", Result: 7.4 },
        { TestTime: "18:24", TestDate: "2015-02-26", Result: 3.8 },
        { TestTime: "18:25", TestDate: "2015-02-25", Result: 4.8 },
        { TestTime: "18:33", TestDate: "2015-01-17", Result: 3.7 },
        { TestTime: "18:38", TestDate: "2015-02-28", Result: 5.3 },
        { TestTime: "18:39", TestDate: "2015-02-08", Result: 13.0 },
        { TestTime: "18:40", TestDate: "2015-02-06", Result: 4.9, TestFlag: "Before Meal" },
        { TestTime: "18:42", TestDate: "2015-01-16", Result: 18.0 },
        { TestTime: "18:43", TestDate: "2015-02-03", Result: 14.5 },
        { TestTime: "18:46", TestDate: "2015-02-04", Result: 5.4, TestFlag: "Before Meal" },
        { TestTime: "18:54", TestDate: "2015-02-01", Result: 3.9, TestFlag: "Before Meal" },
        { TestTime: "18:56", TestDate: "2015-01-15", Result: 8.3 },
        { TestTime: "18:57", TestDate: "2015-01-03", Result: 5.6 },
        { TestTime: "19:01", TestDate: "2015-02-25", Result: 5.3 },
        { TestTime: "19:06", TestDate: "2015-01-20", Result: 4.2 },
        { TestTime: "19:07", TestDate: "2015-01-06", Result: 4.3 },
        { TestTime: "19:11", TestDate: "2015-01-14", Result: 3.8 },
        { TestTime: "19:11", TestDate: "2015-02-27", Result: 7.5 },
        { TestTime: "19:12", TestDate: "2015-01-01", Result: 8.9 },
        { TestTime: "19:15", TestDate: "2015-01-25", Result: 10.0 },
        { TestTime: "19:16", TestDate: "2015-01-04", Result: 7.0 },
        { TestTime: "19:16", TestDate: "2015-01-28", Result: 4.3, TestFlag: "Before Meal" },
        { TestTime: "19:16", TestDate: "2015-02-15", Result: 5.6 },
        { TestTime: "19:25", TestDate: "2015-02-14", Result: 14.3 },
        { TestTime: "19:26", TestDate: "2015-02-17", Result: 5.2 },
        { TestTime: "19:26", TestDate: "2015-02-28", Result: 3.1 },
        { TestTime: "19:27", TestDate: "2015-01-14", Result: 3.3 },
        { TestTime: "19:28", TestDate: "2015-01-02", Result: 4.1 },
        { TestTime: "19:28", TestDate: "2015-01-29", Result: 14.8 },
        { TestTime: "19:33", TestDate: "2015-01-10", Result: 6.3 },
        { TestTime: "19:33", TestDate: "2015-01-18", Result: 4.2, TestFlag: "Before Meal" },
        { TestTime: "19:36", TestDate: "2015-01-09", Result: 7.1 },
        { TestTime: "19:38", TestDate: "2015-01-27", Result: 8.4, TestFlag: "Before Meal" },
        { TestTime: "19:41", TestDate: "2015-01-04", Result: 4.2 },
        { TestTime: "19:41", TestDate: "2015-02-13", Result: 8.1, TestFlag: "Before Meal" },
        { TestTime: "19:47", TestDate: "2015-01-01", Result: 8.0 },
        { TestTime: "19:48", TestDate: "2015-01-25", Result: 4.8, TestFlag: "Before Meal" },
        { TestTime: "19:53", TestDate: "2015-01-26", Result: 6.8, TestFlag: "Before Meal" },
        { TestTime: "19:53", TestDate: "2015-01-31", Result: 7.4, TestFlag: "Before Meal" },
        { TestTime: "19:53", TestDate: "2015-02-15", Result: 4.3 },
        { TestTime: "19:57", TestDate: "2015-01-16", Result: 16.4 },
        { TestTime: "19:57", TestDate: "2015-01-30", Result: 9.1 },
        { TestTime: "20:02", TestDate: "2015-02-09", Result: 15.3 },
        { TestTime: "20:04", TestDate: "2015-02-16", Result: 6.1 },
        { TestTime: "20:08", TestDate: "2015-01-15", Result: 3.1 },
        { TestTime: "20:12", TestDate: "2015-01-29", Result: 13.8 },
        { TestTime: "20:13", TestDate: "2015-01-23", Result: 4.4, TestFlag: "Before Meal" },
        { TestTime: "20:14", TestDate: "2015-01-20", Result: 4.5, TestFlag: "Before Meal" },
        { TestTime: "20:15", TestDate: "2015-02-14", Result: 9.7 },
        { TestTime: "20:23", TestDate: "2015-01-11", Result: 9.6 },
        { TestTime: "20:25", TestDate: "2015-02-27", Result: 9.0, TestFlag: "Before Meal" },
        { TestTime: "20:26", TestDate: "2015-01-05", Result: 9.7, TestFlag: "Before Meal" },
        { TestTime: "20:28", TestDate: "2015-02-07", Result: 8.7 },
        { TestTime: "20:34", TestDate: "2015-01-17", Result: 4.1 },
        { TestTime: "20:35", TestDate: "2015-01-04", Result: 5.8, TestFlag: "Before Meal" },
        { TestTime: "20:38", TestDate: "2015-02-22", Result: 11.4 },
        { TestTime: "20:40", TestDate: "2015-01-29", Result: 3.7 },
        { TestTime: "20:40", TestDate: "2015-02-24", Result: 15.5 },
        { TestTime: "20:40", TestDate: "2015-02-25", Result: 10.8, TestFlag: "Before Meal" },
        { TestTime: "20:45", TestDate: "2015-02-02", Result: 8.7 },
        { TestTime: "20:47", TestDate: "2015-01-16", Result: 18.0 },
        { TestTime: "20:50", TestDate: "2015-02-21", Result: 18.3 },
        { TestTime: "20:55", TestDate: "2015-01-06", Result: 5.4, TestFlag: "Before Meal" },
        { TestTime: "20:58", TestDate: "2015-01-14", Result: 4.7 },
        { TestTime: "21:04", TestDate: "2015-01-31", Result: 9.9, TestFlag: "After Meal" },
        { TestTime: "21:09", TestDate: "2015-02-01", Result: 6.2, TestFlag: "Bedtime" },
        { TestTime: "21:09", TestDate: "2015-02-12", Result: 15.1, TestFlag: "Before Meal" },
        { TestTime: "21:11", TestDate: "2015-01-10", Result: 6.5 },
        { TestTime: "21:11", TestDate: "2015-01-30", Result: 9.4 },
        { TestTime: "21:13", TestDate: "2015-01-03", Result: 5.1 },
        { TestTime: "21:13", TestDate: "2015-01-07", Result: 5.7 },
        { TestTime: "21:13", TestDate: "2015-03-02", Result: 17.4 },
        { TestTime: "21:14", TestDate: "2015-02-03", Result: 11.5 },
        { TestTime: "21:18", TestDate: "2015-02-14", Result: 9.5, TestFlag: "Before Meal" },
        { TestTime: "21:19", TestDate: "2015-03-01", Result: 7.5 },
        { TestTime: "21:22", TestDate: "2015-01-18", Result: 7.8 },
        { TestTime: "21:29", TestDate: "2015-01-12", Result: 6.0, TestFlag: "Before Meal" },
        { TestTime: "21:36", TestDate: "2015-01-05", Result: 11.9 },
        { TestTime: "21:38", TestDate: "2015-01-16", Result: 16.6 },
        { TestTime: "21:41", TestDate: "2015-02-24", Result: 15.2 },
        { TestTime: "21:44", TestDate: "2015-01-06", Result: 11.5 },
        { TestTime: "21:45", TestDate: "2015-01-02", Result: 10.6 },
        { TestTime: "21:46", TestDate: "2015-02-06", Result: 5.6 },
        { TestTime: "21:49", TestDate: "2015-02-19", Result: 11.6 },
        { TestTime: "21:52", TestDate: "2015-01-19", Result: 10.9 },
        { TestTime: "21:52", TestDate: "2015-01-25", Result: 12.9 },
        { TestTime: "21:52", TestDate: "2015-02-09", Result: 12.6 },
        { TestTime: "21:57", TestDate: "2015-01-26", Result: 15.5, TestFlag: "Bedtime" },
        { TestTime: "22:00", TestDate: "2015-02-10", Result: 8.3 },
        { TestTime: "22:01", TestDate: "2015-01-04", Result: 3.7 },
        { TestTime: "22:01", TestDate: "2015-01-15", Result: 4.7 },
        { TestTime: "22:02", TestDate: "2015-02-27", Result: 10.7, TestFlag: "Bedtime" },
        { TestTime: "22:05", TestDate: "2015-02-16", Result: 6.9, TestFlag: "Bedtime" },
        { TestTime: "22:08", TestDate: "2015-01-28", Result: 14.5, TestFlag: "After Meal" },
        { TestTime: "22:09", TestDate: "2015-02-12", Result: 15.3 },
        { TestTime: "22:09", TestDate: "2015-02-14", Result: 13.5, TestFlag: "After Meal" },
        { TestTime: "22:09", TestDate: "2015-02-20", Result: 4.4 },
        { TestTime: "22:12", TestDate: "2015-01-11", Result: 6.7 },
        { TestTime: "22:12", TestDate: "2015-01-21", Result: 13.8 },
        { TestTime: "22:15", TestDate: "2015-03-02", Result: 16.5 },
        { TestTime: "22:19", TestDate: "2015-01-17", Result: 12.5 },
        { TestTime: "22:26", TestDate: "2015-02-24", Result: 14.4 },
        { TestTime: "22:29", TestDate: "2015-01-14", Result: 5.0 },
        { TestTime: "22:30", TestDate: "2015-02-25", Result: 15.8 },
        { TestTime: "22:31", TestDate: "2015-02-05", Result: 6.1 },
        { TestTime: "22:33", TestDate: "2015-01-16", Result: 9.8, TestFlag: "Bedtime" },
        { TestTime: "22:37", TestDate: "2015-01-15", Result: 4.8 },
        { TestTime: "22:37", TestDate: "2015-02-15", Result: 6.8 },
        { TestTime: "22:38", TestDate: "2015-01-07", Result: 7.7, TestFlag: "Before Meal" },
        { TestTime: "22:40", TestDate: "2015-01-24", Result: 9.4 },
        { TestTime: "22:42", TestDate: "2015-01-26", Result: 13.7, TestFlag: "Bedtime" },
        { TestTime: "22:49", TestDate: "2015-01-29", Result: 3.3 },
        { TestTime: "22:50", TestDate: "2015-01-30", Result: 12.7 },
        { TestTime: "22:52", TestDate: "2015-01-12", Result: 4.0 },
        { TestTime: "22:55", TestDate: "2015-01-14", Result: 4.8, TestFlag: "Bedtime" },
        { TestTime: "22:58", TestDate: "2015-02-03", Result: 6.7, TestFlag: "Bedtime" },
        { TestTime: "23:02", TestDate: "2015-01-08", Result: 16.8 },
        { TestTime: "23:03", TestDate: "2015-02-25", Result: 13.7 },
        { TestTime: "23:05", TestDate: "2015-01-15", Result: 4.2 },
        { TestTime: "23:11", TestDate: "2015-01-13", Result: 23.5 },
        { TestTime: "23:14", TestDate: "2015-01-16", Result: 7.1 },
        { TestTime: "23:20", TestDate: "2015-01-11", Result: 7.9, TestFlag: "Bedtime" },
        { TestTime: "23:24", TestDate: "2015-01-16", Result: 6.5 },
        { TestTime: "23:25", TestDate: "2015-02-18", Result: 10.4 },
        { TestTime: "23:27", TestDate: "2015-02-21", Result: 18.4, TestFlag: "Before Meal" },
        { TestTime: "23:30", TestDate: "2015-01-24", Result: 14.4 },
        { TestTime: "23:33", TestDate: "2015-01-20", Result: 5.7 },
        { TestTime: "23:36", TestDate: "2015-01-22", Result: 13.0 },
        { TestTime: "23:36", TestDate: "2015-03-02", Result: 13.1 },
        { TestTime: "23:37", TestDate: "2015-01-10", Result: 6.4, TestFlag: "Bedtime" },
        { TestTime: "23:37", TestDate: "2015-02-12", Result: 8.2 },
        { TestTime: "23:40", TestDate: "2015-01-19", Result: 9.4, TestFlag: "Bedtime" },
        { TestTime: "23:42", TestDate: "2015-02-23", Result: 13.2, TestFlag: "Bedtime" },
        { TestTime: "23:47", TestDate: "2015-02-17", Result: 7.2, TestFlag: "Bedtime" },
        { TestTime: "23:53", TestDate: "2015-02-26", Result: 13.2 },
        { TestTime: "23:54", TestDate: "2015-02-19", Result: 3.9 },
        { TestTime: "23:54", TestDate: "2015-02-24", Result: 9.6, TestFlag: "Bedtime" },
        { TestTime: "23:55", TestDate: "2015-02-09", Result: 3.0 },
        { TestTime: "23:56", TestDate: "2015-02-22", Result: 14.5 }
    ]
    $scope.data1 = data;

    var data2 = {};
    var dates = [];

    var timeRE = /(\d+)/g;
    // TODO Use foreach http://stackoverflow.com/a/5721125/162215
    for (var i=0; i<data.length; i++) {
        var bg = data[i];

        var timeParts = bg.TestTime.match(timeRE);
        var timeAsNumber = (timeParts[0] * 60) + Number(timeParts[1]);
        var transformed;
        if (!(timeAsNumber in data2)) {
            transformed = { x: timeAsNumber };
            data2[timeAsNumber] = transformed;
        }
        else {
            transformed = data2[timeAsNumber];
        }

        var key = bg.TestDate;
        transformed[key] = bg.Result;

        dates.push(key);
    }
    $scope.data2 = data2;

    var data3 = [];
    for (var key in data2) {
        data3.push(data2[key]);
    }
    $scope.data3 = data3;

    $scope.data = data3;

    dates = dates.sort().filter(function(elem, pos) {
        return dates.indexOf(elem) == pos;
    });

    function time_to_string(time) {
        var hours = Math.floor(time / 60).toString();
        if (hours.length < 2) hours = '0' + hours;

        var mins = (time % 60).toString();
        if (mins.length < 2) mins = '0' + mins;

        return hours + ':' + mins;
    }

    var options = {
        axes: {
            x: {key: 'x', labelFunction: time_to_string, type: 'linear', min: 0, max: 1440, ticks:[0,240,480,720,960,1200]},
            y: {type: 'linear', min: 0, max: 20, ticks:[0,4,7,10,15,20]},
        },
        series: [],
        tooltip: {mode: 'scrubber', formatter: function(x, y, series) {
            var date = series.y;
            return date + ' ' + time_to_string(x) + ' - ' + y;
        }},
        drawLegend: true
    }

    for (var i=0; i<dates.length; i++) {
        options.series.push({y: dates[i], thickness: '2px',  label: dates[i]});
    }

    $scope.options = options;

    $scope.weekchoices = [
        { Label: "(all)",        Start: "2013-01-01", End: "2015-03-03" },
        { Label: "5-11 Jan",     Start: "2015-01-05", End: "2015-01-11" },
        { Label: "12-18 Jan",    Start: "2015-01-12", End: "2015-01-18" },
        { Label: "19-25 Jan",    Start: "2015-01-19", End: "2015-01-25" },
        { Label: "26 Jan-1 Feb", Start: "2015-01-26", End: "2015-02-01" },
        { Label: "2-8 Feb",      Start: "2015-02-02", End: "2015-02-08" },
        { Label: "9-15 Feb",     Start: "2015-02-09", End: "2015-02-15" },
        { Label: "16-22 Feb",    Start: "2015-02-16", End: "2015-02-22" },
        { Label: "23 Feb-1 Mar", Start: "2015-02-23", End: "2015-03-01" }
    ]

    var changedDateFilter = function(weekchoice) {
//        alert(weekchoice.Label);
        var serieses = $scope.options.series;
        for (var i=0; i<serieses.length; i++) {
            var activate = serieses[i].y >= weekchoice.Start && serieses[i].y <= weekchoice.End;
            serieses[i].visible = activate;
        }
//        alert("Done");
    }
    $scope.changedDateFilter = changedDateFilter;

    $scope.dateFilter = $scope.weekchoices[1];
    changedDateFilter($scope.dateFilter);



});

