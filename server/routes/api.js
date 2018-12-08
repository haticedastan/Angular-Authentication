const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb://uservishwas:H1a2tice@ds113445.mlab.com:13445/eventsdb"

/*mongoose.connect(db,err =>{
    if(err){
        console.error('error'+err)
    }else{
        console.log('connected to mongodb')
    }
})*/

mongoose.connect('mongodb://uservishwas:H1a2tice@ds113445.mlab.com:13445/eventsdb', { useNewUrlParser: true }, (err, res) => {
    if (err){
        console.error('error:'+err)
    }else{
        console.log('connected to mongodb');
    }
})
router.get('/',(req,res)=>{
    res.send('From API route')
})

router.post('/register',(req,res)=>{
    let userData=req.body
    let user = new User (userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send(registeredUser)
        }
    })
})
router.post('/login',(req,res)=>{
    let userData=req.body
    User.findOne({email: userData.email},(error,user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else
            if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            }else{
                res.status(200).send(user)
            }
        }
    })
})
router.get('/events',(req,res)=>{
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"2",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"3",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"4",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"5",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
    ]
    res.json(events)

})

router.get('/special',(req,res)=>{
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"2",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"3",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"4",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            "_id":"5",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
    ]
    res.json(events)

})

module.exports =router 

