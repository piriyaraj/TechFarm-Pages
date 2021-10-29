const express=require("express");
const getDetail=require("./checkTelelinks");
const databaseeCheck=require("./databaseLinkCheck");
const cors=require("cors");
let port = process.env.PORT || 3000;

const app = express();
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello telegram backend home")
})
app.get("/groupetails/:link",async(req,res)=>{
    res.send(await getDetail.get("https://t.me/"+req.params.link))
})
app.get("/checkdatabase", async (req, res) => {
    databaseeCheck.run();
    res.write("started");
})
app.listen(port, () => {
    console.log(`App lisition on the localhost port runing on http://localhost:${port}`)
})
