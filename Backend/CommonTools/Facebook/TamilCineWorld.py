import os
import re
from bs4 import BeautifulSoup
import requests
import facebook as fb
from firebase import firebase
import time
import tamil
from PIL import Image, ImageDraw, ImageFont

databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/TamilCineWorld/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)
mainSitemap = "https://www.cinemapettai.com/sitemap_index.xml"
postLink = "https://www.cinemapettai.com/behaving-abnormally-dia-menon-in-depression/"
postLink1 = "https://www.cinemapettai.com/vivek-wont-celebrate-newyear/"
access_token = os.environ.get('FB_PJTAMILLYRICS_ACCESS', None)
access_token="EAAIuPIuu0W4BAGncIIcOt8ilBhBad71NlrAEK6sZB98eCleZAStpy4ZCD1QNYmUeqZAO2cmARDcXn6U34ks2bj6k5yoMoySzNTD9lvea7h1GY9soQEbFAWTLKas6pKRL18xhyTwA7cigtAIVD2RD8Y4LXQx06mcz4YmwnRoGQ0eewsuB8GTBBk1z2SrBU5V3XoipG8fxAgZDZD"


def exract(url):
    reqs = requests.get(url)
    soup = BeautifulSoup(reqs.text, 'html.parser')
    postLinks = re.findall(
        r'<loc>(.+?)</loc>', soup.prettify().replace("\n", "").replace(" ", ""))
    return postLinks


def getSubLyricsSitemap():
    lyricsSitemap = []
    subSitemaps = exract(mainSitemap)
    for i in subSitemaps:
        if(i.find("post-sitemap") > 0):
            lyricsSitemap.append(i)
    return lyricsSitemap


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)


def getLastSitemap():
    dic = dataBase.get(databaseUrl, "Data")

    try:                                   # if scrapdata table not exist then add it in database
        lastCount = dic['lastSitemap']
    except:
        lastCount = 0
    return lastCount


def setLastSitemap(lastSitemap):
    data = {}
    data["lastSitemap"] = lastSitemap
    insertData("Data", data, dataBase, format="patch")


def getLastPostLink():
    dic = dataBase.get(databaseUrl, "Data")

    try:                                   # if scrapdata table not exist then add it in database
        lastCount = dic['lastPost']
    except:
        lastCount = 0
    return lastCount


def setLastPostLink(postLink):
    data = {}
    data["lastPost"] = postLink
    insertData("Data", data, dataBase, format="patch")


def getPostData(postLink):
    reqs = requests.get(postLink)
    soup = BeautifulSoup(reqs.text, 'html.parser')
    try:
        imgUrl = soup.find("section", {"id": "mvp-content-main"}).find("img").get_attribute_list("src")[0]
    except Exception as e:
        # print(e)
        imgUrl = soup.find("div", {"id": "mvp-post-feat-img"}).find("img").get_attribute_list("src")[0]
    title = soup.find("h1").text
    postText = ""

    for i in soup.find("section", {"id": "mvp-content-main"}).find_all("p")[:-1]:
        postText = postText+i.text+"\n"
    
    

    return imgUrl, title, postText

def downloadImage(imgUrl):
    res = requests.get(imgUrl)

    file = open("Facebook/postImage.png", 'wb')
    for chunk in res.iter_content(10000):
        file.write(chunk)
    file.close()
    # addLogo("Facebook/testlogo.png", "Facebook/Quote of the day.jpg")
    

def postToFacebookImage():

    # Get Access token - Follow the video on how to get access token for your fb account

    # The Graph API allows you to read and write data to and from the Facebook social graph
    asafb = fb.GraphAPI(access_token)

    asafb.put_photo(open("Facebook/postImage.png", "rb"),
                    message="பைத்தியம் போல் உளறினேன்.. தியா மேனனின் பரிதாபத்திற்குரிய நிலமை!")
    # os.remove("Facebook/Quote of the day.jpg")


def makeImage(title):
    templateImg = Image.open("Facebook/tamil cine world.png")
    postImg = Image.open("Facebook/postImage.png").resize((1000, 410))
    templateImg.paste(postImg, (0, 95))
    font = ImageFont.truetype("Facebook/Bamini.ttf", 30)
    draw = ImageDraw.Draw(templateImg)
    a = tamil.txt2unicode.unicode2bamini(title)
    draw.text((0, 10), a, fill=(0, 0, 0), font=font)
    ImageTitle = title+".png"
    templateImg.save("Facebook/postImage.png", 'PNG')
    return ImageTitle


def Run():
    allLyricsSitemap = getSubLyricsSitemap()
    lastSitemap = getLastSitemap()
    try:
        indexOflastSitemap = allLyricsSitemap.index(lastSitemap)
    except:
        indexOflastSitemap = 0
    for i in allLyricsSitemap[indexOflastSitemap:]:
        setLastSitemap(i)
        allPostLinks = exract(i)
        lastPostLink = getLastPostLink()
        try:
            indexOfLastPost = allPostLinks.index(lastPostLink)+1
        except:
            indexOfLastPost = 0
        for j in allPostLinks[indexOfLastPost:]:
            print("===> "+j, end=" : ")

            imgUrl, title, postText = getPostData(j)
            downloadImage(imgUrl)
            makeImage(title)
            # print(songLyrics)

            try:
                # postToFacebookText(songLyrics)
                setLastPostLink(j)
                print(" : posted")
                # return -1
                time.sleep(5)

                # print(postText)
            except Exception as e:
                # setLastSitemap(i)
                # setLastPostLink(j)
                print(e)
                return -1



def test():
    imgUrl, title, postText = getPostData(postLink1)
    downloadImage(imgUrl)
    makeImage(title)
if __name__ == "__main__":
    test()
