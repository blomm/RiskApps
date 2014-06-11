angular.module('mvApp').controller('mvHeaderCtrl',['$scope','mvIdentity',function($scope,mvIdentity){
  $scope.identity=mvIdentity;
}])