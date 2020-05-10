'user strict';

//connect to mysqldatabase and  create tables that have not been created
var conn_sql = require("../../config/connectDatabaseMysql");

//Task object constructor
var UsersModel = function(usersModel){
  this.usersModel = usersModel.usersModel;
  this.usersModel = usersModel.usersModel;
  this.created_at = new Date();
};

UsersModel.getAllUsers = function (result) {
  //get all users from the users table
  var sql = "Select * from users";
  conn_sql.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        console.log('users fetched in model : ', res);
        result(null, res);
      }
  });
};

UsersModel.addNewUserEntry = function (result,req) {

  let user = JSON.parse(JSON.stringify(req.body));
  var sql = "INSERT INTO users (first_name, last_name, email, password, avatar, deleted) VALUES ('"+user.firstName+"', '"+user.lastName+"', '"+user.email+"', '"+user.password+"', '"+user.avatar+"', '"+user.deleted+"')";
  conn_sql.query(sql , function (err, res) {
    if(err) {
      console.log("Ping: ", err);
      result(null, err);
    }
    else{
      console.log('cases fetched in model : ', res);
      res.user = user;
      result(null, res);
    }
});

};

UsersModel.updateUser = (result,req)=>{
  let user = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE users SET first_name = '"+user.firstName+"', last_name = '"+user.last_name+", email='"+user.email+" , password='"+user.password+"' ,avatar='"+user.avatar+", deleted='"+user.deleted+" WHERE id = '"+user.id+"'"

  conn_sql.query(sql , function (err, res) {
    if(err) {
      console.log("Ping: ", err);
      result(null, err);
    }
    else{
      console.log('cases fetched in model : ', res);
      res.user = user;
      result(null, res);
    }
});  

}


module.exports= UsersModel;
