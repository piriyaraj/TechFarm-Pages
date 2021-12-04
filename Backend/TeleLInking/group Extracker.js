const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
var { initializeApp } = require('firebase/app');
var { getDatabase, get, ref, child, set, push, remove } = require('firebase/database');
const { async } = require("@firebase/util");
// const serviceAccount = require('./path/to/key.json');



var groupData;
var db;
var sitemaps = ['https://telegramchannels.me/storage/sitemaps/en/groups-sitemap.xml',
                'https://telegramchannels.me/storage/sitemaps/en/channels-sitemap.xml']

var lastChannelLink=""
var lastGroupLink=""
var allLinkAvailable="false";


const getLastCrewlLink = async () => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/ScrapData/telegramchannels")).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log(snapshot.val());
            lastChannelLink = snapshot.val()['channels-sitemap'];
            lastGroupLink = snapshot.val()['groups-sitemap'];
        } else {
            console.log("No data available");
            waLinkKeys = [];

        }
    }).catch((error) => {
        waLinkKeys = [];
        console.error(error);
    });
}

const sitemapExtract=async(url)=>{
    try {
        // console.log(url);
        const response = await axios.get(url);

        const html = response.data;

        const $ = cheerio.load(html);

        const postLinks = [];

        $('loc').each((_idx, el) => {
            const title = $(el).text()
            postLinks.push(title)
        });

        return postLinks;
    } catch (error) {
        throw error;
    }
}

const PostExtract=async(postLink)=>{    // return post title, telegram link
    try {
        // console.log(url);
        const response = await axios.get(postLink);

        const html = response.data;

        const $ = cheerio.load(html);

        const cateAndId = [];

        var category = $($(".card .breadcrumb ol li")[2]).find("a span").text()
        var teleId = $($(".card-content .has-text-centered a ")[0]).attr("href").split("=")[1]
        cateAndId.push(category)
        cateAndId.push(teleId)

        return cateAndId;
    } catch (error) {
        throw error;
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
            titles = [0, 0, 0, 0, 0];
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
            titles = [0, 0, 0, 0, 0];
            return titles;
        } else {
            var titles = [groupName, groupType, groupLogo, groupCount, groupDescri];
            return titles;
        }
    } catch (error) {
        console.log(error);
        titles = [-1, -1, -1, -1, -1];
        return titles;
    }
};

const isdataExist=async(teleId)=>{
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/AllLinks/" + teleId)).then((snapshot) => {
        allLinkAvailable = snapshot.exists()
        // console.log("hello: "+allLinkAvailable)
        return (allLinkAvailable)
    }).catch((error) => {
        waLinkKeys = [];
        console.error(error);
    });
}
function insertData(tableName, data, format = "post") {
    var tableref = ref(db, tableName);
    if (format == "patch") {
        set(tableref, data);
        // child("waLink").set("table")
    } else {
        push(tableref, data);
    }
}


const main = async (db1) => {
    db=db1                                  // init firebase app
    for(var i=0;i<sitemaps.length;i++){
        var type=sitemaps[i].split("/")[1].split(".")[0]     // get sitemap for channel or group
        await getLastCrewlLink(type)                         // get last crewel data of channel and group
        var postLinks = await sitemapExtract(sitemaps[i])
        for(var j=0;j<postLinks.length;j++){
            
            allLinkAvailable="false"
            var cateAndId=await PostExtract(postLinks[j])
            await isdataExist(cateAndId[1])
            if(allLinkAvailable){
                console.log(cateAndId[1],"=====>Already Available")
                continue
            }
            titles = await check("https://t.me/"+cateAndId[1])
            if (titles[1] == "Group" & j==0) {
                insertData("ScrapData/telegramchannels/groups-sitemap", postLinks[j], format = "patch")
            } else if (titles[1] == "Channel" & j==0) {
                insertData("ScrapData/telegramchannels/channels-sitemap", postLinks[j], format = "patch")

            }
            if (lastChannelLink == postLinks[j] || lastGroupLink == postLinks[j]) {
                console.log("Extract finished")
                break
            }
            var data1 = {
                "groupName": titles[0],
                "groupType": titles[1],
                "groupLogo": titles[2],
                "groupCount": titles[3],
                "groupDescri": titles[4],
                "groupLink": cateAndId[1]
            }

            console.log(cateAndId[0] + "=====>" + cateAndId[1])
            insertData(cateAndId[0], data1)
            insertData("AllLinks/" + cateAndId[1], cateAndId[0], format = "patch")
            
        }
    }

    
}

const test = async () => {
    console.log(allLinkAvailable)
}
main()
module.exports.run = main;