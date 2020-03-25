'use strict';

//laod the  model from the model folder
var OrderModel = require('../model/OrderModel');

//
exports.addAnOrder = function(req, res) {
  OrderModel.AddAnOrder(function(err, order) {

    console.log('controller recived data,  add an order');
    if (err)
      res.send(err);
    console.log('res', order);
    res.send(order);
  });


};
