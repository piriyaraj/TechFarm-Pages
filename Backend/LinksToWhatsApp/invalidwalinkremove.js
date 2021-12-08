// constants
const { async } = require('@firebase/util');
var { initializeApp} = require('firebase/app');
const axios = require("axios");
const cheerio = require("cheerio")
var { getDatabase, ref, child, remove, set, push, get, onDisconnect} = require('firebase/database');
var lastchekedtable;
var waLinkKeys;
var titles=[0,0];
var alllinkscheck="-1";

var allTableName = [];
var groupData;

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

const app =initializeApp(firebaseConfig);
const db = getDatabase(app);

const getalllinkscheck = async (waid) => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/AllLinks/" + waid)).then((snapshot) => {
        if (snapshot.exists()) {
            alllinkscheck = 1;
        } else {
            alllinkscheck = 0;
            // console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
// const presenceRef = ref(db, "disconnectmessage");
// Write a string when this client loses connection
const singleGroup = async (path) => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, path)).then((snapshot) => {
        if (snapshot.exists()) {
            groupData = [];
            snapshot.forEach(childSnapshot => {
                // allTableName.push(childSnapshot.key)
                groupData.push(childSnapshot.val());
            })
            // lastPostUrl = snapshot.val()['lastchekedtable'];
        } else {
            console.log("No data available");
            lastPostUrl = -1;

        }
    }).catch((error) => {
        lastPostUrl = -1;
        console.error(error);
    });
}

const getallTableName = async () => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/")).then((snapshot) => {
        if (snapshot.exists()) {
            allTableName = [];
            snapshot.forEach(childSnapshot => {
                allTableName.push(childSnapshot.key)
                // console.log(childSnapshot.key)
            })
            // lastPostUrl = snapshot.val()['lastchekedtable'];
        } else {
            console.log("No data available");
            lastPostUrl = -1;

        }
    }).catch((error) => {
        lastPostUrl = -1;
        console.error(error);
    });
}

const getWaLinkKey = async (tableName) => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, tableName)).then((snapshot) => {
        if (snapshot.exists()) {
            waLinkKeys = [];
            snapshot.forEach(childSnapshot => {
                waLinkKeys.push(childSnapshot.key)
            })
            // lastPostUrl = snapshot.val()['lastchekedtable'];
        } else {
            console.log("No data available");
            lastPostUrl = -1;

        }
    }).catch((error) => {
        lastPostUrl = -1;
        console.error(error);
    });
}
const getLastCrewl = async () => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/ScrapData")).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log(snapshot.val());
            lastchekedtable = snapshot.val()['lastchekedtable'];
        } else {
            console.log("No data available");
            waLinkKeys = [];

        }
    }).catch((error) => {
        waLinkKeys = [];
        console.error(error);
    });
}

// deleteTabledata
const deleteTabelData=async (path)=>{
    await remove(ref(db, path));
}
// deleteTabelData();
// insert data into firbase
// tableName, data, format = "post"
function insertData(tableName, data, format = "post"){
    var tableref = ref(db, tableName);
    if(format=="patch"){
        set(tableref, data);
        // child("waLink").set("table")
    }else{
        push(tableref, data);
    }
}

// check the link is valid or not
const check = async (url) => {
    try {
        // console.log(url);
        const response = await axios.get(url);

        const html = response.data;

        const $ = cheerio.load(html);

        const titles = [];

        $('h2').each((_idx, el) => {
            const title = $(el).text()
            titles.push(title)
        });

        return titles;
    } catch (error) {
        return ["-1","-1"];
        throw error;
    }
};


// control all functions
const main=async ()=>{
    await getallTableName()
    console.log(allTableName)
    titles = [0, 0];
    // await getWaLinkKey('testing');
    await getLastCrewl();
    if(lastchekedtable==null){
        lastchekedtable=0
    }
    console.log(lastchekedtable)

    // console.log(lastchekedtable);
    // console.log(allTableName.length);
    for (var i = lastchekedtable; i < allTableName.length;i++){
        // console.log(allTableName[i]);
        if (allTableName[i] == "ScrapData"| allTableName[i] == "AllLinks"){
            continue;
        }
        if (titles[0] == -1) {
            // await insertData("scrapData", { lastchekedtable: i }, format = "post")
            break;
        }
        console.log(i,"/",allTableName.length,"===>",allTableName[i]);
        await getWaLinkKey(allTableName[i]);
        for (var j = 0; j<waLinkKeys.length;j++){
            await singleGroup(allTableName[i] + "/" + waLinkKeys[j]);
            var titles = await check("https://chat.whatsapp.com/"+groupData[0]);
            if(titles[0]==-1){
                await insertData("scrapData", { lastchekedtable: i}, format = "post")
                break;
            }
            if(titles[0]==""){
                await deleteTabelData(allTableName[i] + "/" + waLinkKeys[j])
                await deleteTabelData("AllLinks/" + groupData[0]);
                console.log("=====>",groupData[0],"Invalid", groupData[1],j,'/',waLinkKeys.length);
                break;
            }else{
                await getalllinkscheck(groupData[0]);
                if (alllinkscheck==0){
                    var waid = groupData[0];
                    insertData("AllLinks/" + waid, allTableName[i], format = "patch")
                    alllinkscheck=-1;
                }
                console.log("=====>", groupData[0], "Valid", groupData[1], j, '/', waLinkKeys.length);
            }   
        }
    }
}


const test = async () => {
    
    console.log(allTableName)
}
main()
module.exports.run=main;