const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        Email:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true
        }
    });

module.exports = mongoose.model("adminlogins", userSchema); 