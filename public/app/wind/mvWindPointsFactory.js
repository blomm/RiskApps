angular.module('mvApp').factory('mvWindPointsFactory', ['$resource',function($resource){

  var WindResource=$resource('/api/windpoints/:id',{_id:"@id"},{
    update:{method:'PUT',isArray:false}
  });

  return WindResource;

}])