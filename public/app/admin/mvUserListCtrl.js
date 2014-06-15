angular.module('mvApp').controller('mvUserListCtrl', ['$scope','mvUser',function($scope,mvUser){

  $scope.users= mvUser.query();

  $scope.removeUser=function(user){
    mvUser.delete({_id:user._id},function(entity){
      $scope.users.pop(entity);
    });
    //TODO: some kind of callback to update the $scope.users object
    //http://stackoverflow.com/questions/15429825/why-is-this-resource-not-updating-the-view-after-using-delete-method

//    var user2 =mvUser.get({_id:user._id},
//      function(){
//        user2.$delete(function(removedUser){
//          console.log("removed " +removedUser);
//        },function(reason){
//          console.log("remove failed: " + reason);
//        });
//      },function(reason){
//        console.log("failed because: " + reason.data);
//      });
  }

}])