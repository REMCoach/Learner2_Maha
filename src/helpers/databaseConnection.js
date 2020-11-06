"user strict";
const mysql = require("mysql");
const chalk = require("chalk");
const {
  DB_HOST,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_TIMEZONE
} = require("../config");

let db_config = {
  // connectionLimit: 200,
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  timezone: DB_TIMEZONE,
  timeout: 1000
};

module.exports.startConnection = function() {
  let connection = mysql.createPool(db_config);
  connection.query(function(err) {
    if (err) {
      //console.error('error connecting MYSQL : ' + err.stack);
      console.error("fullError : " + err);
    } else {
      console.log("MYSQL connected as id : " + connection.threadId);
      console.log("status : " + connection.state);
    }
  });
  connection.on("error", function(err) {
    // console.error('error  : ' + err.stack);
    console.error("OnError  : ");
    console.error(err);
  });
  return connection;
};
module.exports.endConnection = function() {
  let connection = mysql.createPool(db_config);
  connection.end(function(err) {
    if (err) {
      console.log("CloseError");
      console.log(err);
    }
    console.log("closed");
  });
  return true;
};
