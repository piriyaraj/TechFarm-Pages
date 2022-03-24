import youtubetofacebook
import os
access_token = os.environ.get('FB_DONTBECORNER_ACCESS', None)
def Run():
    DontBeCorner = youtubetofacebook.youtubetofb(
        "https://www.youtube.com/channel/UCC7XEyMV3dPXh9HEuaxhP1Q", access_token, "DontBeCorner")

    if(DontBeCorner.haveNewVideo()):
        DontBeCorner.downloadVideo()
        DontBeCorner.uploadVideo()
