var directWaLink=1;
var firebaseConfig = {
    apiKey: "AIzaSyBLD6K3MZOIc-8CCh1bd3miCp1sp09oPJI",
    authDomain: "whatsapp-group-linker.firebaseapp.com",
    databaseURL: "https://whatsapp-group-linker-default-rtdb.firebaseio.com",
    projectId: "whatsapp-group-linker",
    storageBucket: "whatsapp-group-linker.appspot.com",
    messagingSenderId: "270969542509",
    appId: "1:270969542509:web:78da8857670dd47a42ec64"
};

var addButtonCode =`
    <div style="position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 101;">
        <a class="addbtn" href="#" title="Add New Whatsapp Group" onclick="openerFilltForm()">Filtter</a>
    </div>
    <div class="form-popup" id="myFillteForm">
    <h2>Choose the categories</h2>
    <form action="javascript:handleFillter(this)" class="form-container">
        <div style="display: block;">
            <select name="category" id="category" class="selector" required>
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
            <select name="language" id="language" class="selector" required>
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
            <select name="country" id="country" class="selector" required>
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
        <br /><br />
        <input type="submit" value="Find" class="btn" id="submitFillterButton" />
        <button type="button" class="btn cancel" onclick="closeFillterForm()">Close</button>

    </form>
</div>
    <div style="position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 101;">
        <a class="addbtn" href="#" title="Add New Whatsapp Group" onclick="openForm()">+</a>
    </div>
    <div class="form-popup" id="myForm">
    <h2>Add your Whatsapp Group</h2>
    <form action="javascript:handleIt(this)" class="form-container">
        <div id='inputSection'>
            <input type="text" id="walink" placeholder="Enter the group link" required />
            <select name="category" id="category" class="selector" required>
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
            <select name="language" id="language" class="selector" required>
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
            <select name="country" id="country" class="selector" required>
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
            <img id="addwaimg" src="" alt="" srcset="">
            <p id="addgroupname"></p><br/>
            <h2 id="addmessage"></h2>
        </div>
        <div class="loader" id="loader"></div>
        <br /><br />
        <input type="submit" value="Submit" class="btn" id="submitButton" />
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>

    </form>
    </div>
    
`;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var groupNumber=1;
function initAddButton() {
    tableDiv = document.body;
    newSection = document.createElement("section");
    newSection.id = "addButton";
    newSection.innerHTML = addButtonCode;
    tableDiv.parentNode.insertBefore(newSection, tableDiv)
}
function initToggles() {
    var mainContent = document.getElementById("tableDiv");
    newSection = document.createElement('section'); //create a div
    newSection.className = "Toggles";
    newSection.id = "Toggles";
    var tag = ` <span class='imageToggle'>Show Image
    <label class="switch"> 
        <input type="checkbox" id='checkboxImage' onclick="toggleImage()">
        <span class="slider round"></span>
    </label></span>
    <span class='nameToggle'>Show Name
    <label class="switch"> 
        <input type="checkbox" id='checkboxName' onclick="toggleName()">
        <span class="slider round"></span>
    </label></span><br/><br/>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.firstChild)
}
function insertRow(groupName, groupLink) {
    tableName = document.title.split(" Whats")[0];
    // groupLink=groupLink+"?wa"
    // alert(sectionId);
    // groupLink ="https://chat.whatsapp.com/KVh3eakiodaCYqecX3Txlu";
    orgName=groupName;
    groupName = tableName+" Group "+groupNumber;
    var tbody = document.getElementById("tableBody");
    newtr = document.createElement('tr');   //create a div
    // newdiv.id=sectionId;
    groupId = groupLink.split(".com/")[1];
    var tag = `<td class="tdClass"><img class="waimg" src="https://web.whatsapp.com/invite/icon/`+groupId+`"></td>
            <td><span class="originalName">`+ orgName + `</span><span class="duplicateName">` + groupName+`</span></td>
            <td><a href="`+groupLink+`" target="_blank"><button name="button" type="button">Join Now</button></a></td>`;
    groupNumber++;
    newtr.innerHTML = tag;                    //add an id
    tbody.appendChild(newtr);                 //append to the doc.body
    tbody.insertBefore(newtr, tbody.lastChild)
}

function loadMorelink(lastcount) {
    tableName = document.title.split(" Whats")[0];

    firebase.database().ref(tableName).once("value", function (tableValue) {
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableRow.length, lastcount);

        // console.log(tableValue);
        // alert(tableRow.length);
        for (var t = lastcount; t >= -1; t--) {
            // console.log("main", t);

            if (t == -1) {
                // alert(t + " last link");
                var loadMoreButton = document.getElementById("loadmoreGroup");
                loadMoreButton.style.display = "none";
                break;
            }
            if (t == lastcount - 8) {
                // alert(t);
                var loadMoreButton = document.getElementById("loadmoreGroup");
                tag = "loadMorelink('" + t + "')";
                loadMoreButton.setAttribute('onclick', tag);

                // addLoadMoreButton(tableName+"buttonid",t+"sectionId");
                break;
            }
            var k = tableRow[t];
            var name = dataRow[k].groupName;
            var image = dataRow[k].groupImage;
            var url = "/p/whatsapp-join-link.html?walink=" + dataRow[k].groupLink + "&name=" + name;
            if(directWaLink==1){
                var url = "https://chat.whatsapp.com/" + dataRow[k].groupLink;
            }
            insertRow(name, url, image, tableName + "sectionId");
            // console.log(name, url);
            
        }
        // console.log(tableRow);
    });
}
function loadLinks() {
    var i = document.title.split(" Whats")[0];
    document.getElementById("tableHead").innerText = i;
    database = firebase.database();
    var ref = database.ref(i);
    ref.once("value", function (tableValue) {
        // console.log(tableValue.val());
        var dataRow = tableValue.val();
        var tableRow = Object.keys(dataRow);
        // console.log(tableRow);
        // console.log(tableValue);
        for (var t = tableRow.length-1; t >= 0; t--) {
            // console.log("main",t);

            if (t == tableRow.length-9) {
                // alert("hello");
                // console.log("sub",t);
                document.getElementById("loadmoreGroup").style.display = "block";
                var loadMoreButton = document.getElementById("loadmoreGroup");
                tag = "loadMorelink('" + t + "')";
                loadMoreButton.setAttribute('onclick', tag);
                break;
            }
            var k = tableRow[t];
            //                 var url = "https://bikespeci.blogspot.com/p/gateway.html?walink=" + dataRow[k].groupLink;
            // var url = "https://chat.whatsapp.com/" + dataRow[k].groupLink;
            var name = dataRow[k].groupName;
            var url = "/p/whatsapp-join-link.html?walink=" + dataRow[k].groupLink + "&name=" + name;
            // var image = dataRow[k].groupImage;
            if(directWaLink==1){
                var url = "https://chat.whatsapp.com/" + dataRow[k].groupLink;
            }
            if (typeof name == 'undefined') {
                var imgUrl = dataRow[k].url;
                if (typeof imgUrl != 'undefined')
                    imgTag = document.getElementById("postImg")
                imgTag.src = imgUrl;

                imgTag.style.display = "block";
                continue;
            }
            insertRow(name, url);
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
            document.querySelector("#tableHead").colSpan = 3;
            document.getElementById("tableDiv").style.display = "block";
            elem.style.display = "none";
            initToggles();
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = "Wait until load all links ";

        }
    }
}
function toggleImage() {
    if (document.getElementById('checkboxImage').value == 'on') {
        // alert(document.getElementById('checkboxImage').value);
        document.getElementById('checkboxImage').value = 'off';
        // document.getElementById('waimg').display = 'block';
        var waimgTags = document.getElementsByClassName('waimg');
        for (var a = 0; a < waimgTags.length; a++) {
            waimgTags[a].style.display = 'block';
        }
    } else if (document.getElementById('checkboxImage').value == 'off') {
        // alert(document.getElementById('checkboxImage').value);
        document.getElementById('checkboxImage').value = 'on';

        var waimgTags = document.getElementsByClassName('waimg');
        for (var a = 0; a < waimgTags.length; a++) {
            waimgTags[a].style.display = 'none';
        }
    }

}

function toggleName() {
    if (document.getElementById('checkboxName').value == 'on') {
        document.getElementById('checkboxName').value = 'off';
        // document.getElementById('waimg').display = 'block';
        var originalName = document.getElementsByClassName('originalName');
        var duplicateName = document.getElementsByClassName('duplicateName');
        for (var a = 0; a < originalName.length; a++) {
            originalName[a].style.display = 'block';
            duplicateName[a].style.display = 'none';
        }
    } else if (document.getElementById('checkboxName').value == 'off') {
        // alert(document.getElementById('checkboxImage').value);
        document.getElementById('checkboxName').value = 'on';

        var originalName = document.getElementsByClassName('originalName');
        var duplicateName = document.getElementsByClassName('duplicateName');
        for (var a = 0; a < originalName.length; a++) {
            originalName[a].style.display = 'none';
            duplicateName[a].style.display = 'block';
        }
    }

}
function insertWalink(waLink, table) {
    var tableAllLink = firebase.database().ref("AllLinks")
    tableAllLink.child(waLink).set(table);
    // console.log("inserted into table allLink");
    return 0;
}
// isAvailable("PJ1");
// insert link in specific table
function insertSpeciTable(table, waLink, waName) {
    var tableAllLink = firebase.database().ref(table).push();
    tableAllLink.child("groupName").set(waName);
    tableAllLink.child("groupLink").set(waLink);
    // console.log("inserted into table specific one");
    document.getElementById("showGroup").style.display = 'block';
    document.getElementById("addmessage").innerText = 'Your Group link added in WaLink.link';
    document.getElementById("addgroupname").innerText = waName;
    document.getElementById("addwaimg").setAttribute("src", "https://web.whatsapp.com/invite/icon/" + waId);


    return 0;
}

// link available checking
async function insertData(table, waId, waName) {
    database = firebase.database();
    var ref = await database.ref("AllLinks/" + waId);
    // console.log(ref.key);
    ref.once("value", function (tableValue) {
        var dataRow = tableValue.val();
        if (dataRow == null) {
            // console.log("Not in database");
            insertWalink(waId, table);
            insertSpeciTable(table, waId, waName)

        } else {
            // console.log("This group link already in our site");
            // alert("This link already in our site");
            document.getElementById("showGroup").style.display = 'block';
            // document.getElementById("inputSection").style.display = 'none';
            document.getElementById("addmessage").innerText = 'This link already in our site';
            document.getElementById("addgroupname").innerText = waName;
            document.getElementById("addwaimg").setAttribute("src", "https://web.whatsapp.com/invite/icon/"+waId);

            return 1;
        }
    });
}

async function fetchText(waId) {
    let response = await fetch('https://addwalink.herokuapp.com/check/' + waId);

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

function handleIt() {
    

    var waId = document.getElementById("walink").value.split("/").reverse()[0];
    var category = document.getElementById("category").value;
    var language = document.getElementById("language").value;
    var country = document.getElementById("country").value;
    var tableName = country + " " + language + " " + category.replaceAll("/", " ");
    document.getElementById("inputSection").style.display = 'none';
    document.getElementById("loader").style.display = 'block';
    document.getElementById("submitButton").style.display = 'none';
    // document.getElementById("submitButton").disabled = true;
    fetchText(waId)
        .then((response) => {
            var title = response.title;
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
                insertData(tableName, waId, title);
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

function openerFilltForm() {
    document.getElementById("myFillteForm").style.display = "block";
}
function closeFillterForm() {
    document.getElementById("myFillteForm").style.display = "none";
}

function handleFillter() {
    var category = document.getElementById("category").value;
    var language = document.getElementById("language").value;
    var country = document.getElementById("country").value;

    var tableName = country + " " + language + " " + category.replaceAll("/", " ");
    if (cateArray[tableName] != null) {
        window.location.href = cateArray[tableName];
    } else {
        alert("We din't have this collection now!")
    }


}
var cateArray = {
    'Zimbabwe English Spiritual Devotional': 'https://www.walinking.link/2021/10/zimbabwe-english-spiritual-devotional.html',
    'Malaysia Indonesian Education School': 'https://www.walinking.link/2021/10/malaysia-indonesian-education-school.html',
    'Malaysia English Social Friendship Community': 'https://www.walinking.link/2021/10/malaysia-english-social-friendship.html',
    'Israel Hebrew Adult 18+ Hot': 'https://www.walinking.link/2021/10/israel-hebrew-adult-18-hot-whatsapp.html',
    'India Punjabi Music Audio Songs': 'https://www.walinking.link/2021/10/india-punjabi-music-audio-songs.html',
    'India Bangla Auto Vehicle': 'https://www.walinking.link/2021/10/india-bangla-auto-vehicle-whatsapp.html',
    'Germany German Adult 18+ Hot': 'https://www.walinking.link/2021/10/germany-german-adult-18-hot-whatsapp.html',
    'India Marathi Sports Games': 'https://www.walinking.link/2021/10/india-marathi-sports-games-whatsapp.html',
    'India Kannada Education School': 'https://www.walinking.link/2021/10/india-kannada-education-school-whatsapp.html',
    'Egypt Afrikaans Education School': 'https://www.walinking.link/2021/10/egypt-afrikaans-education-school.html',
    'United States English Health Beauty Fitness': 'https://www.walinking.link/2021/10/united-states-english-health-beauty.html',
    'United Kingdom English Spiritual Devotional': 'https://www.walinking.link/2021/10/united-kingdom-english-spiritual.html',
    'United Kingdom English Gaming Apps': 'https://www.walinking.link/2021/10/united-kingdom-english-gaming-apps.html',
    'United Arab Emirates Malayalam Fashion Style Clothing': 'https://www.walinking.link/2021/10/united-arab-emirates-malayalam-fashion.html',
    'Sri Lanka English Travel Local Place': 'https://www.walinking.link/2021/10/sri-lanka-english-travel-local-place.html',
    'South Korea Armenian Family Relationships': 'https://www.walinking.link/2021/10/south-korea-armenian-family.html',
    'South Africa Zulu Adult 18+ Hot': 'https://www.walinking.link/2021/10/south-africa-zulu-adult-18-hot-whatsapp.html',
    'Pakistan Punjabi Adult 18+ Hot': 'https://www.walinking.link/2021/10/pakistan-punjabi-adult-18-hot-whatsapp.html',
    'Pakistan English Fashion Style Clothing': 'https://www.walinking.link/2021/10/pakistan-english-fashion-style-clothing.html',
    'Mexico Spanish Adult 18+ Hot': 'https://www.walinking.link/2021/10/mexico-spanish-adult-18-hot-whatsapp.html',
    'Mexico English Science Technology': 'https://www.walinking.link/2021/10/mexico-english-science-technology.html',
    'Malaysia English Adult 18+ Hot': 'https://www.walinking.link/2021/10/malaysia-english-adult-18-hot-whatsapp.html',
    'Kazakhstan Uzbek Family Relationships': 'https://www.walinking.link/2021/10/kazakhstan-uzbek-family-relationships.html',
    'Kazakhstan Turkish Adult 18+ Hot': 'https://www.walinking.link/2021/10/kazakhstan-turkish-adult-18-hot.html',
    'Jordan Ukrainian Adult 18+ Hot': 'https://www.walinking.link/2021/10/jordan-ukrainian-adult-18-hot-whatsapp.html',
    'Indonesia English Social Friendship Community': 'https://www.walinking.link/2021/10/indonesia-english-social-friendship.html',
    'India Urdu Spiritual Devotional': 'https://www.walinking.link/2021/10/india-urdu-spiritual-devotional.html',
    'India Punjabi Fan Club Celebrities': 'https://www.walinking.link/2021/10/india-punjabi-fan-club-celebrities.html',
    'India Marathi Money Earning': 'https://www.walinking.link/2021/10/india-marathi-money-earning-whatsapp.html',
    'Colombia Spanish Comedy Funny': 'https://www.walinking.link/2021/10/colombia-spanish-comedy-funny-whatsapp.html',
    'Canada English Education School': 'https://www.walinking.link/2021/10/canada-english-education-school.html',
    'Bulgaria English Adult 18+ Hot': 'https://www.walinking.link/2021/10/bulgaria-english-adult-18-hot-whatsapp.html',
    'Brazil Hindi Adult 18+ Hot': 'https://www.walinking.link/2021/10/brazil-hindi-adult-18-hot-whatsapp.html',
    'Belgium Bosnian Adult 18+ Hot': 'https://www.walinking.link/2021/10/belgium-bosnian-adult-18-hot-whatsapp.html',
    'Bangladesh Hindi Adult 18+ Hot': 'https://www.walinking.link/2021/10/bangladesh-hindi-adult-18-hot-whatsapp.html',
    'Bangladesh Bangla Dating Flirting Chatting': 'https://www.walinking.link/2021/10/bangladesh-bangla-dating-flirting.html',
    'Bahrain Bosnian Fashion Style Clothing': 'https://www.walinking.link/2021/10/bahrain-bosnian-fashion-style-clothing.html',
    'Australia Arabic Money Earning': 'https://www.walinking.link/2021/10/australia-arabic-money-earning-whatsapp.html',
    'Yemen English Adult 18+ Hot': 'https://www.walinking.link/2021/10/yemen-english-adult-18-hot-whatsapp.html',
    'United States English Education School': 'https://www.walinking.link/2021/10/united-states-english-education-school.html',
    'United Kingdom English Entertainment Masti': 'https://www.walinking.link/2021/10/united-kingdom-english-entertainment.html',
    'Tanzania Swahili Money Earning': 'https://www.walinking.link/2021/10/tanzania-swahili-money-earning-whatsapp.html',
    'Sri Lanka Tamil Pets Animals Nature': 'https://www.walinking.link/2021/10/sri-lanka-tamil-pets-animals-nature.html',
    'Sri Lanka Tamil Money Earning': 'https://www.walinking.link/2021/10/sri-lanka-tamil-money-earning-whatsapp.html',
    'Russia Serbian Adult 18+ Hot': 'https://www.walinking.link/2021/10/russia-serbian-adult-18-hot-whatsapp.html',
    'Pakistan English Family Relationships': 'https://www.walinking.link/2021/10/pakistan-english-family-relationships.html',
    'Mexico English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/mexico-english-dating-flirting-chatting.html',
    'Kuwait English Education School': 'https://www.walinking.link/2021/10/kuwait-english-education-school.html',
    'Japan Japanese Dating Flirting Chatting': 'https://www.walinking.link/2021/10/japan-japanese-dating-flirting-chatting.html',
    'Japan English Family Relationships': 'https://www.walinking.link/2021/10/japan-english-family-relationships.html',
    'Japan Arabic Education School': 'https://www.walinking.link/2021/10/japan-arabic-education-school-whatsapp.html',
    'India English Auto Vehicle': 'https://www.walinking.link/2021/10/india-english-auto-vehicle-whatsapp.html',
    'China Chinese Adult 18+ Hot': 'https://www.walinking.link/2021/10/china-chinese-adult-18-hot-whatsapp.html',
    'Bangladesh English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/bangladesh-english-dating-flirting.html',
    'Bangladesh English Business Advertising Marketing': 'https://www.walinking.link/2021/10/bangladesh-english-business-advertising.html',
    'Bangladesh Bangla Money Earning': 'https://www.walinking.link/2021/10/bangladesh-bangla-money-earning.html',
    'United States Sinhala Social Friendship Community': 'https://www.walinking.link/2021/10/united-states-sinhala-social-friendship.html',
    'United Kingdom English Money Earning': 'https://www.walinking.link/2021/10/united-kingdom-english-money-earning.html',
    'United Arab Emirates Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/united-arab-emirates-arabic-adult-18.html',
    'Saudi Arabia Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/saudi-arabia-arabic-adult-18-hot.html',
    'Pakistan Hindi Money Earning': 'https://www.walinking.link/2021/10/pakistan-hindi-money-earning-whatsapp.html',
    'Kenya English Gaming Apps': 'https://www.walinking.link/2021/10/kenya-english-gaming-apps-whatsapp.html',
    'Israel Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/israel-arabic-adult-18-hot-whatsapp.html',
    'India Basque Money Earning': 'https://www.walinking.link/2021/10/india-basque-money-earning-whatsapp.html',
    'Ghana English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/ghana-english-dating-flirting-chatting.html',
    'China Marathi Adult 18+ Hot': 'https://www.walinking.link/2021/10/china-marathi-adult-18-hot-whatsapp.html',
    'Canada English Comedy Funny': 'https://www.walinking.link/2021/10/canada-english-comedy-funny-whatsapp.html',
    'Brazil Chinese Music Audio Songs': 'https://www.walinking.link/2021/10/brazil-chinese-music-audio-songs.html',
    'Australia Afrikaans Adult 18+ Hot': 'https://www.walinking.link/2021/10/australia-afrikaans-adult-18-hot.html',
    'Argentina Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/argentina-arabic-adult-18-hot-whatsapp.html',
    'Argentina Albanian Art Design Photography': 'https://www.walinking.link/2021/10/argentina-albanian-art-design.html',
    'Algeria English Music Audio Songs': 'https://www.walinking.link/2021/10/algeria-english-music-audio-songs.html',
    'United States Urdu Education School': 'https://www.walinking.link/2021/10/united-states-urdu-education-school.html',
    'United States Tamil Health Beauty Fitness': 'https://www.walinking.link/2021/10/united-states-tamil-health-beauty.html',
    'United States English Jobs Career': 'https://www.walinking.link/2021/10/united-states-english-jobs-career.html',
    'United Arab Emirates Zulu Science Technology': 'https://www.walinking.link/2021/10/united-arab-emirates-zulu-science.html',
    'Uganda English Family Relationships': 'https://www.walinking.link/2021/10/uganda-english-family-relationships.html',
    'Sri Lanka Tamil Film Animation': 'https://www.walinking.link/2021/10/sri-lanka-tamil-film-animation-whatsapp.html',
    'Sri Lanka Tamil Family Relationships': 'https://www.walinking.link/2021/10/sri-lanka-tamil-family-relationships.html',
    'Pakistan Punjabi Family Relationships': 'https://www.walinking.link/2021/10/pakistan-punjabi-family-relationships.html',
    'Morocco English Adult 18+ Hot': 'https://www.walinking.link/2021/10/morocco-english-adult-18-hot-whatsapp.html',
    'Malaysia Malay Science Technology': 'https://www.walinking.link/2021/10/malaysia-malay-science-technology.html',
    'Malaysia Malay Entertainment Masti': 'https://www.walinking.link/2021/10/malaysia-malay-entertainment-masti.html',
    'Lebanon Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/lebanon-arabic-adult-18-hot-whatsapp.html',
    'Indonesia Indonesian Money Earning': 'https://www.walinking.link/2021/10/indonesia-indonesian-money-earning.html',
    'Indonesia English Education School': 'https://www.walinking.link/2021/10/indonesia-english-education-school.html',
    'India Malayalam Food Drinks': 'https://www.walinking.link/2021/10/india-malayalam-food-drinks-whatsapp.html',
    'Germany English Social Friendship Community': 'https://www.walinking.link/2021/10/germany-english-social-friendship.html',
    'Finland English Business Advertising Marketing': 'https://www.walinking.link/2021/10/finland-english-business-advertising.html',
    'China Arabic Comedy Funny': 'https://www.walinking.link/2021/10/china-arabic-comedy-funny-whatsapp.html',
    'Bolivia Chinese Comedy Funny': 'https://www.walinking.link/2021/10/bolivia-chinese-comedy-funny-whatsapp.html',
    'Austria Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/austria-arabic-adult-18-hot-whatsapp.html',
    'United States Telugu Adult 18+ Hot': 'https://www.walinking.link/2021/10/united-states-telugu-adult-18-hot.html',
    'United States Indonesian Sports Games': 'https://www.walinking.link/2021/10/united-states-indonesian-sports-games.html',
    'United States English Social Friendship Community': 'https://www.walinking.link/2021/10/united-states-english-social-friendship.html',
    'Uganda English Spiritual Devotional': 'https://www.walinking.link/2021/10/uganda-english-spiritual-devotional.html',
    'Turkey Arabic News Magazines Politics': 'https://www.walinking.link/2021/10/turkey-arabic-news-magazines-politics.html',
    'Tanzania Swahili Dating Flirting Chatting': 'https://www.walinking.link/2021/10/tanzania-swahili-dating-flirting.html',
    'Tanzania Afrikaans Adult 18+ Hot': 'https://www.walinking.link/2021/10/tanzania-afrikaans-adult-18-hot.html',
    'Sri Lanka English Science Technology': 'https://www.walinking.link/2021/10/sri-lanka-english-science-technology.html',
    'Sri Lanka English Jobs Career': 'https://www.walinking.link/2021/10/sri-lanka-english-jobs-career-whatsapp.html',
    'South Africa English Health Beauty Fitness': 'https://www.walinking.link/2021/10/south-africa-english-health-beauty.html',
    'South Africa English Entertainment Masti': 'https://www.walinking.link/2021/10/south-africa-english-entertainment.html',
    'South Africa English Education School': 'https://www.walinking.link/2021/10/south-africa-english-education-school.html',
    'Russia Indonesian Adult 18+ Hot': 'https://www.walinking.link/2021/10/russia-indonesian-adult-18-hot-whatsapp.html',
    'Pakistan Urdu Travel Local Place': 'https://www.walinking.link/2021/10/pakistan-urdu-travel-local-place.html',
    'Pakistan Urdu Film Animation': 'https://www.walinking.link/2021/10/pakistan-urdu-film-animation-whatsapp.html',
    'Pakistan Punjabi Social Friendship Community': 'https://www.walinking.link/2021/10/pakistan-punjabi-social-friendship.html',
    'Pakistan Punjabi Music Audio Songs': 'https://www.walinking.link/2021/10/pakistan-punjabi-music-audio-songs.html',
    'Pakistan English Fan Club Celebrities': 'https://www.walinking.link/2021/10/pakistan-english-fan-club-celebrities.html',
    'Pakistan English Art Design Photography': 'https://www.walinking.link/2021/10/pakistan-english-art-design-photography.html',
    'Pakistan Afrikaans Art Design Photography': 'https://www.walinking.link/2021/10/pakistan-afrikaans-art-design.html',
    'Oman English Family Relationships': 'https://www.walinking.link/2021/10/oman-english-family-relationships.html',
    'Netherlands Dutch Gaming Apps': 'https://www.walinking.link/2021/10/netherlands-dutch-gaming-apps-whatsapp.html',
    'Malaysia Indonesian Entertainment Masti': 'https://www.walinking.link/2021/10/malaysia-indonesian-entertainment-masti.html',
    'Lebanon Arabic Film Animation': 'https://www.walinking.link/2021/10/lebanon-arabic-film-animation-whatsapp.html',
    'Kuwait Sinhala Dating Flirting Chatting': 'https://www.walinking.link/2021/10/kuwait-sinhala-dating-flirting-chatting.html',
    'Kenya Uzbek Adult 18+ Hot': 'https://www.walinking.link/2021/10/kenya-uzbek-adult-18-hot-whatsapp-group.html',
    'Kenya Swahili Comedy Funny': 'https://www.walinking.link/2021/10/kenya-swahili-comedy-funny-whatsapp.html',
    'Kenya English Music Audio Songs': 'https://www.walinking.link/2021/10/kenya-english-music-audio-songs.html',
    'Kazakhstan Uzbek Adult 18+ Hot': 'https://www.walinking.link/2021/10/kazakhstan-uzbek-adult-18-hot-whatsapp.html',
    'Jordan Turkish Adult 18+ Hot': 'https://www.walinking.link/2021/10/jordan-turkish-adult-18-hot-whatsapp.html',
    'Israel English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/israel-english-dating-flirting-chatting.html',
    'Iraq Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/iraq-arabic-adult-18-hot-whatsapp-group.html',
    'Indonesia Indonesian Thoughts Quotes Jokes': 'https://www.walinking.link/2021/10/indonesia-indonesian-thoughts-quotes.html',
    'India Tamil Thoughts Quotes Jokes': 'https://www.walinking.link/2021/10/india-tamil-thoughts-quotes-jokes.html',
    'India Punjabi Travel Local Place': 'https://www.walinking.link/2021/10/india-punjabi-travel-local-place.html',
    'India Marathi Gaming Apps': 'https://www.walinking.link/2021/10/india-marathi-gaming-apps-whatsapp.html',
    'India Malayalam Travel Local Place': 'https://www.walinking.link/2021/10/india-malayalam-travel-local-place.html',
    'India Malayalam Science Technology': 'https://www.walinking.link/2021/10/india-malayalam-science-technology.html',
    'India Malayalam Jobs Career': 'https://www.walinking.link/2021/10/india-malayalam-jobs-career-whatsapp.html',
    'India Hungarian Music Audio Songs': 'https://www.walinking.link/2021/10/india-hungarian-music-audio-songs.html',
    'India Hindi Pets Animals Nature': 'https://www.walinking.link/2021/10/india-hindi-pets-animals-nature.html',
    'India Gujarati Music Audio Songs': 'https://www.walinking.link/2021/10/india-gujarati-music-audio-songs.html',
    'India Gujarati Family Relationships': 'https://www.walinking.link/2021/10/india-gujarati-family-relationships.html',
    'Iceland Armenian Adult 18+ Hot': 'https://www.walinking.link/2021/10/iceland-armenian-adult-18-hot-whatsapp.html',
    'Greece Bangla Adult 18+ Hot': 'https://www.walinking.link/2021/10/greece-bangla-adult-18-hot-whatsapp.html',
    'Denmark English Comedy Funny': 'https://www.walinking.link/2021/10/denmark-english-comedy-funny-whatsapp.html',
    'Denmark Afrikaans Adult 18+ Hot': 'https://www.walinking.link/2021/10/denmark-afrikaans-adult-18-hot-whatsapp.html',
    'Croatia Hindi Adult 18+ Hot': 'https://www.walinking.link/2021/10/croatia-hindi-adult-18-hot-whatsapp.html',
    'Colombia Spanish Dating Flirting Chatting': 'https://www.walinking.link/2021/10/colombia-spanish-dating-flirting.html',
    'China English Entertainment Masti': 'https://www.walinking.link/2021/10/china-english-entertainment-masti.html',
    'Bulgaria English Education School': 'https://www.walinking.link/2021/10/bulgaria-english-education-school.html',
    'Brazil Portuguese Dating Flirting Chatting': 'https://www.walinking.link/2021/10/brazil-portuguese-dating-flirting.html',
    'Brazil English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/brazil-english-dating-flirting-chatting.html',
    'Bahrain Indonesian Adult 18+ Hot': 'https://www.walinking.link/2021/10/bahrain-indonesian-adult-18-hot.html',
    'Austria Azerbaijani Adult 18+ Hot': 'https://www.walinking.link/2021/10/austria-azerbaijani-adult-18-hot.html',
    'Australia English Business Advertising Marketing': 'https://www.walinking.link/2021/10/australia-english-business-advertising.html',
    'Australia Chinese Adult 18+ Hot': 'https://www.walinking.link/2021/10/australia-chinese-adult-18-hot-whatsapp.html',
    'Australia Armenian Adult 18+ Hot': 'https://www.walinking.link/2021/10/australia-armenian-adult-18-hot.html',
    'Algeria Indonesian Adult 18+ Hot': 'https://www.walinking.link/2021/10/algeria-indonesian-adult-18-hot.html',
    'Algeria Afrikaans Auto Vehicle': 'https://www.walinking.link/2021/10/algeria-afrikaans-auto-vehicle-whatsapp.html',
    'Zimbabwe Zulu Science Technology': 'https://www.walinking.link/2021/10/zimbabwe-zulu-science-technology.html',
    'Zimbabwe English Sports Games': 'https://www.walinking.link/2021/10/zimbabwe-english-sports-games-whatsapp.html',
    'United States Urdu Gaming Apps': 'https://www.walinking.link/2021/10/united-states-urdu-gaming-apps-whatsapp.html',
    'United States Spanish Money Earning': 'https://www.walinking.link/2021/10/united-states-spanish-money-earning.html',
    'United States English Shopping Buy Sell': 'https://www.walinking.link/2021/10/united-states-english-shopping-buy-sell.html',
    'United States English Science Technology': 'https://www.walinking.link/2021/10/united-states-english-science.html',
    'United States English Music Audio Songs': 'https://www.walinking.link/2021/10/united-states-english-music-audio-songs.html',
    'United States English Money Earning': 'https://www.walinking.link/2021/10/united-states-english-money-earning.html',
    'United States English Gaming Apps': 'https://www.walinking.link/2021/10/united-states-english-gaming-apps.html',
    'United States English Fan Club Celebrities': 'https://www.walinking.link/2021/10/united-states-english-fan-club.html',
    'United States Armenian Education School': 'https://www.walinking.link/2021/10/united-states-armenian-education-school.html',
    'United Kingdom English Music Audio Songs': 'https://www.walinking.link/2021/10/united-kingdom-english-music-audio.html',
    'United Kingdom English Fan Club Celebrities': 'https://www.walinking.link/2021/10/united-kingdom-english-fan-club.html',
    'United Arab Emirates Urdu Music Audio Songs': 'https://www.walinking.link/2021/10/united-arab-emirates-urdu-music-audio.html',
    'United Arab Emirates Malayalam Adult 18+ Hot': 'https://www.walinking.link/2021/10/united-arab-emirates-malayalam-adult-18.html',
    'Uganda English Art Design Photography': 'https://www.walinking.link/2021/10/uganda-english-art-design-photography.html',
    'Tanzania Swahili Sports Games': 'https://www.walinking.link/2021/10/tanzania-swahili-sports-games-whatsapp.html',
    'Sri Lanka Tamil Shopping Buy Sell': 'https://www.walinking.link/2021/10/sri-lanka-tamil-shopping-buy-sell.html',
    'Sri Lanka Japanese Adult 18+ Hot': 'https://www.walinking.link/2021/10/sri-lanka-japanese-adult-18-hot.html',
    'Sri Lanka English Money Earning': 'https://www.walinking.link/2021/10/sri-lanka-english-money-earning.html',
    'Pakistan Hindi Shopping Buy Sell': 'https://www.walinking.link/2021/10/pakistan-hindi-shopping-buy-sell.html',
    'Pakistan Hindi Entertainment Masti': 'https://www.walinking.link/2021/10/pakistan-hindi-entertainment-masti.html',
    'Pakistan Armenian Adult 18+ Hot': 'https://www.walinking.link/2021/10/pakistan-armenian-adult-18-hot-whatsapp.html',
    'New Zealand English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/new-zealand-english-dating-flirting.html',
    'Macedonia Malayalam Business Advertising Marketing': 'https://www.walinking.link/2021/10/macedonia-malayalam-business.html',
    'Kenya English Fan Club Celebrities': 'https://www.walinking.link/2021/10/kenya-english-fan-club-celebrities.html',
    'Kenya English Adult 18+ Hot': 'https://www.walinking.link/2021/10/kenya-english-adult-18-hot-whatsapp.html',
    'Jamaica English Adult 18+ Hot': 'https://www.walinking.link/2021/10/jamaica-english-adult-18-hot-whatsapp.html',
    'Indonesia Indonesian Business Advertising Marketing': 'https://www.walinking.link/2021/10/indonesia-indonesian-business.html',
    'Indonesia Hindi Jobs Career': 'https://www.walinking.link/2021/10/indonesia-hindi-jobs-career-whatsapp.html',
    'Indonesia Arabic Education School': 'https://www.walinking.link/2021/10/indonesia-arabic-education-school.html',
    'India Telugu Spiritual Devotional': 'https://www.walinking.link/2021/10/india-telugu-spiritual-devotional.html',
    'India Tamil Spiritual Devotional': 'https://www.walinking.link/2021/10/india-tamil-spiritual-devotional.html',
    'India Marathi Entertainment Masti': 'https://www.walinking.link/2021/10/india-marathi-entertainment-masti.html',
    'India Marathi Education School': 'https://www.walinking.link/2021/10/india-marathi-education-school-whatsapp.html',
    'India Hindi Food Drinks': 'https://www.walinking.link/2021/10/india-hindi-food-drinks-whatsapp-group.html',
    'India English Film Animation': 'https://www.walinking.link/2021/10/india-english-film-animation-whatsapp.html',
    'India Bangla Sports Games': 'https://www.walinking.link/2021/10/india-bangla-sports-games-whatsapp.html',
    'India Bangla Pets Animals Nature': 'https://www.walinking.link/2021/10/india-bangla-pets-animals-nature.html',
    'Ghana Marathi Music Audio Songs': 'https://www.walinking.link/2021/10/ghana-marathi-music-audio-songs.html',
    'Colombia English Adult 18+ Hot': 'https://www.walinking.link/2021/10/colombia-english-adult-18-hot-whatsapp.html',
    'Belarus Basque Adult 18+ Hot': 'https://www.walinking.link/2021/10/belarus-basque-adult-18-hot-whatsapp.html',
    'Bangladesh Bangla Family Relationships': 'https://www.walinking.link/2021/10/bangladesh-bangla-family-relationships.html',
    'Bangladesh Bangla Education School': 'https://www.walinking.link/2021/10/bangladesh-bangla-education-school.html',
    'Bangladesh Bangla Business Advertising Marketing': 'https://www.walinking.link/2021/10/bangladesh-bangla-business-advertising.html',
    'Bangladesh Bangla Art Design Photography': 'https://www.walinking.link/2021/10/bangladesh-bangla-art-design.html',
    'Bahrain Malayalam Business Advertising Marketing': 'https://www.walinking.link/2021/10/bahrain-malayalam-business-advertising.html',
    'Azerbaijan Amharic Adult 18+ Hot': 'https://www.walinking.link/2021/10/azerbaijan-amharic-adult-18-hot.html',
    'Australia Portuguese Adult 18+ Hot': 'https://www.walinking.link/2021/10/australia-portuguese-adult-18-hot.html',
    'Algeria Afrikaans Sports Games': 'https://www.walinking.link/2021/10/algeria-afrikaans-sports-games-whatsapp.html',
    'Algeria Afrikaans Adult 18+ Hot': 'https://www.walinking.link/2021/10/algeria-afrikaans-adult-18-hot-whatsapp.html',
    'United Kingdom English Education School': 'https://www.walinking.link/2021/10/united-kingdom-english-education-school.html',
    'United Kingdom English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/united-kingdom-english-dating-flirting.html',
    'United Arab Emirates English Business Advertising Marketing': 'https://www.walinking.link/2021/10/united-arab-emirates-english-business.html',
    'Uganda English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/uganda-english-dating-flirting-chatting.html',
    'Uganda English Business Advertising Marketing': 'https://www.walinking.link/2021/10/uganda-english-business-advertising.html',
    'Turkey Turkish Entertainment Masti': 'https://www.walinking.link/2021/10/turkey-turkish-entertainment-masti.html',
    'Tanzania Swahili Business Advertising Marketing': 'https://www.walinking.link/2021/10/tanzania-swahili-business-advertising.html',
    'Sri Lanka Tamil Sports Games': 'https://www.walinking.link/2021/10/sri-lanka-tamil-sports-games-whatsapp.html',
    'Sri Lanka Tamil Jobs Career': 'https://www.walinking.link/2021/10/sri-lanka-tamil-jobs-career-whatsapp.html',
    'Sri Lanka Tamil Education School': 'https://www.walinking.link/2021/10/sri-lanka-tamil-education-school.html',
    'Sri Lanka Tamil Business Advertising Marketing': 'https://www.walinking.link/2021/10/sri-lanka-tamil-business-advertising.html',
    'Sri Lanka Sinhala Food Drinks': 'https://www.walinking.link/2021/10/sri-lanka-sinhala-food-drinks-whatsapp.html',
    'Sri Lanka English Sports Games': 'https://www.walinking.link/2021/10/sri-lanka-english-sports-games-whatsapp.html',
    'Sri Lanka English Music Audio Songs': 'https://www.walinking.link/2021/10/sri-lanka-english-music-audio-songs.html',
    'Sri Lanka English Gaming Apps': 'https://www.walinking.link/2021/10/sri-lanka-english-gaming-apps-whatsapp.html',
    'Sri Lanka English Entertainment Masti': 'https://www.walinking.link/2021/10/sri-lanka-english-entertainment-masti.html',
    'Sri Lanka English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/sri-lanka-english-dating-flirting.html',
    'Sri Lanka Bangla Business Advertising Marketing': 'https://www.walinking.link/2021/10/sri-lanka-bangla-business-advertising.html',
    'Sri Lanka Armenian Dating Flirting Chatting': 'https://www.walinking.link/2021/10/sri-lanka-armenian-dating-flirting.html',
    'South Korea Korean Social Friendship Community': 'https://www.walinking.link/2021/10/south-korea-korean-social-friendship.html',
    'South Korea English Music Audio Songs': 'https://www.walinking.link/2021/10/south-korea-english-music-audio-songs.html',
    'South Korea English Fan Club Celebrities': 'https://www.walinking.link/2021/10/south-korea-english-fan-club.html',
    'South Korea English Comedy Funny': 'https://www.walinking.link/2021/10/south-korea-english-comedy-funny.html',
    'South Korea English Business Advertising Marketing': 'https://www.walinking.link/2021/10/south-korea-english-business.html',
    'South Korea English Adult 18+ Hot': 'https://www.walinking.link/2021/10/south-korea-english-adult-18-hot.html',
    'South Africa English Business Advertising Marketing': 'https://www.walinking.link/2021/10/south-africa-english-business.html',
    'South Africa Afrikaans Adult 18+ Hot': 'https://www.walinking.link/2021/10/south-africa-afrikaans-adult-18-hot.html',
    'Singapore Tamil Money Earning': 'https://www.walinking.link/2021/10/singapore-tamil-money-earning-whatsapp.html',
    'Singapore Malay Adult 18+ Hot': 'https://www.walinking.link/2021/10/singapore-malay-adult-18-hot-whatsapp.html',
    'Singapore English Business Advertising Marketing': 'https://www.walinking.link/2021/10/singapore-english-business-advertising.html',
    'Saudi Arabia Malayalam Fashion Style Clothing': 'https://www.walinking.link/2021/10/saudi-arabia-malayalam-fashion-style.html',
    'Saudi Arabia Arabic Spiritual Devotional': 'https://www.walinking.link/2021/10/saudi-arabia-arabic-spiritual.html',
    'Romania Romanian Comedy Funny': 'https://www.walinking.link/2021/10/romania-romanian-comedy-funny-whatsapp.html',
    'Qatar English Fan Club Celebrities': 'https://www.walinking.link/2021/10/qatar-english-fan-club-celebrities.html',
    'Philippines English Business Advertising Marketing': 'https://www.walinking.link/2021/10/philippines-english-business.html',
    'Pakistan Urdu Health Beauty Fitness': 'https://www.walinking.link/2021/10/pakistan-urdu-health-beauty-fitness.html',
    'Pakistan Urdu Fan Club Celebrities': 'https://www.walinking.link/2021/10/pakistan-urdu-fan-club-celebrities.html',
    'Pakistan Punjabi Business Advertising Marketing': 'https://www.walinking.link/2021/10/pakistan-punjabi-business-advertising.html',
    'Pakistan Hindi Gaming Apps': 'https://www.walinking.link/2021/10/pakistan-hindi-gaming-apps-whatsapp.html',
    'Pakistan English Thoughts Quotes Jokes': 'https://www.walinking.link/2021/10/pakistan-english-thoughts-quotes-jokes.html',
    'Pakistan English Spiritual Devotional': 'https://www.walinking.link/2021/10/pakistan-english-spiritual-devotional.html',
    'Pakistan English Social Friendship Community': 'https://www.walinking.link/2021/10/pakistan-english-social-friendship.html',
    'Pakistan English News Magazines Politics': 'https://www.walinking.link/2021/10/pakistan-english-news-magazines.html',
    'Pakistan English Music Audio Songs': 'https://www.walinking.link/2021/10/pakistan-english-music-audio-songs.html',
    'Pakistan English Comedy Funny': 'https://www.walinking.link/2021/10/pakistan-english-comedy-funny-whatsapp.html',
    'Norway English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/norway-english-dating-flirting-chatting.html',
    'Nigeria Marathi Comedy Funny': 'https://www.walinking.link/2021/10/nigeria-marathi-comedy-funny-whatsapp.html',
    'Nigeria English Sports Games': 'https://www.walinking.link/2021/10/nigeria-english-sports-games-whatsapp.html',
    'Nigeria English Money Earning': 'https://www.walinking.link/2021/10/nigeria-english-money-earning-whatsapp.html',
    'Nigeria English Film Animation': 'https://www.walinking.link/2021/10/nigeria-english-film-animation-whatsapp.html',
    'Nigeria English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/nigeria-english-dating-flirting.html',
    'Nigeria English Art Design Photography': 'https://www.walinking.link/2021/10/nigeria-english-art-design-photography.html',
    'Morocco English Education School': 'https://www.walinking.link/2021/10/morocco-english-education-school.html',
    'Malaysia Malay Business Advertising Marketing': 'https://www.walinking.link/2021/10/malaysia-malay-business-advertising.html',
    'Malaysia English Gaming Apps': 'https://www.walinking.link/2021/10/malaysia-english-gaming-apps-whatsapp.html',
    'Libya Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/libya-arabic-adult-18-hot-whatsapp.html',
    'Lebanon English Adult 18+ Hot': 'https://www.walinking.link/2021/10/lebanon-english-adult-18-hot-whatsapp.html',
    'Kuwait English Adult 18+ Hot': 'https://www.walinking.link/2021/10/kuwait-english-adult-18-hot-whatsapp.html',
    'Kenya Swahili Adult 18+ Hot': 'https://www.walinking.link/2021/10/kenya-swahili-adult-18-hot-whatsapp.html',
    'Kazakhstan Polish Adult 18+ Hot': 'https://www.walinking.link/2021/10/kazakhstan-polish-adult-18-hot-whatsapp.html',
    'Japan English Adult 18+ Hot': 'https://www.walinking.link/2021/10/japan-english-adult-18-hot-whatsapp.html',
    'Italy Kazakh Money Earning': 'https://www.walinking.link/2021/10/italy-kazakh-money-earning-whatsapp.html',
    'Italy Italian Education School': 'https://www.walinking.link/2021/10/italy-italian-education-school-whatsapp.html',
    'Indonesia Tamil Adult 18+ Hot': 'https://www.walinking.link/2021/10/indonesia-tamil-adult-18-hot-whatsapp.html',
    'Indonesia Indonesian Social Friendship Community': 'https://www.walinking.link/2021/10/indonesia-indonesian-social-friendship.html',
    'Indonesia Indonesian Pets Animals Nature': 'https://www.walinking.link/2021/10/indonesia-indonesian-pets-animals.html',
    'Indonesia Indonesian Film Animation': 'https://www.walinking.link/2021/10/indonesia-indonesian-film-animation.html',
    'Indonesia Indonesian Education School': 'https://www.walinking.link/2021/10/indonesia-indonesian-education-school.html',
    'Indonesia Hindi Adult 18+ Hot': 'https://www.walinking.link/2021/10/indonesia-hindi-adult-18-hot-whatsapp.html',
    'Indonesia English Music Audio Songs': 'https://www.walinking.link/2021/10/indonesia-english-music-audio-songs.html',
    'Indonesia English Film Animation': 'https://www.walinking.link/2021/10/indonesia-english-film-animation.html',
    'Indonesia English Adult 18+ Hot': 'https://www.walinking.link/2021/10/indonesia-english-adult-18-hot-whatsapp.html',
    'India Urdu News Magazines Politics': 'https://www.walinking.link/2021/10/india-urdu-news-magazines-politics.html',
    'India Urdu Adult 18+ Hot': 'https://www.walinking.link/2021/10/india-urdu-adult-18-hot-whatsapp-group.html',
    'India Telugu Social Friendship Community': 'https://www.walinking.link/2021/10/india-telugu-social-friendship.html',
    'India Telugu Shopping Buy Sell': 'https://www.walinking.link/2021/10/india-telugu-shopping-buy-sell-whatsapp.html',
    'Switzerland Swedish Adult 18+ Hot': 'https://www.walinking.link/2021/10/switzerland-swedish-adult-18-hot.html',
    'Sri Lanka Tamil News Magazines Politics': 'https://www.walinking.link/2021/10/sri-lanka-tamil-news-magazines-politics.html',
    'Sri Lanka Tamil Comedy Funny': 'https://www.walinking.link/2021/10/sri-lanka-tamil-comedy-funny-whatsapp.html',
    'Sri Lanka Tamil Adult 18+ Hot': 'https://www.walinking.link/2021/10/sri-lanka-tamil-adult-18-hot-whatsapp.html',
    'Sri Lanka Sinhala Spiritual Devotional': 'https://www.walinking.link/2021/10/sri-lanka-sinhala-spiritual-devotional.html',
    'Sri Lanka Sinhala Health Beauty Fitness': 'https://www.walinking.link/2021/10/sri-lanka-sinhala-health-beauty-fitness.html',
    'Sri Lanka Sinhala Auto Vehicle': 'https://www.walinking.link/2021/10/sri-lanka-sinhala-auto-vehicle-whatsapp.html',
    'Sri Lanka English Fashion Style Clothing': 'https://www.walinking.link/2021/10/sri-lanka-english-fashion-style.html',
    'Sri Lanka English Auto Vehicle': 'https://www.walinking.link/2021/10/sri-lanka-english-auto-vehicle-whatsapp.html',
    'Spain English Adult 18+ Hot': 'https://www.walinking.link/2021/10/spain-english-adult-18-hot-whatsapp.html',
    'South Africa English Gaming Apps': 'https://www.walinking.link/2021/10/south-africa-english-gaming-apps.html',
    'Pakistan Urdu Food Drinks': 'https://www.walinking.link/2021/10/pakistan-urdu-food-drinks-whatsapp.html',
    'Pakistan Urdu Dating Flirting Chatting': 'https://www.walinking.link/2021/10/pakistan-urdu-dating-flirting-chatting.html',
    'Pakistan English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/pakistan-english-dating-flirting.html',
    'Pakistan Arabic Education School': 'https://www.walinking.link/2021/10/pakistan-arabic-education-school.html',
    'New Zealand English Business Advertising Marketing': 'https://www.walinking.link/2021/10/new-zealand-english-business.html',
    'Morocco Gujarati Music Audio Songs': 'https://www.walinking.link/2021/10/morocco-gujarati-music-audio-songs.html',
    'Morocco Arabic Money Earning': 'https://www.walinking.link/2021/10/morocco-arabic-money-earning-whatsapp.html',
    'Malaysia Malay Sports Games': 'https://www.walinking.link/2021/10/malaysia-malay-sports-games-whatsapp.html',
    'Malaysia Malay Pets Animals Nature': 'https://www.walinking.link/2021/10/malaysia-malay-pets-animals-nature.html',
    'Malaysia Malay Fan Club Celebrities': 'https://www.walinking.link/2021/10/malaysia-malay-fan-club-celebrities.html',
    'Malaysia Malay Family Relationships': 'https://www.walinking.link/2021/10/malaysia-malay-family-relationships.html',
    'Malaysia Indonesian Comedy Funny': 'https://www.walinking.link/2021/10/malaysia-indonesian-comedy-funny.html',
    'Iraq English Adult 18+ Hot': 'https://www.walinking.link/2021/10/iraq-english-adult-18-hot-whatsapp.html',
    'India Telugu News Magazines Politics': 'https://www.walinking.link/2021/10/india-telugu-news-magazines-politics.html',
    'India Telugu Money Earning': 'https://www.walinking.link/2021/10/india-telugu-money-earning-whatsapp.html',
    'India Telugu Gaming Apps': 'https://www.walinking.link/2021/10/india-telugu-gaming-apps-whatsapp-group.html',
    'India Telugu Dating Flirting Chatting': 'https://www.walinking.link/2021/10/india-telugu-dating-flirting-chatting.html',
    'India Tamil Science Technology': 'https://www.walinking.link/2021/10/india-tamil-science-technology-whatsapp.html',
    'India Tamil Pets Animals Nature': 'https://www.walinking.link/2021/10/india-tamil-pets-animals-nature.html',
    'India Tamil Music Audio Songs': 'https://www.walinking.link/2021/10/india-tamil-music-audio-songs-whatsapp.html',
    'India Tamil Health Beauty Fitness': 'https://www.walinking.link/2021/10/india-tamil-health-beauty-fitness.html',
    'India Tamil Gaming Apps': 'https://www.walinking.link/2021/10/india-tamil-gaming-apps-whatsapp-group.html',
    'India Tamil Fan Club Celebrities': 'https://www.walinking.link/2021/10/india-tamil-fan-club-celebrities.html',
    'India Tamil Family Relationships': 'https://www.walinking.link/2021/10/india-tamil-family-relationships.html',
    'India Tamil Comedy Funny': 'https://www.walinking.link/2021/10/india-tamil-comedy-funny-whatsapp-group.html',
    'India Sinhala Adult 18+ Hot': 'https://www.walinking.link/2021/10/india-sinhala-adult-18-hot-whatsapp.html',
    'India Punjabi Social Friendship Community': 'https://www.walinking.link/2021/10/india-punjabi-social-friendship.html',
    'India Punjabi Comedy Funny': 'https://www.walinking.link/2021/10/india-punjabi-comedy-funny-whatsapp.html',
    'India Marathi Social Friendship Community': 'https://www.walinking.link/2021/10/india-marathi-social-friendship.html',
    'India Marathi Shopping Buy Sell': 'https://www.walinking.link/2021/10/india-marathi-shopping-buy-sell.html',
    'India Marathi Jobs Career': 'https://www.walinking.link/2021/10/india-marathi-jobs-career-whatsapp.html',
    'India Marathi Fashion Style Clothing': 'https://www.walinking.link/2021/10/india-marathi-fashion-style-clothing.html',
    'India Malayalam Social Friendship Community': 'https://www.walinking.link/2021/10/india-malayalam-social-friendship.html',
    'India Malayalam Pets Animals Nature': 'https://www.walinking.link/2021/10/india-malayalam-pets-animals-nature.html',
    'India Malayalam Money Earning': 'https://www.walinking.link/2021/10/india-malayalam-money-earning-whatsapp.html',
    'India Malayalam Health Beauty Fitness': 'https://www.walinking.link/2021/10/india-malayalam-health-beauty-fitness.html',
    'India Malayalam Family Relationships': 'https://www.walinking.link/2021/10/india-malayalam-family-relationships.html',
    'India Kannada Sports Games': 'https://www.walinking.link/2021/10/india-kannada-sports-games-whatsapp.html',
    'India Kannada Gaming Apps': 'https://www.walinking.link/2021/10/india-kannada-gaming-apps-whatsapp.html',
    'India Kannada Dating Flirting Chatting': 'https://www.walinking.link/2021/10/india-kannada-dating-flirting-chatting.html',
    'India Kannada Comedy Funny': 'https://www.walinking.link/2021/10/india-kannada-comedy-funny-whatsapp.html',
    'India Hungarian Adult 18+ Hot': 'https://www.walinking.link/2021/10/india-hungarian-adult-18-hot-whatsapp.html',
    'India Hindi Health Beauty Fitness': 'https://www.walinking.link/2021/10/india-hindi-health-beauty-fitness.html',
    'India Hindi Family Relationships': 'https://www.walinking.link/2021/10/india-hindi-family-relationships.html',
    'India Gujarati Shopping Buy Sell': 'https://www.walinking.link/2021/10/india-gujarati-shopping-buy-sell.html',
    'India Gujarati Gaming Apps': 'https://www.walinking.link/2021/10/india-gujarati-gaming-apps-whatsapp.html',
    'India Gujarati Education School': 'https://www.walinking.link/2021/10/india-gujarati-education-school.html',
    'India Gujarati Art Design Photography': 'https://www.walinking.link/2021/10/india-gujarati-art-design-photography.html',
    'India Estonian Adult 18+ Hot': 'https://www.walinking.link/2021/10/india-estonian-adult-18-hot-whatsapp.html',
    'India English Thoughts Quotes Jokes': 'https://www.walinking.link/2021/10/india-english-thoughts-quotes-jokes.html',
    'India English Health Beauty Fitness': 'https://www.walinking.link/2021/10/india-english-health-beauty-fitness.html',
    'India English Fan Club Celebrities': 'https://www.walinking.link/2021/10/india-english-fan-club-celebrities.html',
    'India English Art Design Photography': 'https://www.walinking.link/2021/10/india-english-art-design-photography.html',
    'India Bangla Comedy Funny': 'https://www.walinking.link/2021/10/india-bangla-comedy-funny-whatsapp.html',
    'India Arabic Education School': 'https://www.walinking.link/2021/10/india-arabic-education-school-whatsapp.html',
    'Hong Kong Indonesian Gaming Apps': 'https://www.walinking.link/2021/10/hong-kong-indonesian-gaming-apps.html',
    'Ghana English Social Friendship Community': 'https://www.walinking.link/2021/10/ghana-english-social-friendship.html',
    'Ghana English Education School': 'https://www.walinking.link/2021/10/ghana-english-education-school-whatsapp.html',
    'Germany English Money Earning': 'https://www.walinking.link/2021/10/germany-english-money-earning-whatsapp.html',
    'Germany English Business Advertising Marketing': 'https://www.walinking.link/2021/10/germany-english-business-advertising.html',
    'France Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/france-arabic-adult-18-hot-whatsapp.html',
    'Finland English Education School': 'https://www.walinking.link/2021/10/finland-english-education-school.html',
    'Egypt English Education School': 'https://www.walinking.link/2021/10/egypt-english-education-school-whatsapp.html',
    'Egypt English Adult 18+ Hot': 'https://www.walinking.link/2021/10/egypt-english-adult-18-hot-whatsapp.html',
    'Egypt Arabic Travel Local Place': 'https://www.walinking.link/2021/10/egypt-arabic-travel-local-place.html',
    'Colombia Basque Adult 18+ Hot': 'https://www.walinking.link/2021/10/colombia-basque-adult-18-hot-whatsapp.html',
    'China English Shopping Buy Sell': 'https://www.walinking.link/2021/10/china-english-shopping-buy-sell.html',
    'China English Adult 18+ Hot': 'https://www.walinking.link/2021/10/china-english-adult-18-hot-whatsapp.html',
    'China Chinese Comedy Funny': 'https://www.walinking.link/2021/10/china-chinese-comedy-funny-whatsapp.html',
    'Canada English Dating Flirting Chatting': 'https://www.walinking.link/2021/10/canada-english-dating-flirting-chatting.html',
    'Canada English Business Advertising Marketing': 'https://www.walinking.link/2021/10/canada-english-business-advertising.html',
    'Canada Armenian Adult 18+ Hot': 'https://www.walinking.link/2021/10/canada-armenian-adult-18-hot-whatsapp.html',
    'Brazil Tamil Adult 18+ Hot': 'https://www.walinking.link/2021/10/brazil-tamil-adult-18-hot-whatsapp.html',
    'Brazil English Adult 18+ Hot': 'https://www.walinking.link/2021/10/brazil-english-adult-18-hot-whatsapp.html',
    'Bosnia and Herzegovina Afrikaans Education School': 'https://www.walinking.link/2021/10/bosnia-and-herzegovina-afrikaans.html',
    'Bolivia Spanish Adult 18+ Hot': 'https://www.walinking.link/2021/10/bolivia-spanish-adult-18-hot-whatsapp.html',
    'Bolivia Bangla Adult 18+ Hot': 'https://www.walinking.link/2021/10/bolivia-bangla-adult-18-hot-whatsapp.html',
    'Belarus Bosnian Fashion Style Clothing': 'https://www.walinking.link/2021/10/belarus-bosnian-fashion-style-clothing.html',
    'Bangladesh English Travel Local Place': 'https://www.walinking.link/2021/10/bangladesh-english-travel-local-place.html',
    'Bahrain Urdu Education School': 'https://www.walinking.link/2021/10/bahrain-urdu-education-school-whatsapp.html',
    'Bahrain Hindi Jobs Career': 'https://www.walinking.link/2021/10/bahrain-hindi-jobs-career-whatsapp.html',
    'Bahrain Gujarati Comedy Funny': 'https://www.walinking.link/2021/10/bahrain-gujarati-comedy-funny-whatsapp.html',
    'Bahrain English Comedy Funny': 'https://www.walinking.link/2021/10/bahrain-english-comedy-funny-whatsapp.html',
    'Bahrain Basque Art Design Photography': 'https://www.walinking.link/2021/10/bahrain-basque-art-design-photography.html',
    'Azerbaijan Sinhala Adult 18+ Hot': 'https://www.walinking.link/2021/10/azerbaijan-sinhala-adult-18-hot.html',
    'Azerbaijan Azerbaijani Auto Vehicle': 'https://www.walinking.link/2021/10/azerbaijan-azerbaijani-auto-vehicle.html',
    'Austria Malayalam Auto Vehicle': 'https://www.walinking.link/2021/10/austria-malayalam-auto-vehicle-whatsapp.html',
    'Austria Hindi Dating Flirting Chatting': 'https://www.walinking.link/2021/10/austria-hindi-dating-flirting-chatting.html',
    'Austria Bangla Adult 18+ Hot': 'https://www.walinking.link/2021/10/austria-bangla-adult-18-hot-whatsapp.html',
    'Australia English Family Relationships': 'https://www.walinking.link/2021/10/australia-english-family-relationships.html',
    'Australia Basque Business Advertising Marketing': 'https://www.walinking.link/2021/10/australia-basque-business-advertising.html',
    'Australia Arabic Comedy Funny': 'https://www.walinking.link/2021/10/australia-arabic-comedy-funny-whatsapp.html',
    'Argentina Azerbaijani Business Advertising Marketing': 'https://www.walinking.link/2021/10/argentina-azerbaijani-business.html',
    'Argentina Albanian Film Animation': 'https://www.walinking.link/2021/10/argentina-albanian-film-animation.html',
    'Algeria English Art Design Photography': 'https://www.walinking.link/2021/10/algeria-english-art-design-photography.html',
    'Algeria Azerbaijani Adult 18+ Hot': 'https://www.walinking.link/2021/10/algeria-azerbaijani-adult-18-hot.html',
    'Algeria Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/10/algeria-arabic-adult-18-hot-whatsapp.html',
    'Algeria Afrikaans Business Advertising Marketing': 'https://www.walinking.link/2021/10/algeria-afrikaans-business-advertising.html',
    'Algeria Afrikaans Art Design Photography': 'https://www.walinking.link/2021/10/algeria-afrikaans-art-design.html',
    'India Sinhala Education School': 'https://www.walinking.link/2021/10/india-sinhala-education-school-whatsapp.html',
    'India Punjabi Science Technology': 'https://www.walinking.link/2021/10/india-punjabi-science-technology.html',
    'India Punjabi Family Relationships': 'https://www.walinking.link/2021/10/india-punjabi-family-relationships.html',
    'India Marathi News Magazines Politics': 'https://www.walinking.link/2021/10/india-marathi-news-magazines-politics.html',
    'India Kannada Entertainment Masti': 'https://www.walinking.link/2021/10/india-kannada-entertainment-masti.html',
    'India Kannada Business Advertising Marketing': 'https://www.walinking.link/2021/10/india-kannada-business-advertising.html',
    'Bangladesh English Adult 18+ Hot': 'https://www.walinking.link/2021/10/bangladesh-english-adult-18-hot.html',
    'Austria English Business Advertising Marketing': 'https://www.walinking.link/2021/10/austria-english-business-advertising.html',
    'Austria English Adult 18+ Hot': 'https://www.walinking.link/2021/10/austria-english-adult-18-hot-whatsapp.html',
    'Austria Afrikaans Dating Flirting Chatting': 'https://www.walinking.link/2021/10/austria-afrikaans-dating-flirting.html',
    'Australia English Science Technology': 'https://www.walinking.link/2021/10/australia-english-science-technology.html',
    'Australia English Fan Club Celebrities': 'https://www.walinking.link/2021/10/australia-english-fan-club-celebrities.html',
    'Australia Azerbaijani Money Earning': 'https://www.walinking.link/2021/10/australia-azerbaijani-money-earning.html',
    'Algeria Norwegian Auto Vehicle': 'https://www.walinking.link/2021/10/algeria-norwegian-auto-vehicle-whatsapp.html',
    'Algeria Bangla Auto Vehicle': 'https://www.walinking.link/2021/10/algeria-bangla-auto-vehicle-whatsapp.html',
    'United States English Dating Flirting Chatting': 'https://www.walinking.link/2021/09/united-states-english-dating-flirting.html',
    'United States English Art Design Photography': 'https://www.walinking.link/2021/09/united-states-english-art-design.html',
    'Tanzania Swahili Adult 18+ Hot': 'https://www.walinking.link/2021/09/tanzania-swahili-adult-18-hot-whatsapp.html',
    'Sri Lanka Tamil Music Audio Songs': 'https://www.walinking.link/2021/09/sri-lanka-tamil-music-audio-songs.html',
    'Sri Lanka Sinhala Thoughts Quotes Jokes': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-thoughts-quotes-jokes.html',
    'Sri Lanka Sinhala News Magazines Politics': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-news-magazines.html',
    'South Africa English Film Animation': 'https://www.walinking.link/2021/09/south-africa-english-film-animation.html',
    'Pakistan Urdu Sports Games': 'https://www.walinking.link/2021/09/pakistan-urdu-sports-games-whatsapp.html',
    'Pakistan Urdu Money Earning': 'https://www.walinking.link/2021/09/pakistan-urdu-money-earning-whatsapp.html',
    'Pakistan Urdu Adult 18+ Hot': 'https://www.walinking.link/2021/09/pakistan-urdu-adult-18-hot-whatsapp.html',
    'Pakistan English Sports Games': 'https://www.walinking.link/2021/09/pakistan-english-sports-games-whatsapp.html',
    'Pakistan English Pets Animals Nature': 'https://www.walinking.link/2021/09/pakistan-english-pets-animals-nature.html',
    'Pakistan English Money Earning': 'https://www.walinking.link/2021/09/pakistan-english-money-earning-whatsapp.html',
    'Pakistan English Food Drinks': 'https://www.walinking.link/2021/09/pakistan-english-food-drinks-whatsapp.html',
    'Pakistan Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/09/pakistan-arabic-adult-18-hot-whatsapp.html',
    'Nigeria English Education School': 'https://www.walinking.link/2021/09/nigeria-english-education-school.html',
    'Indonesia Indonesian Fan Club Celebrities': 'https://www.walinking.link/2021/09/indonesia-indonesian-fan-club.html',
    'India Urdu Social Friendship Community': 'https://www.walinking.link/2021/09/india-urdu-social-friendship-community.html',
    'India Tamil Sports Games': 'https://www.walinking.link/2021/09/india-tamil-sports-games-whatsapp-group.html',
    'United States English Business Advertising Marketing': 'https://www.walinking.link/2021/09/united-states-english-business.html',
    'United States English Adult 18+ Hot': 'https://www.walinking.link/2021/09/united-states-english-adult-18-hot.html',
    'United Kingdom English Social Friendship Community': 'https://www.walinking.link/2021/09/united-kingdom-english-social.html',
    'United Kingdom English Health Beauty Fitness': 'https://www.walinking.link/2021/09/united-kingdom-english-health-beauty.html',
    'United Kingdom English Business Advertising Marketing': 'https://www.walinking.link/2021/09/united-kingdom-english-business.html',
    'United Kingdom English Adult 18+ Hot': 'https://www.walinking.link/2021/09/united-kingdom-english-adult-18-hot.html',
    'United Arab Emirates Hindi Adult 18+ Hot': 'https://www.walinking.link/2021/09/united-arab-emirates-hindi-adult-18-hot.html',
    'United Arab Emirates Arabic Social Friendship Community': 'https://www.walinking.link/2021/09/united-arab-emirates-arabic-social.html',
    'Uganda English Adult 18+ Hot': 'https://www.walinking.link/2021/09/uganda-english-adult-18-hot-whatsapp.html',
    'Turkey Turkish Adult 18+ Hot': 'https://www.walinking.link/2021/09/turkey-turkish-adult-18-hot-whatsapp.html',
    'Togo English Music Audio Songs': 'https://www.walinking.link/2021/09/togo-english-music-audio-songs-whatsapp.html',
    'Sri Lanka Tamil Gaming Apps': 'https://www.walinking.link/2021/09/sri-lanka-tamil-gaming-apps-whatsapp.html',
    'Sri Lanka Sinhala Travel Local Place': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-travel-local-place.html',
    'Sri Lanka Sinhala Sports Games': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-sports-games-whatsapp.html',
    'Sri Lanka Sinhala Social Friendship Community': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-social-friendship.html',
    'Sri Lanka Sinhala Shopping Buy Sell': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-shopping-buy-sell.html',
    'Sri Lanka Sinhala Science Technology': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-science-technology.html',
    'Sri Lanka Sinhala Pets Animals Nature': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-pets-animals-nature.html',
    'Sri Lanka Sinhala Music Audio Songs': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-music-audio-songs.html',
    'Sri Lanka Sinhala Money Earning': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-money-earning.html',
    'Sri Lanka Sinhala Jobs Career': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-jobs-career-whatsapp.html',
    'Sri Lanka Sinhala Gaming Apps': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-gaming-apps-whatsapp.html',
    'Sri Lanka Sinhala Film Animation': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-film-animation.html',
    'Sri Lanka Sinhala Fashion Style Clothing': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-fashion-style.html',
    'Sri Lanka Sinhala Fan Club Celebrities': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-fan-club-celebrities.html',
    'Sri Lanka Sinhala Family Relationships': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-family-relationships.html',
    'Sri Lanka Sinhala Entertainment Masti': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-entertainment-masti.html',
    'Sri Lanka Sinhala Education School': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-education-school.html',
    'Sri Lanka Sinhala Dating Flirting Chatting': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-dating-flirting.html',
    'Sri Lanka Sinhala Comedy Funny': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-comedy-funny-whatsapp.html',
    'Sri Lanka Sinhala Business Advertising Marketing': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-business-advertising.html',
    'Sri Lanka Sinhala Art Design Photography': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-art-design.html',
    'Sri Lanka Sinhala Adult 18+ Hot': 'https://www.walinking.link/2021/09/sri-lanka-sinhala-adult-18-hot-whatsapp.html',
    'Sri Lanka English Social Friendship Community': 'https://www.walinking.link/2021/09/sri-lanka-english-social-friendship.html',
    'Sri Lanka English Shopping Buy Sell': 'https://www.walinking.link/2021/09/sri-lanka-english-shopping-buy-sell.html',
    'Sri Lanka English Film Animation': 'https://www.walinking.link/2021/09/sri-lanka-english-film-animation.html',
    'Sri Lanka English Education School': 'https://www.walinking.link/2021/09/sri-lanka-english-education-school.html',
    'Sri Lanka English Comedy Funny': 'https://www.walinking.link/2021/09/sri-lanka-english-comedy-funny-whatsapp.html',
    'Sri Lanka English Business Advertising Marketing': 'https://www.walinking.link/2021/09/sri-lanka-english-business-advertising.html',
    'Sri Lanka English Art Design Photography': 'https://www.walinking.link/2021/09/sri-lanka-english-art-design.html',
    'Sri Lanka English Adult 18+ Hot': 'https://www.walinking.link/2021/09/sri-lanka-english-adult-18-hot-whatsapp.html',
    'Sri Lanka Arabic Sports Games': 'https://www.walinking.link/2021/09/sri-lanka-arabic-sports-games-whatsapp.html',
    'Sri Lanka Afrikaans Sports Games': 'https://www.walinking.link/2021/09/sri-lanka-afrikaans-sports-games.html',
    'Sri Lanka Afrikaans Comedy Funny': 'https://www.walinking.link/2021/09/sri-lanka-afrikaans-comedy-funny.html',
    'Spain Spanish Business Advertising Marketing': 'https://www.walinking.link/2021/09/spain-spanish-business-advertising.html',
    'South Africa English Adult 18+ Hot': 'https://www.walinking.link/2021/09/south-africa-english-adult-18-hot.html',
    'Singapore English Adult 18+ Hot': 'https://www.walinking.link/2021/09/singapore-english-adult-18-hot-whatsapp.html',
    'Romania Romanian Social Friendship Community': 'https://www.walinking.link/2021/09/romania-romanian-social-friendship.html',
    'Puerto Rico Urdu Adult 18+ Hot': 'https://www.walinking.link/2021/09/puerto-rico-urdu-adult-18-hot-whatsapp.html',
    'Portugal Portuguese Adult 18+ Hot': 'https://www.walinking.link/2021/09/portugal-portuguese-adult-18-hot.html',
    'Pakistan Urdu Thoughts Quotes Jokes': 'https://www.walinking.link/2021/09/pakistan-urdu-thoughts-quotes-jokes.html',
    'Pakistan Urdu Spiritual Devotional': 'https://www.walinking.link/2021/09/pakistan-urdu-spiritual-devotional.html',
    'Pakistan Urdu Social Friendship Community': 'https://www.walinking.link/2021/09/pakistan-urdu-social-friendship.html',
    'Pakistan Urdu Shopping Buy Sell': 'https://www.walinking.link/2021/09/pakistan-urdu-shopping-buy-sell.html',
    'Pakistan Urdu Science Technology': 'https://www.walinking.link/2021/09/pakistan-urdu-science-technology.html',
    'Pakistan Urdu Pets Animals Nature': 'https://www.walinking.link/2021/09/pakistan-urdu-pets-animals-nature.html',
    'Pakistan Urdu News Magazines Politics': 'https://www.walinking.link/2021/09/pakistan-urdu-news-magazines-politics.html',
    'Pakistan Urdu Music Audio Songs': 'https://www.walinking.link/2021/09/pakistan-urdu-music-audio-songs.html',
    'Pakistan Urdu Jobs Career': 'https://www.walinking.link/2021/09/pakistan-urdu-jobs-career-whatsapp.html',
    'Pakistan Urdu Gaming Apps': 'https://www.walinking.link/2021/09/pakistan-urdu-gaming-apps-whatsapp.html',
    'Pakistan Urdu Fashion Style Clothing': 'https://www.walinking.link/2021/09/pakistan-urdu-fashion-style-clothing.html',
    'Pakistan Urdu Family Relationships': 'https://www.walinking.link/2021/09/pakistan-urdu-family-relationships.html',
    'Pakistan Urdu Entertainment Masti': 'https://www.walinking.link/2021/09/pakistan-urdu-entertainment-masti.html',
    'Pakistan Urdu Education School': 'https://www.walinking.link/2021/09/pakistan-urdu-education-school-whatsapp.html',
    'Pakistan Urdu Comedy Funny': 'https://www.walinking.link/2021/09/pakistan-urdu-comedy-funny-whatsapp.html',
    'Pakistan Urdu Business Advertising Marketing': 'https://www.walinking.link/2021/09/pakistan-urdu-business-advertising.html',
    'Pakistan Urdu Auto Vehicle': 'https://www.walinking.link/2021/09/pakistan-urdu-auto-vehicle-whatsapp.html',
    'Pakistan Urdu Art Design Photography': 'https://www.walinking.link/2021/09/pakistan-urdu-art-design-photography.html',
    'Pakistan Hindi Adult 18+ Hot': 'https://www.walinking.link/2021/09/pakistan-hindi-adult-18-hot-whatsapp.html',
    'Pakistan Gujarati Adult 18+ Hot': 'https://www.walinking.link/2021/09/pakistan-gujarati-adult-18-hot-whatsapp.html',
    'Pakistan English Shopping Buy Sell': 'https://www.walinking.link/2021/09/pakistan-english-shopping-buy-sell.html',
    'Pakistan English Jobs Career': 'https://www.walinking.link/2021/09/pakistan-english-jobs-career-whatsapp.html',
    'Pakistan English Health Beauty Fitness': 'https://www.walinking.link/2021/09/pakistan-english-health-beauty-fitness.html',
    'Pakistan English Gaming Apps': 'https://www.walinking.link/2021/09/pakistan-english-gaming-apps-whatsapp.html',
    'Pakistan English Entertainment Masti': 'https://www.walinking.link/2021/09/pakistan-english-entertainment-masti.html',
    'Pakistan English Education School': 'https://www.walinking.link/2021/09/pakistan-english-education-school.html',
    'Pakistan English Business Advertising Marketing': 'https://www.walinking.link/2021/09/pakistan-english-business-advertising.html',
    'Pakistan English Adult 18+ Hot': 'https://www.walinking.link/2021/09/pakistan-english-adult-18-hot-whatsapp.html',
    'Pakistan Basque Comedy Funny': 'https://www.walinking.link/2021/09/pakistan-basque-comedy-funny-whatsapp.html',
    'Nigeria English Spiritual Devotional': 'https://www.walinking.link/2021/09/nigeria-english-spiritual-devotional.html',
    'Nigeria English Science Technology': 'https://www.walinking.link/2021/09/nigeria-english-science-technology.html',
    'Nigeria English Business Advertising Marketing': 'https://www.walinking.link/2021/09/nigeria-english-business-advertising.html',
    'Nigeria English Adult 18+ Hot': 'https://www.walinking.link/2021/09/nigeria-english-adult-18-hot-whatsapp.html',
    'Nigeria Arabic Education School': 'https://www.walinking.link/2021/09/nigeria-arabic-education-school.html',
    'Morocco English Social Friendship Community': 'https://www.walinking.link/2021/09/morocco-english-social-friendship.html',
    'Malaysia Malay Spiritual Devotional': 'https://www.walinking.link/2021/09/malaysia-malay-spiritual-devotional.html',
    'Malaysia Malay Social Friendship Community': 'https://www.walinking.link/2021/09/malaysia-malay-social-friendship.html',
    'Malaysia Malay Gaming Apps': 'https://www.walinking.link/2021/09/malaysia-malay-gaming-apps-whatsapp.html',
    '': 'https://www.walinking.link/2021/09/in-this-post-you-can-find-active.html',
    'Malaysia Malay Comedy Funny': 'https://www.walinking.link/2021/09/malaysia-malay-comedy-funny-whatsapp.html',
    'Malaysia Malay Adult 18+ Hot': 'https://www.walinking.link/2021/09/malaysia-malay-adult-18-hot-whatsapp.html',
    'Malaysia English Shopping Buy Sell': 'https://www.walinking.link/2021/09/malaysia-english-shopping-buy-sell.html',
    'Malaysia English Comedy Funny': 'https://www.walinking.link/2021/09/malaysia-english-comedy-funny-whatsapp.html',
    'Japan Japanese Adult 18+ Hot': 'https://www.walinking.link/2021/09/japan-japanese-adult-18-hot-whatsapp.html',
    'Japan English Business Advertising Marketing': 'https://www.walinking.link/2021/09/japan-english-business-advertising.html',
    'Italy Italian Film Animation': 'https://www.walinking.link/2021/09/italy-italian-film-animation-whatsapp.html',
    'Indonesia Thai Adult 18+ Hot': 'https://www.walinking.link/2021/09/indonesia-thai-adult-18-hot-whatsapp.html',
    'Indonesia Indonesian Sports Games': 'https://www.walinking.link/2021/09/indonesia-indonesian-sports-games.html',
    'Indonesia Indonesian Shopping Buy Sell': 'https://www.walinking.link/2021/09/indonesia-indonesian-shopping-buy-sell.html',
    'Indonesia Indonesian News Magazines Politics': 'https://www.walinking.link/2021/09/indonesia-indonesian-news-magazines.html',
    'Indonesia Indonesian Gaming Apps': 'https://www.walinking.link/2021/09/indonesia-indonesian-gaming-apps.html',
    'Indonesia Indonesian Family Relationships': 'https://www.walinking.link/2021/09/indonesia-indonesian-family.html',
    'Indonesia Indonesian Entertainment Masti': 'https://www.walinking.link/2021/09/indonesia-indonesian-entertainment.html',
    'Indonesia Indonesian Dating Flirting Chatting': 'https://www.walinking.link/2021/09/indonesia-indonesian-dating-flirting.html',
    'Indonesia Indonesian Comedy Funny': 'https://www.walinking.link/2021/09/indonesia-indonesian-comedy-funny.html',
    'Indonesia Indonesian Auto Vehicle': 'https://www.walinking.link/2021/09/indonesia-indonesian-auto-vehicle.html',
    'Indonesia Indonesian Art Design Photography': 'https://www.walinking.link/2021/09/indonesia-indonesian-art-design.html',
    'Indonesia Indonesian Adult 18+ Hot': 'https://www.walinking.link/2021/09/indonesia-indonesian-adult-18-hot.html',
    'Indonesia English Gaming Apps': 'https://www.walinking.link/2021/09/indonesia-english-gaming-apps-whatsapp.html',
    'India Urdu Education School': 'https://www.walinking.link/2021/09/india-urdu-education-school-whatsapp.html',
    'India Telugu Sports Games': 'https://www.walinking.link/2021/09/india-telugu-sports-games-whatsapp.html',
    'India Telugu Business Advertising Marketing': 'https://www.walinking.link/2021/09/india-telugu-business-advertising.html',
    'India Telugu Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-telugu-adult-18-hot-whatsapp.html',
    'India Tamil Social Friendship Community': 'https://www.walinking.link/2021/09/india-tamil-social-friendship-community.html',
    'India Tamil Shopping Buy Sell': 'https://www.walinking.link/2021/09/india-tamil-shopping-buy-sell-whatsapp.html',
    'India Tamil Money Earning': 'https://www.walinking.link/2021/09/india-tamil-money-earning-whatsapp.html',
    'India Tamil Jobs Career': 'https://www.walinking.link/2021/09/india-tamil-jobs-career-whatsapp-group.html',
    'India Tamil Food Drinks': 'https://www.walinking.link/2021/09/india-tamil-food-drinks-whatsapp-group.html',
    'India Tamil Fashion Style Clothing': 'https://www.walinking.link/2021/09/india-tamil-fashion-style-clothing.html',
    'India Tamil Entertainment Masti': 'https://www.walinking.link/2021/09/india-tamil-entertainment-masti.html',
    'India Tamil Education School': 'https://www.walinking.link/2021/09/india-tamil-education-school-whatsapp.html',
    'India Tamil Dating Flirting Chatting': 'https://www.walinking.link/2021/09/india-tamil-dating-flirting-chatting.html',
    'India Tamil Business Advertising Marketing': 'https://www.walinking.link/2021/09/india-tamil-business-advertising.html',
    'India Tamil Auto Vehicle': 'https://www.walinking.link/2021/09/india-tamil-auto-vehicle-whatsapp-group.html',
    'India Tamil Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-tamil-adult-18-hot-whatsapp-group.html',
    'India Punjabi Spiritual Devotional': 'https://www.walinking.link/2021/09/india-punjabi-spiritual-devotional.html',
    'India Punjabi Entertainment Masti': 'https://www.walinking.link/2021/09/india-punjabi-entertainment-masti.html',
    'India Punjabi Business Advertising Marketing': 'https://www.walinking.link/2021/09/india-punjabi-business-advertising.html',
    'India Punjabi Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-punjabi-adult-18-hot-whatsapp.html',
    'India Marathi Spiritual Devotional': 'https://www.walinking.link/2021/09/india-marathi-spiritual-devotional.html',
    'India Marathi Pets Animals Nature': 'https://www.walinking.link/2021/09/india-marathi-pets-animals-nature.html',
    'India Marathi Dating Flirting Chatting': 'https://www.walinking.link/2021/09/india-marathi-dating-flirting-chatting.html',
    'India Marathi Business Advertising Marketing': 'https://www.walinking.link/2021/09/india-marathi-business-advertising.html',
    'India Marathi Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-marathi-adult-18-hot-whatsapp.html',
    'India Malayalam Thoughts Quotes Jokes': 'https://www.walinking.link/2021/09/india-malayalam-thoughts-quotes-jokes.html',
    'India Malayalam Sports Games': 'https://www.walinking.link/2021/09/india-malayalam-sports-games-whatsapp.html',
    'India Malayalam Spiritual Devotional': 'https://www.walinking.link/2021/09/india-malayalam-spiritual-devotional.html',
    'India Malayalam Shopping Buy Sell': 'https://www.walinking.link/2021/09/india-malayalam-shopping-buy-sell.html',
    'India Malayalam Music Audio Songs': 'https://www.walinking.link/2021/09/india-malayalam-music-audio-songs.html',
    'India Malayalam Gaming Apps': 'https://www.walinking.link/2021/09/india-malayalam-gaming-apps-whatsapp.html',
    'India Malayalam Film Animation': 'https://www.walinking.link/2021/09/india-malayalam-film-animation-whatsapp.html',
    'India Malayalam Fashion Style Clothing': 'https://www.walinking.link/2021/09/india-malayalam-fashion-style-clothing.html',
    'India Malayalam Fan Club Celebrities': 'https://www.walinking.link/2021/09/india-malayalam-fan-club-celebrities.html',
    'India Malayalam Entertainment Masti': 'https://www.walinking.link/2021/09/india-malayalam-entertainment-masti.html',
    'India Malayalam Education School': 'https://www.walinking.link/2021/09/india-malayalam-education-school.html',
    'India Malayalam Dating Flirting Chatting': 'https://www.walinking.link/2021/09/india-malayalam-dating-flirting.html',
    'India Malayalam Comedy Funny': 'https://www.walinking.link/2021/09/india-malayalam-comedy-funny-whatsapp.html',
    'India Malayalam Business Advertising Marketing': 'https://www.walinking.link/2021/09/india-malayalam-business-advertising.html',
    'India Malayalam Art Design Photography': 'https://www.walinking.link/2021/09/india-malayalam-art-design-photography.html',
    'India Malayalam Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-malayalam-adult-18-hot-whatsapp.html',
    'India Kannada Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-kannada-adult-18-hot-whatsapp.html',
    'India Indonesian Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-indonesian-adult-18-hot-whatsapp.html',
    'India Hindi Thoughts Quotes Jokes': 'https://www.walinking.link/2021/09/india-hindi-thoughts-quotes-jokes.html',
    'India Hindi Spiritual Devotional': 'https://www.walinking.link/2021/09/india-hindi-spiritual-devotional.html',
    'India Hindi Social Friendship Community': 'https://www.walinking.link/2021/09/india-hindi-social-friendship-community.html',
    'India Hindi Science Technology': 'https://www.walinking.link/2021/09/india-hindi-science-technology-whatsapp.html',
    'India Hindi News Magazines Politics': 'https://www.walinking.link/2021/09/india-hindi-news-magazines-politics.html',
    'India Hindi Music Audio Songs': 'https://www.walinking.link/2021/09/india-hindi-music-audio-songs-whatsapp.html',
    'India Hindi Jobs Career': 'https://www.walinking.link/2021/09/india-hindi-jobs-career-whatsapp-group.html',
    'India Hindi Gaming Apps': 'https://www.walinking.link/2021/09/india-hindi-gaming-apps-whatsapp-group.html',
    'India Hindi Film Animation': 'https://www.walinking.link/2021/09/india-hindi-film-animation-whatsapp.html',
    'India Hindi Fashion Style Clothing': 'https://www.walinking.link/2021/09/india-hindi-fashion-style-clothing.html',
    'India Hindi Fan Club Celebrities': 'https://www.walinking.link/2021/09/india-hindi-fan-club-celebrities.html',
    'India Hindi Entertainment Masti': 'https://www.walinking.link/2021/09/india-hindi-entertainment-masti.html',
    'India Hindi Education School': 'https://www.walinking.link/2021/09/india-hindi-education-school-whatsapp.html',
    'India Hindi Dating Flirting Chatting': 'https://www.walinking.link/2021/09/india-hindi-dating-flirting-chatting.html',
    'India Hindi Comedy Funny': 'https://www.walinking.link/2021/09/india-hindi-comedy-funny-whatsapp-group.html',
    'India Hindi Business Advertising Marketing': 'https://www.walinking.link/2021/09/india-hindi-business-advertising.html',
    'India Hindi Auto Vehicle': 'https://www.walinking.link/2021/09/india-hindi-auto-vehicle-whatsapp-group.html',
    'India Hindi Art Design Photography': 'https://www.walinking.link/2021/09/india-hindi-art-design-photography.html',
    'India Hindi Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-hindi-adult-18-hot-whatsapp-group.html',
    'India Gujarati Fashion Style Clothing': 'https://www.walinking.link/2021/09/india-gujarati-fashion-style-clothing.html',
    'India Gujarati Business Advertising Marketing': 'https://www.walinking.link/2021/09/india-gujarati-business-advertising.html',
    'India Gujarati Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-gujarati-adult-18-hot-whatsapp.html',
    'India English Sports Games': 'https://www.walinking.link/2021/09/india-english-sports-games-whatsapp.html',
    'India English Spiritual Devotional': 'https://www.walinking.link/2021/09/india-english-spiritual-devotional.html',
    'India English Social Friendship Community': 'https://www.walinking.link/2021/09/india-english-social-friendship.html',
    'India English Shopping Buy Sell': 'https://www.walinking.link/2021/09/india-english-shopping-buy-sell.html',
    'India English Science Technology': 'https://www.walinking.link/2021/09/india-english-science-technology.html',
    'India English Pets Animals Nature': 'https://www.walinking.link/2021/09/india-english-pets-animals-nature.html',
    'India English News Magazines Politics': 'https://www.walinking.link/2021/09/india-english-news-magazines-politics.html',
    'India English Money Earning': 'https://www.walinking.link/2021/09/india-english-money-earning-whatsapp.html',
    'India English Jobs Career': 'https://www.walinking.link/2021/09/india-english-jobs-career-whatsapp.html',
    'India English Gaming Apps': 'https://www.walinking.link/2021/09/india-english-gaming-apps-whatsapp.html',
    'India English Food Drinks': 'https://www.walinking.link/2021/09/india-english-food-drinks-whatsapp.html',
    'India English Fashion Style Clothing': 'https://www.walinking.link/2021/09/india-english-fashion-style-clothing.html',
    'India English Family Relationships': 'https://www.walinking.link/2021/09/india-english-family-relationships.html',
    'India English Education School': 'https://www.walinking.link/2021/09/india-english-education-school-whatsapp.html',
    'India English Dating Flirting Chatting': 'https://www.walinking.link/2021/09/india-english-dating-flirting-chatting.html',
    'India English Comedy Funny': 'https://www.walinking.link/2021/09/india-english-comedy-funny-whatsapp.html',
    'India English Business Advertising Marketing': 'https://www.walinking.link/2021/09/india-english-business-advertising.html',
    'India English Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-english-adult-18-hot-whatsapp.html',
    'India Bosnian Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-bosnian-adult-18-hot-whatsapp.html',
    'India Bangla Spiritual Devotional': 'https://www.walinking.link/2021/09/india-bangla-spiritual-devotional.html',
    'India Bangla Money Earning': 'https://www.walinking.link/2021/09/india-bangla-money-earning-whatsapp.html',
    'India Bangla Gaming Apps': 'https://www.walinking.link/2021/09/india-bangla-gaming-apps-whatsapp-group.html',
    'India Bangla Entertainment Masti': 'https://www.walinking.link/2021/09/india-bangla-entertainment-masti.html',
    'India Bangla Education School': 'https://www.walinking.link/2021/09/india-bangla-education-school-whatsapp.html',
    'India Bangla Adult 18+ Hot': 'https://www.walinking.link/2021/09/india-bangla-adult-18-hot-whatsapp.html',
    'Greece Hindi Sports Games': 'https://www.walinking.link/2021/09/greece-hindi-sports-games-whatsapp.html',
    'Ghana English Sports Games': 'https://www.walinking.link/2021/09/ghana-english-sports-games-whatsapp.html',
    'Ghana English Money Earning': 'https://www.walinking.link/2021/09/ghana-english-money-earning-whatsapp.html',
    'Ghana English Adult 18+ Hot': 'https://www.walinking.link/2021/09/ghana-english-adult-18-hot-whatsapp.html',
    'Ghana Arabic Comedy Funny': 'https://www.walinking.link/2021/09/ghana-arabic-comedy-funny-whatsapp.html',
    'Germany English Art Design Photography': 'https://www.walinking.link/2021/09/germany-english-art-design-photography.html',
    'Germany English Adult 18+ Hot': 'https://www.walinking.link/2021/09/germany-english-adult-18-hot-whatsapp.html',
    'Germany Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/09/germany-arabic-adult-18-hot-whatsapp.html',
    'Georgia English Health Beauty Fitness': 'https://www.walinking.link/2021/09/georgia-english-health-beauty-fitness.html',
    'France English Business Advertising Marketing': 'https://www.walinking.link/2021/09/france-english-business-advertising.html',
    'Ethiopia English Education School': 'https://www.walinking.link/2021/09/ethiopia-english-education-school.html',
    'Ethiopia English Adult 18+ Hot': 'https://www.walinking.link/2021/09/ethiopia-english-adult-18-hot-whatsapp.html',
    'Egypt Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/09/egypt-arabic-adult-18-hot-whatsapp.html',
    'Czechia Bangla Adult 18+ Hot': 'https://www.walinking.link/2021/09/czechia-bangla-adult-18-hot-whatsapp.html',
    'India Malayalam Auto Vehicle': 'https://www.walinking.link/2021/09/india-malayalam-auto-vehicle-whatsapp.html',
    'India Hindi Travel Local Place': 'https://www.walinking.link/2021/09/india-hindi-travel-local-place-whatsapp.html',
    'India Hindi Sports Games': 'https://www.walinking.link/2021/09/india-hindi-sports-games-whatsapp-group.html',
    'India Hindi Shopping Buy Sell': 'https://www.walinking.link/2021/09/india-hindi-shopping-buy-sell-whatsapp.html',
    'India Hindi Roleplay Comics': 'https://www.walinking.link/2021/09/india-hindi-roleplay-comics-whatsapp.html',
    'India Hindi Money Earning': 'https://www.walinking.link/2021/09/india-hindi-money-earning-whatsapp.html',
    'India English Music Audio Songs': 'https://www.walinking.link/2021/09/india-english-music-audio-songs.html',
    'China English Business Advertising Marketing': 'https://www.walinking.link/2021/09/china-english-business-advertising.html',
    'Brazil Portuguese Business Advertising Marketing': 'https://www.walinking.link/2021/09/brazil-portuguese-business-advertising.html',
    'Brazil Portuguese Adult 18+ Hot': 'https://www.walinking.link/2021/09/brazil-portuguese-adult-18-hot-whatsapp.html',
    'Brazil Bangla Adult 18+ Hot': 'https://www.walinking.link/2021/09/brazil-bangla-adult-18-hot-whatsapp.html',
    'Azerbaijan Uzbek Adult 18+ Hot': 'https://www.walinking.link/2021/09/azerbaijan-uzbek-adult-18-hot-whatsapp.html',
    'Una': 'https://www.walinking.link/2021/08/una-whatsapp-group-links.html',
    'Shakti anand fans': 'https://www.walinking.link/2021/08/shakti-anand-fans-whatsapp-group-links.html',
    'Sargun mehta fans': 'https://www.walinking.link/2021/08/sargun-mehta-fans-whatsapp-group-links.html',
    'Sana saeed fans': 'https://www.walinking.link/2021/08/sana-saeed-fans-whatsapp-group-links.html',
    'Ridhi dogra fans': 'https://www.walinking.link/2021/08/ridhi-dogra-fans-whatsapp-group-links.html',
    'Ravi dubey fans': 'https://www.walinking.link/2021/08/ravi-dubey-fans-whatsapp-group-links.html',
    'Rampur': 'https://www.walinking.link/2021/08/rampur-whatsapp-group-links.html',
    'Ragini khanna fans': 'https://www.walinking.link/2021/08/ragini-khanna-fans-whatsapp-group-links.html',
    'Psychology students': 'https://www.walinking.link/2021/08/psychology-students-whatsapp-group-links.html',
    'Oman': 'https://www.walinking.link/2021/08/oman-whatsapp-group-links.html',
    'Nonveg': 'https://www.walinking.link/2021/08/nonveg-whatsapp-group-links.html',
    'Moneycontrol': 'https://www.walinking.link/2021/08/moneycontrol-whatsapp-group-links.html',
    'Mawra hocane fans': 'https://www.walinking.link/2021/08/in-this-post-you-can-find-active-mawra.html',
    'Mandi': 'https://www.walinking.link/2021/08/mandi-whatsapp-group-links.html',
    'Kushtagi': 'https://www.walinking.link/2021/08/kushtagi-whatsapp-group-links.html',
    'Kotturu': 'https://www.walinking.link/2021/08/kotturu-whatsapp-group-links.html',
    'China Chinese Shopping Buy Sell': 'https://www.walinking.link/2021/08/china-chinese-shopping-buy-sell.html',
    'Chile Marathi Adult 18+ Hot': 'https://www.walinking.link/2021/08/chile-marathi-adult-18-hot-whatsapp.html',
    'Chile English Science Technology': 'https://www.walinking.link/2021/08/chile-english-science-technology.html',
    'Canada English Adult 18+ Hot': 'https://www.walinking.link/2021/08/canada-english-adult-18-hot-whatsapp.html',
    'Bangladesh Bangla Adult 18+ Hot': 'https://www.walinking.link/2021/08/bangladesh-bangla-adult-18-hot-whatsapp.html',
    'Bahrain Urdu Auto Vehicle': 'https://www.walinking.link/2021/08/bahrain-urdu-auto-vehicle-whatsapp.html',
    'Bahrain English Adult 18+ Hot': 'https://www.walinking.link/2021/08/bahrain-english-adult-18-hot-whatsapp.html',
    'Bahrain Arabic Adult 18+ Hot': 'https://www.walinking.link/2021/08/bahrain-arabic-adult-18-hot-whatsapp.html',
    'Austria Amharic Family Relationships': 'https://www.walinking.link/2021/08/austria-amharic-family-relationships.html',
    'Australia Urdu Adult 18+ Hot': 'https://www.walinking.link/2021/08/australia-urdu-adult-18-hot-whatsapp.html',
    'Australia English Fashion Style Clothing': 'https://www.walinking.link/2021/08/australia-english-fashion-style.html',
    'Australia English Entertainment Masti': 'https://www.walinking.link/2021/08/australia-english-entertainment-masti.html',
    'Australia English Adult 18+ Hot': 'https://www.walinking.link/2021/08/australia-english-adult-18-hot-whatsapp.html',
    'single girls': 'https://www.walinking.link/2021/08/single-girls-whatsapp-group-links.html',
    'school girls': 'https://www.walinking.link/2021/08/school-girls-whatsapp-group-links.html',
    'kinnar': 'https://www.walinking.link/2021/08/kinnar-whatsapp-group-links.html',
    'kannada girls': 'https://www.walinking.link/2021/08/kannada-girls-whatsapp-group-links.html',
    'girls chat': 'https://www.walinking.link/2021/08/girls-chat-whatsapp-group-links.html',
    'free fire redeem code': 'https://www.walinking.link/2021/08/free-fire-redeem-code-whatsapp-group.html',
    'forex investor': 'https://www.walinking.link/2021/08/forex-investor-whatsapp-group-links.html',
    'Zee news': 'https://www.walinking.link/2021/08/zee-news-whatsapp-group-links.html',
    'Zayed khan fans': 'https://www.walinking.link/2021/08/zayed-khan-fans-whatsapp-group-links.html',
    'Youtuber': 'https://www.walinking.link/2021/08/youtuber-whatsapp-group-links.html',
    'Yo yo honey singh': 'https://www.walinking.link/2021/08/yo-yo-honey-singh-whatsapp-group-links.html',
    'Yana gupta fans': 'https://www.walinking.link/2021/08/yana-gupta-fans-whatsapp-group-links.html',
    'West bengal': 'https://www.walinking.link/2021/08/west-bengal-whatsapp-group-links.html',
    'Vineet raina fans': 'https://www.walinking.link/2021/08/vineet-raina-fans-whatsapp-group-links.html',
    'Video chat': 'https://www.walinking.link/2021/08/video-chat-whatsapp-group-links.html',
    'Vatican city': 'https://www.walinking.link/2021/08/vatican-city-whatsapp-group-links.html',
    'Varun badola fans': 'https://www.walinking.link/2021/08/varun-badola-fans-whatsapp-group-links.html',
    'Vaibhavi merchant fans': 'https://www.walinking.link/2021/08/vaibhavi-merchant-fans-whatsapp-group.html',
    'Urdu poetry': 'https://www.walinking.link/2021/08/urdu-poetry-whatsapp-group-links.html',
    'Trance music': 'https://www.walinking.link/2021/08/trance-music-whatsapp-group-links.html',
    'Tiktok vs youtuber fans': 'https://www.walinking.link/2021/08/tiktok-vs-youtuber-fans-whatsapp-group.html',
    'Tiktok': 'https://www.walinking.link/2021/08/tiktok-whatsapp-group-links.html',
    'Tibet': 'https://www.walinking.link/2021/08/tibet-whatsapp-group-links.html',
    'Thrissur': 'https://www.walinking.link/2021/08/thrissur-whatsapp-group-links.html',
    'Teriya magar fans': 'https://www.walinking.link/2021/08/teriya-magar-fans-whatsapp-group-links.html',
    'Telugu girls': 'https://www.walinking.link/2021/08/telugu-girls-whatsapp-group-links.html',
    'Tamil news': 'https://www.walinking.link/2021/08/tamil-news-whatsapp-group-links.html',
    'Sri lanka': 'https://www.walinking.link/2021/08/sri-lanka-whatsapp-group-links.html',
    'Soweto': 'https://www.walinking.link/2021/08/soweto-whatsapp-group-links.html',
    'Sneha ullal fans': 'https://www.walinking.link/2021/08/sneha-ullal-fans-whatsapp-group-links.html',
    'Shweta tiwari fans': 'https://www.walinking.link/2021/08/shweta-tiwari-fans-whatsapp-group-links.html',
    'Shefali zariwala fans': 'https://www.walinking.link/2021/08/shefali-zariwala-fans-whatsapp-group.html',
    'Sharad kelkar fans': 'https://www.walinking.link/2021/08/sharad-kelkar-fans-whatsapp-group-links.html',
    'Shankar ehsaan loy fans': 'https://www.walinking.link/2021/08/shankar-ehsaan-loy-fans-whatsapp-group.html',
    'Shalomsparkles clothing store': 'https://www.walinking.link/2021/08/shalomsparkles-clothing-store-whatsapp.html',
    'Shahpur': 'https://www.walinking.link/2021/08/shahpur-whatsapp-group-links.html',
    'Shabir ahluwalia fans': 'https://www.walinking.link/2021/08/shabir-ahluwalia-fans-whatsapp-group.html',
    'Sanjjanaa galrani fans': 'https://www.walinking.link/2021/08/sanjjanaa-galrani-fans-whatsapp-group.html',
    'Sanjay dutt fans': 'https://www.walinking.link/2021/08/sanjay-dutt-fans-whatsapp-group-links.html',
    'Sahid kapoor fans': 'https://www.walinking.link/2021/08/sahid-kapoor-fans-whatsapp-group-links.html',
    'Rrb': 'https://www.walinking.link/2021/08/rrb-whatsapp-group-links.html',
    'Royal challengers bangalore(rcb) fans': 'https://www.walinking.link/2021/08/royal-challengers-bangalorercb-fans.html',
    'Rohit roy fans': 'https://www.walinking.link/2021/08/rohit-roy-fans-whatsapp-group-links.html',
    'Religion': 'https://www.walinking.link/2021/08/religion-whatsapp-group-links.html',
    'Real madrid': 'https://www.walinking.link/2021/08/real-madrid-whatsapp-group-links.html',
    'Real estate': 'https://www.walinking.link/2021/08/real-estate-whatsapp-group-links.html',
    'Rashami desai fans': 'https://www.walinking.link/2021/08/rashami-desai-fans-whatsapp-group-links.html',
    'Raqesh bapat fans': 'https://www.walinking.link/2021/08/raqesh-bapat-fans-whatsapp-group-links.html',
    'Rajkummar rao fans': 'https://www.walinking.link/2021/08/rajkummar-rao-fans-whatsapp-group-links.html',
    'Rajeshwari sachdev fans': 'https://www.walinking.link/2021/08/rajeshwari-sachdev-fans-whatsapp-group.html',
    'Rajeev paul fans': 'https://www.walinking.link/2021/08/rajeev-paul-fans-whatsapp-group-links.html',
    'Radhika madan fans': 'https://www.walinking.link/2021/08/radhika-madan-fans-whatsapp-group-links.html',
    'Priya anand fans': 'https://www.walinking.link/2021/08/priya-anand-fans-whatsapp-group-links.html',
    'Preeti jhangiani fans': 'https://www.walinking.link/2021/08/preeti-jhangiani-fans-whatsapp-group.html',
    'Poetry': 'https://www.walinking.link/2021/08/poetry-whatsapp-group-links.html',
    'Parmeet sethi fans': 'https://www.walinking.link/2021/08/parmeet-sethi-fans-whatsapp-group-links.html',
    'Nursing': 'https://www.walinking.link/2021/08/nursing-whatsapp-group-links.html',
    'New dragon ball z': 'https://www.walinking.link/2021/08/new-dragon-ball-z-whatsapp-group-links.html',
    'Navy': 'https://www.walinking.link/2021/08/navy-whatsapp-group-links.html',
    'Narayani shastri fans': 'https://www.walinking.link/2021/08/narayani-shastri-fans-whatsapp-group.html',
    'Narayanavanam': 'https://www.walinking.link/2021/08/narayanavanam-whatsapp-group-links.html',
    'Nandish sandhu fans': 'https://www.walinking.link/2021/08/nandish-sandhu-fans-whatsapp-group-links.html',
    'Naman shaw fans': 'https://www.walinking.link/2021/08/naman-shaw-fans-whatsapp-group-links.html',
    'Mutual fund': 'https://www.walinking.link/2021/08/mutual-fund-whatsapp-group-links.html',
    'Mukul dev fans': 'https://www.walinking.link/2021/08/mukul-dev-fans-whatsapp-group-links.html',
    'Mppsc': 'https://www.walinking.link/2021/08/mppsc-whatsapp-group-links.html',
    'Monica bedi fans': 'https://www.walinking.link/2021/08/monica-bedi-fans-whatsapp-group-links.html',
    'Mba': 'https://www.walinking.link/2021/08/mba-whatsapp-group-links.html',
    'Marvel fans': 'https://www.walinking.link/2021/08/marvel-fans-whatsapp-group-links.html',
    'Manchester united fc': 'https://www.walinking.link/2021/08/manchester-united-fc-whatsapp-group.html',
    'Mallika sherawat fans': 'https://www.walinking.link/2021/08/mallika-sherawat-fans-whatsapp-group.html',
    'Malaika arora fans': 'https://www.walinking.link/2021/08/malaika-arora-fans-whatsapp-group-links.html',
    'Makrand deshpande fans': 'https://www.walinking.link/2021/08/makrand-deshpande-fans-whatsapp-group.html',
    'Londa': 'https://www.walinking.link/2021/08/londa-whatsapp-group-links.html',
    'Lingsugur': 'https://www.walinking.link/2021/08/lingsugur-whatsapp-group-links.html',
    'Lic': 'https://www.walinking.link/2021/08/lic-whatsapp-group-links.html',
    'Leonardo dicaprio fans': 'https://www.walinking.link/2021/08/leonardo-dicaprio-fans-whatsapp-group.html',
    'Lauren gottlieb fans': 'https://www.walinking.link/2021/08/lauren-gottlieb-fans-whatsapp-group.html',
    'Latest finance': 'https://www.walinking.link/2021/08/latest-finance-whatsapp-group-links.html',
    'Lakshmeshwar': 'https://www.walinking.link/2021/08/lakshmeshwar-whatsapp-group-links.html',
    'Kyra dutt fans': 'https://www.walinking.link/2021/08/kyra-dutt-fans-whatsapp-group-links.html',
    'Kurgunta': 'https://www.walinking.link/2021/08/kurgunta-whatsapp-group-links.html',
    'Kunwar amar fans': 'https://www.walinking.link/2021/08/kunwar-amar-fans-whatsapp-group-links.html',
    'Kunigal': 'https://www.walinking.link/2021/08/kunigal-whatsapp-group-links.html',
    'Kundgol': 'https://www.walinking.link/2021/08/kundgol-whatsapp-group-links.html',
    'Kundapura': 'https://www.walinking.link/2021/08/kundapura-whatsapp-group-links.html',
    'Kumta': 'https://www.walinking.link/2021/08/kumta-whatsapp-group-links.html',
    'Kudchi': 'https://www.walinking.link/2021/08/kudchi-whatsapp-group-links.html',
    'Krishnarajpet': 'https://www.walinking.link/2021/08/krishnarajpet-whatsapp-group-links.html',
    'Krishnarajasagara': 'https://www.walinking.link/2021/08/krishnarajasagara-whatsapp-group-links.html',
    'Koratagere': 'https://www.walinking.link/2021/08/koratagere-whatsapp-group-links.html',
    'Koppa': 'https://www.walinking.link/2021/08/koppa-whatsapp-group-links.html',
    'Konnur': 'https://www.walinking.link/2021/08/konnur-whatsapp-group-links.html',
    'Keerti gaekwad kelkar fans': 'https://www.walinking.link/2021/08/keerti-gaekwad-kelkar-fans-whatsapp.html',
    'Kay kay menon fans': 'https://www.walinking.link/2021/08/kay-kay-menon-fans-whatsapp-group-links.html',
    'Kanika maheshwari fans': 'https://www.walinking.link/2021/08/kanika-maheshwari-fans-whatsapp-group.html',
    'Kamalapuram': 'https://www.walinking.link/2021/08/kamalapuram-whatsapp-group-links.html',
    'Kamal haasan fans': 'https://www.walinking.link/2021/08/kamal-haasan-fans-whatsapp-group-links.html',
    'Kadur': 'https://www.walinking.link/2021/08/kadur-whatsapp-group-links.html',
    'Join trend': 'https://www.walinking.link/2021/08/join-trend-whatsapp-group-links.html',
    'Join interior designer': 'https://www.walinking.link/2021/08/join-interior-designer-whatsapp-group.html',
    'Jog falls': 'https://www.walinking.link/2021/08/jog-falls-whatsapp-group-links.html',
    'Jasprit bumrah fans': 'https://www.walinking.link/2021/08/jasprit-bumrah-fans-whatsapp-group-links.html',
    'Join nigeria': 'https://www.walinking.link/2021/08/join-nigeria-whatsapp-group-links.html',
    'Jamkhandi': 'https://www.walinking.link/2021/08/jamkhandi-whatsapp-group-links.html',
    'Jagalur': 'https://www.walinking.link/2021/08/jagalur-whatsapp-group-links.html',
    'Irfan pathan fans': 'https://www.walinking.link/2021/08/irfan-pathan-fans-whatsapp-group-links.html',
    'Indi': 'https://www.walinking.link/2021/08/indi-whatsapp-group-links.html',
    'Ketki dave fans': 'https://www.walinking.link/2021/08/ketki-dave-fans-whatsapp-group-links.html',
    'Juhi chawla fans': 'https://www.walinking.link/2021/08/juhi-chawla-fans-whatsapp-group-links.html',
    'Genuine': 'https://www.walinking.link/2021/07/genuine-whatsapp-group-links.html',
    'Dubai': 'https://www.walinking.link/2021/07/dubai-whatsapp-group-links.html',
    'Durban': 'https://www.walinking.link/2021/07/durban-whatsapp-group-links.html',
    'ECE': 'https://www.walinking.link/2021/07/ece-whatsapp-group-links.html',
    'EDM': 'https://www.walinking.link/2021/07/edm-whatsapp-group-links.html',
    'Economics': 'https://www.walinking.link/2021/07/economics-whatsapp-group-links.html',
    'Education': 'https://www.walinking.link/2021/07/education-whatsapp-group-links.html',
    'Educational': 'https://www.walinking.link/2021/07/educational-whatsapp-group-links.html',
    'Eldoret': 'https://www.walinking.link/2021/07/eldoret-whatsapp-group-links.html',
    'English Learning': 'https://www.walinking.link/2021/07/english-learning-whatsapp-group-links.html',
    'English Speaking': 'https://www.walinking.link/2021/07/english-speaking-whatsapp-group-links.html',
    'Entertainment': 'https://www.walinking.link/2021/07/entertainment-whatsapp-group-links.html',
    'Engineering': 'https://www.walinking.link/2021/07/engineering-whatsapp-group-links.html',
    'Entrepreneurs': 'https://www.walinking.link/2021/07/entrepreneurs-whatsapp-group-links.html',
    'Europe': 'https://www.walinking.link/2021/07/europe-whatsapp-group-links.html',
    'Event': 'https://www.walinking.link/2021/07/event-whatsapp-group-links.html',
    'Express News': 'https://www.walinking.link/2021/07/express-news-whatsapp-group-links.html',
    'FIFA': 'https://www.walinking.link/2021/07/fifa-whatsapp-group-links.html',
    'Finland': 'https://www.walinking.link/2021/07/finland-whatsapp-group-links.html',
    'Fiverr': 'https://www.walinking.link/2021/07/fiverr-whatsapp-group-links.html',
    'Football': 'https://www.walinking.link/2021/07/football-whatsapp-group-links.html',
    'Foreigner': 'https://www.walinking.link/2021/07/foreigner-whatsapp-group-links.html',
    'French': 'https://www.walinking.link/2021/07/french-whatsapp-group-links.html',
    'Family': 'https://www.walinking.link/2021/07/family-whatsapp-group-links.html',
    'Famous': 'https://www.walinking.link/2021/07/famous-whatsapp-group-links.html',
    'Fantasy Premier League': 'https://www.walinking.link/2021/07/fantasy-premier-league-whatsapp-group.html',
    'Fitness': 'https://www.walinking.link/2021/07/fitness-whatsapp-group-links.html',
    'Free': 'https://www.walinking.link/2021/07/free-whatsapp-group-links.html',
    'Friends': 'https://www.walinking.link/2021/07/friends-whatsapp-group-links.html',
    'Friendship': 'https://www.walinking.link/2021/07/friendship-whatsapp-group-links.html',
    'Funny': 'https://www.walinking.link/2021/07/funny-whatsapp-group-links.html',
    'Funny SMS': 'https://www.walinking.link/2021/07/funny-sms-whatsapp-group-links.html',
    'GRE Preparation': 'https://www.walinking.link/2021/07/gre-preparation-whatsapp-group-links.html',
    'Gate': 'https://www.walinking.link/2021/07/gate-whatsapp-group-links.html',
    'Gauteng': 'https://www.walinking.link/2021/07/gauteng-whatsapp-group-links.html',
    'Geo News': 'https://www.walinking.link/2021/07/geo-news-whatsapp-group-links.html',
    'Germany': 'https://www.walinking.link/2021/07/germany-whatsapp-group-links.html',
    'Ghana': 'https://www.walinking.link/2021/07/ghana-whatsapp-group-links.html',
    'Goa': 'https://www.walinking.link/2021/07/goa-whatsapp-group-links.html',
    'Google Pay': 'https://www.walinking.link/2021/07/google-pay-whatsapp-group-links.html',
    'Gujarati': 'https://www.walinking.link/2021/07/gujarati-whatsapp-group-links.html',
    'Gulf Jobs': 'https://www.walinking.link/2021/07/gulf-jobs-whatsapp-group-links.html',
    'Gym': 'https://www.walinking.link/2021/07/gym-whatsapp-group-links.html',
    'Harare': 'https://www.walinking.link/2021/07/harare-whatsapp-group-links.html',
    'Herbal': 'https://www.walinking.link/2021/07/herbal-whatsapp-group-links.html',
    'High School': 'https://www.walinking.link/2021/07/high-school-whatsapp-group-links.html',
    'Hindi News': 'https://www.walinking.link/2021/07/hindi-news-whatsapp-group-links.html',
    'Hindu': 'https://www.walinking.link/2021/07/hindu-whatsapp-group-links.html',
    'Hollywood': 'https://www.walinking.link/2021/07/hollywood-whatsapp-group-links.html',
    'Housewife': 'https://www.walinking.link/2021/07/housewife-whatsapp-group-links.html',
    'Hustlers': 'https://www.walinking.link/2021/07/hustlers-whatsapp-group-links.html',
    'IIT': 'https://www.walinking.link/2021/07/iit-whatsapp-group-links.html',
    'IQ Option': 'https://www.walinking.link/2021/07/iq-option-whatsapp-group-links.html',
    'Iceland': 'https://www.walinking.link/2021/07/iceland-whatsapp-group-links.html',
    'Import Export': 'https://www.walinking.link/2021/07/import-export-whatsapp-group-links.html',
    'International': 'https://www.walinking.link/2021/07/international-whatsapp-group-links.html',
    'Islamic': 'https://www.walinking.link/2021/07/islamic-whatsapp-group-links.html',
    'Italy': 'https://www.walinking.link/2021/07/italy-whatsapp-group-links.html',
    'Jaipur': 'https://www.walinking.link/2021/07/jaipur-whatsapp-group-links.html',
    'Jharkhand': 'https://www.walinking.link/2021/07/jharkhand-whatsapp-group-links.html',
    'Job': 'https://www.walinking.link/2021/07/job-whatsapp-group-links.html',
    'Jokes': 'https://www.walinking.link/2021/07/jokes-whatsapp-group-links.html',
    'Justin Bieber Fans': 'https://www.walinking.link/2021/07/justin-bieber-fans-whatsapp-group-links.html',
    'Kannada': 'https://www.walinking.link/2021/07/kannada-whatsapp-group-links.html',
    'Karachi': 'https://www.walinking.link/2021/07/karachi-whatsapp-group-links.html',
    'Kenya': 'https://www.walinking.link/2021/07/kenya-whatsapp-group-links.html',
    'Kerala': 'https://www.walinking.link/2021/07/kerala-whatsapp-group-links.html',
    'Knowledge': 'https://www.walinking.link/2021/07/knowledge-whatsapp-group-links.html',
    'Korean': 'https://www.walinking.link/2021/07/korean-whatsapp-group-links.html',
    'Ladies': 'https://www.walinking.link/2021/07/ladies-whatsapp-group-links.html',
    'Lahore': 'https://www.walinking.link/2021/07/lahore-whatsapp-group-links.html',
    'Lionel Messi Fans': 'https://www.walinking.link/2021/07/lionel-messi-fans-whatsapp-group-links.html',
    'Liverpool FC': 'https://www.walinking.link/2021/07/liverpool-fc-whatsapp-group-links.html',
    'Local': 'https://www.walinking.link/2021/07/local-whatsapp-group-links.html',
    'London': 'https://www.walinking.link/2021/07/london-whatsapp-group-links.html',
    'Ludo': 'https://www.walinking.link/2021/07/ludo-whatsapp-group-links.html',
    'Lyrics': 'https://www.walinking.link/2021/07/lyrics-whatsapp-group-links.html',
    'MPL': 'https://www.walinking.link/2021/07/mpl-whatsapp-group-links.html',
    'MPPSC': 'https://www.walinking.link/2021/07/mppsc-whatsapp-group-links.html',
    'Machine Learning': 'https://www.walinking.link/2021/07/machine-learning-whatsapp-group-links.html',
    'Malaysia': 'https://www.walinking.link/2021/07/malaysia-whatsapp-group-links.html',
    'Marathi': 'https://www.walinking.link/2021/07/marathi-whatsapp-group-links.html',
    'Marriage': 'https://www.walinking.link/2021/07/marriage-whatsapp-group-links.html',
    'Medical Students': 'https://www.walinking.link/2021/07/medical-students-whatsapp-group-links.html',
    'Mehndi Design': 'https://www.walinking.link/2021/07/mehndi-design-whatsapp-group-links.html',
    'Memes': 'https://www.walinking.link/2021/07/memes-whatsapp-group-links.html',
    'Mexico': 'https://www.walinking.link/2021/07/mexico-whatsapp-group-links.html',
    'Miami': 'https://www.walinking.link/2021/07/miami-whatsapp-group-links.html',
    'Millionaire': 'https://www.walinking.link/2021/07/millionaire-whatsapp-group-links.html',
    'Mini Militia': 'https://www.walinking.link/2021/07/mini-militia-whatsapp-group-links.html',
    'Mobile and Electronics': 'https://www.walinking.link/2021/07/mobile-and-electronics-whatsapp-group.html',
    'Motivational': 'https://www.walinking.link/2021/07/motivational-whatsapp-group-links.html',
    'Motu Patlu': 'https://www.walinking.link/2021/07/motu-patlu-whatsapp-group-links.html',
    'Movies': 'https://www.walinking.link/2021/07/movies-whatsapp-group-links.html',
    'My11circle': 'https://www.walinking.link/2021/07/my11circle-whatsapp-group-links.html',
    'Nairobi': 'https://www.walinking.link/2021/07/nairobi-whatsapp-group-links.html',
    'Naruto Fans': 'https://www.walinking.link/2021/07/naruto-fans-whatsapp-group-links.html',
    'Navaratri': 'https://www.walinking.link/2021/07/navaratri-whatsapp-group-links.html',
    'Nepal': 'https://www.walinking.link/2021/07/nepal-whatsapp-group-links.html',
    'Netherlands': 'https://www.walinking.link/2021/07/netherlands-whatsapp-group-links.html',
    'New': 'https://www.walinking.link/2021/07/new-whatsapp-group-links.html',
    'New York': 'https://www.walinking.link/2021/07/new-york-whatsapp-group-links.html',
    'Norway': 'https://www.walinking.link/2021/07/norway-whatsapp-group-links.html',
    'Nurses': 'https://www.walinking.link/2021/07/nurses-whatsapp-group-links.html',
    'OLX': 'https://www.walinking.link/2021/07/olx-whatsapp-group-links.html',
    'Odisha': 'https://www.walinking.link/2021/07/odisha-whatsapp-group-links.html',
    'Old Songs': 'https://www.walinking.link/2021/07/old-songs-whatsapp-group-links.html',
    'PC Gamers': 'https://www.walinking.link/2021/07/pc-gamers-whatsapp-group-links.html',
    'PC Solution': 'https://www.walinking.link/2021/07/pc-solution-whatsapp-group-links.html',
    'PDF Books': 'https://www.walinking.link/2021/07/pdf-books-whatsapp-group-links.html',
    'Personal': 'https://www.walinking.link/2021/07/personal-whatsapp-group-links.html',
    'PUNE': 'https://www.walinking.link/2021/07/pune-whatsapp-group-links_11.html',
    'Peru': 'https://www.walinking.link/2021/07/peru-whatsapp-group-links.html',
    'Philippines': 'https://www.walinking.link/2021/07/philippines-whatsapp-group-links.html',
    'Photography': 'https://www.walinking.link/2021/07/photography-whatsapp-group-links.html',
    'Photoshop': 'https://www.walinking.link/2021/07/photoshop-whatsapp-group-links.html',
    'Physics': 'https://www.walinking.link/2021/07/physics-whatsapp-group-links.html',
    'Pilots': 'https://www.walinking.link/2021/07/pilots-whatsapp-group-links.html',
    'Poland': 'https://www.walinking.link/2021/07/poland-whatsapp-group-links.html',
    'Popular': 'https://www.walinking.link/2021/07/popular-whatsapp-group-links.html',
    'Piano': 'https://www.walinking.link/2021/07/piano-whatsapp-group-links.html',
    'Hubli-dharwad': 'https://www.walinking.link/2021/07/hubli-dharwad-whatsapp-group-links.html',
    'House wife': 'https://www.walinking.link/2021/07/house-wife-whatsapp-group-links.html',
    'Hospet': 'https://www.walinking.link/2021/07/hospet-whatsapp-group-links.html',
    'Hole narsipur': 'https://www.walinking.link/2021/07/hole-narsipur-whatsapp-group-links.html',
    'Hiten tejwani fans': 'https://www.walinking.link/2021/07/hiten-tejwani-fans-whatsapp-group-links.html',
    'Hiriyur': 'https://www.walinking.link/2021/07/hiriyur-whatsapp-group-links.html',
    'Hirekerur': 'https://www.walinking.link/2021/07/hirekerur-whatsapp-group-links.html',
    'Hazel keech fans': 'https://www.walinking.link/2021/07/hazel-keech-fans-whatsapp-group-links.html',
    'Hasanpur': 'https://www.walinking.link/2021/07/hasanpur-whatsapp-group-links.html',
    'Gurdeep kohli fans': 'https://www.walinking.link/2021/07/gurdeep-kohli-fans-whatsapp-group-links.html',
    'Good': 'https://www.walinking.link/2021/07/good-whatsapp-group-links.html',
    'Gauri pradhan fans': 'https://www.walinking.link/2021/07/gauri-pradhan-fans-whatsapp-group-links.html',
    'Gaurav gera fans': 'https://www.walinking.link/2021/07/gaurav-gera-fans-whatsapp-group-links.html',
    'Gadwa': 'https://www.walinking.link/2021/07/gadwa-whatsapp-group-links.html',
    'Farah khan fans': 'https://www.walinking.link/2021/07/farah-khan-fans-whatsapp-group-links.html',
    'Eamcet': 'https://www.walinking.link/2021/07/eamcet-whatsapp-group-links.html',
    'Duta': 'https://www.walinking.link/2021/07/duta-whatsapp-group-links.html',
    'Drashti dhami fans': 'https://www.walinking.link/2021/07/drashti-dhami-fans-whatsapp-group-links.html',
    'Diana penty fans': 'https://www.walinking.link/2021/07/diana-penty-fans-whatsapp-group-links.html',
    'Dhubr': 'https://www.walinking.link/2021/07/dhubr-whatsapp-group-links.html',
    'Desi girls': 'https://www.walinking.link/2021/07/desi-girls-whatsapp-group-links.html',
    'Delnaaz irani fans': 'https://www.walinking.link/2021/07/delnaaz-irani-fans-whatsapp-group-links.html',
    'Deepshikha nagpal fans': 'https://www.walinking.link/2021/07/deepshikha-nagpal-fans-whatsapp-group.html',
    'Debina bonnerjee fans': 'https://www.walinking.link/2021/07/debina-bonnerjee-fans-whatsapp-group.html',
    'Davanagere': 'https://www.walinking.link/2021/07/davanagere-whatsapp-group-links.html',
    'Data science and machine learning': 'https://www.walinking.link/2021/07/data-science-and-machine-learning.html',
    'Dargajogihalli': 'https://www.walinking.link/2021/07/dargajogihalli-whatsapp-group-links.html',
    'Computer science': 'https://www.walinking.link/2021/07/computer-science-whatsapp-group-links.html',
    'Cloth': 'https://www.walinking.link/2021/07/cloth-whatsapp-group-links.html',
    'Chitrashi rawat fans': 'https://www.walinking.link/2021/07/chitrashi-rawat-fans-whatsapp-group.html',
    'Chitradurga': 'https://www.walinking.link/2021/07/chitradurga-whatsapp-group-links.html',
    'Chitgoppa': 'https://www.walinking.link/2021/07/chitgoppa-whatsapp-group-links.html',
    'Chitapur': 'https://www.walinking.link/2021/07/chitapur-whatsapp-group-links.html',
    'Chintamani': 'https://www.walinking.link/2021/07/chintamani-whatsapp-group-links.html',
    'Chaupal': 'https://www.walinking.link/2021/07/chaupal-whatsapp-group-links.html',
    'Bond girl fans': 'https://www.walinking.link/2021/07/bond-girl-fans-whatsapp-group-links.html',
    'Best': 'https://www.walinking.link/2021/07/best-whatsapp-group-links.html',
    'Belur': 'https://www.walinking.link/2021/07/belur-whatsapp-group-links.html',
    'Basu chatterjee fans': 'https://www.walinking.link/2021/07/basu-chatterjee-fans-whatsapp-group.html',
    'Bail hongal': 'https://www.walinking.link/2021/07/bail-hongal-whatsapp-group-links.html',
    'Bagepalli': 'https://www.walinking.link/2021/07/bagepalli-whatsapp-group-links.html',
    'Bagalkot': 'https://www.walinking.link/2021/07/bagalkot-whatsapp-group-links.html',
    'Badami': 'https://www.walinking.link/2021/07/badami-whatsapp-group-links.html',
    'Aunty': 'https://www.walinking.link/2021/07/aunty-whatsapp-group-links.html',
    'Athni': 'https://www.walinking.link/2021/07/athni-whatsapp-group-links.html',
    'Arsikere': 'https://www.walinking.link/2021/07/arsikere-whatsapp-group-links.html',
    'Arjun rampal fans': 'https://www.walinking.link/2021/07/arjun-rampal-fans-whatsapp-group-links.html',
    'Apurva agnihotri fans': 'https://www.walinking.link/2021/07/apurva-agnihotri-fans-whatsapp-group.html',
    'Animals and pets': 'https://www.walinking.link/2021/07/animals-and-pets-whatsapp-group-links.html',
    'Angelina jolie fans': 'https://www.walinking.link/2021/07/angelina-jolie-fans-whatsapp-group-links.html',
    'Among us': 'https://www.walinking.link/2021/07/among-us-whatsapp-group-links.html',
    'Amit sadh fans': 'https://www.walinking.link/2021/07/amit-sadh-fans-whatsapp-group-links.html',
    'Ameesha patel fans': 'https://www.walinking.link/2021/07/ameesha-patel-fans-whatsapp-group-links.html',
    'Ajio deals': 'https://www.walinking.link/2021/07/ajio-deals-whatsapp-group-links.html',
    'Aieee': 'https://www.walinking.link/2021/07/aieee-whatsapp-group-links.html',
    'Adityapatna': 'https://www.walinking.link/2021/07/adityapatna-whatsapp-group-links.html',
    'WhatsApp Group Join Links': 'https://www.walinking.link/2021/07/whatsapp-group-join-links-whatsapp.html',
    'Zerodha': 'https://www.walinking.link/2021/07/zerodha-whatsapp-group-links.html',
    'Zee News': 'https://www.walinking.link/2021/07/zee-news-whatsapp-group-links.html',
    'Zambia': 'https://www.walinking.link/2021/07/zambia-whatsapp-group-links.html',
    'Youth': 'https://www.walinking.link/2021/07/youth-whatsapp-group-links.html',
    'Wholesale': 'https://www.walinking.link/2021/07/wholesale-whatsapp-group-links.html',
    'WhatsApp Group links America': 'https://www.walinking.link/2021/07/whatsapp-group-links-america-whatsapp.html',
    'WhatsApp Group Links Indian 2018': 'https://www.walinking.link/2021/07/whatsapp-group-links-indian-2018.html',
    'WhatsApp Group Link Kerala': 'https://www.walinking.link/2021/07/whatsapp-group-link-kerala-whatsapp.html',
    'WhatsApp Group Link App': 'https://www.walinking.link/2016/07/whatsapp-group-link-app.html',
    'West Bengal': 'https://www.walinking.link/2021/07/west-bengal-whatsapp-group-links.html',
    'Wallpapers': 'https://www.walinking.link/2021/07/wallpapers-whatsapp-group-links.html',
    'WWE': 'https://www.walinking.link/2021/07/wwe-whatsapp-group-links.html',
    'Virat Kohli Fans': 'https://www.walinking.link/2021/07/virat-kohli-fans-whatsapp-group-links.html',
    'Vijay Fans': 'https://www.walinking.link/2021/07/vijay-fans-whatsapp-group-links.html',
    'Urdu Poetry': 'https://www.walinking.link/2021/07/urdu-poetry-whatsapp-group-links.html',
    'Unlimited': 'https://www.walinking.link/2021/07/unlimited-whatsapp-group-links.html',
    'Uganda': 'https://www.walinking.link/2021/07/uganda-whatsapp-group-links.html',
    'UPSC': 'https://www.walinking.link/2021/07/upsc-whatsapp-group-links.html',
    'Twitch': 'https://www.walinking.link/2021/07/twitch-whatsapp-group-links.html',
    'Turkish': 'https://www.walinking.link/2021/07/turkish-whatsapp-group-links.html',
    'Trance Music': 'https://www.walinking.link/2021/07/trance-music-whatsapp-group-links.html',
    'Tourism': 'https://www.walinking.link/2021/07/tourism-whatsapp-group-links.html',
    'Tom and Jerry': 'https://www.walinking.link/2021/07/tom-and-jerry-whatsapp-group-links.html',
    'Tollywood': 'https://www.walinking.link/2021/07/tollywood-whatsapp-group-links.html',
    'TikTok': 'https://www.walinking.link/2021/07/tiktok-whatsapp-group-links.html',
    'Tik Tok': 'https://www.walinking.link/2021/07/tik-tok-whatsapp-group-links.html',
    'Telugu': 'https://www.walinking.link/2021/07/telugu-whatsapp-group-links.html',
    'Telegu': 'https://www.walinking.link/2021/07/telegu-whatsapp-group-links.html',
    'Tax Consultant': 'https://www.walinking.link/2021/07/tax-consultant-whatsapp-group-links.html',
    'Tanzania': 'https://www.walinking.link/2021/07/tanzania-whatsapp-group-links.html',
    'Tamil News': 'https://www.walinking.link/2021/07/tamil-news-whatsapp-group-links.html',
    'Tamil Item': 'https://www.walinking.link/2021/07/tamil-item-whatsapp-group-links.html',
    'Tamil Actress': 'https://www.walinking.link/2021/07/tamil-actress-whatsapp-group-links.html',
    'TNUSRB': 'https://www.walinking.link/2021/07/tnusrb-whatsapp-group-links.html',
    'TNPSC': 'https://www.walinking.link/2021/07/tnpsc-whatsapp-group-links.html',
    'Switzerland': 'https://www.walinking.link/2021/07/switzerland-whatsapp-group-links.html',
    'Study': 'https://www.walinking.link/2021/07/study-whatsapp-group-links.html',
    'Students': 'https://www.walinking.link/2021/07/students-whatsapp-group-links.html',
    'Startup': 'https://www.walinking.link/2021/07/startup-whatsapp-group-links.html',
    'Soccer': 'https://www.walinking.link/2021/07/soccer-whatsapp-group-links.html',
    'Singapore': 'https://www.walinking.link/2021/07/singapore-whatsapp-group-links.html',
    'Search': 'https://www.walinking.link/2021/07/search-whatsapp-group-links.html',
    'ScrapData': 'https://www.walinking.link/2021/07/scrapdata-whatsapp-group-links.html',
    'Sarkari Naukri': 'https://www.walinking.link/2021/07/sarkari-naukri-whatsapp-group-links.html',
    'Salman Khan Fans': 'https://www.walinking.link/2021/07/salman-khan-fans-whatsapp-group-links.html',
    'SSC': 'https://www.walinking.link/2021/07/ssc-whatsapp-group-links.html',
    'SHORT FILMMAKERS': 'https://www.walinking.link/2021/07/short-filmmakers-whatsapp-group-links.html',
    'SEO': 'https://www.walinking.link/2021/07/seo-whatsapp-group-links.html',
    'Rummy': 'https://www.walinking.link/2021/07/rummy-whatsapp-group-links.html',
    'Ringtones': 'https://www.walinking.link/2021/07/ringtones-whatsapp-group-links.html',
    'Real': 'https://www.walinking.link/2021/07/real-whatsapp-group-links.html',
    'Rap Battles': 'https://www.walinking.link/2021/07/rap-battles-whatsapp-group-links.html',
    'Random': 'https://www.walinking.link/2021/07/random-whatsapp-group-links.html',
    'RSS': 'https://www.walinking.link/2021/07/rss-whatsapp-group-links.html',
    'Quiz': 'https://www.walinking.link/2021/07/quiz-whatsapp-group-links.html',
    'Python': 'https://www.walinking.link/2021/07/python-whatsapp-group-links.html',
    'Punjabi': 'https://www.walinking.link/2021/07/punjabi-whatsapp-group-links.html',
    'Pro Kabaddi': 'https://www.walinking.link/2021/07/pro-kabaddi-whatsapp-group-links.html',
    'Prabhas Fans': 'https://www.walinking.link/2021/07/prabhas-fans-whatsapp-group-links.html',
    'Portugal': 'https://www.walinking.link/2021/07/portugal-whatsapp-group-links.html',
    'NEET UG': 'https://www.walinking.link/2016/07/neet-ug-whatsapp-group-links.html',
    'Anime': 'https://www.walinking.link/2021/07/anime-whatsapp-group-links.html',
    'Kashmir': 'https://www.walinking.link/2021/07/kashmir-whatsapp-group-links.html',
    'Share Market': 'https://www.walinking.link/2021/07/share-market-whatsapp-group-links.html',
    'Reseller': 'https://www.walinking.link/2021/07/reseller-whatsapp-group-links.html',
    'Indian': 'https://www.walinking.link/2021/07/indian-whatsapp-group-link.html',
    'Sub4Sub': 'https://www.walinking.link/2021/07/sub4sub-whatsapp-group-links.html',
    'Quotes': 'https://www.walinking.link/2021/07/quotes-whatsapp-group-links.html',
    'Clothing': 'https://www.walinking.link/2021/07/clothing-whatsapp-group-links.html',
    'Ludo King': 'https://www.walinking.link/2021/07/ludo-king-whatsapp-group-link.html',
    'YouTube': 'https://www.walinking.link/2021/07/youtube-whatsapp-group-links.html',
    'PUBG': 'https://www.walinking.link/2021/07/pubg-whatsapp-group-links.html',
    'Hyderabad': 'https://www.walinking.link/2021/07/hyderabad-whatsapp-group-links.html',
    'Bhojpuri': 'https://www.walinking.link/2021/07/bhojpuri-whatsapp-group-links.html',
    'Indonesia': 'https://www.walinking.link/2021/07/indonesia-whatsapp-group-links.html',
    'Shopping': 'https://www.walinking.link/2021/07/shopping-whatsapp-group-links.html',
    'Public': 'https://www.walinking.link/2016/07/public-whatsapp-group-links.html',
    'Science': 'https://www.walinking.link/2016/07/science-whatsapp-group-links.html',
    'Zimbabwe': 'https://www.walinking.link/2016/07/zimbabwe-whatsapp-group-links.html',
    'GK': 'https://www.walinking.link/2016/07/gk-whatsapp-group-links.html',
    'MLM': 'https://www.walinking.link/2021/07/mlm-whatsapp-group-links.html',
    'Photo Editing': 'https://www.walinking.link/2021/07/photo-editing-whatsapp-group-links.html',
    'Haryana': 'https://www.walinking.link/2021/07/haryana-whatsapp-groups-links.html',
    'Malayalam': 'https://www.walinking.link/2021/07/malayalam-whatsapp-group-links.html',
    'Earn Money': 'https://www.walinking.link/2021/07/earn-money-whatsapp-group-link.html',
    'Newspaper': 'https://www.walinking.link/2021/07/newspaper-whatsapp-group-links.html',
    'Amazon Review': 'https://www.walinking.link/2021/07/amazon-review-whatsapp-group-links.html',
    'Sports': 'https://www.walinking.link/2021/07/sports-whatsapp-group-links.html',
    'News': 'https://www.walinking.link/2021/07/news-whatsapp-group-links.html',
    'Tamil': 'https://www.walinking.link/2021/07/tamil-whatsapp-group-link.html',
    'IPL': 'https://www.walinking.link/2021/07/ipl-whatsapp-group-links.html',
    'Active': 'https://www.walinking.link/2021/07/active-whatsapp-group-links.html',
    'Chennai': 'https://www.walinking.link/2021/07/chennai-whatsapp-group-links.html',
    'Automation': 'https://www.walinking.link/2021/07/automation-whatsapp-group-links.html',
    'Pokemon Go': 'https://www.walinking.link/2021/07/pokemon-go-whatsapp-group-links.html',
    'Japan': 'https://www.walinking.link/2021/07/japan-whatsapp-group-links.html',
    'Technology': 'https://www.walinking.link/2021/07/technology-whatsapp-group-links.html',
    'Aaj Tak': 'https://www.walinking.link/2021/07/aaj-tak-whatsapp-group-links.html',
    'Russian': 'https://www.walinking.link/2021/07/russian-whatsapp-group-links.html',
    'Rappers': 'https://www.walinking.link/2021/07/rappers-whatsapp-group-links.html',
    'Trading': 'https://www.walinking.link/2021/07/trading-whatsapp-group-links.html',
    'Modified Cars': 'https://www.walinking.link/2021/07/modified-cars-whatsapp-group-links.html',
    'Offers': 'https://www.walinking.link/2021/07/offers-whatsapp-group-links.html',
    'Mathematics': 'https://www.walinking.link/2021/07/mathematics-whatsapp-group-links.html',
    'Bhakti': 'https://www.walinking.link/2021/07/bhakti-whatsapp-group-links.html',
    'Kolkata': 'https://www.walinking.link/2021/07/kolkata-whatsapp-group-links.html',
    'Non Profit': 'https://www.walinking.link/2021/07/non-profit-whatsapp-group-links.html',
    'Brands': 'https://www.walinking.link/2021/07/brands-whatsapp-group-links.html',
    'Status': 'https://www.walinking.link/2021/07/status-whatsapp-group-links.html',
    'Instagram': 'https://www.walinking.link/2021/07/instagram-whatsapp-group-links.html',
    'TV Shows': 'https://www.walinking.link/2021/07/tv-shows-whatsapp-group-links.html',
    'Shayari': 'https://www.walinking.link/2021/07/shayari-whatsapp-group-links.html',
    'Farming': 'https://www.walinking.link/2021/07/farming-whatsapp-group-links.html',
    'Investors': 'https://www.walinking.link/2021/07/investors-whatsapp-groups-link.html',
    'Kids': 'https://www.walinking.link/2021/07/kids-whatsapp-group-links.html',
    'Meditation': 'https://www.walinking.link/2021/07/meditation-whatsapp-group-links.html',
    'Uttarakhand': 'https://www.walinking.link/2021/07/uttarakhand-whatsapp-group-links.html',
    'Art and Design': 'https://www.walinking.link/2021/07/art-and-design-whatsapp-group-links.html',
    'Yoga': 'https://www.walinking.link/2021/07/yoga-whatsapp-group-links.html',
    'Cryptocurrency': 'https://www.walinking.link/2021/07/cryptocurrency-whatsapp-group-links.html',
    'Gaming': 'https://www.walinking.link/2021/07/gaming-whatsapp-group-links.html',
    'Fashion': 'https://www.walinking.link/2021/07/fashion-whatsapp-group-links.html',
    'Music': 'https://www.walinking.link/2021/07/music-whatsapp-group-links.html',
    'Girls': 'https://www.walinking.link/2021/07/girls-whatsapp-group-links.html',
    'Saree Manufacturer': 'https://www.walinking.link/2021/07/saree-manufacturer-whatsapp-group-links.html',
    'Bangalore': 'https://www.walinking.link/2021/07/bangalore-whatsapp-group-links.html',
    'Real Estate': 'https://www.walinking.link/2021/07/real-estate-whatsapp-group-links.html',
    'Online': 'https://www.walinking.link/2021/07/online-whatsapp-group-links.html',
    'Qatar': 'https://www.walinking.link/2021/07/qatar-whatsapp-group-links.html',
    'Ireland': 'https://www.walinking.link/2021/07/ireland-whatsapp-group-links.html',
    'Travel': 'https://www.walinking.link/2021/07/travel-whatsapp-group-links.html',
    'Banking': 'https://www.walinking.link/2021/07/banking-whatsapp-group-links.html',
    'Dream11': 'https://www.walinking.link/2021/07/dream11-whatsapp-group-links.html',
    'Love and Romance': 'https://www.walinking.link/2021/07/love-and-romance-whatsapp-group-links.html',
    'Govt Jobs': 'https://www.walinking.link/2021/07/govt-jobs-whatsapp-group-links.html',
    'GST': 'https://www.walinking.link/2021/07/gst-whatsapp-group-links.html',
    'JEE': 'https://www.walinking.link/2021/07/jee-whatsapp-group-links.html',
    'Mutual Funds': 'https://www.walinking.link/2021/07/mutual-funds-whatsapp-group-links.html',
    'Stock Market': 'https://www.walinking.link/2021/07/stock-market-whatsapp-group-links.html',
    'Commercial': 'https://www.walinking.link/2021/07/commercial-whatsapp-group-links.html',
    'Money Control': 'https://www.walinking.link/2021/07/money-control-whatsapp-group-links.html',
    'South Africa': 'https://www.walinking.link/2021/07/south-africa-whatsapp-group-links.html',
    'Actress': 'https://www.walinking.link/2021/07/actress-whatsapp-group-link.html',
    'Thailand': 'https://www.walinking.link/2021/07/thailand-whatsapp-group-links.html',
    'Lawyers': 'https://www.walinking.link/2021/07/lawyers-whatsapp-group-links.html',
    'Lifestyle': 'https://www.walinking.link/2021/07/lifestyle-whatsapp-group-links.html',
    'Cricket': 'https://www.walinking.link/2021/07/cricket-whatsapp-group-links.html',
    'Tamil Comedy': 'https://www.walinking.link/2021/07/tamil-comedy-whatsapp-group-links.html',
    'Tamil Aunty': 'https://www.walinking.link/2021/07/tamil-aunty-whatsapp-group-link.html',
    'Paytm': 'https://www.walinking.link/2021/07/paytm-whatsapp-group-links.html',
    'Free Fire': 'https://www.walinking.link/2021/07/free-fire-whatsapp-group-links.html',
    'tamil item girls': 'https://www.walinking.link/2021/08/tamil-item-girls-whatsapp-group-links.html',
    'Hip Hop': 'https://www.walinking.link/2016/07/hip-hop-whatsapp-group-links.html',
    'Download': 'https://www.walinking.link/2016/07/download-whatsapp-group-links.html',
    'Dogs': 'https://www.walinking.link/2016/07/dogs-whatsapp-group-links.html',
    'Doctors': 'https://www.walinking.link/2016/07/doctors-whatsapp-group-links.html',
    'Dish TV': 'https://www.walinking.link/2016/07/dish-tv-whatsapp-group-links.html',
    'Digital Marketing': 'https://www.walinking.link/2016/07/digital-marketing-whatsapp-group-links.html',
    'Designers': 'https://www.walinking.link/2016/07/designers-whatsapp-group-links.html',
    'Deals & Offers': 'https://www.walinking.link/2016/07/deals-offers-whatsapp-group-links.html',
    'Dating': 'https://www.walinking.link/2016/07/dating-whatsapp-group-links.html',
    'Data Science': 'https://www.walinking.link/2016/07/data-science-whatsapp-group-links.html',
    'Dance': 'https://www.walinking.link/2016/07/dance-whatsapp-group-links.html',
    'Dainik Jagran': 'https://www.walinking.link/2016/07/dainik-jagran-whatsapp-group-links.html',
    'Dainik Bhaskar': 'https://www.walinking.link/2016/07/dainik-bhaskar-whatsapp-group-links.html',
    'DJ': 'https://www.walinking.link/2016/07/dj-whatsapp-group-links.html',
    'DC Fans': 'https://www.walinking.link/2016/07/dc-fans-whatsapp-group-links.html',
    'Current Affairs': 'https://www.walinking.link/2016/07/current-affairs-whatsapp-group-links.html',
    'Couples': 'https://www.walinking.link/2016/07/couples-whatsapp-group-links.html',
    'Corporate': 'https://www.walinking.link/2016/07/corporate-whatsapp-group-links.html',
    'Computer Programming': 'https://www.walinking.link/2016/07/computer-programming-whatsapp-group.html',
    'Competitive Programming': 'https://www.walinking.link/2016/07/competitive-programming-whatsapp-group.html',
    'Competitive Exams': 'https://www.walinking.link/2016/07/competitive-exams-whatsapp-group-links.html',
    'Colombia': 'https://www.walinking.link/2016/07/colombia-whatsapp-group-links.html',
    'College': 'https://www.walinking.link/2016/07/college-whatsapp-group-links.html',
    'Clash Of Clans': 'https://www.walinking.link/2016/07/clash-of-clans-whatsapp-group-links.html',
    'Civil Engineering': 'https://www.walinking.link/2016/07/civil-engineering-whatsapp-group-links.html',
    'China': 'https://www.walinking.link/2016/07/china-whatsapp-group-links.html',
    'Chennai Item': 'https://www.walinking.link/2016/07/chennai-item-whatsapp-group-links.html',
    'Chemistry': 'https://www.walinking.link/2016/07/chemistry-whatsapp-group-links.html',
    'Chelsea FC': 'https://www.walinking.link/2016/07/chelsea-fc-whatsapp-group-links.html',
    'Chat Room': 'https://www.walinking.link/2016/07/chat-room-whatsapp-group-links.html',
    'Celebrity Fan Clubs': 'https://www.walinking.link/2016/07/celebrity-fan-clubs-whatsapp-group-links.html',
    'Cartoon': 'https://www.walinking.link/2016/07/cartoon-whatsapp-group-links.html',
    'California': 'https://www.walinking.link/2016/07/california-whatsapp-group-links.html',
    'CTET': 'https://www.walinking.link/2016/07/ctet-whatsapp-group-links.html',
    'CID Fans': 'https://www.walinking.link/2016/07/cid-fans-whatsapp-group-links.html',
    'CET': 'https://www.walinking.link/2016/07/cet-whatsapp-group-links.html',
    'CCNP': 'https://www.walinking.link/2016/07/ccnp-whatsapp-group-links.html',
    'CAT': 'https://www.walinking.link/2016/07/cat-whatsapp-group-links.html',
    'Buy and Sell': 'https://www.walinking.link/2016/07/buy-and-sell-whatsapp-group-links.html',
    'Brazil': 'https://www.walinking.link/2016/07/brazil-whatsapp-group-links.html',
    'Boys': 'https://www.walinking.link/2016/07/boys-whatsapp-group-links.html',
    'Bollywood Celebrity': 'https://www.walinking.link/2016/07/bollywood-celebrity-whatsapp-group-links.html',
    'Blogger': 'https://www.walinking.link/2016/07/blogger-whatsapp-group-links.html',
    'Birthday Wishes': 'https://www.walinking.link/2016/07/birthday-wishes-whatsapp-group-links.html',
    'Biology': 'https://www.walinking.link/2016/07/biology-whatsapp-group-links.html',
    'Bikes': 'https://www.walinking.link/2016/07/bikes-whatsapp-group-links.html',
    'Big Data': 'https://www.walinking.link/2016/07/big-data-whatsapp-group-links.html',
    'Bhutan': 'https://www.walinking.link/2016/07/bhutan-whatsapp-group-links.html',
    'Bengali': 'https://www.walinking.link/2016/07/bengali-whatsapp-group-links.html',
    'Belgium': 'https://www.walinking.link/2016/07/belgium-whatsapp-group-links.html',
    'Beautiful': 'https://www.walinking.link/2016/07/beautiful-whatsapp-group-links.html',
    'Basketball': 'https://www.walinking.link/2016/07/basketball-whatsapp-group-links.html',
    'Barcelona': 'https://www.walinking.link/2016/07/barcelona-whatsapp-group-links.html',
    'Bangladesh': 'https://www.walinking.link/2016/07/bangladesh-whatsapp-group-links.html',
    'Bangkok & Thailand': 'https://www.walinking.link/2016/07/bangkok-thailand-whatsapp-group-links.html',
    'Bahrain': 'https://www.walinking.link/2016/07/bahrain-whatsapp-group-links.html',
    'Autoscale': 'https://www.walinking.link/2016/07/autoscale-whatsapp-group-links.html',
    'Automobile': 'https://www.walinking.link/2016/07/automobile-whatsapp-group-links.html',
    'Auto Parts': 'https://www.walinking.link/2016/07/auto-parts-whatsapp-group-links.html',
    'Astrology': 'https://www.walinking.link/2016/07/astrology-whatsapp-group-links.html',
    'Asia': 'https://www.walinking.link/2016/07/asia-whatsapp-group-links.html',
    'Arsenal': 'https://www.walinking.link/2016/07/arsenal-whatsapp-group-links.html',
    'Argentina': 'https://www.walinking.link/2016/07/argentina-whatsapp-group-links.html',
    'Architecture': 'https://www.walinking.link/2016/07/architecture-whatsapp-group-links.html',
    'Arabic': 'https://www.walinking.link/2016/07/arabic-whatsapp-group-links.html',
    'Apps': 'https://www.walinking.link/2016/07/apps-whatsapp-group-links.html',
    'App Download': 'https://www.walinking.link/2016/07/app-download-whatsapp-group-links.html',
    'Anushka Sharma Fans': 'https://www.walinking.link/2016/07/anushka-sharma-fans-whatsapp-group-links.html',
    'Announcement': 'https://www.walinking.link/2016/07/announcement-whatsapp-group-links.html',
    'Animation and VFX': 'https://www.walinking.link/2016/07/animation-and-vfx-whatsapp-group-links.html',
    'Animation & VFX': 'https://www.walinking.link/2016/07/animation-vfx-whatsapp-group-links.html',
    'Angola': 'https://www.walinking.link/2016/07/angola-whatsapp-group-links.html',
    'Angelina Jolie Fans': 'https://www.walinking.link/2016/07/angelina-jolie-fans-whatsapp-group-links.html',
    'Andorra': 'https://www.walinking.link/2016/07/andorra-whatsapp-group-links.html',
    'Andhra Pradesh': 'https://www.walinking.link/2016/07/andhra-pradesh-whatsapp-group-links.html',
    'Among Us': 'https://www.walinking.link/2016/07/among-us-whatsapp-group-links.html',
    'Amitabh Bachchan Fans': 'https://www.walinking.link/2016/07/amitabh-bachchan-fans-whatsapp-group.html',
    'American Girls': 'https://www.walinking.link/2016/07/american-girls-whatsapp-group-links.html',
    'American': 'https://www.walinking.link/2016/07/american-whatsapp-group-links.html',
    'Amapiano': 'https://www.walinking.link/2016/07/amapiano-whatsapp-group-links.html',
    'Allu Arjun Fans': 'https://www.walinking.link/2016/07/allu-arjun-fans-whatsapp-group-links.html',
    'Alia Bhatt Fans': 'https://www.walinking.link/2016/07/alia-bhatt-fans-whatsapp-group-links.html',
    'Algeria': 'https://www.walinking.link/2016/07/algeria-whatsapp-group-links.html',
    'Albania': 'https://www.walinking.link/2016/07/albania-whatsapp-group-links.html',
    'Akshay Kumar Fans': 'https://www.walinking.link/2016/07/akshay-kumar-fans-whatsapp-group-links.html',
    'Air Hostess': 'https://www.walinking.link/2016/07/air-hostess-whatsapp-group-links.html',
    'Air Force': 'https://www.walinking.link/2016/07/air-force-whatsapp-group-links.html',
    'Agriculture': 'https://www.walinking.link/2016/07/agriculture-whatsapp-group-links.html',
    'Afghanistan': 'https://www.walinking.link/2016/07/afghanistan-whatsapp-group-links.html',
    'Afghan': 'https://www.walinking.link/2016/07/afghan-whatsapp-group-links.html',
    'Aesthetic': 'https://www.walinking.link/2016/07/aesthetic-whatsapp-group-links.html',
    'Aerospace Engineering': 'https://www.walinking.link/2016/07/aerospace-engineering-whatsapp-group.html',
    'Aeronautical': 'https://www.walinking.link/2016/07/aeronautical-whatsapp-group-links.html',
    'Advertisement': 'https://www.walinking.link/2016/07/advertisement-whatsapp-group-links.html',
    'Actors': 'https://www.walinking.link/2016/07/actors-whatsapp-group-links.html',
    'Aaj Tak News': 'https://www.walinking.link/2016/07/aaj-tak-news-whatsapp-group-links.html',
    'AUSTRALIA': 'https://www.walinking.link/2016/07/australia-whatsapp-group-links.html',
    'APPSC': 'https://www.walinking.link/2016/07/appsc-whatsapp-group-links.html',
    'AIIMS': 'https://www.walinking.link/2016/07/aiims-whatsapp-group-links.html',
    '18+ Adult': 'https://www.walinking.link/2016/07/18-adult-whatsapp-group-links.html',
    'Unacademy': 'https://www.walinking.link/2016/07/unacademy-whatsapp-group-links.html',
    'Spanish': 'https://www.walinking.link/2016/07/spanish-whatsapp-group-links.html',
    'Cape Town': 'https://www.walinking.link/2016/07/cape-town-whatsapp-group-links.html',
    'Java': 'https://www.walinking.link/2016/07/java-whatsapp-group-links.html',
    'Billionaire': 'https://www.walinking.link/2016/07/billionaire-whatsapp-group-links.html',
    'Egypt': 'https://www.walinking.link/2016/07/egypt-whatsapp-group-links.html',
    'Business': 'https://www.walinking.link/2016/07/business-whatsapp-group-links.html',
    'Marvel Fans': 'https://www.walinking.link/2016/07/marvel-fans-whatsapp-group-links.html',
    'Sri Lanka': 'https://www.walinking.link/2016/07/sri-lanka-whatsapp-group-links.html',
    'Canada': 'https://www.walinking.link/2016/07/canada-whatsapp-group-links.html',
    'Web Developer': 'https://www.walinking.link/2016/07/web-developer-whatsapp-group-links.html',
    'Community': 'https://www.walinking.link/2016/07/community-whatsapp-group-links.html',
    'Rajasthan': 'https://www.walinking.link/2016/07/rajasthan-whatsapp-group-links.html',
    'IELTS': 'https://www.walinking.link/2016/07/ielts-whatsapp-group-links.html',
    'Telangana': 'https://www.walinking.link/2016/07/telangana-whatsapp-group-links.html',
    'Bihar': 'https://www.walinking.link/2016/07/bihar-whatsapp-group-links.html',
    'Tamil Nadu': 'https://www.walinking.link/2016/07/tamil-nadu-whatsapp-group-links.html',
    'Blood Donors': 'https://www.walinking.link/2016/07/blood-donors-whatsapp-group-link.html',
    'Maharashtra': 'https://www.walinking.link/2016/07/maharashtra-whatsapp-group-links.html',
    '8 Ball Pool': 'https://www.walinking.link/2016/07/8-ball-pool-whatsapp-groups-links.html',
    'Pakistani': 'https://www.walinking.link/2016/07/pakistani-whatsapp-group-links.html',
    'Spiritual': 'https://www.walinking.link/2016/07/spiritual-whatsapp-group-links.html',
    'Sarkari Result': 'https://www.walinking.link/2016/07/sarkari-result-whatsapp-group-link.html',
    'Coin Master': 'https://www.walinking.link/2016/07/coin-master-whatsapp-group-links.html',
    'Himachal Pradesh': 'https://www.walinking.link/2016/07/himachal-pradesh-whatsapp-group-links.html',
    'Police': 'https://www.walinking.link/2016/07/police-whatsapp-group-links.html',
    'Politics': 'https://www.walinking.link/2016/07/politics-whatsapp-group-links.html',
    'Forex Trading': 'https://www.walinking.link/2016/07/forex-trading-whatsapp-group-links.html',
    'Animals and Pets': 'https://www.walinking.link/2016/07/animals-and-pets-whatsapp-group-link.html',
    'PicsArt Editing': 'https://www.walinking.link/2016/07/picsart-editing-whatsapp-group-links.html',
    'Social Media': 'https://www.walinking.link/2016/07/social-media-whatsapp-group-links.html',
    'Delhi': 'https://www.walinking.link/2016/07/delhi-whatsapp-group-links.html',
    'USA': 'https://www.walinking.link/2016/07/usa-whatsapp-group-links.html',
    'Biotechnology': 'https://www.walinking.link/2016/07/biotechnology-whatsapp-group-links.html',
    'Affiliate Marketing': 'https://www.walinking.link/2016/07/affiliate-marketing-whatsapp-group-links.html',
    'Comedy': 'https://www.walinking.link/2016/07/comedy-whatsapp-group-links.html',
    'Film City': 'https://www.walinking.link/2016/07/film-city-whatsapp-group-links.html',
    'Workshop': 'https://www.walinking.link/2016/07/workshop-whatsapp-group-links.html',
    'Cooking': 'https://www.walinking.link/2016/07/cooking-whatsapp-group-link.html',
    'UGC NET': 'https://www.walinking.link/2016/07/ugc-net-whatsapp-group-links.html',
    'Bigg Boss': 'https://www.walinking.link/2016/07/bigg-boss-whatsapp-group-links.html',
    'UK': 'https://www.walinking.link/2016/07/uk-whatsapp-group-links.html',
    'Music Makers': 'https://www.walinking.link/2016/07/music-makers-whatsapp-group-links.html',
    'Health': 'https://www.walinking.link/2016/07/health-whatsapp-group-links.html',
    'Karnataka': 'https://www.walinking.link/2016/07/karnataka-whatsapp-group-links.html',
    'Sonipat': 'https://www.walinking.link/2016/07/sonipat-whatsapp-group-links.html',
    'CCNA': 'https://www.walinking.link/2016/07/ccna-whatsapp-group-links.html',
    'BSC Nursing': 'https://www.walinking.link/2016/07/bsc-nursing-whatsapp-group-links.html',
    'Jio Phone': 'https://www.walinking.link/2016/07/jio-phone-whatsapp-group-links.html',
    'England': 'https://www.walinking.link/2016/07/england-whatsapp-group-links.html',
    'Indeed': 'https://www.walinking.link/2016/07/indeed-whatsapp-group-links.html',
    'C and C++': 'https://www.walinking.link/2016/07/c-and-c-whatsapp-group-links.html',
    'Golf': 'https://www.walinking.link/2016/07/golf-whatsapp-group-links.html',
    'Tupac Fans': 'https://www.walinking.link/2016/07/tupac-fans-whatsapp-group-links.html',
    'Technical': 'https://www.walinking.link/2016/07/technical-whatsapp-group-links.html',
    'Qawwali': 'https://www.walinking.link/2016/07/qawwali-whatsapp-group-links.html',
    'Mumbai': 'https://www.walinking.link/2016/07/mumbai-whatsapp-group-links.html',
    'Computer Science': 'https://www.walinking.link/2016/07/computer-science-whatsapp-group-links.html',
    'Funny Video': 'https://www.walinking.link/2016/07/funny-video-whatsapp-group-links.html',
    'Teachers': 'https://www.walinking.link/2016/07/teachers-whatsapp-group-links.html',
    'Job Alert': 'https://www.walinking.link/2016/07/job-alert-whatsapp-group-links.html',
    'Athletics': 'https://www.walinking.link/2016/07/athletics-whatsapp-group-links.html',
    'Tembisa': 'https://www.walinking.link/2016/07/tembisa-whatsapp-group-links.html',
    'Tiruppur': 'https://www.walinking.link/2016/07/tiruppur-whatsapp-group-links.html',
    'Rishta': 'https://www.walinking.link/2016/07/rishta-whatsapp-group-links.html',
    'Technical Reviews': 'https://www.walinking.link/2016/07/technical-reviews-whatsapp-group-links.html',
    'PNG': 'https://www.walinking.link/2016/07/png-whatsapp-group-links.html',
    'Tamil News Paper': 'https://www.walinking.link/2016/07/tamil-news-paper-whatsapp-group-link.html',
    'MBA': 'https://www.walinking.link/2016/07/mba-whatsapp-group-links.html',
    'Preschool': 'https://www.walinking.link/2016/07/preschool-whatsapp-group-links.html',
    'Meetings': 'https://www.walinking.link/2016/07/meetings-whatsapp-group-links.html',
    'Rural': 'https://www.walinking.link/2016/07/rural-whatsapp-group-links.html',
    'PPSSPP Games': 'https://www.walinking.link/2016/07/ppsspp-games-whatsapp-group-links.html',
    'Original': 'https://www.walinking.link/2016/07/original-whatsapp-group-links.html',
    'Freelancer': 'https://www.walinking.link/2016/07/freelancer-whatsapp-group-links.html'
};

if (document.getElementById("tableDiv")!=null){
    initAddButton();
    move();
    loadLinks();
}
else{
    initAddButton();
    move();
    loadLinks();
}
