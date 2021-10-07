var directWaLink = 1;
var groupNumber = 1;
var showTable=1;
var showPreArti=0;
var showPostArti=0;

var firebaseConfig = {
    apiKey: "AIzaSyBLD6K3MZOIc-8CCh1bd3miCp1sp09oPJI",
    authDomain: "whatsapp-group-linker.firebaseapp.com",
    databaseURL: "https://whatsapp-group-linker-default-rtdb.firebaseio.com",
    projectId: "whatsapp-group-linker",
    storageBucket: "whatsapp-group-linker.appspot.com",
    messagingSenderId: "270969542509",
    appId: "1:270969542509:web:78da8857670dd47a42ec64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var groupNumber = 1;

function controller(){
    if(showPreArti){
        document.getElementById('prearti').style.display='block';
    }
    if(showTable){
        document.getElementById("tableDiv").style.display = "block";
    }
    if (showPreArti) {
        document.getElementById('postarti').style.display = 'block';
    }
}

function initMove(){
    var mainContent = document.getElementById("root");
    newSection = document.createElement('section'); //create a div
    newSection.className = "loading";
    newSection.id = "loading";
    var tag = `<div class="w3-light-grey"><div id="myBar" class="w3-container w3-green w3-center" style="width:0%;max-height:20px ;">0%</div></div>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

function initPreArti(){
    var mainContent = document.getElementById("root");
    newSection = document.createElement('section'); //create a div
    newSection.className = "prearti";
    newSection.id = "prearti";
    newSection.style.display = 'none';
    var tag = `<p>pre Artical</p>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

function initPostArti() {
    var mainContent = document.getElementById("root");
    newSection = document.createElement('section'); //create a div
    newSection.className = "postarti";
    newSection.id = "postarti";
    newSection.style.display='none';
    var tag = `<p>post Artical</p>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

function initTable() {
    var mainContent = document.getElementById("root");
    newSection = document.createElement('section'); //create a div
    newSection.className = "tables";
    newSection.id = "tables";
    var tag = `<div id="tableDiv" style="display: none;">
    <table class="styled-table">
        <thead>
            <tr>
                <th colspan="2" id="tableHead"></th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    </table>
    <button style="display: none;" id="loadmoreGroup" name="button" type="button" onclick="loadMorelink();">LoadMore
        Groups</button>

</div>`;
    newSection.innerHTML = tag;
    mainContent.appendChild(newSection); //append to the doc.body
    mainContent.insertBefore(newSection, mainContent.lastChild)
}

function insertRow(groupName, groupLink) {
    tableName = document.title.split(" Whats")[0];
    // groupLink=groupLink+"?wa"
    // alert(sectionId);
    // groupName = tableName + " Group " + groupNumber;
    groupId=groupLink.split('.com/')[1];
    var tbody = document.getElementById("tableBody");
    newtr = document.createElement('tr');   //create a div
    // newdiv.id=sectionId;
    var tag = "<td class=\"tdClass\"><img class=\"waimg\" src=\"https://web.whatsapp.com/invite/icon/" + groupId + "\"/></td><td>" + groupName + "</td><td><a href=\"" + groupLink + "\" target=\"_blank\"><button name=\"button\" type=\"button\">Join Now</button></a></td>";
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
            if (directWaLink == 1) {
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
        for (var t = tableRow.length - 1; t >= 0; t--) {
            // console.log("main",t);

            if (t == tableRow.length - 9) {
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
            if (directWaLink == 1) {
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
            controller();
            elem.style.display = "none";
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = "Wait until load all links ";

        }
    }
}

initMove();
initPreArti();
initTable();
initPostArti();
move();
loadLinks();