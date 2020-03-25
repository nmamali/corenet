//user table
if ( connection ) {
  console.log("checking to create tables ");
  var sql = "CREATE TABLE IF NOT EXISTS `users` ( `id` INT NOT NULL AUTO_INCREMENT ,  `first_name` TEXT NOT NULL , `last_name` TEXT NOT NULL ,`email` TEXT NOT NULL ,`password` TEXT NOT NULL , `avatar` TEXT NOT NULL, `deleted` INT NOT NULL  ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB";
  connection.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
      }
  });
}
//next table
//CREATE TABLE IF NOT EXISTS `corenect`.`order` ( `id` INT NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `price` INT NOT NULL , `quantity` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
if ( connection ) {
  console.log("checking to create tables ");
  var sql = "CREATE TABLE IF NOT EXISTS orders` ( `id` INT NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `price` INT NOT NULL , `quantity` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB";
  connection.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
      }
  });
