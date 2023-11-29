const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    adharno:Number,
    city:String,
    dob:String,
    fathername:String,
    mothername:String,
    address:String,
    contact:Number,
    gender:String
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel