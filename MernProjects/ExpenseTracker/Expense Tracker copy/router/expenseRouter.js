const express = require('express');
const { showExpense, updateExpense, editForm, addExpense, deleteExpense } = require('../controller/ExpenseController');



const brouter=express.Router()

brouter.get("/showExpense/:id",showExpense)

brouter.get("/addExpense",(req,resp)=>{
    resp.render("add");
})
brouter.get("/editExpense/:id", editForm);

brouter.put("/updateExpense/:id", updateExpense);
brouter.post("/addExpense",addExpense)

brouter.delete("/delete/:id",deleteExpense)

module.exports = brouter;