const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const UserModel= require('./models/User')

app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/car_rental_system')

app.post('/register',(req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login',(req, res) => {
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user =>{
        if(user){
            if(user.password === password) {
                res.json("Success")
                if(user.type === "owner"){
                    res.json("owner")

                }else{
                res.json("incorect password")}
            }

        }else{
            res.json("No record")
        }
    })
})

app.listen(8080, () => {
    console.log("Server is Running")
})