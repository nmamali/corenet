'user strict';

//connect to mysqldatabase and  create tables that have not been created
var conn_sql = require("../../config/connectDatabaseMysql");

//Task object constructor
var ProductModel = function(productModel){
  this.productModel = orderModel.productModel;
  this.created_at = new Date();
};

ProductModel.addNewProduct = function (result) {
  //add a new order
  var sql = "INSERT INTO `orders` (`id`, `name`, `price`, `quantity`) VALUES (NULL, 'test oder', '230', '11')";
  conn_sql.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        console.log('added new order : ', res);
        result(null, res);
      }
  });
};

module.exports= ProductModel;
