    const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        max:[50,'Name too long'],
        min:[2, "Name too short"],
        require:[true,"name is required"]
    },
    description:{
        type:String,
        max:[100, "Email too long"],
        min:[2, "Email too short"],
        require:[true, "description is required"]
    },
    price:{
        type:Number,
        max:[10000, "Not in Price range"],
        min:[1, "Can't be like this "],
        require:[true, "price is needed"]
    }

})

const User = mongoose.model("User", productSchema)

exports.User=User