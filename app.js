require('dotenv').config();
const express=require('express');
const app=express();
const { connectDB } = require('./config/db');
const router = require('./router');
connectDB()
app.use (express.json());
app.use(router);



module.exports=app;