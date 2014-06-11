angular.module('mvApp').controller('mvNavBarLoginCtrl', ['$scope','$location','mvNotifier','mvIdentity','mvAuth',function($scope,$location,mvNotifier,mvIdentity,mvAuth){
  $scope.identity = mvIdentity;

  $scope.signout=function(){
    mvAuth.logoutUser().then(function(){
      $scope.userName="";
      $scope.password="";
      mvNotifier.notify("Sign out successful")
      $location.path('/');
    })
  };
}])
