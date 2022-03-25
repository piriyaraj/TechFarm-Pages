import youtubetofacebook
import os
from firebase import firebase

databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/YouTube/dontbecorner/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)

access_token = os.environ.get('FB_DONTBECORNER_ACCESS', None)
access_token = "EAAOg0gqiaQEBAHD19GjSWF6XeZADgPsHnf6QeDR1R2dgZBJgZACT7ImXo2GMOX2oZCd6gKjS45IIuem3admfL666IrxHI08FnOE9rocRZBAJT7ZALpXFAkn9tcHsIJM3mRa9bgvGiKzRy78aZAZA9vAR65pLJCeolOv452ngtILfuHPafmEBZBfI0"
def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)

def getLastPostId():
    dic = dataBase.get(databaseUrl, "Data")

    try:                                   # if scrapdata table not exist then add it in database
        lastPostId = dic['lastPostId']
    except:
        lastPostId = 0
    return lastPostId

def setLastPostId(lastPostId):
    data = {}
    data["lastPostId"] = lastPostId
    insertData("Data", data, dataBase, format="patch")
    return

def Run():
    DontBeCorner = youtubetofacebook.youtubetofb(
        "https://www.youtube.com/channel/UCC7XEyMV3dPXh9HEuaxhP1Q", access_token, "DontBeCorner")
    haveNewVideo, lastVideoId = DontBeCorner.haveNewVideo(
        lastPostId=getLastPostId())
    print(lastVideoId)
    if(haveNewVideo):
        print("New Videos Available\n staring download")
        DontBeCorner.downloadVideo()
        setLastPostId(lastVideoId)
        print("uploading Video")
        DontBeCorner.uploadVideo()
        print("Video uploaded")


if __name__=="__main__":
    setLastPostId("lastPostId")
    print(getLastPostId())
