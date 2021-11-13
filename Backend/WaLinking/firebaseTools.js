var apps = require('firebase/app');
var databases = require('firebase/database');
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

const app = apps.initializeApp(firebaseConfig);
const db = databases.getDatabase(app);
const starCountRef = databases.ref(db, '/');


// read
function readFirebase(){
    databases.get(databases.child(starCountRef, `/AAgroupsorDetail`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            process.exit();
        } else {
            console.log("No data available");
            process.exit();

        }
    }).catch((error) => {
        console.error(error);
    });
}

// write
function writeFirebase(){
    databases.set(databases.ref(db, 'users/' + "1"), {
        username: "1",
        email: "2",
        profile_picture: "3"
    })
    .then(()=>{
        process.exit();
    })

}
// update
function updateFirebase(){

}

// delete
function deleteFirebase(){

}
const lastCrewel = async () => {
    firebase.database().ref();
    await databases.get(databases.child(databases.ref(db, '/'), `/AAgroupsorDetail`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val()['lastpost']);
                process.exit();
                return "hello";
            } else {
                console.log("No data available");
                process.exit();

            }
        }).catch((error) => {
            console.error(error);
        });
}

const test = async () => {
    lastCrewel()
        .then((result) => {
            console.log(result);
        })


}
test();

// readFirebase("AllLinks/CjHb77SKC9pEJHhQrjDExa");
