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
databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/ActressGallery/"

dataBase = firebase.FirebaseApplication(databaseUrl, None)
access_token = os.environ.get('FB_ACCESS', None)
facebookId="103874471887645"
# get last download images data


def getData(tableName, dataBase):
    ResultSet = dataBase.get(
        databaseUrl, tableName,)
    try:
        list(ResultSet.values()).index(data)
        return 1
    except:
        return 0
# set last downloaded images data


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)
# get last downloaded actress name


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
# set last download actress name count


def setLoopCount(coutValue):
    data = {}
    data["loopCount"] = coutValue
    insertData("data", data, dataBase, format="patch")
# get all instagram id from firebase


def getInstaId():
    instaIds = dataBase.get(databaseUrl, "instaIds")
    try:
      instaIds.remove(None)
    except:
      pass
    return instaIds
# get specific actress photots downloaded date


def getLastCrawlingData(instaId):
    instaId = instaId.replace(".", "_")
    dic = dataBase.get(databaseUrl, "lastCrawling/"+instaId)
    if(dic == None):
        return dic
    return dic[instaId]
# set specific actress photots downloaded date


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


def updateInstaId():

    # getLoopCount()
    # getInstaId()
    # setLoopCount(5)
    # data=getLastCrawlingData("anupamaparameswaran96")
    # print(data)
    # setLastCrawlingData("anupamaparameswaran96", "2022-09-06 08:18:08")
    # data = getLastCrawlingData("anupamaparameswaran96")
    # print(data)
    instaList = [
        'aishwaryarajessh',
        'alya_manasa',
        'anupamaparameswaran96',
        'anushkashettyofficial',
        'athulyaofficial',
        'dharshagupta',
        'gabriellacharlton_',
        'geneliad',
        'hegdepooja',
        'i_nivethathomas',
        'iamaathmika',
        'ihansika',
        'ileana_official',
        'im_raveena_daha',
        'kajalaggarwalofficial',
        'kayal_anandhi',
        'keerthysureshofficial',
        'lakshmimenon967',
        'losliyamariya96',
        'nakshathra.nagesh',
        'namita.official',
        'nikkigalrani',
        'pavithralakshmioffl',
        'poojag.umashankar',
        'raashiikhanna',
        'rakulpreet',
        'rashmika_mandanna',
        'realactress_sneha',
        'sadaa17',
        'saipallaviofficial',
        'samantharuthprabhuoffl',
        'sayyeshaa',
        'shivani_narayanan',
        'shrutzhaasan',
        'simply.asin',
        'simranrishibagga',
        'sivaangi.krish',
        'taapsee',
        'tamannaahspeaks',
        'tamil_rithika',
        'thesunainaa',
        'trishakrishnan',
        'venba.official',
        'yours_anjali',
    ]
    uploadInstaIdInFirebase(instaList)
    return 0


# ====================================== upload images ======================================================

# import firebaseSetup


postTime1 = time.time()+10*60
timeDivision = 10*60


def getFullName(userName):
    L = instaloader.Instaloader(
        download_videos=False, save_metadata=False, post_metadata_txt_pattern='')
    t = instaloader.Profile.from_username(L.context, userName)
    return t.full_name
# if __name__=="__main__":
    # run(1)


def postImage(img):
    url = f"https://graph.facebook.com/{facebookId}/photos?access_token=" + access_token

    files = {
        'file': open(img, 'rb'),
    }
    data = {
        "published": False
    }
    r = requests.post(url, files=files, data=data).json()
    return r

# upload multiple image


def multiPostImage(message, imgFolder):
    imgs_id = []
    img_list=os.listdir(imgFolder)

    for img in img_list:
        post_id = postImage(imgFolder+"/"+img)

        imgs_id.append(post_id['id'])

    args = dict()
    args["message"] = message
    for img_id in imgs_id:
        key = "attached_media["+str(imgs_id.index(img_id))+"]"
        args[key] = "{'media_fbid': '"+img_id+"'}"
    url = f"https://graph.facebook.com/{facebookId}/feed?access_token=" + access_token
    requests.post(url, data=args)


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

    UNTIL = datetime.datetime.strptime(lastposttime[2:], "%y-%m-%d %H:%M:%S")

    # print("Start Time:", UNTIL, "\nEnd   Time:", SINCE)
    timeList = []
    try:
        message = ""
        date = ""
        for post in takewhile(lambda p: p.date > UNTIL, dropwhile(lambda p: p.date > SINCE, posts)):
            date = "-"+str(post.date).replace("-",  "_").replace(":", "_").replace(" ", "_")
            # print(date)
            try:
                title = getFullName(userName)+">>\n "+post.caption
                message = title
            except:
                title = getFullName(userName)
                message = title
            timeList.append(str(post.date))
            L.download_post(post, "actphoto-"+userName+date)
            time.sleep(60)
            if(os.path.isdir("./actphoto-"+userName+date)):             
              multiPostImage(message, "./actphoto-"+userName+date)
              time.sleep(60)
              shutil.rmtree("./actphoto-"+userName+date)
        
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
            # try:
            #     threading.Thread(target=downloadImage, args=(t,)).start()
            # except:
            #     pass
            downloadImage(t)
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
    print("Started Actress gallery")
    try:
        download()
    except:
        pass
