'user strict';

var mysql = require('mysql');

//local mysql db connection
// var remoteConnection = mysql.createConnection({
//     host     : 'database-2.ce4xeyyyfquk.sa-east-1.rds.amazonaws.com',
//     user     : 'admin',
//     password : 'corenect2019',
//     database : 'covid19',
//     port: 3306

// });

var localConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'corenect',
    port: 3306

});



localConnection.connect(function(err) {
    if (err){
        console.log(err)
    } else{
        var sql = "CREATE TABLE IF NOT EXISTS `users` ( `id` INT NOT NULL AUTO_INCREMENT ,  `first_name` TEXT NOT NULL , `last_name` TEXT NOT NULL ,`email` TEXT NOT NULL ,`password` TEXT NOT NULL , `avatar` TEXT NOT NULL, `deleted` INT NOT NULL  ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB";
        localConnection.query(sql , function (err, res) {
            if(err) {
              console.log("error: ", err);
            }
        });
        console.log ( "database connected ");
    }    

});



module.exports = localConnection;
