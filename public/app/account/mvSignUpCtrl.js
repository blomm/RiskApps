angular.module('mvApp').controller('mvSignUpCtrl',['$scope','$location','mvAuth','mvNotifier',function($scope,$location,mvAuth,mvNotifier){

  $scope.signUpRoles=['user'];

  $scope.signup=function(){
    var newUserData={
      userName:$scope.userName,
      email:$scope.email,
      password:$scope.password,
      firstName:$scope.fname,
      lastName:$scope.lname,
      roles:[$scope.roleChoice]
      };

    mvAuth.createUser(newUserData).then(function(){
      mvNotifier.notify('User Account Created.');
      $location.path('/');
    },function(reason){
      mvNotifier.error(reason);
    })
  }

}])