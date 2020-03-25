'use strict';
var express = require('express');

var UserRouter = express.Router();
var usersController = require('../controllers/OrderController');

// users app Routes
UserRouter.route('/add')
  .get(usersController.addAnOrder)
  .post(usersController.addAnOrder); //change this to a differrent function


module.exports = UserRouter;
