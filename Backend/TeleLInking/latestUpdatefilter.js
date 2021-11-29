// constants
const { async } = require('@firebase/util');
var { initializeApp } = require('firebase/app');
const axios = require("axios");
const cheerio = require("cheerio")
var { getDatabase, ref, child, remove, set, push, get, onDisconnect } = require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyCNPje1QfnH8Pg8oLzKYj_Guy1GaiiyWLs",
    authDomain: "telelinking-techfarm.firebaseapp.com",
    databaseURL: "https://telelinking-techfarm-default-rtdb.firebaseio.com",
    projectId: "telelinking-techfarm",
    storageBucket: "telelinking-techfarm.appspot.com",
    messagingSenderId: "344916823855",
    appId: "1:344916823855:web:aff753138b8af5bb579bda"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const getallTableName = async () => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/")).then((snapshot) => {
        if (snapshot.exists()) {
            allTableName = [];
            snapshot.forEach(childSnapshot => {
                allTableName.push(childSnapshot.key)
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

getallTableName()