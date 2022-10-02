
    const c=0;
    var count = 0;
    const loadTime = 20 //in seconds
    const postVisit = 10;
    const cookieExpire = 0.1;


    async function countTimer() {
        document.getElementById("nextPost").disabled = true;
        count = parseInt(getCookie("NoOfPost"));
        let postCountTag = document.getElementById("postCount")
        console.log(getCookie("NoOfPost"));

        if (isNaN(count)) {
            postCountTag.innerText = postVisit - 1 + " remaining post";
            setCookie("NoOfPost", 1, cookieExpire);
        } else if (count >= postVisit - 1) {
            if(c==0){
                postCountTag.innerText = "verification code"
            }
        } else {
            postCountTag.innerText = postVisit - 1 - count + " remaining post";
        }

        time = loadTime * 100
        interval = await setInterval(await async function() {
                time--;
                document.getElementById('nextPostTimer').innerHTML = "wait " + time + " seconds"
                if (time == 0) {
window.open("https://www.telelinking.link/");

                    // stop timer
                    clearInterval(interval);
                    // click
                    document.getElementById('nextPostTimer').style.backgroundColor = '#304478';
                    document.getElementById('nextPostTimer').innerHTML = "<a href='#random-post' class='visitButton'>Visit</a>";

                    if (count == postVisit - 1) {
                        //count = 1;
                        if(c==0){
                            document.getElementById('nextPostTimer').innerHTML = "<a href='#random-post' class='visitButton'>101110111</a>";
                        }
                        else{
                            document.getElementById('nextPostTimer').innerHTML = "";

                        }
                    }
					if(count>postVisit-1){
						count=5
					}
                    console.log("hello")
                    if (count > 0) {
                        setCookie("NoOfPost", count + 1, cookieExpire);
                    }
                }
            }, 10)
            // return 1;


    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    async function checkCookie() {
        document.getElementById("nextPost").disabled = true;
        var y = await countTimer();
        // console.log("hello");
        count = parseInt(getCookie("NoOfPost"));
        let postCountTag = document.getElementById("postCount")
        if (isNaN(count)) {
            postCountTag.innerText = postVisit - 1 + " remaining post";
            setCookie("NoOfPost", 1, cookieExpire);
        } else if (count < postVisit) {
            if (time >= 0) {
                // alert(time);
                postCountTag.innerText = postVisit - 1 - count + " remaining post";
                if (postVisit - 1 - count == 0) {
                    postCountTag.innerText = "Code 1"

                }
                setCookie("NoOfPost", count + 1, cookieExpire);

                return;
            }
        } else(
            document.getElementById('nextPostTimer').innerHTML = "YOUR CODE"

        )
    }
