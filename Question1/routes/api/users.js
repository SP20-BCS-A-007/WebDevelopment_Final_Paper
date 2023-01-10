const express = require("express")
const User = require("../../models/user")
var bcrypt = require("bcryptjs")
const _ = require("lodash")
const jwt = require("jsonwebtoken"); 
const Router = express.Router();

Router.post("/login", async(req, res)=>{
    let user = await User.findOne({name: req.body.name})
    if(!user){
        return(
            res.send("User with this email is not registered.")
        )
    }
    let isValid = await bcrypt.compare(req.body.password, user.password)
    if(!isValid){
        return(
            res.send("Password is Incorrect.")
        )
    }else{
        let token = jwt.sign({_id: user._id, name: user.name}, "myprivatekey")
        return(
            res.send(token)
        )
    }

})

module.exports = Router;