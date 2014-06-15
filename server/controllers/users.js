var User=require('mongoose').model('users'),
  encryption=require('../utilities/encryption');

exports.getUsers=function(req,res){

  if(req.query._id !== undefined)
  {
    console.log("Selecting single user");
    User.findOne({ _id: req.query._id }).exec(function (err, singleUser) {
      res.send(singleUser);
    });
  }
  else{
    console.log("Selecting many users");
    User.find({}).exec(function(err,collection){
      res.send(collection)
    })
  }

}

exports.deleteUser=function(req,res){
  console.log(req.body);
  console.log("should delete user here....");
  User.findOneAndRemove({ _id: req.query._id }, function (err, user) {
    console.log("should remove... " + user);
    res.send(user);
  });
}

exports.createUser=function(req,res,next){
  var userData=req.body;
  userData.userName=userData.userName.toLowerCase();
  userData.salt=encryption.createSalt();
  userData.hashed_password=encryption.hashPwd(userData.salt, userData.password)
  User.create(userData, function(err,user){
    if(err){
      if(err.toString().indexOf('E11000') > -1){
        err=new Error('Duplicate Username');
      }
      res.status(400);
      return res.send({reason:err.toString()});

    }
    req.logIn(user, function(err){
      if(err){return next(err);}
      res.send(user);
    })
  })
}

exports.updateUser=function(req,res){
  var userUpdates=req.body;

  if(req.user._id != userUpdates._id && !req.user.hasRole('admin')){
    req.status(403);
    return res.end();
  }

  console.log("req.user.username: "+req.user.username);
  console.log("userUpdates.username: "+userUpdates.username)
  req.user.firstName=userUpdates.firstName;
  req.user.lastName=userUpdates.lastName;
  req.user.username=userUpdates.username;

  if(userUpdates.password && userUpdates.password.length>0){
    req.user.salt=encrypt.createSalt();
    req.user.hashed_password=encrypt.hashPwd(req.user.salt, userUpdates.password);

  }
  req.user.save(function(err){
    if(err){res.status(400); return res.send({reason:err.toString()})}
    res.send(req.user);
  })

}