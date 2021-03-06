const express = require('express');
const app = express();
const router=require('express').Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const serverless = require('serverless-http')


require('dotenv').config();
const PORT = 4000;
app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'content-type');

    // Pass to next layer of middleware
    next();
});

const uri= process.env.ATLAS_URI;
mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Mongo db running");
})

const supportRouter =require('./routes/support');
app.use('/',supportRouter)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
}); 
 
module.exports.handler=serverless (app)