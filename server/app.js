const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes.js')

const connect = async() => {
    await mongoose.connect('mongodb+srv://vickykarma:vicky123@cluster0.4dzlzyv.mongodb.net/assigndb?retryWrites=true&w=majority')
    .then(()=>console.log('connect to db'))
    .catch((err)=>console.log(err))
}
const app = express()
app.use(express.json())
app.use(cors())

app.listen(3001,()=>{
    console.log('server run on 3001')
})

connect()

app.use('/api/user',userRoutes)