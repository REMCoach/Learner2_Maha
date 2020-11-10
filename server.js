require('dotenv').config();
const nodemailer = require('nodemailer');
var sender = nodemailer.createTransport(
{
service:
auth:
{
user:'process.env.EMAIL',
pass:'process.env.PASSWORD'
}
});

var composemail ={
from''
to:''
subject:''
text:''
};

sender.sendMail(composemail,function(error,info){
if(error)
{
console.log(error);
}
else{
console.log("mail sent successsfully"+info.response);
}
});
