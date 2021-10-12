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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var groupNumber=1;
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
<<<<<<< Updated upstream
=======
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
    alert("Your Group " + waName+" Added");


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


>>>>>>> Stashed changes

move();
loadLinks();