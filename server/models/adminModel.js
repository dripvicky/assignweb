const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    secretKey:String,
    username:String,
    password:String,
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const adminModel = mongoose.model('admin',adminSchema)

module.exports = adminModel