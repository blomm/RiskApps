angular.module('mvApp').controller('mvWindPointsCtrl',['$scope','mvWindPointsFactory',function($scope,mvWindPointsFactory){

  $scope.windPoints=  mvWindPointsFactory.query();

}]);