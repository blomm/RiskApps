angular.module("leaflet-directive").directive('renewables',[function(){
    return {
      restrict: "A",
      scope: false,
      replace: false,
      require: 'leaflet',
      link:function(scope, element, attrs, controller){

        //var leafletScope  = controller.getLeafletScope();
        //var renewableModel  = leafletScope.renewables;

        controller.getMap().then(function(map) {
          map.on('locationfound', function(){
            var text = " lat: " +map.getCenter().lat + " lng:" + map.getCenter().lng;

            window.alert("Found You... " + text);
          });
        });
      }

    };
}]);