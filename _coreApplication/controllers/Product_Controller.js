'use strict';

//laod the  model from the model folder
var OrderModel = require('../model/Product_Model');

//a vendor addinng a new prod - add a new product
exports.addNewProduct = function(req, res) {
  //decpyt the req here
    //deccryption is the same for all the models, should be a sepearte function in the auth folder
    //import the file and use the function
    //the same process for sending back the request. { check the data stored in the model is encypted first}
  //
  OrderModel.addNewProduct(function(err, product) {

    console.log('controller recived data,  add an new product');
    if (err)
      res.send(err);
    console.log('res', product);
    res.send(product);
  });


};
