import os
from typing import Counter
import facebook as fb
from firebase import firebase
import requests


# Telegram functions
import requests
import json

boys = """
join for Men's dress collection
https://chat.whatsapp.com/DtPKCGVAGBfH1YnIdAUeFD
"""

girls = """
join for women's dress collection
https://chat.whatsapp.com/DtPKCGVAGBfH1YnIdAUeFD
"""
databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/PJFashionWay/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)
access_token = os.environ.get('FB_PJFASHIONWAY_ACCESS', None)


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)


def setPostId(postId, page):
    data = {}
    data["lastPost"] = postId
    insertData("Data/"+page, data, dataBase, format="patch")


def getGroupIds():
    dic = dataBase.get(databaseUrl, "Groups")
    return dic


def getPostData(postId, asafb):

    post = asafb.get_object(postId, fields='message, attachments')
    message = post['message']
    media = post['attachments']['data'][0]['subattachments']['data']
    images = []
    for id in media:
      images.append(id['media']['image']['src'])

    return message, images


def groupShare(pageId, page):
    asafb = fb.GraphAPI(access_token)
    profile = asafb.get_object(pageId)
    posts = asafb.get_connections(profile["id"], "posts")
    if(page == "womens"):
        lastPost = dataBase.get(databaseUrl, "Data/womens/lastPost")
        message = girls
    if(page == "mens"):
        lastPost = dataBase.get(databaseUrl, "Data/mens/lastPost")
        message = boys

    new = 1
    count = 1
    newPosts = []
    while True:
        try:
            posts = asafb.get_connections(profile["id"], "posts")
            for post in posts['data']:
                if(lastPost == post['id']):
                    new = 0
                    break
                if(count == 1):
                    setPostId(post['id'], page)
                    count = 0
                newPosts.append(post['id'])
            if(new == 0):
                break
            posts = requests.get(posts["paging"]["next"]).json()
        except:
            break
    print(newPosts)
    for post in newPosts:
        teleMessage, images = getPostData(post, asafb)
        for group in getGroupIds().values():
            try:
                asafb.put_object(group, "feed", message=message,
                                 link="www.facebook.com/"+post.replace("_", "/posts/"))
                pass
            except:
                pass

def Run():
    groupShare("103787625468668", "womens")
    groupShare("106668551836797", "mens")
