var directWaLink = 1;
var groupNumber = 1;
var showTable=1;
var showPreArti=1;
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

preArtical =`<div class="entry-content" itemprop="text">

    <h2>1000+ Active PostTitle WhatsApp Group Links in PostYear engaged Whatsapp Group Links</h2>



    <p><strong>If you are Searching For Active&nbsp;<strong>PostTitle&nbsp;<a data-wpel-link="internal" href="/" title="WhatsApp Group Links">Whatsapp group links</a></strong>&nbsp;don’t worry about it this site always share active Whatsapp group link only
        </strong>
    </p>



    <p><strong>Here you can find&nbsp;<strong>PostTitle WhatsApp group links to Join links</strong>, Our&nbsp;<strong>site</strong>&nbsp;will Daily upload More than 500+ <a data-wpel-link="internal" href="/" title="WhatsApp Group Links">Whatsapp Group Links</a>,
        you can easily join by just click the join button.</strong>
    </p>



    <p><strong><span style="text-decoration: underline;">PostTitle <a data-wpel-link="internal" href="/" title="WhatsApp Group Links">WhatsApp Group Links</a>:</span></strong> <strong>Hey! PostTitle&nbsp;WhatsApp Group</strong>&nbsp;fan to hitch within the&nbsp;<strong>Sri Lanka&nbsp;<a data-wpel-link="internal" href="/" title="WhatsApp Group Links">WhatsApp group links</a></strong>&nbsp;simply
        click on the below links and take part in the chosen us WhatsApp groups among them. </p>



    <p>Still, before entering within the&nbsp;<strong>PostTitle&nbsp;<a data-wpel-link="internal" href="/" title="WhatsApp Group Links">WhatsApp group links</a></strong>&nbsp;you’d want to know bound Laws and guidance unless you’ll be away from the group. The
        main focus of planning this website is only to Give&nbsp;<a data-wpel-link="internal" href="/" title="WhatsApp Group Links">Whatsapp Group Links</a> for all Whatsapp group users.</p>

    <p>Here you can see the current group icon and their name so you can find the suitable group for your work or entertainment perfuse.</p>



    <p>Yes, after you join the WhatsApp group you can get more details about what you wanted and make new things also. so you this platform to get more benifte.</p>

    <h2>Active PostTitle WhatsApp Group Links Collection</h2>



    <p>Shortly&nbsp;<strong>Whatsapp</strong> Groups are so much popular, everyone uses WhatsApp for talking, getting new friends, sharing, chat with their loved ones, for office meetings, and lots of things. Our Site&nbsp;<a href="/"><strong>linker WhatsApp</strong></a>&nbsp;is
        the most trusted, fast, and genuine site to provide all kinds of Whatsapp Groups links for our visitors feel free to join all groups and get benefits. This is the right place for finding most of the category WhatsApp group. so today we are gonna
        back with another WhatsApp group link post which is known as the&nbsp;<strong>PostTitle <a data-wpel-link="internal" href="/" title="WhatsApp Group Links">WhatsApp Group Links</a></strong>.</p>

    <p>Lots of people are searching on the internet&nbsp;for the best <strong>invite</strong> <strong>links to PostTitle <a data-wpel-link="internal" href="/" title="WhatsApp Group Links">WhatsApp Group Links</a></strong>. if you are also here for that then
        stay here. In this post, you can get&nbsp;&nbsp;<strong>Best PostTitle <a data-wpel-link="internal" href="/" title="WhatsApp Group Links">WhatsApp Group Links</a></strong>&nbsp;of Girls, Jobs, Tourism, News, Tvale places, friendship, and a lot more
        groups. Let’s check it out below.</p>



    <h2>What Is PostTitle WhatsApp Group Links?</h2>



    <p>PostTitle <a data-wpel-link="internal" href="/" title="WhatsApp Group Links">WhatsApp Group Links</a> is the group where people share entertaining related images, videos, and other related content. Because these groups are made for public use and get
        benefit from it</p>


    <h2>Why PostTitle WhatsApp Group Links</h2>



    <p>Most of the people interest to join the PostTitle WhatsApp group for getting more details and related things for their wants in this post you can get the most popular WhatsApp group links for PostTitle.</p>
</div>`;

postArtical=``;
function controller(){
    if(showPreArti){
        document.getElementById('prearti').style.display='block';
    }
    if(showTable){
        document.getElementById("tableDiv").style.display = "block";
    }
    if (showPostArti) {
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
    var tag = preArtical.replaceAll("PostTitle", document.title.split(" Whats")[0]).replaceAll("PostYear", new Date().getFullYear());
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
    var tag = postArtical.replaceAll("PostTitle", document.title.split(" Whats")[0]);
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