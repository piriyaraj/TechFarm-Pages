import youtubetofacebook
import os
access_token = os.environ.get('FB_DONTBECORNER_ACCESS', None)
def Run():
    DontBeCorner = youtubetofacebook.youtubetofb(
        "https://www.youtube.com/channel/UCC7XEyMV3dPXh9HEuaxhP1Q", access_token, "DontBeCorner")

    if(DontBeCorner.haveNewVideo()):
        print("New Videos Available\n staring download")
        DontBeCorner.downloadVideo()
        print("uploading Video")
        DontBeCorner.uploadVideo()
