var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS
    }
});


function sentMail(to, message){
    var mailOptions = {
        from: process.env.MAIL_ID,
        to: to,
        subject: 'GroupSor extract update',
        text: message
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports.sent=sentMail;