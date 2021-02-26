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
app.use(express.json());

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