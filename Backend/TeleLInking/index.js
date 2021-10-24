const express=require("express");
const app=express();
let port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("hello telegram backend home")
})

app.listen(port, () => {
    console.log(`App lisition on the localhost port runing on http://localhost:${port}`)
})
