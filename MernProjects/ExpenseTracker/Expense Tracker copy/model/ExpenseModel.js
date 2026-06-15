const mongoose = require('mongoose');

const expenseSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    userName:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }

},{timestamps:true})

const expenseModel=mongoose.model("expense",expenseSchema)

module.exports=expenseModel