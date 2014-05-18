var SolarPoint=require('mongoose').model('SolarPoint');

exports.getGridPoints=function(req, res){
  SolarPoint.find({}).exec(function(err,collection){
    res.send(collection);
  })
}