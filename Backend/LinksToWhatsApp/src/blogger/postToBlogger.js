const google=require("googleapis");
var blogger = google.blogger('v3');
app.post('/creatGoogleBloggerPost', function (req, res, next) {
    console.log('creatGoogleBloggerPost called');
    var oauth2Client = new google.auth.OAuth2();
    var key = require('./public_html/SoulSeeker2-1bxxxaaa727d.json');
    var jwtClient;

    jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/blogger'], null);
    jwtClient.authorize(function (err, tokens) {
        console.log('retrieved tokens.access_token from google', tokens.access_token);
        google.options({
            auth: jwtClient
        });
        if (err) {
            console.log(err);
            return;
        } else {
            blogger.posts.insert({
                Authorization: 'Bearer ' + btoa(USERS.accessToken),
                blogId: '4113796741591234135',
                resource: {
                    title: 'Sample rootscope',
                    content: 'Content rootscope'
                }
            }, function (err, reponse) {
                if (err) {
                    console.log('error ', err);
                } else {
                    console.log('blog post success in google blogger', reponse);
                }
            });
        }
    });
});