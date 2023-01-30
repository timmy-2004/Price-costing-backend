const mongoose = require('mongoose'); 
const dotenv = require('dotenv').config()
const {adminSignup} = require('../startup/seed')
console.log(process.env.db_url);
mongoose.connect(process.env.db_url)
.then(() =>{ 
    console.log('Connected to DB')
    // adminSignup()
}, (err)=> {})
