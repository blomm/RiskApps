angular.module('mvApp').controller('mvMainLoginCtrl', ['$scope','$location','mvNotifier','mvIdentity','mvAuth',function($scope,$location,mvNotifier,mvIdentity,mvAuth){
  $scope.identity = mvIdentity;

  if(mvIdentity.isAuthenticated()){
    $location.path('/home');
  }

  $scope.signin=function(userName,password){

    mvAuth.authenticateUser(userName, password).then(function(authenticated){
      if(authenticated){
        mvNotifier.notify("Login successful");
        $location.path('/home');
      }
      else{
        mvNotifier.notify("Login failed");
      }

    });

  };

}])