from __future__ import print_function
import sys
from oauth2client import client
from googleapiclient import sample_tools
import time
from firebase import firebase
from flask import Flask,render_template
import os
from threading import Thread

app = Flask(__name__)

noOfPost = 2
databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/"

firebase = firebase.FirebaseApplication(databaseUrl, None)
# def filemake(name):
#     try:
#         file=open(name,"r+")
#     except:
#         open(name,"w").close()
#         file=open(name,"r+")
#     return file


def getTitels():
    data=firebase.get('/Website/AllBikeSpecification/data/posted',None)
    # print(data.keys())
    return list(data.keys())



# delete first line


def delete(BikeName):
    return firebase.delete('/Website/AllBikeSpecification/data/posted/'+BikeName,None)

# last post link


def posted(bikeName):
    firebase.patch("/Website/AllBikeSpecification/data/postedInBlogger",{bikeName:'title'})
    # file = open("./data/postTitleInBlogger.txt", "a")
    # file.write(posted_link+"\n")
    # file.close()


def postTitlesInBlogger(postName, argv):
    # Authenticate and construct service.
    service, flags = sample_tools.init(
        argv, 'blogger', 'v3', __doc__, __file__,
        scope='https://www.googleapis.com/auth/blogger')

    try:
        users = service.users()

        # Retrieve this user's profile information
        thisuser = users.get(userId='self').execute()

        blogs = service.blogs()

        # Retrieve the list of Blogs this user has write privileges on
        thisusersblogs = blogs.listByUser(userId='self').execute()

        posts = service.posts()
        body = {
            "kind": "blogger#post",
            "title": postName,
            "labels": [postName.split()[0]]
        }
        blog = thisusersblogs['items'][0]
        
        posts.insert(blogId="5317390335310223575",body=body,isDraft=False).execute()
        
        return ["posted",""]

    except client.AccessTokenRefreshError:
        print('The credentials have been revoked or expired, please re-run''the application to re-authorize')
        return ["failed", "The credentials have been revoked or expired, please re-run''the application to re-authorize"]

    except Exception as e:
        return ["limit",e]


def Run():
    count = 0
    toPostTitles=getTitels()
    for i in range(noOfPost):
        # time.sleep(10)
        try:
            postTitle = toPostTitles[i]
        except:
            break                    

        if(i < 9):
            print(" ", end="")

        print(i+1, end=">>>")
        print(postTitle, end="")
        print("-"*(60-len(postTitle)), end="status:")
        #postnow(driver,ptitle,ptag,pdescri,pcontent,pimage):

        status = postTitlesInBlogger(postTitle, sys.argv)
        
        if(status[0]=="posted"):
            print(i+1, ">>>", postTitle, "-"*(60-len(postTitle)),"status:posted")

        # postToblogger.postnow()
        if(status[0] == "failed"):
            print(i+1, ">>>", postTitle, "-" *(60-len(postTitle)), "status:Failed")
            break

        if(status[0]=="limit"):
            print(i+1, ">>>", postTitle, "-" *(60-len(postTitle)), "status:Limit")
            return status[1]

        # print("")

        posted(postTitle)
        delete(postTitle)
        count = i+1
        time.sleep(20)

    print(str(count) + " post posted")
    return str(count)+ " post posted"

if __name__=="__main__":
    Run()
