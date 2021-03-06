var auth = require('./auth'),
  mongoose=require('mongoose'),
  users=require('../controllers/users'),
  solarPoints=require('../controllers/solarPoints'),
  windPoints=require('../controllers/windPoints'),
  demPoints=require('../controllers/demPoints'),
  calcEnergy=require('../controllers/calcEnergy');

module.exports=function(app){

  app.get('/api/users', auth.requiresRole('admin'),users.getUsers);
  app.delete('/api/users', users.deleteUser)
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/calcenergy', auth.requiresRole('user'), calcEnergy.calculateEnergy)

  app.get('/api/solarpoints', auth.requiresRole('user'), solarPoints.getGridPoints);

  app.get('/api/windpoints', auth.requiresRole('user'), windPoints.getGridPoints);

  app.get('/api/dempoints', auth.requiresRole('user'), demPoints.getDemPoints);

  app.get('/partials/*', function(request, result){
    result.render('../../public/app/'+request.params)
  })

  app.post('/logout',function(req,res){
    req.logout();
    res.send();
  })

  app.post('/login',auth.authenticate)

  app.all('/api/*',function(req,res){
    res.send(404);
  })

  //default-catch-all route handling
  app.get('*', function(req, res){
    res.render('index',{bootstrappedUser:req.user});
  })

}

