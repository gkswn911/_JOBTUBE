const mongoose=require('mongoose');
const express=require('express');
require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.address, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('MongoDB Connected...'))
        .catch((err) => console.log(err));

const handleOpen=()=>console.log('connected to DB');
const handleError=(err)=>console.log(`Error on DB connection : ${err}`);

const db=mongoose.connection;

db.once('open',handleOpen);
db.on('error',handleError);
