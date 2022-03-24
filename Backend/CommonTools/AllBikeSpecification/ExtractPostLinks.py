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
from firebase import firebase

url = "https://bikez.com/brands/index.php"
databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/Website/AllBikeSpecification/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)


def exractModelsLink(url):
    try:
        reqs = requests.get(url)
    except:
        print("check internet connection !")
        return []
    soup = BeautifulSoup(reqs.text, 'html.parser')
    table = soup.findAll('table', class_="zebra")[0]
    trs = table.findAll("tr")
    links = []
    for i in trs[1:]:
        if(i.findAll("td")[1].text == ""):
            # print("==>"+i.findAll("td")[0].text)
            continue
        atag = i.findAll("a")[0]

        link_m = "https://bikez.com/" + \
            atag.get_attribute_list("href")[0].split("../")[1]
        links.append(link_m)

    return links


def filemake(name):
    try:
        file = open(name, "r+")
    except:
        open(name, "w").close()
        file = open(name, "r+")
    return file


def expandUrlpost(url):
    post_links = []
    try:
        reqs = requests.get(url)
    except:
        print("Check Internet connection !")
        return []
    soup = BeautifulSoup(reqs.text, 'html.parser')
    table = soup.find_all('table')[2]
    tr = table.find_all('tr')
    # print(tr)
    for i in tr:
        if(tr.index(i) == 0):
            continue
        tdTags = i.findAll('td')
        if(len(tdTags) > 2 or len(tdTags[0].findAll('img')) == 0):
            continue

        t = i.findAll('td')[1].findAll('a')
        for i in t:
            if(i.get_attribute_list('href')[0] == None):
                continue
            else:
                link = "https://bikez.com" + \
                    i.get_attribute_list("href")[0].split("..")[1]
        post_links.append(link)
    return post_links


def exractpostlink(url):
    post_links = []
    try:
        reqs = requests.get(url)
    except:
        print("Check Internet connection !")
        return []
    soup = BeautifulSoup(reqs.text, 'html.parser')
    table = soup.find_all('table')[2]
    tr = table.find_all('tr')
    # print(tr)
    for i in tr:
        if(tr.index(i) == 0):
            continue
        expandTag = i.findAll('td')[0].findAll('a')
        if(len(expandTag) != 0):
            expandUrl = url+expandTag[0].get_attribute_list('href')[0]
            expandpostUrls = expandUrlpost(expandUrl)
            post_links = post_links+expandpostUrls
            continue

        t = i.findAll('td')[1].findAll('a')
        for i in t:
            if(i.get_attribute_list('href')[0] == None):
                continue
            else:
                link = "https://bikez.com" + \
                    i.get_attribute_list("href")[0].split("..")[1]
        post_links.append(link)
    return post_links

# read firebase data


def findNoOfPost(url):
    modelNoOfPost = {}
    try:
        reqs = requests.get(url)
    except:
        print("check internet connection !")
        return []
    soup = BeautifulSoup(reqs.text, 'html.parser')
    table = soup.findAll('table', class_="zebra")[0]
    trs = table.findAll("tr")
    links = []
    for i in trs[1:]:
        if(i.findAll("td")[1].text == ""):
            continue
        atag = i.findAll("a")[0]
        modelName = atag.get_attribute_list(
            "href")[0].split("models/")[1].split(".php")[0]
        noOfPost = int(i.findAll("td")[1].text)
        modelNoOfPost[modelName] = noOfPost

    return modelNoOfPost


def readFirebaseDate(tableName):
    dataValueList = []
    ResultSet = dataBase.get(databaseUrl, tableName,)
    try:
        for i in (list(ResultSet.values())):
            dataValueList.append(i['url'])
        return dataValueList
    except:
        return 0

# insert data into firebase


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)


def Run():
    global url

    # fileModlelinks = filemake("./data/models/modelsLinks.txt")

    # filetopost = filemake("./data/topost.txt")
    modelsLinks = exractModelsLink(url)
    noOfPostInModelFromsite = findNoOfPost(url)
    noOfPostInModelFromFirebase = dataBase.get(databaseUrl, 'data/crewelData')

    for modelLink in modelsLinks:

        modelforfile = modelLink.split("models/")[1].split(".")[0]
        # try:
        #     if(yearforfile.index("=")):
        #         yearforfile=yearforfile.split("=")[1]
        # except:pass
        print("\n\n>>> "+str(modelsLinks.index(modelLink)+1) +
              "/"+str(len(modelsLinks))+" "+modelforfile, end="")
        try:
          if(noOfPostInModelFromFirebase[modelforfile] == noOfPostInModelFromsite[modelforfile]):
              print(" ||| NO New post found")
              continue
        except:
          noOfPostInModelFromFirebase[modelforfile] = 0

        print(" ||| NO of Post: ",
              noOfPostInModelFromsite[modelforfile]-noOfPostInModelFromFirebase[modelforfile])

        postlinks = exractpostlink(modelLink)
        # fileModel = filemake("./data/models/"+modelforfile+".txt")
        # links = fileModel.readlines()
        links = readFirebaseDate('data/models/'+modelforfile)
        # insertData('data/crewelData', {"acabion_models": 5}, dataBase,format='patch')

        insertData('data/crewelData',
                   {modelforfile: len(postlinks)}, dataBase, format='patch')
        for postlink in postlinks:
            try:
                pos = links.index(postlink)
            except:
                pos = -1
            if(pos == -1):

                # filetopost.write(postlink+"\n")
                insertData('data/topost', {"url": postlink}, dataBase)

                # fileModel.write(postlink+"\n")
                insertData('data/models/'+modelforfile,
                           {"url": postlink}, dataBase)

                print("======>>>"+postlink)

        # fileModlelinks.write(modelLink+"\n")
        insertData('data/modelsLinks',
                   {modelforfile: modelLink}, dataBase, format='patch')

    #     fileModel.close()

    # fileModlelinks.close()
    # filetopost.close()


#postlinks_n="https://bikez.com/year/2020-motorcycle-models.php"
#linkss=exractpostlink(postlinks_n)

