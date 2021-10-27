var articalSectionId = "root";
var addButtonCode = `
    <div style="position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 101;">
        <a class="addbtn" href="#" title="Add New telegram Group" onclick="openForm()">+</a>
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
        <div id="showGroup">
        </div>
        <div class="loader" id="loader"></div>
        <br /><br />
        <input type="submit" value="Submit" class="btn" id="submitButton" />
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>

    </form>
    </div>`;

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
    newSection.className = "w3-light-grey";
    var tag = `<div id="myBar" class="w3-container w3-cyan w3-center" style="width:0%;max-height:20px ;">0%</div>`;
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

function initPreArtical() {
    var mainContent = document.getElementById(articalSectionId);
    newSection = document.createElement('section'); //create a div
    newSection.className = "preArtical";
    newSection.id = "preArtical"
    // var tag = `<div id="results" style="display: none;">`;
    // newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

function initPostArtical() {
    var mainContent = document.getElementById(articalSectionId);
    newSection = document.createElement('section'); //create a div
    newSection.className = "PostArtical";
    newSection.id = "PostArtical"
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
initPreArtical();
initLoading();
initGroupLinks();
initLoadMoreLink()
initPostArtical();
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
var groupBlock = `
  <div>
                      <a style="color: #5a5a5a" target="_blank" href="groupLink" title="Telegram group invite link: groupName">
                          <span>
                              <img src="groupLogo" onerror="imgError(this);" class="image"  alt="groupName">
                          </span>
                      </a>
                      <a style="color: #5a5a5a;font-family: fantasy;" target="_blank" href="groupLink" title="Telegram group invite link: groupName">
                          <h2>groupName</h2>
                      </a>
                  </div>
                  <div class="block2">
                      <div class="post-basic-info"> 
                          <div style="color:#0088cc;">
                          <a style="font-weight: 600;"href="groupLink" title="Telegram Chaneel invite link: groupName" target="_blank">@grouplinkText</a>
                          </div>
                          <span style="padding-right:20px;">Category: groupType</span>
                          <span>subscribe/members: groupCount</span>
                          <p class="descri" style="margin-bottom: 0px">groupDescri</p>
                      </div>
                      <div class="post-info-rate-share"> <span class="joinbtn"><a class="joinbtn" href="groupLink" target="_blank" title="Click here to join groupName Telegram group" rel="nofollow">Join group</a></span>
                          <div class="post-share">
                              <div>

                                  <a class="joinbtn" style="vertical-align:top" href="whatsapp://send?text=Follow this link to Join my Telegram group : groupLink %0A %0AFind more Telegram group at: https://groupsor.link/ " data-action="share/whatsapp/share" rel="nofollow">Share on</a>
                                  <a href="whatsapp://send?text=Follow this link to Join my Telegram group : currentPostLink" data-action="share/whatsapp/share">
                                      <img src="https://groupsor.link/assets/images/whatsapp.png" width="24" height="24" alt="Share on Whatsapp" title="Share on Whatsapp" rel="nofollow"></a>

                                  <a href="https://twitter.com/intent/tweet?text=Follow this link to Join my Telegram group : &amp;url=currentPostLink" target="_blank" rel="nofollow">
                                      <img src="https://groupsor.link/assets/images/twitter.jpg" width="24" height="24" alt="Share on Twitter" title="Share on Twitter"></a>
                              </div>
                          </div>
                      </div>
                  </div>
  `;
function imgError(image) {
    image.onerror = "";
    image.src = "https://w7.pngwing.com/pngs/419/837/png-transparent-telegram-icon-telegram-logo-computer-icons-telegram-blue-angle-triangle-thumbnail.png";
    return true;
}
function insertBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri) {
    var resultDiv = document.getElementById("results");
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

function loadMorelink(lastcount) {
    //     alert(tableName,loadButtonid);
    tableName = document.title.split(" Telegram")[0];

    firebase.database().ref(tableName).once("value", function (tableValue) {
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableValue);
        // alert(tableRow.length);
        for (var t = lastcount; t < tableRow.length; t++) {

            if (t == lastcount + 8) {
                var loadMoreButton = document.getElementById("LoadMoreLink");
                tag = "loadMorelink('" + t + "')";
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
            insertBlock(groupName, groupLink, groupLogo, groupCount, groupType, groupDescri)
            // console.log(name, url);
            if (t == tableRow.length - 1) {
                // alert(t+" last link");
                var loadMoreButton = document.getElementById("LoadMoreLink");
                loadMoreButton.style.display = "none";
                break;
            }
        }
        // console.log(tableRow);
    });
}

function loadLinks() {
    var i = document.title.split(" Telegram")[0];
    // document.getElementById("tableHead").innerText = i;
    database = firebase.database();
    var ref = database.ref(i);
    ref.once("value", function (tableValue) {
        // console.log(tableValue.val());
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableRow);
        // console.log(tableValue);
        for (var t = 0; t < tableRow.length; t++) {
            if (t == 8) {
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
    // document.getElementById("submitButton").disabled = true;
    fetchText(waId)
        .then((response) => {
            // console.log(response);
            var title = response[0];
            if (title == -2) {
                document.getElementById("showGroup").style.display = 'block';
                document.getElementById("addmessage").innerText = 'Connection Error Try again later';
            } else if (title == -1) {
                document.getElementById("inputSection").style.display = 'none';
                document.getElementById("showGroup").style.display = 'block';
                document.getElementById("addmessage").innerText = 'This link is not invalid';


                // document.getElementById("addgroupname").innerText = 'waName';
                // document.getElementById("addwaimg").setAttribute("src", "https://web.whatsapp.com/invite/icon/" + waId);
            } else {
                // alert(tableName);
                var showgroupdiv=document.getElementById("showGroup");
                showgroupdiv.style.display="block";
                var tag = groupBlock;
                tag = tag.replaceAll('groupName', response[0]);
                tag = tag.replaceAll('groupLogo', response[2]);
                tag = tag.replaceAll('groupLink', "https://t.me/"+waId);
                tag = tag.replaceAll('groupCount', response[3]);
                tag = tag.replaceAll('groupType', response[1]);
                tag = tag.replaceAll('grouplinkText', waId);
                tag = tag.replaceAll('groupDescri', response[4]);
                tag = tag.replaceAll('currentPostLink', document.location.href);
                showgroupdiv.innerHTML=tag;
                // insertData(tableName, waId, title);
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
        return data;
    } else {
        // console.log(response);
        return ({
            "title": -2
        });
    }
}

// var postSection = document.getElementById("mainContent");
// if(postSection!=null){
    
// }
initAddButton();
move();
loadLinks();