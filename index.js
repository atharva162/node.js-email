require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.set('view engine','ejs');
app.listen(3000,()=>{
    console.log(`Server running on port 3000`)
 })
app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/contact',(req,res)=>{
    if(req.body.mailid==''){
        res.json('Please enter any mail id to send the mail');
    }
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    var valid = emailRegex.test(req.body.mailid);
     if(!valid){
         res.json('Email Id is not valid, please enter a valid mail')
     }
     if(req.body.message==''){
         res.json('Please Enter any message to send mail');
     }
        const nodemailer = require('nodemailer');
        let mailtransport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.MAIL,
                pass: process.env.PASSWORD
            }
        });
        let maildetails ={
            from: process.env.MAIL,
            to: req.body.mailid,
            subject: req.body.subject,
            text: req.body.message
        };
        mailtransport.sendMail(maildetails,(err,data)=>{
            if(err){
                res.send("Email could not sent due to error: "+err)
            }else{
                res.json('Email is successfully sent');
            }
        })
})