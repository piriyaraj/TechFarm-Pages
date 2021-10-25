const axios = require("axios");
const cheerio = require("cheerio")
const check = async (url) => {
    try {
        // console.log(url);
        const response = await axios.get(url);

        const html = response.data;

        const $ = cheerio.load(html);

        var groupType="Group";
        try{
            var groupName = $($('div[class="tgme_page_title"]')[0]).text().replace("\n", "").replace("\n", "").replace(" ", "").replace(" ", "");
            if ($($('div[class="tgme_page_extra"]')[0]).text().match("subscriber")!=null){
                groupType = "Channel";
            
        }}
        catch{
            return [0,0,0,0,0];
        }
        try{
            var groupLogo = $($('img[class="tgme_page_photo_image"]')[0]).attr()['src'];
        }
        catch{
            var groupLogo ="https://w7.pngwing.com/pngs/419/837/png-transparent-telegram-icon-telegram-logo-computer-icons-telegram-blue-angle-triangle-thumbnail.png";
        }
        try{
            var groupCount = $($('div[class="tgme_page_extra"]')).text().split(" subscriber")[0].split(" members")[0];
        }
        catch{
            var groupCount=0;
        }
        try{
            var groupDescri = $($('div[class="tgme_page_description"]')[0]).text();
            if(groupDescri==""){
                var groupDescri = groupName + " help to find your wanted things";
            }
        }
        catch{
            var groupDescri = groupName + " help to find your wanted things";
        }
        if (groupName == '') {
            return [0, 0, 0, 0, 0];
        }else{
            return [groupName, groupType, groupLogo, groupCount, groupDescri];
        }
    } catch (error) {
        console.log(error);
        return [0, 0, 0, 0, 0];
    }
};

const main=async ()=>{
    urlChanell = "https://t.me/testing111211"
    urlGroup = "https://t.me/SGCustom"
    console.log("Channel : ", await check(urlChanell))
    console.log("Group   : ", await check(urlGroup))
}
module.exports.get=check;