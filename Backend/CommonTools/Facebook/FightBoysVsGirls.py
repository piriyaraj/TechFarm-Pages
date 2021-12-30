import os
import re
from typing import Counter
from bs4 import BeautifulSoup
import requests
import facebook as fb
from firebase import firebase
import time
import tamil
from PIL import Image, ImageDraw, ImageFont
import string

databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/FightBoysVsGirls/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)
postUrl = "https://sharechat.com/profile/340561914"

access_token = os.environ.get('FB_FIGHTBOYSVSGIRLS_ACCESS', None)

tags = "#வடிவேலு_மீம்ஸ் #தமிழ்_மீம்ஸ் #லொள்ளு #சிரிப்பு_இலவசம் #இன்றைய_ட்ரெண்டிங்_மீம்ஸ் #வயிறு_குலுங்க_சிரி"


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)

def getLastImgUrl():
    dic = dataBase.get(databaseUrl, "Data")

    try:                                   # if scrapdata table not exist then add it in database
        lastCount = dic['lastImage']
    except:
        lastCount = 0
    return lastCount


def setLastImgUrl(imgUrl):
    data = {}
    data["lastImage"] = imgUrl
    insertData("Data", data, dataBase, format="patch")

def getGroupIds():
    dic = dataBase.get(databaseUrl, "groups")
    return dic[1:]


def getPostData():
    newUrls=[]
    html_doc = requests.get(postUrl).content
    soup = BeautifulSoup(html_doc, 'html.parser')
    allTags = soup.find_all("div", {"class": "D(b) Px($md) Bgc($white)"})
    for i in allTags:
        imgUrl=i.find_all("img")[1].get_attribute_list("src")[0]
        if(imgUrl.split("/")[0]=="data:image"):
            imgUrl=i.find_all("img")[1].get_attribute_list("data-src")[0]

        if(imgUrl.find("frame")>0):
            # print(imgUrl)
            continue
        newUrls.append(imgUrl)
    # print(newUrls)
    return newUrls

def downloadImage(imgUrl):
    res = requests.get(imgUrl)

    file = open("Facebook/memeImage.png", 'wb')
    for chunk in res.iter_content(10000):
        file.write(chunk)
    file.close()
    # addLogo("Facebook/testlogo.png", "Facebook/Quote of the day.jpg")

def postToFacebookImage():

    # Get Access token - Follow the video on how to get access token for your fb account

    # The Graph API allows you to read and write data to and from the Facebook social graph
    asafb = fb.GraphAPI(access_token)

    postId=asafb.put_photo(open("Facebook/memeImage.png", "rb"), message=tags)
    groupIds = getGroupIds()
    for group in groupIds:
        try:
            asafb.put_object(group,"feed", message="www.facebook.com/"+postId['id'].replace("_","/"))
        except:
            pass
    os.remove("Facebook/memeImage.png")

def Run():

    lastImgLink = getLastImgUrl()
    newImgUrls = getPostData()
    setLastImgUrl(newImgUrls[0])
    # print(lastImgLink,"\n",newImgUrls[0])
    count=1
    for j in newImgUrls:
        if(lastImgLink==j):
            print("No New Memes")
            break
        downloadImage(j)

        try:
            postToFacebookImage()
            print("===> ",count,j, end=" : posted\n")
            count = count+1
            time.sleep(5)

            # print(postText)
        except Exception as e:
            # setLastSitemap(i)
            # setLastPostLink(j)
            print(e)
            return -1



if __name__ == "__main__":
    print(getGroupIds())
    # data=getPostData()
    # for i in data:
    #     print(i)
