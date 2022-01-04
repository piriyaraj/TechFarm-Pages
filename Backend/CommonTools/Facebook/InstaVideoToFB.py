import re
from bs4.element import ResultSet
import requests
from bs4 import BeautifulSoup, dammit
from firebase import firebase
import pyrebase
from requests.models import ReadTimeoutError
from firebase import firebase
import instaloader
import datetime
from itertools import dropwhile, takewhile
import os
import threading

from instaloader import exceptions
from os import path

file_path = path.abspath(__file__)
dir_path = path.dirname(file_path)

totalPhotos = 0
databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/InstaReelsPro/"
# databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)
# mainSitemapUrl = "https://www.whatsapgrouplinks.com/sitemap_index.xml"

access_token = os.environ.get('FB_TESTING_ACCESS', None)



def postVideo(pageId, video_path, message):
    url = f"https://graph-video.facebook.com/{pageId}/videos?access_token=" + access_token
    files = {
        'file': open(video_path, 'rb'),
    }
    payload = {
        "title": message,
        "description": message,
    }
    st = requests.post(url, files=files, data=payload)
    print(st.json())


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)


def getLoopCount():
    dic = dataBase.get(databaseUrl, "data")

    try:                                   # if scrapdata table not exist then add it in database
        loopCount = dic['loopCount']
    except:
        loopCount = 0
        data = {}
        data["loopCount"] = 0
        insertData("data", data, dataBase, format="patch")
    return loopCount


def setLoopCount(coutValue):
    data = {}
    data["loopCount"] = coutValue
    insertData("data", data, dataBase, format="patch")


def getInstaId():
    instaIds = dataBase.get(databaseUrl, "instaIds")
    try:
        instaIds.remove(None)
    except:
        pass
    return instaIds


def getLastCrawlingData(instaId):
    instaId = instaId.replace(".", "_")
    dic = dataBase.get(databaseUrl, "lastCrawling/"+instaId)
    if(dic == None):
        return dic
    return dic[instaId]


def setLastCrawlingData(instaId, date):
    instaId = instaId.replace(".", "_")
    data = {}
    data[instaId] = date
    insertData("lastCrawling/"+instaId, data, dataBase, format="patch")


def uploadInstaIdInFirebase(instaList):

    data = {}
    for i in instaList:
        data[instaList.index(i)] = i
    insertData("instaIds", data, dataBase, format="patch")


def downloadImage(userName):
    # try:
    # userName="rashmika_mandanna"

    L = instaloader.Instaloader(download_pictures=False, download_videos=True,
                                post_metadata_txt_pattern='', save_metadata=False)
    # L.login("techfarmfamily", "1998Techfarm@im")
    posts = instaloader.Profile.from_username(L.context, userName).get_posts()
    # try:
    #     file=open("data/"+userName+".txt","r")
    # except:
    #     open("data/"+userName+".txt","w").close()
    #     file=open("data/"+userName+".txt","r")
    lastposttime = getLastCrawlingData(userName)
    # lastposttime=int(2021, 4, 20)
    if(lastposttime == None):
        lastposttime = str(datetime.datetime.now() -
                           datetime.timedelta(days=1)).split(".")[0]
    SINCE = datetime.datetime.now()

    UNTIL = datetime.datetime.strptime(lastposttime[2:], "%y-%m-%d %H:%M:%S")

    print("Start Time:", UNTIL, "\nEnd   Time:", SINCE)
    timeList = []
    try:
        for post in takewhile(lambda p: p.date > UNTIL, dropwhile(lambda p: p.date > SINCE, posts)):

            timeList.append(str(post.date))
            if(post.is_video):
                try:
                    title = userName+" "+post.caption
                    message = title
                except:
                    title = userName
                    message = title

                title = dir_path+"/Videos/"+title[:240]+".mp4"
                # print(post.date)
                date = dir_path+"/Videos/"+str(post.date).replace(" ",
                                                        "_").replace(":", "-")+"_UTC.mp4"
                a=L.download_post(post)
                print(date)
                absPath=str(post.date).replace(
                    " ", "_").replace(":", "-")+"_UTC.mp4"
                print(absPath)
                print(a)
                # os.rename(date, title)
                # print(date)
                postVideo("108475275046430", absPath, message)
                os.remove(dir_path+"/"+date)
                break

                # postVideo(instReelsProId, "/content/"+title, message[:255])
        if(len(timeList) > 0):
            # setLastCrawlingData(userName, timeList[0])
            pass
            # totalPhotos=totalPhotos+len(timeList)
            return len(timeList)
        return 0
    except Exception as e:
        print(e)
        # setLastCrawlingData(userName, timeList[0])
        pass

# if __name__ == '__main__':
#     # x="2021-04-26 10:12:27"
#     # print()
#
#     # print(downloadImage())


def Run():
    # print()
    # return 0
    noOfpost = 0
    loopCount = getLoopCount()
    instaIds = getInstaId()
    # print(instaIds)
    try:

        for i in range(len(instaIds))[:1]:
            i = loopCount
            loopCount += 1
            # print(instaIds[i])
            # print(str(i+1))
            # print(str(len(instaIds)))
            print("=============="+instaIds[i]+"==============\n==>Starting download "+str(
                i+1)+"/"+str(len(instaIds)))
            t = instaIds[i]
            # threading.Thread(target=downloadImage, args=(t,)).start()
            downloadImage(t)
            # noOfpost+=downloadImage(instaIds[i].split("\n")[0])
            print("\n==>End Download\n\n")
    except Exception as e:
        loopCount = loopCount-1
        print(e)
    if(loopCount >= len(instaIds)):
        loopCount = 0
    # file=open("data/loopCount.txt","w")
    # file.write(str(loopCount))
    # file.close()

    # setLoopCount(loopCount)

    return 1


if __name__ == '__main__':
    Run()
    print(totalPhotos)
