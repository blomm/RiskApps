angular.module('mvApp').factory('mvDemPoints', ['$resource',function($resource){

  var DemResource=$resource('/api/dempoints/:id',{_id:"@id"});

  return DemResource;

}])