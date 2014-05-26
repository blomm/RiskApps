angular.module('mvApp').controller('mvRenewablesMapCtrl',['$scope', function($scope){

  angular.extend($scope, {
    center: {
      autoDiscover:true,
      zoom: 16
    },
    events: {
      map: {
        enable: ['locationfound'],
        logic: 'emit'
      }
    },
    renewables:{message:"Herro world."},
    markers:{}
  });

  $scope.$on('leafletDirectiveMap.locationfound', function(event){
    $scope.eventDetected = "location found!!!";
  });
}])