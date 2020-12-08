const { startConnection } = require("../../helpers/databaseConnection");
let connection = startConnection();
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
          console.log("type1")
          db.query("insert into Example (type1) values(?)",[url],(err,result)=>{
            if(!err){res.send({"Example":"banner"})}
            else{res.send("error"),
          console.log(err);}
          })
        }else{
          console.log("type2")
          db.query("insert into Example (type2) values (?)",[url],(err,result)=>{
            if(!err){res.send({"":"mapping"})}
            else{res.send("error")}
          })
        }
    }else{
      if(religion=="Religion1"){
        console.log("type3")
        db.query("insert into Example (type3) values (?)",[url],(err,result)=>{
          if(!err){res.send({"type":"type3"})}
          else{res.send("error")}
        })
      }
      }
    }

  app.get('/banner',(req,res)=>{
  db.query("select * from Example",(err,result)=>{
    if(!err){res.send(result)}
    else{console.log(err)}
  })
})
module.exports = CmsContent;
