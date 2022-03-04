import re
import requests
from bs4 import BeautifulSoup
import os
import re
import requests
from bs4 import BeautifulSoup
import os
import re
from bs4.element import ResultSet
import requests
from bs4 import BeautifulSoup, dammit
from firebase import firebase
from requests import models
from requests.models import ReadTimeoutError


databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/Website/mobilespeci/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)


# for extract post data  ==================================================
def getLastPostNumberForExtract():
    postNumber = dataBase.get(databaseUrl, "data/lastPostNumberForExtract/")
    if(postNumber == None):
        postNumber = 0
    return postNumber
    pass

# set lastPostNumber


def setLastPostNumberForExtract(postNumber):
    insertData('data', {"lastPostNumberForExtract": postNumber},
               dataBase, format='patch')
    pass

# get next post url


def getNextPostUrlForExtract(postNumber):
    postUrl = dataBase.get(databaseUrl, "toPost/"+str(postNumber))
    return postUrl
    pass

# detete posted url


def deletePostedUrlForExtract(postNumber):
    dataBase.delete(databaseUrl, 'toPost/'+str(postNumber))
    pass

# added posted url in posted list


def addPostedUrlForExtract(postNumber, url):
    insertData('postedInFirebase', {postNumber: url}, dataBase, format='patch')

    pass


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)


def readFirebaseDate(tableName):
    dataValueList = []
    ResultSet = dataBase.get(databaseUrl, tableName,)
    try:
        for i in (list(ResultSet.values())):
            dataValueList.append(i['url'])
        return dataValueList
    except:
        return 0

# postdata update


def findimgurl():
    imgUrls = []
    firstImg = soup.find(
        "div", class_="specs-photo-main").find("img").get_attribute_list("src")[0]
    imgUrls.append(firstImg)
    try:
        imgclass = soup.find_all('div', class_="specs-photo-main")[0]
        a_tag = imgclass.find_all('a')[0]
        imglink = "https://www.gsmarena.com/" + \
            a_tag.get_attribute_list('href')[0]
    except:
        imgclass = soup.find_all('div', class_="specs-photo-main")[0]
        imglink = imgclass.find_all('img')[0].get_attribute_list('src')[0]
    reqs = requests.get(imglink)
    soupImg = BeautifulSoup(reqs.text, 'html.parser')

    try:
        picclass = soupImg.findAll("div", id="pictures-list")[0]
        imgtags = picclass.findAll("img")
        for i in imgtags:
            img_url = i.get_attribute_list("src")[0]
            if(img_url == None):
                img_url = i.get_attribute_list("data-src")[0]
            imgUrls.append(img_url)
    except Exception as e:
        print(e)
        imgUrls.append(imglink)
    return imgUrls


def contentTableMake():
    contentTable = {}
    for i in tables:
        try:
            tableHead = i.findAll("th")[0].text
        except:
            continue
        temp = {}
        for j in i.findAll("tr"):
            try:
                key = j.findAll("td")[0].text
                value = j.findAll("td")[1].text.replace("\n", "")
                temp[key] = value
            except:
                pass
        contentTable[tableHead] = temp
        if(tableHead == "Tests"):
            break
    return contentTable


def getdata(url):
    global reqs, soup, tables, keys, values, PhoneName, logo
    reqs = requests.get(url)
    soup = BeautifulSoup(reqs.text, 'html.parser')
    tables = soup.findAll("table")
    keys = []
    values = []
    phoneName = soup.title.text.split(" -")[0]
    if(soup.title.text == "Too Many Requests"):
        print(soup.title.text)
        return 0
    title = phoneName
    tag = phoneName.split()[0].upper()
    if(tag == "Fujitsu".upper()):
        tag = "Fujitsu Siemens".upper()
    elif(tag == "sony".upper() and phoneName.split()[1].upper() == "ericsson".upper()):
        tag = "song ericsson".upper()

    descri = "Check all features about "+phoneName + \
        " Price, Camera, Ram, Rom, Colour, and other information at MobileSpeci. More " + \
        phoneName+" details."
    content = contentTableMake()
    img_urls = findimgurl()
    return title, tag, descri, content, img_urls


def addPostDatas(title, tag, descri, content, img_urls, postNumber):
    # insertTitlt
    insertData('toPostInBlogger/'+str(postNumber),
               {"title": title}, dataBase, format='patch')
    # insert tag
    insertData('toPostInBlogger/'+str(postNumber),
               {"tag": tag}, dataBase, format='patch')
    # insert descritption
    insertData('toPostInBlogger/'+str(postNumber),
               {"descri": descri}, dataBase, format='patch')
    # insert content
    insertData('toPostInBlogger/'+str(postNumber),
               {"content": str(content)}, dataBase, format='patch')
    # insert img urls
    insertData('toPostInBlogger/'+str(postNumber),
               {"img_urls": img_urls}, dataBase, format='patch')
    pass


# update toPost data


def updateToPost(mobileNames, mobileLinks):
    for i in range(len(mobileNames)):
        insertData(
            'toPost', {mobileNames[i]: mobileLinks[i]}, dataBase, format='patch')

# get all new post links for sepcific mobile brand


def getAllMobilePosts(brand, url, lastPostUrl):
    reqs = requests.get(url)
    soup = BeautifulSoup(reqs.text, 'html.parser')
    nextPages = soup.find_all("div", class_="nav-pages")[0].find_all("a")
    pageLinks = []
    mobileNames = []
    mobileLinks = []
    pageLinks.append(url)
    for i in nextPages:
        pageLink = "https://gsmarena.com/"+i.get_attribute_list("href")[0]
        pageLinks.append(pageLink)

    for i in pageLinks:
        reqs = requests.get(i)
        soup = BeautifulSoup(reqs.text, 'html.parser')
        mobileList = soup.find_all("div", class_="makers")[0]
        mobileListLis = mobileList.find_all("li")
        for i in mobileListLis:
            mobileName = i.text
            postUrl = "https://gsmarena.com/" + \
                i.find("a").get_attribute_list("href")[0]
            if(postUrl == lastPostUrl):
                return mobileNames, mobileLinks
            mobileNames.append(mobileName)
            mobileLinks.append(postUrl)
    insertData('data/lastPostInBrand/',
               {brand: mobileLinks[0]}, dataBase, format='patch')
    updateToPost(mobileNames, mobileLinks)


# checking any new post availble using mobile count
def checkForNewPost():
    reqs = requests.get("https://www.gsmarena.com/makers.php3")
    soup = BeautifulSoup(reqs.text, 'html.parser')
    try:
        mobileList = soup.find_all("table")[0]
    except:
        print("too many request")
        return
    mobileListTds = mobileList.find_all("td")

    for i in mobileListTds:
        mobileCount = i.find("span").text.split(" ")[0]
        mobileBrand = i.find("a").text.split(mobileCount)[0].replace(".", " ")
        mobileBrandUrl = "https://www.gsmarena.com/" + \
            i.find("a").get_attribute_list("href")[0]
        try:
            noOfPost = dataBase.get(databaseUrl, "data/crewelData/"+mobileBrand).split("|")[0]
        except:
            noOfPost = 0
        if(noOfPost != mobileCount):
            print("new post availabe for", mobileBrand)
            try:
                lastPostInBrand = dataBase.get(
                    databaseUrl, "data/lastPostInBrand/"+mobileBrand)
            except:
                lastPostInBrand = ""
            getAllMobilePosts(mobileBrand, mobileBrandUrl, lastPostInBrand)
            insertData('data/crewelData',{mobileBrand: mobileCount}, dataBase, format='patch')


def addPostDataIntoFirebase():
    postCount = getLastPostNumberForExtract()+1
    count = 0
    for i in range(100):

        url = getNextPostUrlForExtract(postCount)
        # print(url)
        if(url == None):
            print("No new posts")
            break
        if(url.find("3d-spin") >= 0):
            i -= 1
            # deletePostedUrlForExtract(postCount)

            continue

        try:
            title, tag, descri, content, img_urls = getdata(url)
            addPostDatas(title, tag, descri, content, img_urls, postCount)
        except Exception as e:
            print(e)
            break

        addPostedUrlForExtract(postCount, url)
        # deletePostedUrlForExtract(postCount)
        setLastPostNumberForExtract(postCount)
        postCount += 1
        count = i
    print(count+1, " post Extract")
    pass


if(__name__ == "__main__"):
    addPostDataIntoFirebase()
