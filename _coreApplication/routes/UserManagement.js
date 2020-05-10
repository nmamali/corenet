'use strict';
var express = require('express');

var UserRouter = express.Router();
var usersController = require('../controllers/UsersController');

// users app Routes
UserRouter.route('/list')
  .get(usersController.list_all_users)
  .post(usersController.list_all_users); //change this to a differrent function

UserRouter.post("/add", usersController.add_user)
UserRouter.post("/update", usersController.update_user)


module.exports = UserRouter;
