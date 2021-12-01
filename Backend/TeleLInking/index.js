const express=require("express");
const getDetail=require("./checkTelelinks");
const databaseeCheck=require("./databaseLinkCheck");
const groupExtract=require("./group Extracker");
const cors=require("cors");
var path = require('path');
var { initializeApp } = require('firebase/app');
var { getDatabase, get, ref, child, set, push, remove } = require('firebase/database');
const { async } = require("@firebase/util");

var options = {
    root: path.join(__dirname)
};
let port = process.env.PORT || 3000;

const firebaseConfig = {
    apiKey: "AIzaSyCNPje1QfnH8Pg8oLzKYj_Guy1GaiiyWLs",
    authDomain: "telelinking-techfarm.firebaseapp.com",
    databaseURL: "https://telelinking-techfarm-default-rtdb.firebaseio.com",
    projectId: "telelinking-techfarm",
    storageBucket: "telelinking-techfarm.appspot.com",
    messagingSenderId: "344916823855",
    appId: "1:344916823855:web:aff753138b8af5bb579bda"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

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
    databaseeCheck.run(db);
    res.sendFile("timepage.html", options)

})
app.get("/extractfromwebsite",async(req,res)=>{
    groupExtract.run(db);
    res.sendFile("timepage.html", options)

})
app.listen(port, () => {
    console.log(`App lisition on the localhost port runing on http://localhost:${port}`)
})
