angular.module('mvApp').factory('mvSolarPointsFactory', ['$resource',function($resource){

  var SolarResource=$resource('/api/solarpoints/:id',{_id:"@id"},{
    update:{method:'PUT',isArray:false}
  });

  return SolarResource;

}])