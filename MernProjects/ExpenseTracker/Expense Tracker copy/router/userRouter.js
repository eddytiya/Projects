const express = require('express');
const { logout, dashboard, login, register } = require('../controller/userController');


const router = express.Router()

//to open register form

router.get("/",(req,resp)=>{
    resp.render("register")
})

//register logic run
router.post("/register",register)

router.get("/login",(req,resp)=>{
    resp.render("login")
})

router.post("/login",login)

router.get("/dashboard",dashboard)

router.get("/logout",logout)

module.exports = router;