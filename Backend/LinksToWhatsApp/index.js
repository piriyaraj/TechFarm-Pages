const express = require("express");
var cors = require('cors');
const schedule = require('node-schedule');;

const axios = require("axios");
const cheerio = require("cheerio");
const waTools=require("./groupsorExtract");
const invaildRemover = require("./invaildRemover")


var { initializeApp } = require('firebase/app');
var { getDatabase, get, ref, child, set, push, remove } = require('firebase/database');
const { async } = require("@firebase/util");

// const serviceAccount = require('./path/to/key.json');
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
app.use(cors());
let port = process.env.PORT || 3000;

var path = require('path');
var options = {
    root: path.join(__dirname)
};

app.get("/", (req, res) => {
    res.send(`
    <a href='/getmail'>sent mail</a> <br/> <br/>
    <a href='/extractfromgroupsor'>extract</a> <br/> <br/>
    <a href='/invalidcheck'>invalid check</a> <br/> <br/>
    <a href='/run'>run all</a>
    `);
})
app.get("/extractfromgroupsor",(req,res)=>{
    res.sendFile("timepage.html", options);
    waTools.run(db);
    
})
app.get("/invalidcheck", (req, res) => {
    res.sendFile("timepagevalid.html", options)
    invaildRemover.run(db)

})
// app.get("/getmail",(req,res)=>{
//     mailer.sent("piriyaraj1998@gmail.com", "Groupsor Extract started");
//     res.send("mail send");
// })
// app.get("/run", (req, res) => {
//     main();
// })
app.listen(port, () => {
    console.log(`App lisition on the localhost port runing on http://localhost:${port}`)
})
function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd.toLocaleString();
}

// setInterval(function () {
//     console.log('====================================');
//     console.log("start Runing ", calcTime('colombo', '+5.5'));

//     // mailer.sent("piriyaraj1998@gmail.com", "Groupsor Extract started");
//     groupsorExtract.run();
//     console.log('====================================');
// }, 5*60000);


const main= async ()=>{
    console.log("running stated ", calcTime('colombo', '+5.5'));
    await waTools.extractGroupsor();
    await waTools.invalidChecker();
    mailer.sent("piriyaraj1998@gmail.com", "Groupsor Extract started");
    console.log("running finished ", calcTime('colombo', '+5.5'));

}
// main();
// const job = schedule.scheduleJob('15 * * * *', function () {
//     groupsorExtract.run();

// });