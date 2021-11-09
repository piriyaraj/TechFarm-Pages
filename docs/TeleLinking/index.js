var articalSectionId = "root";
var addButtonCode = `
<div style="position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 101;">
    <a class="addbtn" href="#" title="Add New telegram Group" onclick="openForm()">+Add</a>
</div>
<div class="form-popup" id="myForm">
    <h2>Add your telegram link</h2>
    <form action="javascript:handleIt(this)" class="form-container">
        <div id='inputSection'>
            <input type="text" id="addwalink" placeholder="Enter the link" required />
            <select name="category" id="addcategory" class="selector" required>
                <option value="">Any Category</option>
                </option>
                <option value='Adult/18+/Hot'>Adult/18+/Hot</option>
                <option value='Art/Design/Photography'>Art/Design/Photography</option>
                <option value='Auto/Vehicle'>Auto/Vehicle</option>
                <option value='Business/Advertising/Marketing'>Business/Advertising/Marketing</option>
                <option value='Comedy/Funny'>Comedy/Funny</option>
                <option value='Dating/Flirting/Chatting'>Dating/Flirting/Chatting</option>
                <option value='Education/School'>Education/School</option>
                <option value='Entertainment/Masti'>Entertainment/Masti</option>
                <option value='Family/Relationships'>Family/Relationships</option>
                <option value='Fan Club/Celebrities'>Fan Club/Celebrities</option>
                <option value='Fashion/Style/Clothing'>Fashion/Style/Clothing</option>
                <option value='Film/Animation'>Film/Animation</option>
                <option value='Food/Drinks'>Food/Drinks</option>
                <option value='Gaming/Apps'>Gaming/Apps</option>
                <option value='Health/Beauty/Fitness'>Health/Beauty/Fitness</option>
                <option value='Jobs/Career'>Jobs/Career</option>
                <option value='Money/Earning'>Money/Earning</option>
                <option value='Music/Audio/Songs'>Music/Audio/Songs</option>
                <option value='News/Magazines/Politics'>News/Magazines/Politics</option>
                <option value='Pets/Animals/Nature'>Pets/Animals/Nature</option>
                <option value='Roleplay/Comics'>Roleplay/Comics</option>
                <option value='Science/Technology'>Science/Technology</option>
                <option value='Shopping/Buy/Sell'>Shopping/Buy/Sell</option>
                <option value='Social/Friendship/Community'>Social/Friendship/Community</option>
                <option value='Spiritual/Devotional'>Spiritual/Devotional</option>
                <option value='Sports/Games'>Sports/Games</option>
                <option value='Thoughts/Quotes/Jokes'>Thoughts/Quotes/Jokes</option>
                <option value='ravel/Local/Place'>ravel/Local/Place</option>
            </select>
            <select name="language" id="addlanguage" class="selector" required>
                <option value="">Any Language</option>
                <option value='Afrikaans'>Afrikaans</option>
                <option value='Albanian'>Albanian</option>
                <option value='Amharic'>Amharic</option>
                <option value='Arabic'>Arabic</option>
                <option value='Armenian'>Armenian</option>
                <option value='Azerbaijani'>Azerbaijani</option>
                <option value='Bangla'>Bangla</option>
                <option value='Basque'>Basque</option>
                <option value='Belarusian'>Belarusian</option>
                <option value='Bosnian'>Bosnian</option>
                <option value='Bulgarian'>Bulgarian</option>
                <option value='Catalan'>Catalan</option>
                <option value='Chinese'>Chinese</option>
                <option value='Croatian'>Croatian</option>
                <option value='Czech'>Czech</option>
                <option value='Danish'>Danish</option>
                <option value='Dutch'>Dutch</option>
                <option value='English'>English</option>
                <option value='Estonian'>Estonian</option>
                <option value='Filipino'>Filipino</option>
                <option value='Finnish'>Finnish</option>
                <option value='French'>French</option>
                <option value='Galician'>Galician</option>
                <option value='Georgian'>Georgian</option>
                <option value='German'>German</option>
                <option value='Greek'>Greek</option>
                <option value='Gujarati'>Gujarati</option>
                <option value='Hebrew'>Hebrew</option>
                <option value='Hindi'>Hindi</option>
                <option value='Hungarian'>Hungarian</option>
                <option value='Icelandic'>Icelandic</option>
                <option value='Indonesian'>Indonesian</option>
                <option value='Italian'>Italian</option>
                <option value='Japanese'>Japanese</option>
                <option value='Kannada'>Kannada</option>
                <option value='Kazakh'>Kazakh</option>
                <option value='Khmer'>Khmer</option>
                <option value='Korean'>Korean</option>
                <option value='Kyrgyz'>Kyrgyz</option>
                <option value='Lao'>Lao</option>
                <option value='Latvian'>Latvian</option>
                <option value='Lithuanian'>Lithuanian</option>
                <option value='Macedonian'>Macedonian</option>
                <option value='Malay'>Malay</option>
                <option value='Malayalam'>Malayalam</option>
                <option value='Marathi'>Marathi</option>
                <option value='Mongolian'>Mongolian</option>
                <option value='Myanmar'>Myanmar</option>
                <option value='Nepali'>Nepali</option>
                <option value='Norwegian'>Norwegian</option>
                <option value='Persian'>Persian</option>
                <option value='Polish'>Polish</option>
                <option value='Portuguese'>Portuguese</option>
                <option value='Punjabi</lue="44">Romanian'>Punjabi</lue="44">Romanian</option>
                <option value='Russian'>Russian</option>
                <option value='Serbian'>Serbian</option>
                <option value='Sinhala'>Sinhala</option>
                <option value='Slovak'>Slovak</option>
                <option value='Slovenian'>Slovenian</option>
                <option value='Spanish'>Spanish</option>
                <option value='Swahili'>Swahili</option>
                <option value='Swedish'>Swedish</option>
                <option value='Tamil'>Tamil</option>
                <option value='Telugu'>Telugu</option>
                <option value='Thai'>Thai</option>
                <option value='Turkish'>Turkish</option>
                <option value='Ukrainian'>Ukrainian</option>
                <option value='Urdu'>Urdu</option>
                <option value='Uzbek'>Uzbek</option>
                <option value='Vietnamese'>Vietnamese</option>
                <option value='Zulu'>Zulu</option>
            </select>
            <select name="country" id="addcountry" class="selector" required>
                <option value="">Any Country</option>
                <option value='Algeria'>Algeria</option>
                <option value='Argentina'>Argentina</option>
                <option value='Australia'>Australia</option>
                <option value='Austria'>Austria</option>
                <option value='Azerbaijan'>Azerbaijan</option>
                <option value='Bahrain'>Bahrain</option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='Belarus'>Belarus</option>
                <option value='Belgium'>Belgium</option>
                <option value='Bolivia'>Bolivia</option>
                <option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
                <option value='Brazil'>Brazil</option>
                <option value='Bulgaria'>Bulgaria</option>
                <option value='Canada'>Canada</option>
                <option value='Chile'>Chile</option>
                <option value='China'>China</option>
                <option value='Colombia'>Colombia</option>
                <option value='Croatia'>Croatia</option>
                <option value='Czechia'>Czechia</option>
                <option value='Denmark'>Denmark</option>
                <option value='Egypt'>Egypt</option>
                <option value='Estonia'>Estonia</option>
                <option value='Ethiopia'>Ethiopia</option>
                <option value='Finland'>Finland</option>
                <option value='France'>France</option>
                <option value='Georgia'>Georgia</option>
                <option value='Germany'>Germany</option>
                <option value='Ghana'>Ghana</option>
                <option value='Greece'>Greece</option>
                <option value='Hong Kong'>Hong Kong</option>
                <option value='Hungary'>Hungary</option>
                <option value='Iceland'>Iceland</option>
                <option value='India'>India</option>
                <option value='Indonesia'>Indonesia</option>
                <option value='Iraq'>Iraq</option>
                <option value='Ireland'>Ireland</option>
                <option value='Israel'>Israel</option>
                <option value='Italy'>Italy</option>
                <option value='Jamaica'>Jamaica</option>
                <option value='Japan'>Japan</option>
                <option value='Jordan'>Jordan</option>
                <option value='Kazakhstan'>Kazakhstan</option>
                <option value='Kenya'>Kenya</option>
                <option value='Kuwait'>Kuwait</option>
                <option value='Latvia'>Latvia</option>
                <option value='Lebanon'>Lebanon</option>
                <option value='Libya'>Libya</option>
                <option value='Lithuania'>Lithuania</option>
                <option value='Luxembourg'>Luxembourg</option>
                <option value='Macedonia'>Macedonia</option>
                <option value='Malawi'>Malawi</option>
                <option value='Malaysia'>Malaysia</option>
                <option value='Mexico'>Mexico</option>
                <option value='Montenegro'>Montenegro</option>
                <option value='Morocco'>Morocco</option>
                <option value='Mozambique'>Mozambique</option>
                <option value='Nepal'>Nepal</option>
                <option value='Netherlands'>Netherlands</option>
                <option value='New Zealand'>New Zealand</option>
                <option value='Nigeria'>Nigeria</option>
                <option value='Norway'>Norway</option>
                <option value='Oman'>Oman</option>
                <option value='Pakistan'>Pakistan</option>
                <option value='Panama'>Panama</option>
                <option value='Peru'>Peru</option>
                <option value='Philippines'>Philippines</option>
                <option value='Poland'>Poland</option>
                <option value='Portugal'>Portugal</option>
                <option value='Puerto Rico'>Puerto Rico</option>
                <option value='Qatar'>Qatar</option>
                <option value='Romania'>Romania</option>
                <option value='Russia'>Russia</option>
                <option value='Saudi Arabia'>Saudi Arabia</option>
                <option value='Senegal'>Senegal</option>
                <option value='Serbia'>Serbia</option>
                <option value='Singapore'>Singapore</option>
                <option value='Slovakia'>Slovakia</option>
                <option value='Slovenia'>Slovenia</option>
                <option value='South Africa'>South Africa</option>
                <option value='South Korea'>South Korea</option>
                <option value='Spain'>Spain</option>
                <option value='Sri Lanka'>Sri Lanka</option>
                <option value='Sweden'>Sweden</option>
                <option value='Switzerland'>Switzerland</option>
                <option value='Taiwan'>Taiwan</option>
                <option value='Tanzania'>Tanzania</option>
                <option value='Thailand'>Thailand</option>
                <option value='Togo'>Togo</option>
                <option value='Tunisia'>Tunisia</option>
                <option value='Turkey'>Turkey</option>
                <option value='Uganda'>Uganda</option>
                <option value='Ukraine'>Ukraine</option>
                <option value='United Arab Emirates'>United Arab Emirates</option>
                <option value='United Kingdom'>United Kingdom</option>
                <option value='United States'>United States</option>
                <option value='Venezuela'>Venezuela</option>
                <option value='Vietnam'>Vietnam</option>
                <option value='Yemen'>Yemen</option>
                <option value='Zimbabwe'>Zimbabwe</option>
            </select>
        </div>
        <h2 id="addmessage"></h2>
        <div id="showGroup"></div>
        <div class="loader" id="loader"></div>
        <br /><br />
        <input type="submit" value="Submit" class="btn" id="submitButton" />
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
</div>
`;
var groupBlock = `
<div>
    <a style="color: #5a5a5a" target="_blank" href="groupLink" title="Telegram group invite link: groupName">
        <span>
            <img src="groupLogo" onerror="imgError(this);" class="image" alt="groupName telegram groupType link">
        </span>
    </a>
    <a style="color: #5a5a5a;font-family: fantasy;" target="_blank" href="groupLink"
        title="groupName telegram groupType invite link">
        <h2>groupName</h2>
    </a>
</div>
<div class="block2">
    <div class="post-basic-info">
        <div style="color:#0088cc;">
            <a style="font-weight: 600;" href="groupLink" title="groupName telegram group and channel join link"
                target="_blank">@grouplinkText</a>
        </div>
        <span style="padding-right:20px;">Category: groupType</span>
        <span>subscribe/members: groupCount</span>
        <p class="descri" style="margin-bottom: 0px">groupDescri</p>
    </div>
    <div class="post-info-rate-share"> <span class="joinbtn"><a class="joinbtn" href="groupLink" target="_blank"
                title="Click here to join groupName Telegram group" rel="nofollow">Join group</a></span>
        <div class="post-share">
            <div>

                <a class="joinbtn" style="vertical-align:top"
                    href="whatsapp://send?text=Follow this link to Join my Telegram group : groupLink %0A %0AFind more Telegram group at: https://telelinking.link/ "
                    data-action="share/whatsapp/share" rel="nofollow">Share on</a>
                <a href="whatsapp://send?text=Follow this link to Join my Telegram group : currentPostLink"
                    data-action="share/whatsapp/share">
                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhTnjPPSaPWBDQm0ncL81muw5AzruAGfFqq3_54tuTTOmhvWGoUyDA_VUHe427uOZhiE0n1skiz8WTVNDg8npnpBKvs2MLw8uFK3TmhSYW3NJcyRQ2d2wvnBa_iw5EblF513vQRCNgVW9TFylu0ndAwM7FgXEmAC3M_gQux4bhlAy916RfrbYPzKotQZg=s32" width="24" height="24"
                        alt="Share on Whatsapp" title="Share on Whatsapp" rel="nofollow"></a>

                <a href="https://twitter.com/intent/tweet?text=Follow this link to Join my Telegram group : &amp;url=currentPostLink"
                    target="_blank" rel="nofollow">
                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjJ8hLWR1a3RR4uoDXOez0eQ06bMeZUKmJz10RoChM0gB5G7scdIPRl7l19OPesfEb01rOP6KApEa5XEMjixJrKKCGQ3tr1Lt7WCI9kcT4qZxx_cCL_bVPtaEMJ6Wg4n6WCMMnTkkdxY51tB4rGHNWPQi-JjUupvCTWY0lDUwCfoW2G0C1gNjn2ELVVog" width="24" height="24"
                        alt="Share on Twitter" title="Share on Twitter"></a>
            </div>
        </div>
    </div>
</div>
`;
var description =`
<p class="postDescri">If you are looking for <b>groupName Telegram groups and channels links</b>, then use the list to get your desired one. Here we have shared the complete list of groupName Telegram groups. Use the group links to participate in a community.</p>
`;
var preArticalContent=``;

var PostArticalContent=`
<h2 class="postfaq">
    <em>FAQ of groupName telegram groups and channels</em></h2>
<ol>
    <li>
        <h2>Why groupName telegram group and channel links?</h2>
        <p>The groupName telegram groups and channels give you what you searching for. it's easy to find the most important things easily instead of wasting time on other social media. you can get all the information through the groupName groups and channels.
            in groupName groups, you can interact with others for getting information or make fun of.</p>
    </li>
    <li>
        <h2>How to join the groupName telegram group or channels?</h2>
        <p><a title="TeleLinking Telegram group and channel links provider" href="/">TeleLinking</a> provides most of the categories of telegram group and channels links. In Here we are sharing groupName telegram links you can join these groups by just clicking.
            After that telegram open and you can join.</p>
    </li>
    <li>
        <h2>How do I find groups on Telegram and channels?</h2>
        <p><a title="TeleLinking Telegram group and channel links provider" href="/">TeleLinking</a> provides all types of telegram groups and channel links. At the right bottom, you can see the filter button using that you can find most of the categories
            of telegram groups channels links to the groupName category. we classify the filters category, language, and country.</p>
    </li>
    <li>
        <h2>What is the difference between a groupName channel and a groupName group on Telegram?</h2>
        <p>The key difference between the groupName group and the channel is how to interact with it. In channel admin only can share their content but in the groupName group, you also can share your content.</p>
    </li>
    <li>
        <h2>Conclusion</h2>
        Thank you for visiting here. we sure you can get all the wanted links. if want to add your groupName group links and channels in the left bottom corner you can see the add button and click it after that fill the group link category, language, country after
        that submit after that it will be added to our website.</li>
</ol>
`;

function initAddButton() {
    tableDiv = document.body;
    newSection = document.createElement("section");
    newSection.id = "addButton";
    newSection.innerHTML = addButtonCode;
    tableDiv.parentNode.insertBefore(newSection, tableDiv)
}

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
    console.log(tag)
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

function initPreArtical(groupName) {
    var mainContent = document.getElementById(articalSectionId);
    newSection = document.createElement('section'); //create a div
    newSection.className = "preArtical";
    newSection.id = "preArtical"
    // var tag = `<div id="results" style="display: none;">`;
    newSection.innerHTML = description.replaceAll("groupName",groupName);
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

function initPostArtical(groupName) {
    var mainContent = document.getElementById(articalSectionId);
    newSection = document.createElement('section'); //create a div
    newSection.className = "PostArtical";
    newSection.id = "PostArtical"
    // var tag = `<div id="results" style="display: none;">`;
    newSection.innerHTML = PostArticalContent.replaceAll("groupName", groupName );
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

var firebaseConfig = {
    apiKey: "AIzaSyCNPje1QfnH8Pg8oLzKYj_Guy1GaiiyWLs",
    authDomain: "telelinking-techfarm.firebaseapp.com",
    databaseURL: "https://telelinking-techfarm-default-rtdb.firebaseio.com",
    projectId: "telelinking-techfarm",
    storageBucket: "telelinking-techfarm.appspot.com",
    messagingSenderId: "344916823855",
    appId: "1:344916823855:web:aff753138b8af5bb579bda"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function imgError(image) {
    image.onerror = "";
    image.src = "https://w7.pngwing.com/pngs/419/837/png-transparent-telegram-icon-telegram-logo-computer-icons-telegram-blue-angle-triangle-thumbnail.png";
    return true;
}
function insertBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri,groupId) {
    var resultDiv = document.getElementById("results");
    newDiv = document.createElement('div'); //create a div
    newDiv.className = "maindiv";
    var tag = groupBlock;
    tag = tag.replaceAll('groupName', groupName);
    tag = tag.replaceAll('groupLogo', groupLogo);
    tag = tag.replaceAll('groupLink', groupLink);
    tag = tag.replaceAll('groupCount', groupCount);
    tag = tag.replaceAll('groupType', groupType);
    tag = tag.replaceAll('grouplinkText', groupId);
    tag = tag.replaceAll('groupDescri', groupDescri);
    tag = tag.replaceAll('currentPostLink', document.location.href);

    newDiv.innerHTML = tag; //add an id
    resultDiv.appendChild(newDiv); //append to the doc.body
    resultDiv.insertBefore(newDiv, resultDiv.lastChild)
}

function loadMorelink(lastcount) {
    //     alert(tableName,loadButtonid);
    document.getElementById("loadermain").style.display = "block";

    tableName = document.title.split(" Telegram")[0];

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
            var groupName = dataRow[k].groupName;
            // var groupLink = "https://t.me/" + dataRow[k].groupLink;
            var groupLink = "/p/telegram-links.html?tablename=" + tableName + "/" + tableRow[t];
            var groupLogo = dataRow[k].groupLogo;
            var groupCount = dataRow[k].groupCount;
            var groupType = dataRow[k].groupType;
            var groupDescri = dataRow[k].groupDescri;
            // insertRow(groupName, groupLink);
            insertBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri, dataRow[k].groupLink)
            // console.log(name, url);
            
        }
        // console.log(tableRow);
    });
}

function loadLinks(tableName) {
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
            // var groupLink = "https://t.me/" + dataRow[k].groupLink;
            var groupLink = "/p/telegram-links.html?tablename=" + tableName + "/" + tableRow[t];
            var groupLogo = dataRow[k].groupLogo;
            var groupCount = dataRow[k].groupCount;
            var groupType = dataRow[k].groupType;
            var groupDescri = dataRow[k].groupDescri;
            // insertRow(groupName, groupLink);
            insertBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri, dataRow[k].groupLink)
            // console.log(name, url);
        }
        // console.log(tableRow);
    });

}

function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var time = 0;
    var id = setInterval(frame, 10 * time);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            document.getElementById("results").style.display = "block";
            elem.style.display = "none";
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = "Wait until load all links ";

        }
    }
}

// add new group section
function insertWalink(teleId, table) {
    var tableAllLink = firebase.database().ref("AllLinks")
    tableAllLink.child(teleId).set(table);
    // console.log("inserted into table allLink");
    return 0;
}
// isAvailable("PJ1");
// insert link in specific table
function insertSpeciTable(table, waLink, response) {
    var tableAllLink = firebase.database().ref(table).push();
    tableAllLink.child("groupName").set(response[0]);
    tableAllLink.child("groupLink").set(waLink);
    tableAllLink.child("groupDescri").set(response[4]);
    tableAllLink.child("groupLogo").set(response[2]);
    tableAllLink.child("groupType").set(response[1]);
    tableAllLink.child("groupCount").set(response[3]);
    // console.log("inserted into table specific one");
    // document.getElementById("showGroup").style.display = 'block';
    // document.getElementById("addmessage").innerText = 'Your Group link added in WaLink.link';
    // document.getElementById("addgroupname").innerText = waName;
    // document.getElementById("addwaimg").setAttribute("src", "https://web.whatsapp.com/invite/icon/" + waId);


    return 0;
}
async function insertData(table, waId, response) {
    // alert(table);
    database = firebase.database();
    var ref = await database.ref("AllLinks/" + waId);
    // console.log(ref.key);
    ref.once("value", function (tableValue) {
        var dataRow = tableValue.val();
        if (dataRow == null) {
            // console.log("Not in database");
            insertWalink(waId, table);
            insertSpeciTable(table, waId, response);
            if (table.match("Hot") == null) {
                insertLatestTable("latestUpdates", waId, response);
            }

        } else {
            // console.log("This group link already in our site");
            // alert("This link already in our site");
            document.getElementById("showGroup").style.display = 'block';
            // document.getElementById("inputSection").style.display = 'none';
            document.getElementById("addmessage").innerText = 'This link already in our site';
            // document.getElementById("addgroupname").innerText = waName;
            // document.getElementById("addwaimg").setAttribute("src", "https://web.whatsapp.com/invite/icon/" + waId);

            return 1;
        }
    });
}

function insertLatestTable(table, waLink, response) {
    var tableAllLink = firebase.database().ref(table).push();
    tableAllLink.child("groupName").set(response[0]);
    tableAllLink.child("groupLink").set(waLink);
    tableAllLink.child("groupDescri").set(response[4]);
    tableAllLink.child("groupLogo").set(response[2]);
    tableAllLink.child("groupType").set(response[1]);
    tableAllLink.child("groupCount").set(response[3]);
    // console.log("inserted into table specific one");
    document.getElementById("showGroup").style.display = 'block';
    document.getElementById("addmessage").innerText = 'Your Group link added in telelinking.link';


    return 0;
}

function openForm() {
    document.getElementById("submitButton").style.display = 'block';
    document.getElementById("myForm").style.display = "block";
    document.getElementById("inputSection").style.display = 'block';
    document.getElementById("submitButton").style.display = "block";
    document.getElementById("loader").style.display = "none";
    document.getElementById("showGroup").style.display = "none";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("addmessage").innerText = "";
}


const handleIt = async () => {


    var waId = await document.getElementById("addwalink").value.split("/").reverse()[0];
    var category = await document.getElementById("addcategory").value;
    var language = await document.getElementById("addlanguage").value;
    var country = await document.getElementById("addcountry").value;
    var tableName = await country + " " + language + " " + category.replaceAll("/", " ");
    document.getElementById("inputSection").style.display = 'none';
    document.getElementById("loader").style.display = 'block';
    document.getElementById("submitButton").style.display = 'none';
    console.log(tableName);
    // document.getElementById("submitButton").disabled = true;
    fetchText(waId)
        .then((response) => {
            // console.log(response);
            var title = response[0];
            if (title == -2) {
                // document.getElementById("showGroup").style.display = 'block';
                document.getElementById("addmessage").innerText = 'Connection Error Try again later';
            } else if (title == undefined) {
                document.getElementById("inputSection").style.display = 'none';
                // document.getElementById("showGroup").style.display = 'block';
                // document.getElementById("showGroup").innerHTML="";
                document.getElementById("addmessage").innerText = 'This link is invalid';


                // document.getElementById("addgroupname").innerText = 'waName';
                // document.getElementById("addwaimg").setAttribute("src", "https://web.whatsapp.com/invite/icon/" + waId);
            } else {
                // alert(tableName);
                var showgroupdiv=document.getElementById("showGroup");
                showgroupdiv.style.display="block";
                var tag =groupBlock;
                tag = tag.replaceAll('groupName', response[0]);
                tag = tag.replaceAll('groupLogo', response[2]);
                tag = tag.replaceAll('groupLink', "https://t.me/"+waId);
                tag = tag.replaceAll('groupCount', response[3]);
                tag = tag.replaceAll('groupType', response[1]);
                tag = tag.replaceAll('grouplinkText', waId);
                tag = tag.replaceAll('groupDescri', response[4]);
                tag = tag.replaceAll('currentPostLink', document.location.href);
                showgroupdiv.innerHTML=tag;
                insertData(tableName, waId, response);
            }

        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            // document.getElementById("myForm").style.display = 'none';
            document.getElementById("loader").style.display = 'none';
            // document.getElementById("inputSection").style.display = 'block';
            // document.getElementById("submitButton").disabled = false;



        })

}
async function fetchText(waId) {
    console.log('https://telelinking.herokuapp.com/groupetails/' + waId)
    let response = await fetch('https://telelinking.herokuapp.com/groupetails/' + waId);

    // console.log(response.status); // 200
    // console.log(response.statusText); // OK

    if (response.status === 200) {
        // console.log(response);

        let data = await response.json();
        console.log(data);
        if(data[0]==0){
            // alert(data[0]);
            return({"title": -1});
        }
        return data;
    } else {
        // console.log(response);
        return ({
            "title": -2
        });
    }
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

function insertLatestBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri) {
    var resultDiv = document.getElementById("showlatest");
    newDiv = document.createElement('div'); //create a div
    newDiv.className = "maindiv";
    var tag = groupBlock;
    tag = tag.replaceAll('groupName', groupName);
    tag = tag.replaceAll('groupLogo', groupLogo);
    tag = tag.replaceAll('groupLink', groupLink);
    tag = tag.replaceAll('groupCount', groupCount);
    tag = tag.replaceAll('groupType', groupType);
    tag = tag.replaceAll('grouplinkText', groupLink.split("/").pop());
    tag = tag.replaceAll('groupDescri', groupDescri);
    tag = tag.replaceAll('currentPostLink', document.location.href);

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
            var groupName = dataRow[k].groupName;
            var groupLink = "https://t.me/" + dataRow[k].groupLink;
            var groupLogo = dataRow[k].groupLogo;
            var groupCount = dataRow[k].groupCount;
            var groupType = dataRow[k].groupType;
            var groupDescri = dataRow[k].groupDescri;
            // insertRow(groupName, groupLink);
            insertLatestBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri)
            // console.log(name, url);

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
            var groupLink = "https://t.me/" + dataRow[k].groupLink;
            var groupLogo = dataRow[k].groupLogo;
            var groupCount = dataRow[k].groupCount;
            var groupType = dataRow[k].groupType;
            var groupDescri = dataRow[k].groupDescri;
            // insertRow(groupName, groupLink);
            insertLatestBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri)
            // console.log(name, url);
        }
        // console.log(tableRow);
    });
}

const main=async()=>{
    initAddButton();
    var postSection = document.getElementById(articalSectionId);
    if (postSection != null) {
        var groupName = await document.title.split(" Telegram")[0];
        initPreArtical(groupName);         // insert per artical section
        //initLoading();            // insert loading bar section

        initGroupLinks(groupName);         // insert groups section
        initmainloader(articalSectionId);

        initLoadMoreLink()        // insert load button
        initPostArtical(groupName);        // insert post artical section
                 // insert add group button
        // move();
        loadLinks(groupName);
        document.getElementById("results").style.display = "block";

    } else if (document.getElementById("showlatest") != null) {
        initmainloader("showlatest");
        initLoadLatestMoreLink();
        loadLatest();
        
    } else if (document.getElementById("main") != null){
        var tableName = document.URL.split("?tablename=")[1];
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
