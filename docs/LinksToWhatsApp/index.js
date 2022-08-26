var articalSectionId = "root";
var isMyLink=0;
var myLink ="https://chat.whatsapp.com/DtPKCGVAGBfH1YnIdAUeFD"
var groupBlock = `
<div>
    <a style="color: #5a5a5a" target="_blank" href="groupLink" title="WhatsApp group invite link: groupName">
        <span>
            <img src="groupLogo" onerror="imgError(this);" title="groupName WhatsApp group logo" class="image" alt="groupName WhatsApp group logo">
        </span>
    </a>
    <a style="color: #5a5a5a;font-family: fantasy;" target="_blank" href="groupLink"
        title="groupName WhatsApp group invite link">
        <h2>groupName</h2>
    </a>
</div>
<div class="block2">
    <div class="post-basic-info">
        <div style="color:#0088cc;">
            <a style="font-weight: 600;" href="groupLink" title="groupName WhatsApp group join link"
                target="_blank">@grouplinkText</a>
        </div>
        <span><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgyw8A5aC-5Ko6ZfQWPjWQpbSaq7bag6ncx-bhez9azmQpCsJOEvXpOrQqjs7_MG1WP2ojV3I88umTIXByFu7TA_r02tLprlXBli7RTNtZNV9jHEoNeAmEwk-k5i_3lqVX0-PTXLAyGmHF8JG353mZwmyvY9tR24ERuOfjY8RhUt1W5OjE_hz84e1eWRQ" class="icon"><a href="categoryLink" title="groupCategory WhatsaApp groups invite link">groupCategory</a></span>

        <span><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgKkXF3oS1p02V9wmaL0pa8z2rPCEtvT_0qZFogVM5WMHXxABjTI8wnY9qBJtQQsUiqp8QbVHq9xrwxEf7d9S2RyxinsksZwwTAbTL78WyA9qA6J1thyFv6-0MwZQjGBR1F0MGQ2huWiaqWY6Feusmcm_fL33kJJybQiaNaUmebDHW8TBJ-5LZs7AABZg" class="icon"><a href="countryLink" title="groupCountry Whatsapp group link">groupCountry</a></span>
        
        <span><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhmmYFKPoF4sJWLBbcwVWhCHrlWYd00Ejx6YS55NZ2J9zqCmOb7xpPSZkM6KGXao5H1iGbhg_EDyD9-vpXetBd3eXGrkSl8PwuxvHOqB5rBsBJy5R22FSxMybxl1w4zMt6mZtuuhVlQr7b_RE3MjDk3im8XXZBT0ebXowfRbbWkcmqjf44kjU2yq8PhKw" class="icon"><a href="languageLink" title="groupLanguage Whatsapp group join links">groupLanguage</a></span>

        <p class="descri" style="margin-bottom: 0px">groupDescri</p>
    </div>
    <div class="post-info-rate-share"> <span class="joinbtn"><a class="joinbtn" href="groupLink" target="_blank"
                title="Click here to join groupName WhatsApp group" rel="nofollow">Join group</a></span>
        <div class="post-share">
            <div>

                <a class="joinbtn" style="vertical-align:top"
                    href="whatsapp://send?text=Follow this link to Join my WhatsApp group : groupLink %0A %0AFind more WhatsApp group links at: / "
                    data-action="share/whatsapp/share" rel="nofollow">Share on</a>
                <a href="whatsapp://send?text=Follow this link to Join my WhatsApp group : currentPostLink"
                    data-action="share/whatsapp/share">
                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhTnjPPSaPWBDQm0ncL81muw5AzruAGfFqq3_54tuTTOmhvWGoUyDA_VUHe427uOZhiE0n1skiz8WTVNDg8npnpBKvs2MLw8uFK3TmhSYW3NJcyRQ2d2wvnBa_iw5EblF513vQRCNgVW9TFylu0ndAwM7FgXEmAC3M_gQux4bhlAy916RfrbYPzKotQZg=s32" width="24" height="24"
                        alt="Share on Whatsapp" title="Share on Whatsapp" rel="nofollow"></a>

                <a href="https://twitter.com/intent/tweet?text=Follow this link to Join my WhatsApp group : &amp;url=currentPostLink"
                    target="_blank" rel="nofollow">
                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjJ8hLWR1a3RR4uoDXOez0eQ06bMeZUKmJz10RoChM0gB5G7scdIPRl7l19OPesfEb01rOP6KApEa5XEMjixJrKKCGQ3tr1Lt7WCI9kcT4qZxx_cCL_bVPtaEMJ6Wg4n6WCMMnTkkdxY51tB4rGHNWPQi-JjUupvCTWY0lDUwCfoW2G0C1gNjn2ELVVog" width="24" height="24"
                        alt="Share on Twitter" title="Share on Twitter"></a>
            </div>
        </div>
    </div>
</div>
`;

function initLoading() {
    var mainContent = document.getElementById(articalSectionId);
    newSection = document.createElement('section'); //create a div
    newSection.id = "w3-light-grey";
    var tag = `<div id="myBar" class="w3-container w3-cyan w3-center" style="width:0%;max-height:20px ;">0%</div>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}
function initmainloader(tag){  // wait until load group details from firebase
    // console.log(tag)
    var mainContent = document.getElementById(tag);
    newSection = document.createElement('section'); //create a div
    newSection.id = "loadermain";
    var tag = `<svg class="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                    <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                    <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                </linearGradient>
                <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                    <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                </linearGradient>
            </defs>
            <circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36"
                stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round"
                transform="rotate(-90,100,100)" />
            <line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36"
                stroke-dasharray="1 165" stroke-linecap="round" />
        </svg>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}
function initGroupLinks() {
    var mainContent = document.getElementById(articalSectionId);
    newSection = document.createElement('section'); //create a div
    newSection.className = "wrap";
    newSection.id = "results"
    // var tag = `<div id="results" style="display: none;">`;
    // newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

function initLoadMoreLink() {
    var mainContent = document.getElementById(articalSectionId);
    newSection = document.createElement('section'); //create a div
    newSection.className = "LoadMoreLink";
    // newSection.id = "LoadMoreLink";
    var tag = `<button id="LoadMoreLink" class="LoadMoreLink" style="display: none;">Load More Groups</button>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

const firebaseConfig = {
    apiKey: "AIzaSyDVwUfxkzIfeDgav_ZWwukDDy81-hIGmfs",
    authDomain: "links-to-whatsapp.firebaseapp.com",
    databaseURL: "https://links-to-whatsapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "links-to-whatsapp",
    storageBucket: "links-to-whatsapp.appspot.com",
    messagingSenderId: "1098223504691",
    appId: "1:1098223504691:web:354efcc9747e6a0ad14246"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const WhatsAppLogo ="https://blogger.googleusercontent.com/img/a/AVvXsEgG3r_yaB3M7pTMV7OBBm3WhfqmguSfqGtNg-Bpkz3rjr84I1MjcT7PV94jRMo6IcwDral_zI5I3M_S-RnfjYmYY1A8i-nDDtmAr6ZuwAr5O1-Ezm121q3C8kROUbx3RrE5ARLF5mGz4UCe1LKv4urCbDEAJWqhwkN5oCMx4L6itjm1x4mz1uY5hmH-4w=s320"
function imgError(image) {
    image.onerror = "";
    image.src = WhatsAppLogo;
    return true;
}
function insertBlock(groupName, groupLink, groupLogo, groupLanguage, groupCategory, groupCountry, groupDescri,groupId) {
    // insertBlock(groupName, groupLink, groupLogo, groupLanguage, groupCategory, groupCountry, groupDescri, dataRow[k].groupLink)
    var resultDiv = document.getElementById("results");
    newDiv = document.createElement('div'); //create a div
    newDiv.className = "maindiv";
    var tag = groupBlock;
    tag = tag.replaceAll('groupName', groupName);
    if (groupCategory.indexOf("18+") > 0) {
        tag = tag.replaceAll('groupLogo', WhatsAppLogo);
    } else {
        tag = tag.replaceAll('groupLogo', 'https://web.whatsapp.com/invite/icon/' + groupId);
    }
    if(isMyLink==1){
        tag = tag.replaceAll('groupLink', myLink);
    }else{
        tag = tag.replaceAll('groupLink', groupLink);
    }
    tag = tag.replaceAll('groupCountry', groupCountry);
    tag = tag.replaceAll('groupLanguage', groupLanguage);
    tag = tag.replaceAll('groupCategory', groupCategory);
    tag = tag.replaceAll('grouplinkText', groupId);
    tag = tag.replaceAll('groupDescri', groupDescri);
    tag = tag.replaceAll('currentPostLink', document.location.href);
    tag = tag.replaceAll('languageLink', "/");
    tag = tag.replaceAll('countryLink', "/");
    tag = tag.replaceAll('categoryLink', "/");


    newDiv.innerHTML = tag; //add an id
    resultDiv.appendChild(newDiv); //append to the doc.body
    resultDiv.insertBefore(newDiv, resultDiv.lastChild)
}

function loadMorelink(lastcount) {
    //     alert(tableName,loadButtonid);
    document.getElementById("loadermain").style.display = "block";

    tableName = document.title.split(" WhatsApp")[0];

    firebase.database().ref(tableName).once("value", function (tableValue) {
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableValue);
        // alert(tableRow.length);
        for (var t = lastcount; t >= -1; t--) {
            document.getElementById("loadermain").style.display = "none";

            if (t == -1) {
                // alert(t + " last link");
                var loadMoreButton = document.getElementById("LoadMoreLink");
                loadMoreButton.style.display = "none";
                break;
            }

            if (t == lastcount - 8) {
                var loadMoreButton = document.getElementById("LoadMoreLink");
                tag = "loadMorelink('" + t + "')";
                loadMoreButton.setAttribute('onclick', tag);

                // addLoadMoreButton(tableName+"buttonid",t+"sectionId");
                break;
            }
            var k = tableRow[t];
            // var url = "https://bikespeci.blogspot.com/p/gateway.html?telelink=" + dataRow[k].groupLink;
            //                 var url = "https://chat.whatsapp.com/" + dataRow[k].groupLink;
            var groupName = dataRow[k].groupName;
            var groupLink = "https://chat.whatsapp.com/invite/" + dataRow[k].groupLink;
            // var groupLink = "/p/telegram-links.html?tablename=" + tableName + "/" + tableRow[t];
            var groupLogo = dataRow[k].groupLogo;
            var groupLanguage = dataRow[k].language;
            var groupCategory = dataRow[k].category;
            var groupDescri = dataRow[k].groupDescri;
            var groupCountry = dataRow[k].country;

            // insertRow(groupName, groupLink);
            insertBlock(groupName, groupLink, groupLogo, groupLanguage, groupCategory, groupCountry, groupDescri, dataRow[k].groupLink)
            // console.log(name, url);
            
        }
        // console.log(tableRow);
    });
}

function loadLinks(tableName) {
    // alert(tableName)
    var i = tableName;
    // document.getElementById("tableHead").innerText = i;
    database = firebase.database();
    var ref = database.ref(i);
    ref.once("value", function (tableValue) {
        // console.log(tableValue.val());
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableRow);
        // console.log(tableValue);
        for (var t = tableRow.length - 1; t >= 0; t--) {
            document.getElementById("loadermain").style.display = "none";

            if (t == tableRow.length - 9) {
                // alert("hello");
                document.getElementById("LoadMoreLink").style.display = "block";
                var loadMoreButton = document.getElementById("LoadMoreLink");
                tag = "loadMorelink('" + t + "')";
                loadMoreButton.setAttribute('onclick', tag);
                break;
            }
            var k = tableRow[t];
            // var url = "https://bikespeci.blogspot.com/p/gateway.html?telelink=" + dataRow[k].groupLink;
            //                 var url = "https://chat.whatsapp.com/" + dataRow[k].groupLink;
            var groupName = dataRow[k].groupName;
            var groupLink = "https://chat.whatsapp.com/invite/" + dataRow[k].groupLink;
            // var groupLink = "/p/telegram-links.html?tablename=" + tableName + "/" + tableRow[t];
            var groupLogo = dataRow[k].groupLogo;
            var groupLanguage=dataRow[k].language;
            var groupCategory=dataRow[k].category;
            var groupDescri=dataRow[k].groupDescri;
            var groupCountry=dataRow[k].country;
            
            // insertRow(groupName, groupLink);
            insertBlock(groupName, groupLink, groupLogo, groupLanguage, groupCategory, groupCountry, groupDescri, dataRow[k].groupLink)
            // console.log(name, url);
        }
        // console.log(tableRow);
    });

}

// show latest
function initLoadLatestMoreLink() {
    var mainContent = document.getElementById("loadlatestmorebutton");
    newSection = document.createElement('section'); //create a div
    newSection.className = "LoadMoreLink";
    // newSection.id = "LoadMoreLink";
    var tag = `<button id="LoadMoreLink" class="LoadMoreLink" style="display: none;">Load More Groups</button>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

function insertLatestBlock(groupName, groupLink, groupLogo, groupLanguage, groupCategory, groupCountry, groupDescri, groupId) {
    var resultDiv = document.getElementById("showlatest");
    newDiv = document.createElement('div'); //create a div
    newDiv.className = "maindiv";
    var tag = groupBlock;
    tag = tag.replaceAll('groupName', groupName);
    tag = tag.replaceAll('groupLogo', 'https://web.whatsapp.com/invite/icon/' + groupId);
    if(isMyLink==1){
        tag = tag.replaceAll('groupLink', myLink);
    }else{
        tag = tag.replaceAll('groupLink', groupLink);
    }
    tag = tag.replaceAll('groupCountry', groupCountry);
    tag = tag.replaceAll('groupLanguage', groupLanguage);
    tag = tag.replaceAll('groupCategory', groupCategory);
    tag = tag.replaceAll('grouplinkText', groupId);
    tag = tag.replaceAll('groupDescri', groupDescri);
    tag = tag.replaceAll('currentPostLink', document.location.href);
    tag = tag.replaceAll('languageLink', "/");
    tag = tag.replaceAll('countryLink', "/");
    tag = tag.replaceAll('categoryLink', "/");

    newDiv.innerHTML = tag; //add an id
    resultDiv.appendChild(newDiv); //append to the doc.body
    resultDiv.insertBefore(newDiv, resultDiv.lastChild)
}

function loadLatestMorelink(lastcount) {
    //     alert(tableName,loadButtonid);
    tableName = "latestUpdates";

    firebase.database().ref(tableName).once("value", function (tableValue) {
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableValue);
        // alert(tableRow.length);
        for (var t = lastcount; t >= -1; t--) {
            if (t == -1) {
                // alert(t + " last link");
                var loadMoreButton = document.getElementById("LoadMoreLink");
                loadMoreButton.style.display = "none";
                break;
            }

            if (t == lastcount - 8) {
                var loadMoreButton = document.getElementById("LoadMoreLink");
                tag = "loadLatestMorelink('" + t + "')";
                loadMoreButton.setAttribute('onclick', tag);

                // addLoadMoreButton(tableName+"buttonid",t+"sectionId");
                break;
            }
            var k = tableRow[t];
            
            // insertRow(groupName, groupLink);
            // insertLatestBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri)
            // console.log(name, url);
            var groupName = dataRow[k].groupName;
            var groupLink = "https://chat.whatsapp.com/invite/" + dataRow[k].groupLink;
            // var groupLink = "/p/telegram-links.html?tablename=" + tableName + "/" + tableRow[t];
            var groupLogo = dataRow[k].groupLogo;
            var groupLanguage = dataRow[k].language;
            var groupCategory = dataRow[k].category;
            var groupDescri = dataRow[k].groupDescri;
            var groupCountry = dataRow[k].country;

            // insertRow(groupName, groupLink);
            insertLatestBlock(groupName, groupLink, groupLogo, groupLanguage, groupCategory, groupCountry, groupDescri, dataRow[k].groupLink)

        }
        // console.log(tableRow);
    });
}

function loadLatestLinks(groupName) {
    var i = groupName;
    // document.getElementById("tableHead").innerText = i;
    database = firebase.database();
    var ref = database.ref(i);

    ref.once("value", function (tableValue) {

        // console.log(tableValue.val());
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableRow);
        // console.log(tableValue);
        for (var t = tableRow.length - 1; t >= 0; t--) {
            if (t == tableRow.length - 9) {
                // alert("hello");
                document.getElementById("LoadMoreLink").style.display = "block";
                var loadMoreButton = document.getElementById("LoadMoreLink");
                tag = "loadLatestMorelink('" + t + "')";
                loadMoreButton.setAttribute('onclick', tag);
                break;
            }
            var k = tableRow[t];
            // var url = "https://bikespeci.blogspot.com/p/gateway.html?telelink=" + dataRow[k].groupLink;
            //                 var url = "https://chat.whatsapp.com/" + dataRow[k].groupLink;
            var groupName = dataRow[k].groupName;
            var groupLink = "https://t.me/" + dataRow[k].groupLink;
            var groupLogo = dataRow[k].groupLogo;
            var groupCount = dataRow[k].groupCount;
            var groupType = dataRow[k].groupType;
            var groupDescri = dataRow[k].groupDescri;
            // insertRow(groupName, groupLink);
            insertBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri)
            // console.log(name, url);
        }
        // console.log(tableRow);
    });

}

function loadLatest() {
    var i = "latestUpdates";
    // document.getElementById("tableHead").innerText = i;
    database = firebase.database();
    var ref = database.ref(i);

    ref.once("value", function (tableValue) {
        document.getElementById("loadermain").style.display = "none";
        // console.log(tableValue.val());
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableRow);
        // console.log(tableValue);
        for (var t = tableRow.length - 1; t >= 0; t--) {
            
            if (t == tableRow.length - 9) {
                // alert("hello");
                document.getElementById("LoadMoreLink").style.display = "block";
                var loadMoreButton = document.getElementById("LoadMoreLink");
                tag = "loadLatestMorelink('" + t + "')";
                loadMoreButton.setAttribute('onclick', tag);
                break;
            }
            var k = tableRow[t];
            // var url = "https://bikespeci.blogspot.com/p/gateway.html?telelink=" + dataRow[k].groupLink;
            //                 var url = "https://chat.whatsapp.com/" + dataRow[k].groupLink;
            var groupName = dataRow[k].groupName;
            var groupLink = "https://chat.whatsapp.com/invite/" + dataRow[k].groupLink;
            // var groupLink = "/p/telegram-links.html?tablename=" + i + "/" + tableRow[t];
            var groupLogo = dataRow[k].groupLogo;
            var groupLanguage = dataRow[k].language;
            var groupCategory = dataRow[k].category;
            var groupDescri = dataRow[k].groupDescri;
            var groupCountry = dataRow[k].country;

            // insertRow(groupName, groupLink);
            insertLatestBlock(groupName, groupLink, groupLogo, groupLanguage, groupCategory, groupCountry, groupDescri, dataRow[k].groupLink)
            // console.log(name, url);
        }
        // console.log(tableRow);
    });
}

const main=async()=>{
    var postSection = document.getElementById(articalSectionId);
    if (postSection != null) {
        var groupName = await document.title.split(" WhatsApp")[0];
        //initLoading();            // insert loading bar section

        initGroupLinks(groupName);         // insert groups section
        initmainloader(articalSectionId);

        initLoadMoreLink()        // insert load button
                 // insert add group button
        // move();
        loadLinks(groupName);
        document.getElementById("results").style.display = "block";

    } else if (document.getElementById("showlatest") != null) {
        initmainloader("showlatest");
        initLoadLatestMoreLink();
        loadLatest();
        
    } else if (document.getElementById("main") != null){
        var tableName = document.URL.split("?tablename=")[1].split("&")[0];
        database = firebase.database();
        var ref = database.ref(tableName);
        ref.once("value",function(groupDetails){
            var data = groupDetails.val();
            // console.log(groupDetails.val());
            var tag = groupBlock;
            tag = tag.replaceAll('groupName', data['groupName']);
            tag = tag.replaceAll('groupLogo', data['groupLogo']);
            tag = tag.replaceAll('groupLink', "https://t.me/"+data['groupLink']);
            tag = tag.replaceAll('groupCount', data['groupCount']);
            tag = tag.replaceAll('groupType', data['groupType']);
            tag = tag.replaceAll('grouplinkText', data['groupLink']);
            tag = tag.replaceAll('groupDescri', data['groupDescri']);
            tag = tag.replaceAll('currentPostLink', document.location.href);
            document.getElementById("main").innerHTML = tag;
            document.getElementsByTagName("h1")[0].innerText = data['groupName'];
            document.title = data['groupName'] + " telegram " + data['groupType']+" link TeleLinking";
            var meta = document.createElement('meta');
            meta.name = "if you are looking for " + data['groupName'] + " telegram " + data['groupType'] + " link, TeleLinking provide useful " + data['groupName']+" links";
            meta.content = "IE=edge";
            document.head.appendChild(meta);
        })
        
    }
}
main();
