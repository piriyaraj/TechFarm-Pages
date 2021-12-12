import os
import re
from bs4 import BeautifulSoup
import requests
import facebook as fb
from firebase import firebase
import time

url = "https://www.brainyquote.com/quote_of_the_day"
databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/PJTamilLyrics/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)
mainSitemap= "https://www.tamil2lyrics.com/sitemap.xml"
postLink = "https://www.tamil2lyrics.com/lyrics/amma-amma-nee-engha-amma-song-lyrics/"
access_token = os.environ.get('FB_PJTAMILLYRICS_ACCESS', None)


def exract(url):
    reqs = requests.get(url)
    soup = BeautifulSoup(reqs.text, 'html.parser')
    postLinks = re.findall(
        r'<loc><!\[CDATA\[(.+?)]]></loc>', soup.prettify().replace("\n", "").replace(" ", ""))
    return postLinks

def getSubLyricsSitemap():
    lyricsSitemap=[]
    subSitemaps=exract(mainSitemap)
    for i in subSitemaps:
        if(i.find("lyrics-")>0):
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

def extractLyrics(postLink):
    reqs = requests.get(postLink)
    soup = BeautifulSoup(reqs.text, 'html.parser')
    title=soup.find("h1").text
    movie = soup.find_all("div",{"class":"lyrics-title"})[0].find_all("div")[1].find("a").text
    actor = soup.find_all("div", {"class": "lyrics-title"})[0].find("h3").find("a").text

    enlishLyrics=""
    for i in soup.find("div", {"id": "English"}).find_all("p"):
        enlishLyrics = enlishLyrics+i.text+"\n\n"
    
    tamilLyrics = ""
    for i in soup.find("div", {"id": "Tamil"}).find_all("p"):
        tamilLyrics = tamilLyrics+i.text+"\n\n"

    return movie,title,actor,enlishLyrics,tamilLyrics


def postToFacebookText(postText):

    # The Graph API allows you to read and write data to and from the Facebook social graph
    asafb = fb.GraphAPI(access_token)
    asafb.put_object("me", "feed", message=postText)


def Run():
    allLyricsSitemap=getSubLyricsSitemap()
    lastSitemap=getLastSitemap()
    try:
        indexOflastSitemap=allLyricsSitemap.index(lastSitemap)
    except:
        indexOflastSitemap=0
    for i in allLyricsSitemap[indexOflastSitemap:]:
        setLastSitemap(i)
        print(i)
        allPostLinks=exract(i)
        lastPostLink=getLastPostLink()
        try:
            indexOfLastPost=allPostLinks.index(lastPostLink)+1
        except:
            indexOfLastPost=0
        for j in allPostLinks[indexOfLastPost:]:
            movie, title, actor, enlishLyrics, tamilLyrics = extractLyrics(j)
            postText = "🎼Song  : "+title+"\n🎬Movie : "+movie+"\n👨‍🎤Actor  : "+actor + \
                "\n❤🧡💛💚💙💜🤎🖤🤍💕💓💗💖💘💝💟\nIn English :\n❤🧡💛💚💙💜🤎🖤🤍💕💓💗💖💘💝💟\n"+enlishLyrics + \
                "\n❤🧡💛💚💙💜🤎🖤🤍💕💓💗💖💘💝💟\nIn Tamil\n❤🧡💛💚💙💜🤎🖤🤍💕💓💗💖💘💝💟\n"+tamilLyrics
            
            try:
                postToFacebookText(postText)
                setLastPostLink(j)
                print("===> "+j)
                time.sleep(60)

                # print(postText)
            except Exception as e:
                # setLastSitemap(i)
                # setLastPostLink(j)
                print(e)
                return -1

            
if __name__=="__main__":
    postToFacebookText("hello1")
