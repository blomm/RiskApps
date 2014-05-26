angular.module('mvApp').factory('mvCalcEnergyFactory',['$http','$q',function($http,$q){


  return {
    calcEnergy:function(long,lat){
      var deferred = $q.defer();

      $http.get('/api/calcenergy',{params:{long: long, lat: lat}}).success(function(data){
        deferred.resolve(data);
      }).error(function(data, status){
        deferred.reject(data);
      })
      return deferred.promise;

    }
  };

}]);