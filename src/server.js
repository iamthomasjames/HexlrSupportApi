const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
const PORT = 4000;
app.use(cors());
app.use(express.json());

const uri= process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://hexlrtech:112233.ad@cluster0.3e8rn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Mongo db running");
})

const supportRouter =require('./routes/support');
app.use('/support',supportRouter)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});