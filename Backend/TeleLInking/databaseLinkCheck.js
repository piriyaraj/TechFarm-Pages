// constants
const { async } = require('@firebase/util');
var { initializeApp } = require('firebase/app');
const axios = require("axios");
const cheerio = require("cheerio")
var { getDatabase, ref, child, remove, set, push, get, onDisconnect } = require('firebase/database');
var lastchekedtable;
var waLinkKeys;
var titles = [0,0,0,0,0];
var alllinkscheck = "-1";

var allTableName = ['13 reasons why', '4k movies', 'Abuja', 'Active', 'Actors', 'Actress', 'Adult', 'Africa', 'Agriculture', 'Aiims pg', 'Alerts', 'Alt balaji', 'Amazon offers', 'Amazon prime videos', 'American', 'Among us', 'Android', 'Animation movies', 'Anime', 'Anthropology', 'Apex legends', 'Apk', 'Arab', 'Artificial intelligence', 'Artists', 'Arts', 'Asian', 'Asus', 'Australia', 'Austria', 'Automobile', 'Aws', 'Ayurveda', 'Bachelor', 'Bahrain', 'Bangalore', 'Bangkok', 'Bangladesh', 'Bank nifty', 'Banking', 'Basketball', 'Belgium', 'Bengali', 'Best', 'Bhojpuri movies', 'Big', 'Bihar', 'Bikes', 'Binance', 'Biology', 'Bitcoin', 'Bollywood actors', 'Books', 'Bot', 'Boys', 'Breaking bad', 'Bts fans', 'Business', 'Ca', 'Call of duty', 'Cambodia', 'Canada', 'Cars', 'Cartoons', 'Cat exams', 'Celebrity', 'Chatroom', 'Chemistry', 'China', 'Chinese movies', 'Civil engineering', 'Clash of clans', 'Class 10th', 'Class 12th', 'Clat', 'Club factory', 'Coin master', 'Comedy', 'Commerce', 'Commodity', 'Competitive programming', 'Computer knowledge', 'Computer softwares', 'Cooking', 'Cool', 'Counter strike', 'Coupons', 'Cricket', 'Crypto-currency', 'Csat', 'Css', 'Ctet', 'Current affairs', 'Dark', 'Data science', 'Dating', 'Deals', 'Denmark', 'Designers', 'Diet plans', 'Digital marketing', 'Discount deals', 'Discover', 'Discussion', 'Dj', 'Doctors', 'Drama', 'Dream11', 'Dubai', 'Earn money', 'Earning', 'Ebooks', 'Ece', 'Editing', 'Edm', 'Education', 'Electronics', 'Engagement', 'English', 'English books', 'English literature', 'English movies', 'Entertainment', 'Epaper', 'Europe', 'Excel learning', 'Famous', 'Fan clubs', 'Farmers', 'Farming', 'Fashion', 'Finance', 'Fitness', 'Flash sale', 'Food', 'Football', 'Foreign movies', 'Forex', 'Fortnite', 'Free fire', 'Friends', 'Funny', 'Furry', 'Game of thrones', 'Gaming', 'Gate', 'Germany', 'Ghana', 'Girls', 'Gk', 'Google pay', 'Gpsc', 'Graphic design', 'Group d', 'Gst', 'Gujarati movies', 'Haryanvi', 'Hbo', 'Healthy', 'Hindi', 'Hindi dubbed', 'Hindi movies', 'Hip hop', 'History', 'Hollywood actors', 'Hollywood dubbed', 'Hong kong', 'Horror movies', 'Hotstar', 'Htet', 'Html', 'Huawei', 'Hyderabad', 'Ias', 'Ibps po', 'Ielts', 'Ies', 'Iit jee', 'Indian', 'Indian express', 'Insights', 'Instagram', 'Intraday', 'Ios', 'Ipl', 'Ips exams', 'Isro', 'It jobs', 'Java', 'Javascript', 'Jee main', 'Jobs', 'Jokes', 'Kannada', 'Kashmir', 'Kenya', 'Kerala', 'Kerala psc', 'Kolkata', 'Korean', 'Kotlin', 'Kuala lumpur', 'Kuwait', 'Law', 'Learning', 'Lenovo', 'Lifestyle', 'Linux', 'Local', 'Loki fans', 'London', 'Luxembourg', 'Machine learning', 'Magazines', 'Maharashtra', 'Malawi', 'Malayalam movies', 'Manchester united', 'Manipur', 'Marathi', 'Marvel movies', 'Maths', 'Mba', 'Mechanical engineering', 'Media', 'Medical', 'Meditation', 'Memes', 'Miami', 'Minecraft', 'Mini militia', 'Modified cars', 'Motivational', 'Movies', 'Mppsc', 'Mpsc', 'Mrcs', 'Mrunal', 'Ms office', 'Mumbai', 'Music', 'Mx player', 'Nabard', 'Nba', 'Nda', 'Neet', 'Nepal', 'Netflix', 'Netherlands', 'New york', 'New zealand', 'News', 'Newspapers', 'Nigeria', 'Norway', 'Novels', 'Nursing', 'Offers', 'Old movies', 'Oman', 'Oneplus', 'Online shopping', 'Open', 'Pakistani', 'Paris', 'Paytm', 'Pc games', 'Pdf', 'Philippines', 'Photoshop', 'Php', 'Physics', 'Pictures', 'Png', 'Poetry', 'Popular', 'Ppsspp', 'Premium apps', 'Prison break', 'Private', 'Programmers', 'Programming language', 'Promo codes', 'Psc', 'Psc thriller', 'Pubg', 'Public', 'Pune', 'Punjabi', 'Punjabi singers', 'Python', 'Quantitative aptitude', 'Quiz', 'Quotes', 'Radiology', 'Railway exams', 'Rajasthan', 'Rajkot', 'Rappers', 'Rbi grade b', 'Real estate', 'Real madrid', 'Realme', 'Recipes', 'Reddit', 'Ringtones', 'Ripple', 'Romania', 'Rrb exams', 'Ruby', 'Russian', 'Rust', 'Samsung', 'Sap', 'Sarcastic', 'Saree', 'Satisfying videos', 'Sbi po', 'Scala', 'Sci-fi movies', 'Science', 'ScrapData', 'Secret', 'Self help', 'Seo', 'Share market', 'Shayari', 'Short films', 'Sikkim', 'Singapore', 'Soccer', 'Somalia', 'Songs', 'Spain', 'Spanish', 'Splendor fans', 'Sports', 'Spotify', 'Ssc', 'Ssc cgl', 'Status', 'Status videos', 'Stickers', 'Stock market', 'Stories', 'Stranger things', 'Students', 'Study', 'Sub4sub', 'Sweden', 'Swift', 'Switzerland', 'Tamil movie', 'Teachers', 'Technology', 'Telugu actress', 'Telugu dubbed', 'The walking dead', 'Tiktok', 'Tips and tricks', 'Tokyo', 'Tourism', 'Tourists', 'Tractors', 'Trading', 'Travel', 'Trending', 'Turkey', 'Turkish', 'Tv shows', 'Uae', 'Ui ux', 'Uk', 'Ukraine', 'Ullu', 'Unacademy', 'Unisa', 'University students', 'Upsc', 'Urdu', 'Us', 'Usa', 'Useful', 'Vehicle', 'Video songs', 'Videos', 'Vietnam', 'Vikings', 'Viral', 'Viu', 'Voot', 'Wallpapers', 'Web series', 'Worldwide', 'Wwe', 'Xiaomi', 'Yemen', 'Youtubers', 'Zee5', 'Zimbabwe', 'testing'];
var groupData;

// const serviceAccount = require('./path/to/key.json');
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
const deleteTabelData = async (path) => {
    await remove(ref(db, path));
}
// deleteTabelData();
// insert data into firbase
// tableName, data, format = "post"
function insertData(tableName, data, format = "post") {
    var tableref = ref(db, tableName);
    if (format == "patch") {
        set(tableref, data);
        // child("waLink").set("table")
    } else {
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

        var groupType = "Group";
        try {
            var groupName = $($('div[class="tgme_page_title"]')[0]).text().replace("\n", "").replace("\n", "").replace(" ", "").replace(" ", "");
            if ($($('div[class="tgme_page_extra"]')[0]).text().match("subscriber") != null) {
                groupType = "Channel";

            }
        }
        catch {
            titles = [0, 0, 0, 0, 0];;
            return;
        }
        try {
            var groupLogo = $($('img[class="tgme_page_photo_image"]')[0]).attr()['src'];
        }
        catch {
            var groupLogo = "https://w7.pngwing.com/pngs/419/837/png-transparent-telegram-icon-telegram-logo-computer-icons-telegram-blue-angle-triangle-thumbnail.png";
        }
        try {
            var groupCount = $($('div[class="tgme_page_extra"]')).text().split(" subscriber")[0].split(" members")[0];
        }
        catch {
            var groupCount = 0;
        }
        try {
            var groupDescri = $($('div[class="tgme_page_description"]')[0]).text();
            if (groupDescri == "") {
                var groupDescri = groupName + " help to find your wanted things";
            }
        }
        catch {
            var groupDescri = groupName + " help to find your wanted things";
        }
        if (groupName == '') {
            titles= [0, 0, 0, 0, 0];
            return titles;
        } else {
            var titles= [groupName, groupType, groupLogo, groupCount, groupDescri];
            return titles;
        }
    } catch (error) {
        console.log(error);
        titles = [-1, -1, -1, -1, -1];
        return titles;
    }
};
const uploadWaLink = async (tableName, data) => {
    const db = getDatabase();
    const newPostKey = await push(child(ref(db), tableName)).key;
    await set(ref(db, tableName + "/" + newPostKey), data)
}


// control all functions
const main = async () => {
    titles = [0, 0, 0, 0, 0];
    // await getWaLinkKey('testing');
    await getLastCrewl();
    // console.log(lastchekedtable);
    // console.log(lastchekedtable);
    // console.log(allTableName.length);
    for (var i = lastchekedtable; i < allTableName.length; i++) {
        // console.log(allTableName[i]);
        if (allTableName[i] == "scrapData" | allTableName[i] == "AAgroupsorDetail" | allTableName[i] == "AllLinks") {
            continue;
        }
        if (titles[0] == -1) {
            // await insertData("scrapData", { lastchekedtable: i }, format = "post")
            break;
        }
        console.log(i, "/", allTableName.length, "===>", allTableName[i]);
        await getWaLinkKey(allTableName[i]);
        for (var j = 0; j < waLinkKeys.length; j++) {
            await singleGroup(allTableName[i] + "/" + waLinkKeys[j]);
            console.log(groupData);
            var titles = await check("https://t.me/" + groupData[2]);
            if (titles[0] == -1) {
                await insertData("scrapData", { lastchekedtable: i }, format = "post")
                console.log("stopped !")
                break;
            }
            if (titles[0] == "") {
                // await deleteTabelData(allTableName[i] + "/" + waLinkKeys[j])
                // await deleteTabelData("AllLinks/" + groupData[0]);
                console.log("=====>", groupData[0], "Invalid", groupData[1], j, '/', waLinkKeys.length);
                break;
            } else {
                await getalllinkscheck(groupData[0]);
                if (alllinkscheck == 0) {
                    var waid = groupData[2];
                    // [groupName, groupType, groupLogo, groupCount, groupDescri]
                    var data1 = {
                        "groupName": titles[0],
                        "groupType": titles[1],
                        "groupLogo": titles[2],
                        "groupCount": titles[3],
                        "groupDescri": titles[4],
                        "groupLink": groupData[2]
                    }
                    uploadWaLink("latestUpdates", data1);
                    insertData("AllLinks/" + waid, allTableName[i], format = "patch")

                    alllinkscheck = -1;
                }
                console.log("=====>", groupData[0], "Valid", groupData[1], j, '/', waLinkKeys.length);
            }
        }
    }
}
main()
module.exports.run = main;