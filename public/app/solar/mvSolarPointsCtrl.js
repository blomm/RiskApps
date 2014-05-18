angular.module('mvApp').controller('mvSolarPointsCtrl',['$scope','mvSolarPointsFactory',function($scope,mvSolarPointsFactory){

  $scope.solarPoints=  mvSolarPointsFactory.query();
}]);