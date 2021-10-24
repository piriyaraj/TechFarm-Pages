const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("hello telegram backend home")
})

app.listen(4000)
