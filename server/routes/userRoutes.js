const express = require('express')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const adminModel = require('../models/adminModel')

const router = express.Router()

router.post('/register',async(req,res)=>{
    const {password,username,email,adharno,city,address,dob,fathername,gender,mothername,contact} = req.body
    try {
        const user = await userModel.findOne({email})
        if(user){
            res.json('user already registered')
        }else{
            const hashed = await bcrypt.hash(password,10)
            const newUser = await userModel.create({
                username,email,adharno,city,address,dob,fathername,gender,mothername,contact,
                password:hashed
            })
            res.json(newUser)
        }
    } catch (error) {
        res.json(error)
    }
})

router.post('/login',async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(user){
            const match = await bcrypt.compare(password,user.password)
            if(match){
                res.json(user)
            }else{
                res.json('invalid user or password')
            }
        }else{
            res.json('not registered')
        }
    } catch (error) {
        res.json(error)
    }
})

router.post('/admin-register',async(req,res)=>{
    const {secretKey,username,email,password} = req.body
    try {
        if(secretKey){
            if(secretKey === 'vickySecretKey'){
                const admin = await adminModel.findOne({email})
                if(admin){
                    res.json('you are already registered')
                }else{
                    const hashed = await bcrypt.hash(password,10)
                    const encrypt = await bcrypt.hash(secretKey,10)
                    const newAdmin = await adminModel.create({
                        username,email,password:hashed,secretKey:encrypt
                    })
                    res.json(newAdmin)
                }
            }else{
                res.json('invalid admin')
            }
        }else{
            res.json('invalid admin')
        }
    } catch (error) {
        res.json(error)
    }
})

router.post('/admin-login',async(req,res)=>{
    const {email,password,secretKey} = req.body
    try {
        const admin = await adminModel.findOne({email})
        if(admin){
            const matchPassword = await bcrypt.compare(password,admin.password)
            const matchSecret = await bcrypt.compare(secretKey,admin.secretKey)
            if(matchPassword && matchSecret){
                res.json(admin)
            }else{
                res.json('invalid admin')
            }
        }else{
            res.json('not registered')
        }
    } catch (error) {
        res.json(error)
    }
})

router.get('/getalluser',async(req,res)=>{
    try {
        const allUser = await userModel.find()
        res.json(allUser)
    } catch (error) {
        res.json(error)
    }
})

router.get('/getuser/:userId',async(req,res)=>{
    const {userId} = req.params
    try {
        const user = await userModel.findById({_id:userId})
        if(user){
            res.json(user)
        }else{
            res.json('user not found')
        }
    } catch (error) {
        res.json(error)
    }
})

router.post('/delete/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const user = await userModel.findByIdAndDelete({_id:id})
        if(user){
            res.json('user deleted')
        }else{
            res.json('user already deleted')
        }
    } catch (error) {
        res.json(error)
    }
})
module.exports = router