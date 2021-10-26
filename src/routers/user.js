const express = require("express");
const router = new express.Router();
//const cron = require('node-cron');
//const shell= require('shelljs');
//const schedule = require('node-schedule');



const UserRanking = require("../models/user");



//cteate post
router.post("/user", async (req, res) =>{
    try{
        const addingUserRecords = new UserRanking(req.body)
        console.log(req.body);
        const insertUser = await addingUserRecords.save();
        res.status(201).send(insertUser);
    }catch(e){
        res.status(400).send(e);
    }
    
})

//handle get request
router.get("/user", async (req, res) =>{
    try{
        
        const getUser =  await UserRanking.find({}).sort({userid:1});
        res.send(getUser);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/user/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getUsers =  await UserRanking.findById({_id});
        res.send(getUsers);
    }catch(e){
        res.status(400).send(e);
    }
})

//handle get update
router.patch("/user/:id", async (req, res) =>{
    try{
        const _id = req.params.id;
        const getUsers =  await UserRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(getUsers);
    }catch(e){
        res.status(500).send(e);
    }
})

//handle get delete
router.delete("/user/:id", async (req, res) =>{
    try{
       
        const getUsers =  await UserRanking.findByIdAndDelete(req.params.id);
    
        res.send(getUsers);
    }catch(e){
        res.status(500).send(e);
    }
})


//send mail


router.get("/sendemail", function (req, res, next) {

        const nodemailer = require("nodemailer");

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'shrutivernekar29@gmail.com',
                    pass: 'snverne29@'
                },
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '" Shruti" <shrutivernekar29@gmail.com>', // sender address
                to: "shrutivernekar0829@gmail.com,", // list of receivers
                subject: "Accout Created ✔", // Subject line
                //text: "Hello world?", // plain text body
                html: "<b>Account Created Successfuly Thank you....</b>", // html body
            });

            if (info.messageId) {
                res.send('Email send!!');
            } else {
                res.send('Error occure');
            }


            // Preview only available when sending through an Ethereal account

        }

        main().catch(console.error);

    });


module.exports  = router;