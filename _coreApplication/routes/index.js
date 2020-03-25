'use strict';

module.exports = function(app) {
  //add users mgt route file path
  var usersRoute = require("./UserManagement");
  app.use("/api/users" , usersRoute);

  //add order mgt file path
  var productRoute = require("./Product_Management");
  app.use("/api/product" , productRoute);

  //add order mgt file path
  var orderRoute = require("./OrderManagement");
  app.use("/api/orders" , orderRoute);
};
