const nodemailer = require('nodemailer');
var sender = nodemailer.createTransport(
{
service:
auth:
{
user:'',
pass:''
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
