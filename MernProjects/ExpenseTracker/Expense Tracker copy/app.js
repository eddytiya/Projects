const express = require('express');
const methodOverride = require( 'method-override');
const { connectDB } = require('./db');
const session = require('express-session');
const router = require('./router/userRouter');
const brouter = require('./router/expenseRouter');


const app=express()


connectDB()

app.use(session({
    secret:"expenseapp",
    resave:false,
    saveUninitialized:false
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(methodOverride("_method"))

app.set("view engine","ejs")

app.use("/",router)
app.use("/",brouter)



app.listen(3321,()=>{
    console.log("running....");
    
})