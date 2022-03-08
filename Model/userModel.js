const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const user = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobile : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required : true
    }
})

user.pre("save", async function(){
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    // await this.save();
    
})

const User = mongoose.model("user", user)
module.exports = User;
