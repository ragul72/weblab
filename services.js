var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout, $interval) {
  $scope.myHeader = "Hi my name is Sharon";
  $timeout(function () {
      $scope.myHeader = "This is WEB PROGRAMMING LAB SESSION";
  }, 2000);
 
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});
