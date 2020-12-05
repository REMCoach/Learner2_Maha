const { startConnection } = require("../../helpers/databaseConnection");
let connection = startConnection();


const fileUpload = require('express-fileupload')
var path = require('path');
//const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();


 const { json } = require("body-parser");


const {
    DB_HOST,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_TIMEZONE
  } = require("../src/config");

  
  let db_config = {
    
    host: DB_HOST,database: DB_NAME,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    timezone: DB_TIMEZONE,
  
  };


//db connection

var db =mysql.createConnection(db_config);

db.connect()
//console.log(db);
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });






class CmsContent {
  
   static A(tableName, value) {
    return new Promise((resolve, reject) => {
      connection.query(
        `insert into ${tableName} set ?`,
        [value],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }
 static sendmail(tableName, value) {
    return new Promise((resolve, reject) => {
      connection.query(
        `insert into ${tableName} set ?`,
        [value],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }

  
  
  
  static addMaster(tableName, value) {
    return new Promise((resolve, reject) => {
      connection.query(
        `insert into ${tableName} set ?`,
        [value],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }

  static updateMaster(tableName, id, value, column = "id") {
    return new Promise((resolve, reject) => {
      connection.query(
        `update ${tableName} set ? where ${column} = ?`,
        [value, id],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }

  static deleteMaster(tableName, id) {
    return new Promise((resolve, reject) => {
      connection.query(
        `update ${tableName} set status='deactive' where id = ?`,
        [id],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }
  static getFreedom(selection, tableName, condition, groupby, orderby) {
    console.log(
      `select ${selection} from ${tableName} where ${condition} group by ${groupby} order by ${orderby}`
    );
    return new Promise((resolve, reject) => {
      connection.query(
        `select ${selection} from ${tableName} where ${condition} group by ${groupby} order by ${orderby}`,
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }
}

app.post('/banner',(req,res)=>{
  let age = req.body.age
  let city  = req.body.city
  let religion  = req.body.religion
  let url = req.body.url
  

  if(age=="18+"){
    if(city=="Chennai"){
        if(religion=="Religion1"){
          console.log("mapping")
          db.query("insert into Example (mapping) values(?)",[url],(err,result)=>{
            if(!err){res.send({"Example":"banner"})}
            else{res.send("error"),
          console.log(err);}
          })
        }else{
          console.log("type2")
          db.query("insert into Example (mapping) values (?)",[url],(err,result)=>{
            if(!err){res.send({"":"mapping"})}
            else{res.send("error")}
          })
        }
    }else{
      if(religion=="Religion1"){
        console.log("type3")
        db.query("insert into task4 (type3) values (?)",[url],(err,result)=>{
          if(!err){res.send({"type":"type3"})}
          else{res.send("error")}
        })
      }else{
        console.log("type4")
        db.query("insert into task4 (type4) values (?)",[url],(err,result)=>{
          if(!err){res.send({"type":"type4"})}
          else{res.send("error")}
        })
      }
    }

  }else{
    if(city=="Chennai"){
      if(religion=="Religion1"){
        console.log("type5")
        db.query("insert into task4 (type5) values (?)",[url],(err,result)=>{
          if(!err){res.send({"type":"type5"})}
          else{res.send("error")}
        })
      }else{
        console.log("type6")
        db.query("insert into task4 (type6) values (?)",[url],(err,result)=>{
          if(!err){res.send({"type":"type6"})}
          else{res.send("error")}
        })
      }
  }else{
    if(religion=="Religion1"){
      console.log("type7")
      db.query("insert into task4 (type7) values (?)",[url],(err,result)=>{
        if(!err){res.send({"type":"type7"})}
        else{res.send("error")}
      })
    }else{
      console.log("type8")
      db.query("insert into task4 (type8) values (?)",[url],(err,result)=>{
        if(!err){res.send({"type":"type8"})}
        else{res.send("error")}
      })
    }
  }


  }


})






app.get('/banner',(req,res)=>{
  db.query("select * from Example",(err,result)=>{
    if(!err){res.send(result)}
    else{console.log(err)}
  })
})


module.exports = CmsContent;
