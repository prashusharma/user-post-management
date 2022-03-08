const mongoose = require("mongoose")

const post = new mongoose.Schema({
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    message : {
        type : String
    } ,
    likedby : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Comments : [
        {
            sentBy : {
                type : mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
        }
    ]
    
    
},  { timestamps: true })

const Post = mongoose.model("post", post)
module.exports = Post