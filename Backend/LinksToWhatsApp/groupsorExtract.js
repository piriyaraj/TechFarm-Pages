const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
var databases = require('firebase/database');


var db;


// ===========================================================================
// check whatsapp link available in database

//=============================================================================

// get last crwel
var lastPostUrl;
var isAvailable;  // to find the link already available in database

const isDataExist = async (waId) => {
    allLinksRef = await databases.ref(db, '/AllLinks');

    await databases.get(databases.child(allLinksRef, waId)).then((snapshot) => {
        if (snapshot.exists()) {
            isAvailable = 1;
        } else {
            isAvailable = 0;
        }
    }).catch((error) => {
        console.log(error);
    });
}

const lastCrewel=async()=>{
    await databases.get(databases.child(starCountRef, `/ScrapData`)).then((snapshot) => {
        if (snapshot.exists()) {
            lastPostUrl = snapshot.val()['lastpost'];
        } else {
            console.log("No data available");
            lastPostUrl = -1;

        }
    }).catch((error) => {
        lastPostUrl = -1;
        console.error(error);
    });
}

// set sitemap and last post link that added in firebase
const updateLastCrewel = async (lastPostLink)=>{
    // console.log(lastPostLink);
    await databases.set(databases.ref(db, 'ScrapData/'), { lastpost: lastPostLink })

}

// All links update
const allLinkUpdate = async (waId,tableName) => {
    // console.log(lastPostLink);
    await databases.set(databases.ref(db, 'AllLinks/' + waId), tableName)

}

// get post links
const getPostLinks = async (sitemapUrl) => {
    try {
        // console.log(url);
        const response = await axios.get(sitemapUrl);

        const html = response.data;
        const regex = /https:(.|\n)*?\s/mg;
        const found = html.match(regex);
        

        return found;
    } catch (error) {
        throw error;
    }
};

//upload whatsapp link into firebase
const uploadWaLink= async (tableName, data)=>{
    const db = databases.getDatabase();
    const newPostKey = await databases.push(databases.child(databases.ref(db), tableName)).key;
    await databases.set(databases.ref(db, tableName + "/" + newPostKey), data)
}

// take single post category, country, language and groupkey
const getDataFromPost = async (postUrl) => {
    try {
        // console.log(url);
        const response = await axios.get(postUrl);

        const html = response.data;
        const $ = cheerio.load(html);
        tagList=[]
        $('.cate').each((_idx, el) => {
            const title = $(el).text()
            if(_idx<3){
                tagList.push(title);
            }
        });
        tagList.push(postUrl.split("invite/")[1])
        $('.predesc').each((_idx, el) => {
            const title = $(el).text()
            if (_idx < 1) {
                tagList.push(title);
            }
        });
        return tagList;
    } catch (error) {
        throw error;
    }
};

// check whatsapp group link
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
        throw error;
    }
};


// arrange posts
const addLink = async (i, toPost)=>{
    var dataList =await getDataFromPost(i);
    
    var category = dataList[0];
    var country = dataList[1];
    var language = dataList[2];
    var groupkey=dataList[3];
    var groupDescri=dataList[4]
    
    var tableName = country + " " + language + " " + category.split("/").join(' ');
    // ignore non description link
    if (dataList.length == 4) { 
        console.log(toPost.indexOf(i + " ") + 1, '/', toPost.length, '>>', tableName, '>>', "No Description")
        return 0
    }
    await isDataExist(groupkey);
    if (isAvailable) {
        console.log(toPost.indexOf(i + " ") + 1, '/', toPost.length, '>>', tableName, '>>', "already available")
        return 0;
    }
    await check("https://chat.whatsapp.com/invite/" +groupkey)
        .then((groupNames)=>{
            
            var groupName = groupNames[0];

            if (groupName == 0){
                console.log(toPost.indexOf(i + " ") + 1, '/', toPost.length, '>>', tableName, '>>', "Link Invalid")

                return 0;
            }
            var data = {
                "groupLink": groupkey,
                "groupName": groupName,
                "groupDescri": groupDescri,
                "language": language,
                "country": country,
                "category": category,
            }
            
            // console.log(data);
            console.log(toPost.indexOf(i+" ") + 1, '/', toPost.length,'>>', tableName, '>>', groupName)
            uploadWaLink(tableName, data);
            uploadWaLink(language, data);
            uploadWaLink(country, data);
            uploadWaLink(category.split("/").join(' '), data);
            allLinkUpdate(groupkey,groupName)

            if(tableName.match("Hot")==null){
                var data1 = {
                    "groupLink": groupkey,
                    "groupName": groupName,
                    "groupDescri": groupDescri,
                    "language": language,
                    "country": country,
                    "category": category,
                    "groupCategory": tableName,
                }
                uploadWaLink("latestUpdates", data1);
            }
            if (toPost.indexOf(i+" ") == 0){
                // console.log(i);
                lastPost = i;
                updateLastCrewel(i);
            }
            return 1
    })

}
var starCountRef;
const main= async (db1)=>{
    db=db1;
    starCountRef = await databases.ref(db, '/');
    // var lastPost =await lastCrewel();
    await lastCrewel();
    // if(lastPostUrl==-1){
    //     return 0;
    // }
    var lastPost = lastPostUrl+" ";

    // console.log(lastPost);
    var postLinks =await getPostLinks("https://groupsor.link/seo/sitemap.xml");
    var index = postLinks.indexOf(lastPost);
    
    if(index==-1){
        index=postLinks.length;
    }
    if(index==1){
        console.log("No new post");
        // process.exit();
    }
    // console.log(index);
    var toPost = postLinks.slice(1, index);
    for(var a=0;a<toPost.length;a++){
        var postLink = toPost[a].replace(" ", "");
        var status = await addLink(postLink, toPost)
        if (status == -1){
            break
        }
        if(a==toPost.length-1){
            // process.exit();
        }
    }
}


const test = async (db1) => {
    console.log(db1);

    console.log("hello")
}
// main()
module.exports.run = main;

// setInterval(() => {
    // main();
// }, 10*1000);
// main();
// addLink("https://groupsor.link/group/invite/JEY0NxJZ76JGI8mfnETziE")


// https://chat.whatsapp.com/IEl9IiBrK6W2HjgjEx8P6Q
// https://groupsor.link/group/invite/JEY0NxJZ76JGI8mfnETziE
