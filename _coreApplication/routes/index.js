'use strict';

module.exports = function(app) {
  //add users mgt route file path
  var usersRoute = require("./UserManagement");
  app.use("/api/users" , usersRoute);
  
};
