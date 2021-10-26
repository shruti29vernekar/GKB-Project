const express = require("express");
const cron = require('node-cron');
const shell= require('shelljs');
//const mailsend = require("./mailsend/mail");

cron.schedule("59 59 23 * * *", function(){
    //app.use(mailsend);
    console.log("send suc");
});


require("../src/db/conn");

const UserRanking = require("./models/user");
const router = require("./routers/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);







app.listen(port, () =>{
    console.log(`connection is live at port no. ${port}`);
})