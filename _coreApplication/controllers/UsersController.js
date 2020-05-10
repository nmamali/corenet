'use strict';

//laod the jammie model from the model folder
var UsersModel = require('../model/UsersModel');

//when routed to list all jammie stops x
exports.list_all_users = function(req, res) {
  UsersModel.getAllUsers(function(err, users) {

    console.log('controller recived data,  load all users');
    if (err)
      res.json(err);
    console.log('res', users);
    res.json(users);
  });

};

exports.add_user = function(req, res) {
  UsersModel.addNewUserEntry((err, entry)=> {

    console.log('controller recived data,  add new user entry');
    if (err)
      res.send(err);
    console.log('res', entry);
    res.send(entry);
  } , req);
};

exports.update_user = (req,res) =>{
  UsersModel.updateUser((err,entry)=>{
    console.log("update UserEntry");
    if(err) res.send(err)
    console.log('res',entry);
    res.send(entry);

  }, req);
}

