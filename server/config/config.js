var path=require('path');

var rootPath=path.normalize(__dirname+'/../../');

module.exports={
  development:{
    db:'mongodb://localhost/renewables',
    rootPath:rootPath,
    port:3030
  },
  production:{
    db: process.env.MONGOLAB_URI,
    rootPath:rootPath,
    port:process.env.PORT||80
  }
}