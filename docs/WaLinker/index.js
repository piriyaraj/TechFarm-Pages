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
        left: 20px;
        z-index: 101;">
        <a class="addbtn" href="#" title="Add New Whatsapp Group" onclick="openForm()">+Add New group link</a>
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
    alert("Your Group Added");


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
            alert("This link already in our site");

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
        console.log(response);
        return ({
            "title": -2
        });
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function handleIt(data) {
    var waId = document.getElementById("walink").value.split("/").reverse()[0];
    var category = document.getElementById("category").value;
    var language = document.getElementById("language").value;
    var country = document.getElementById("country").value;
    var tableName = country + " " + language + " " + category.replaceAll("/", " ");
    document.getElementById("inputSection").style.display = 'none';
    document.getElementById("loader").style.display = 'block';
    // document.getElementById("submitButton").disabled = true;
    fetchText(waId)
        .then((response) => {
            var title = response.title;
            if (title == -2) {
                alert("Connection error");
            } else if (title == -1) {
                alert("Invalid Link");
            } else {
                insertData(tableName, waId, title);
            }

        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            document.getElementById("myForm").style.display = 'none';
            document.getElementById("loader").style.display = 'none';
            document.getElementById("inputSection").style.display = 'block';
            // document.getElementById("submitButton").disabled = false;



        })

}
if (document.getElementById("tableDiv")!=null){
    initAddButton();
    move();
    loadLinks();
}
else{
    initAddButton();
}



