'use strict';
var express = require('express');

var UserRouter = express.Router();
var usersController = require('../controllers/Product_Controller');

// users app Routes
UserRouter.route('/add')
  .get(usersController.addNewProduct)
  .post(usersController.addNewProduct); //change this to a differrent function


module.exports = UserRouter;
