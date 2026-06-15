const expenseModel = require("../model/ExpenseModel");


const addExpense=async(req,resp)=>{
    try {
        const {title,category,amount,date,desc,userName}=req.body;
        await expenseModel.create({title,category,amount,date,desc,userName})
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);             
    }
}

const showExpense =async (req,resp)=>{
    try{
        const data =await expenseModel.findById(req.params.id);
        resp.render("show",{data});
    }catch(e){
        console.log(e);
        
    }
};
const editForm = async (req, resp) => {
    try {
        const data = await expenseModel.findById(req.params.id);
        resp.render("edit", { data });
    } catch (error) {
        console.log(error);
    }
}

const updateExpense = async (req, resp) => {
    try {
        const { title,category,amount,date,desc,userName } = req.body;

        await expenseModel.findByIdAndUpdate(
            req.params.id,
            { title,category,amount,date,desc,userName }
        );

        resp.redirect("/dashboard");
    } catch (error) {
        console.log(error);
    }
}

const deleteExpense=async(req,resp)=>{
    try {
        await expenseModel.findByIdAndDelete(req.params.id);
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
        
    }
}


module.exports={addExpense,showExpense,deleteExpense,editForm,updateExpense}