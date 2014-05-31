angular.module("leaflet-directive").directive('renewables',['mvCalcEnergyFactory',function(mvCalcEnergyFactory){
    return {
      restrict: "A",
      scope: false,
      replace: false,
      require: 'leaflet',
      link:function(scope, element, attrs, controller){

        var leafletScope  = controller.getLeafletScope();
        var markers = leafletScope.markers;

        controller.getMap().then(function(map) {
          map.on('locationfound', function(){
            var text = " lat: " +map.getCenter().lat + " lng:" + map.getCenter().lng;

            mvCalcEnergyFactory.calcEnergy(map.getCenter().lng,map.getCenter().lat).then(function(response){
              console.log(response.solar[0] + "  " + response.wind[0]);
              markers.mainMarker= {
                lat: map.getCenter().lat,
                lng: map.getCenter().lng,
                focus: true,
                message: "Solar: " + response.solar[0].Solar_kwh2 +" kwh<br>Wind: " + response.wind[0].Wind_kwh2+" kwh",
                draggable: false
              };
              //window.alert(response.solar + "  " + response.wind);
            },function(reason){
              window.alert('failed: ' + reason);
            })

          });
        });
      }
    };
}]);