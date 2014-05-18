var mongoose = require('mongoose'),
  userModel = require('../models/User'),
  demPointModel=require('../models/DemPoint'),
  windPointModel=require('../models/WindEnergyPoint'),
  solarPointModel=require('../models/SolarEnergyPoint');

module.exports=function(config){

  mongoose.connect(config.db);

  var db = mongoose.connection;
  db.on('error',console.error.bind(console, 'connection error'))  ;
  db.once('open',function callback(){
    console.log('renewables db opened');
  });

  userModel.createDefaultUsers();
  solarPointModel.populateSolarPointCollection();
  windPointModel.populateWindPointCollection();
  demPointModel.populateDemCollection();
}
