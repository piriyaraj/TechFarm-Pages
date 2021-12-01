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
    apiKey: "AIzaSyCS4okSW3m4HAjyrUyuzTTVSIp7w4INCMU",
    authDomain: "smart-shopping-cart-ssc.firebaseapp.com",
    databaseURL: "https://smart-shopping-cart-ssc-default-rtdb.firebaseio.com",
    projectId: "smart-shopping-cart-ssc",
    storageBucket: "smart-shopping-cart-ssc.appspot.com",
    messagingSenderId: "160224436712",
    appId: "1:160224436712:web:fd9c34e6c8467a34a3845d"
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
