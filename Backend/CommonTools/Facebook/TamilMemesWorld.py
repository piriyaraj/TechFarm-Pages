import time
import shutil
import facebook as fb
import sys
from instaloader import exceptions
import threading
import os
from itertools import dropwhile, takewhile
import datetime
import instaloader
import firebase
import re
from bs4.element import ResultSet
import requests
from bs4 import BeautifulSoup, dammit
from firebase import firebase
from requests.models import ReadTimeoutError
from firebase import firebase

totalPhotos = 0
databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/TamilMemeWorld/"
# databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)
# mainSitemapUrl = "https://www.whatsapgrouplinks.com/sitemap_index.xml"


def getData(tableName, dataBase):
    ResultSet = dataBase.get(
        databaseUrl, tableName,)
    try:
        list(ResultSet.values()).index(data)
        return 1
    except:
        return 0


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


# ====================================== upload images ======================================================

# import firebaseSetup

postTime1 = time.time()+10*60
timeDivision = 10*60


def postToFacebook(userName, fullName, imgList, noOfpost):
    # print(timeDivision)
    # print(postTime1)
    imgFolderPath = "./"+userName+"/"
    # Get Access token - Follow the video on how to get access token for your fb account
    access_token = os.environ.get('FB_TAMILMEMESWORLD_ACCESS', None)
    # The Graph API allows you to read and write data to and from the Facebook social graph
    asafb = fb.GraphAPI(access_token)

    # Post a photo with captions
    # asafb.put_photo(open("meme.jpg","rb"), message = "Automated meme post")

    # asafb.put_object("me","feed",message =textQuote)
    # if(noOfpost==0):
    #     print("======>"+str(noOfpost)+" photos uploaded")
    #     return 0

    for i in range(noOfpost):
        title = imgList[i].split(".")[0]
        if(title.split("-") == "2021"):
            title = ""
        # tags=("#year_"+" #".join(title.split())).replace("-","_")
        # print(tags,title)
        message = "#Tamil_memes_world"

        # ,is_published=False,scheduled_publish_time=seconds)
        asafb.put_photo(open(imgFolderPath+imgList[i], "rb"), message=message)
        os.remove(imgFolderPath+imgList[i])
        # print("posted:", imgFolderPath+imgList[i])
        # postTime=postTime+timeDivision
    # print("======>"+str(noOfpost), "photos uploaded")


def getFullName(userName):
    L = instaloader.Instaloader(
        download_videos=False, save_metadata=False, post_metadata_txt_pattern='')
    t = instaloader.Profile.from_username(L.context, userName)
    return t.full_name
# if __name__=="__main__":
    # run(1)


def uploadImage():
    instaIds = getInstaId()
    for i in range(len(instaIds)):
        userName = instaIds[i].split("\n")[0]
        imgFolderPath = "./"+userName+"/"
        try:
            imgList = (os.listdir(imgFolderPath))
        except:
            continue
        imgList.reverse()
        # if(len(imgList)<noOfpost):
        noOfpost = len(imgList)
        if(noOfpost == 0):
            # print("\n\n==>Start Facebook page posting " + fullName+">>"+str(i+1)+"/"+str(len(instaIds)))
            print("======>"+str(noOfpost), "photos uploaded")
            # print("==>End  Facebook  page posting "+fullName)
            continue

        fullName = getFullName(userName)
        # postToFacebook(userName,fullName)
        # print(userName, fullName, imgList, noOfpost)
        # if(noOfpost>0):
        #     continue
        try:
            # print("\n\n==>Start Facebook page posting "+fullName)
            postToFacebook(userName, fullName, imgList, noOfpost)
            # print("==>End  Facebook  page posting "+fullName)

        except Exception as e:
            print(e)
            continue
        os.rmdir(userName)


# =================================================Download image section===============================================

# import firebaseSetup


def downloadImage(userName):
    # try:
    # userName="rashmika_mandanna"

    L = instaloader.Instaloader(
        download_videos=False, save_metadata=False, post_metadata_txt_pattern='')

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
    date_string = "21 June, 2021"
    UNTIL = datetime.datetime.strptime(lastposttime[2:], "%y-%m-%d %H:%M:%S")
    # UNTIL = datetime.datetime.strptime(date_string, "%d %B, %Y")

    # print("Start Time:", UNTIL, "\nEnd   Time:", SINCE)
    timeList = []
    try:
        for post in takewhile(lambda p: p.date > UNTIL, dropwhile(lambda p: p.date > SINCE, posts)):
            # print(post.date)

            timeList.append(str(post.date))
            L.download_post(post, userName)
    except:
        setLastCrawlingData(userName, timeList[0])
    if(len(timeList) > 0):
        setLastCrawlingData(userName, timeList[0])
        # totalPhotos=totalPhotos+len(timeList)
        return len(timeList)
    return 0
# if __name__ == '__main__':
#     # x="2021-04-26 10:12:27"
#     # print()
#
#     # print(downloadImage())


def download():
    # print()
    # return 0
    noOfpost = 0
    loopCount = getLoopCount()
    instaIds = getInstaId()
    # print(instaIds)
    try:
        for i in range(len(instaIds)):
            i = loopCount
            loopCount += 1
            # print(instaIds[i])
            # print(str(i+1))
            # print(str(len(instaIds)))
            # print("=============="+instaIds[i]+"==============\n==>Starting download "+str(i+1)+"/"+str(len(instaIds)))
            t = instaIds[i]
            print(t)
            try:
                downloadImage(t)
                # threading.Thread(target=downloadImage, args=(t,)).start()
            except:
                pass
            # downloadImage(t)
            # noOfpost+=downloadImage(instaIds[i].split("\n")[0])
            # print("\n==>End Download\n\n")
    except Exception as e:
        loopCount = loopCount-1
        print(e)
    if(loopCount >= len(instaIds)):
        loopCount = 0
    # file=open("data/loopCount.txt","w")
    # file.write(str(loopCount))
    # file.close()
    setLoopCount(loopCount)
    return 1


def Run():
    try:
        download()
    except Exception as e:
        print(e)
        pass
    # time.sleep(60*10)
    uploadImage()


if __name__ == "__main__":
    Run()
