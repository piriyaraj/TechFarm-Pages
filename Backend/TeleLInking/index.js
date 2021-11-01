const express=require("express");
const getDetail=require("./checkTelelinks");
const databaseeCheck=require("./databaseLinkCheck");
const cors=require("cors");
var path = require('path');
var options = {
    root: path.join(__dirname)
};
let port = process.env.PORT || 3000;

const app = express();
app.use(cors())

app.get("/",(req,res)=>{
    
    // console.log(options);
    res.sendFile("home.html", options)
    // res.send("hello telegram backend home")
})
app.get("/groupetails/:link",async(req,res)=>{
    res.send(await getDetail.get("https://t.me/"+req.params.link))
})
app.get("/checkdatabase", async (req, res) => {
    databaseeCheck.run();
    res.sendFile("home.html", options)

})
app.listen(port, () => {
    console.log(`App lisition on the localhost port runing on http://localhost:${port}`)
})
