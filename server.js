const express = require('express')
const cors = require('cors');
const { db } = require('./database/db');
const {readdirSync} = require('fs');
const bodyParser = require('body-parser');
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
      await transporter.sendMail(mailOptions )
      console.log('Email has been sent')
   } catch (error) {
      console.error(error)
   }
}

const app  = express()

//Utilisation du fichier .env pour la recuperation de certaine données
require('dotenv').config()

const PORT = process.env.PORT

//Middlewares
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

//Fixation du suffixe "/api/v1/ à nos routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
sendMail(transporter, mailOptions);
   db();
   app.listen(PORT, () => {
      console.log('You are listening to port : ', PORT);
   })
}

server();
