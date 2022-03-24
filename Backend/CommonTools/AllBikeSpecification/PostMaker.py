import os
from requests.models import ReadTimeoutError
from firebase import firebase
from bs4 import BeautifulSoup, dammit
from bs4.element import ResultSet
from requests.api import patch
import sys
from bs4 import BeautifulSoup
import requests
import re
import json
def maker1(keysAndValues: list, bikeName: str) -> str:
    finalArtical = ""
    articalValue = {
        'Cooling system': "Generally, the cooling system works for 3 necessary functions. First, it removes heat from the engine; second, it maintains the engine operating temperature wherever it works most efficiently; and eventually, it brings the engine up to the proper operating temperature as quickly as doable the -bikeName- used a -Cooling system- cooling system for these functions. ",
        'Engine details': "The engine is the heart of your car. the main function of the engine is to give energy to the vehicles. here bike -bikeName- is used -Engine details-.",
        'Engine type': "There are many bike engine types. such as fule type and electrical type.in bike -bikeName- used -Engine type-.",
        'Max RPM': "RPM stands for revolutions per minute. In cars, rpm measures how many times the engine's crankshaft makes one full rotation every minute. this bike's maximum RPM is -Max RPM-.",
        'Power': "In the context of automobiles, power is often described as horsepower. Bike -bikeName- was released with the horsepower of -Power-.",
        'Top speed': " And this bike can reach maximum speed is -Top speed-.",
        'Transmission type final drive': "The meaning of the final drive of bike is simply the last step in the process of transferring engine power to a bike's rear wheel.Main type of the transmissions are Chain, Belt or Shaft. and here -Transmission type final drive- is used for this transmission.",
        'Category': "This bike is a -Category-. ",
        'Model': "-bikeName- is developed by -Model-. ",
        'Price as new': "The the market price of the bike -bikeName- is -Price as new-. ",
        'Rating': "currently the bike have a rating is -Rating-. ",
        'Year': "This bike published at -Year-. ",
        'Frame type': "The body part is the important factor for the attractiveness and safety of the body here the bike use -Frame type-. ",
        'Front brakes': "here used -Front brakes- for the front brakes. ",
        'Rear brakes': "And the -Rear brakes- for the rear brakes.",
        'Dry weight': "Bike -bikeName- around the weight is -Dry weight-. ",
        'Overall height': "And the height, length, and width respectly -Overall height-, ",
        'Overall length': "-Overall length-, ",
        'Overall width': "and -Overall width-. ",
        'Power weight ratio': "weight ratio is the amount of power a vehicle has relative to its weight . here -Power weight ratio- used.",
    }
    # print(list(articalValue.keys())[0])
    for i in list(keysAndValues.keys()):
        if i in list(articalValue.keys()):

            # finalArtical+=articalValue[i].replace("-bikeName-",bikeName).replace("-"+i+"-",articalValue.get(i))
            finalArtical += articalValue[i].replace(
                "-bikeName-", bikeName).replace("-"+i+"-", keysAndValues[i])
    return finalArtical
    pass


def maker2(keysAndValues: list, bikeName: str) -> str:
    finalArtical = ""
    articalValue = {
        'Dry weight': "Bike -bikeName- around the weight is -Dry weight-. ",
        'Overall height': "And the height, length, and width respectly -Overall height-, ",
        'Overall length': "-Overall length-, ",
        'Overall width': "and -Overall width-. ",
        'Power weight ratio': "weight ratio is the amount of power a vehicle has relative to its weight . here -Power weight ratio- used.",
    }
    # print(list(articalValue.keys())[0])
    for i in list(keysAndValues.keys()):
        if i in list(articalValue.keys()):

            # finalArtical+=articalValue[i].replace("-bikeName-",bikeName).replace("-"+i+"-",articalValue.get(i))
            finalArtical += articalValue[i].replace(
                "-bikeName-", bikeName).replace("-"+i+"-", keysAndValues[i])
    return finalArtical
    pass


# import articalWriter


def getdata(url):

    reqs = requests.get(url)
    soup = BeautifulSoup(reqs.text, 'html.parser')

    tableArtical = {}
    for i in soup.find_all('table'):
        if(i.text.find("General information") != -1 or i.text.find("General moped information") != -1 or i.text.find("Other specifications") != -1):
            table = i
            break
    # find title of the post
    title = soup.title.text
    tags = title.split()[1]+","+title.split()[0]
    catecary = title.split()[1]
    if(title.find("|") > 0):
        # print("loop",title)
        tags = title.split()[0]+","+title.split("|")[1].replace(" ", "")
        catecary = title.split()[0]
        title = title.split()[0]+" "+title.split()[0]+" "+title
        # print("loop",title)

    title = title.replace(" specifications and pictures", "").replace(
        title.split()[0]+" ", "")+" | Price, Photos, Millage, Speed, Colours etc."

    if(title.find(tags.split(",")[0]) < 0):
        title = tags.split(",")[0]+" "+title
    # print("loop",title)

    title = title.split(" |")[0]+" "+tags.split(",")[1]

    # find the table date of the post
    trTags = table.findAll("tr")
    allKeys = []
    allData = {}
    keyValue = {}
    for i in trTags:
        tdTags = i.findAll("td")
        if(len(tdTags) == 0):
            tableName = i.text
            # print(keyValue)
            if(len(keyValue) > 0):
                allData[tableName] = keyValue
                artical = maker1(keyValue, tableName)
                if(artical != ""):
                    tableArtical[tableName] = artical
            keyValue = {}
            allKeys.sort()
            # allKeys=print(allKeys)
            allKeys = []

        if(len(tdTags) == 2):
            key = re.sub(r'[^\w]', ' ', tdTags[0].text)
            key = key.strip()
            keyValue[key] = tdTags[1].text
            allKeys.append(key)
    allData["artical"] = tableArtical
    # print(json.dumps(allData,indent=4))
    # print(tableArtical)
    return title, catecary, allData


# import ScrapTable
# import urlexract

databaseUrl = "https://all-bike-specification-default-rtdb.firebaseio.com/"

databaseUrlColab = "https://colabfacebook-default-rtdb.firebaseio.com/Website/AllBikeSpecification/"
dataBaseColab = firebase.FirebaseApplication(databaseUrlColab, None)


noOfPost = 3093


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        # print(tableName,data)
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)


def initialize():
    dataSet = dataBaseColab.get(databaseUrlColab, 'data/topost',)
    toPostList = list(dataSet.keys())[:noOfPost]
    return toPostList
    # print(toPostList)

# read first line


def read(id):
    postLink = dataBaseColab.get(databaseUrlColab, 'data/topost/'+id+'/url',)
    return postLink

# delete first line


def delete(id):
    return dataBaseColab.delete(databaseUrlColab, 'data/topost/'+id+'/url')

# last post link


def posted(title, posted_link):
    insertData('data/posted', {title: posted_link},
               dataBaseColab, format='patch')


def initialDatabase(databaseUrl):
    dataBase = firebase.FirebaseApplication(
        databaseUrl, None)
    return dataBase


def updateToFirebase(title, category, data, dataBase):
    dataNew = {}
    dataNew[title] = data
    # dataNew={
    #     "bikeName":{
    #         "table1":{
    #             "key1":"value1",
    #             "key2":"value2",
    #             "key3":"value3"
    #         },
    #         "table2":{
    #             "key4":"value4",
    #             "key5":"value5",
    #             "key6":"value6"
    #         }
    #     }
    # }
    # print(dataNew)
    try:
        # print(category, dataNew, dataBase)
        insertData(category, dataNew, dataBase, format="patch")
        return 'uploaded'
    except Exception as e:
        print(e)
        return "failed"
    pass


def Run():
    toPostList = initialize()
    # print(toPostList)
    # return
    count = 0
    # try:file=open("./data/posted.txt","a")
    # except:
    #     open("./data/posted.txt","w").close()
    #     file=open("./data/posted.txt","a")
    # try:file1=open("./data/postedlink.txt","a")
    # except:
    #     open("./data/postedlink.txt","w").close()
    #     file1=open("./data/postedlink.txt","a")

    for i in range(noOfPost):

        url = read(toPostList[i])
        #print(url)
        if(url == ""):
            urlexractRun()
            url = read(toPostList[i])
            if(url == ""):
                print("No new posts")
                break
        # print(url)
        try:
            title, category, tableDatas = getdata(url)
        except Exception as e:
            print(e)
            break
        if(i < 9):
            print(" ", end="")
        dataBase = initialDatabase(databaseUrl)
        print(i+1, end=">>>")
        print(title.split(" |")[0], end="")
        print("-"*(45-len(title.split(" |")[0])), end="status:")
        title = title.replace(".", "-")
        title = title.replace("#", "-")
        status = updateToFirebase(title, category, tableDatas, dataBase)

        print(status)
        if(status == "failed"):
            break

        posted(title, url)
        # file1.write(url+"\n")
        insertData('data/postedLinksInFirebase',
                   {title: url}, dataBaseColab, format='patch')

        # file.write(title.split(" |")[0]+"\n")
        insertData('data/postedTitleInFireabase',
                   {title: "title"}, dataBaseColab, format='patch')
        # print(toPostList[i])
        # print(toPostList[i])
        delete(toPostList[i])
        count = i+1

    print(count, " post uploaded")


# Run()
data = {
    "bikeName": {
        "table1": {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3"
        },
        "table2": {
            "key4": "value4",
            "key5": "value5",
            "key6": "value6"
        }
    }
}
title = "Bmw new modle"
category = "BMW"
# dataBase = initialDatabase(databaseUrl)

# status=updateToFirebase(title, category, data, dataBase)
# print(status)

