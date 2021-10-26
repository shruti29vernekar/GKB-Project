//const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

//at a particular Date and time
const someDate = new Date('2021-10-25T21:29:00.000+5:30')
schedule.scheduleJob(someDate, () => {
    console.log('job ran', new Date().toString())
})

//At recurrent interval
//schedule.scheduleJob('*/2 * * * * *', () =>{
   // console.log("I ran...")
//})
//step1
/*let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'shrutivernekar29@gmail.com',
        pass:'snverne29@'
    }
});

let mailOptions = {
    from: 'shrutivernekar29@gmail.com',
    to: 'shrutivernekar0829@gmail.com',
    subject:'Testing and testing',
    text:'IT works'
};

//step3
transporter.sendMail(mailOptions, function(err, data) {
    if(err){
        console.log('Error occure', err);
    }else {
        console.log('Email send!!');
    }
});*/