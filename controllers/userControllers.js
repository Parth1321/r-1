const User = require("../models/userModel");

exports.home = function(req, res, next){
    res.status(200).json({success: true, message: " This is the test route"});
};

exports.createuser =  async function (req, res, next){
    try{
        const newuser =  new user(req.body);
        await nesuser.save();
    res.status(201).json({success: true, user: newuser});
    }catch(erroe) {
        res.status(201).json({success: false, message: error.message});
    }
    
};