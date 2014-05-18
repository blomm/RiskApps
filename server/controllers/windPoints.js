var WindPoint=require('mongoose').model('WindPoint');

exports.getGridPoints=function(req, res){
  WindPoint.find({}).exec(function(err,collection){
    res.send(collection);
  })
}