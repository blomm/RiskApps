var proj4=require('proj4'),
DemPoint=require('mongoose').model('DemPoint'),
SolarPoint=require('mongoose').model('SolarPoint'),
WindPoint=require('mongoose').model('WindPoint');

exports.calculateEnergy=function(req, res){

  console.log(req.query.long);
  console.log(req.query.lat);

  var ll = new Array(2);
  ll[0] = parseFloat(req.query.long);
  ll[1] = parseFloat(req.query.lat);

  console.log(ll);
  var pnt = { type : "Point", coordinates : ll };

  res.json({
    solar: SolarPoint.find({ Shape : { $near : pnt }}).limit(1),
    wind: WindPoint.find({ Shape : { $near : pnt }}).limit(1)
  });

//  SolarPoint.find({ Shape : { $near : pnt }}).limit(1).exec(function(err, res) {
//    if (err)
//      console.log(err);
//    else
//      console.log("Closest to %s is %s", JSON.stringify(pnt), res);
//
//  });
//
//  res.send(ll);

}
