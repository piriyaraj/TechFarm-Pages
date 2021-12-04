const express=require("express");
const cors=require("cors");

let port =process.env.PORT || 3000;


const app = express();
app.use(cors());


app.get("/",(req,res)=>{
    res.send("welcome ");
})

app.listen(port,()=>{
    console.log(`App lisition on the localhost port runing on http://localhost:${port}`)
})