const nodemailer = require("nodemailer");

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service : 'gmail',
    host : "smtp.gmail.com",
    port : 587,
    secure : false,
    auth : {
        user: process.env.EMAIL_USER, 
        pass : process.env.EMAIL_PASS,
    }
})

let mailOptions = {
    from : {
        name : "AHAD",
        address : process.env.EMAIL_USER
    },
    to: 'kangueloic9@gmail.com',
    subject : "Welcome to ahad",
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
}

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error(error)
    }
}

sendMail(transporter, mailOptions);