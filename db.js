var mongoose=require('mongoose');
var express=require('express');
require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.address, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('MongoDB Connected...'))
        .catch((err) => console.log(err));

var handleOpen=()=>console.log('connected to DB');
var handleError=(err)=>console.log(`Error on DB connection : ${err}`);

var db=mongoose.connection;

db.once('open',handleOpen);
db.on('error',handleError);

console.log('앙 기모리');
