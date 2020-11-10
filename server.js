require('dotenv').config();
const nodemailer = require('nodemailer');
var sender = nodemailer.createTransport(
{
service:
auth:
{
user:'mahalakshmid50@gmail.com',
pass:'mahad1999'
}
});

var composemail ={
from:'mahalakshmid50@gmail.com',
to:'mahalaks1999@gmail.com',
subject:'maha',
text:'hi'
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
