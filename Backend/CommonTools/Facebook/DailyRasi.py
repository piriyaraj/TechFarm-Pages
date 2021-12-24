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
from os import path
import textwrap

databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/DailyRasi/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)
postUrl = "https://astrology.dinakaran.com/rasi-index.asp"

access_token = os.environ.get('FB_DAILYRASI_ACCESS', None)

tags = "#இன்றைய_ராசிபலன்"
file_path = path.abspath(__file__)
dir_path = path.dirname(file_path)


def unicodeChange(text):
    text = text.replace("ஸ்ரீ", "=")
    text = text.replace(",", ">")
    text = text.replace("ஜௌ", "n[s")
    text = text.replace("ஜோ", "N[h")
    text = text.replace("ஜொ", "n[h")
    text = text.replace("ஜா", "[h")
    text = text.replace("ஜி", "[p")
    text = text.replace("ஜீ", "[P")
    text = text.replace("ஜு", "[{")
    text = text.replace("ஜூ", "[_")
    text = text.replace("ஜெ", "n[")
    text = text.replace("ஜே", "N[")
    text = text.replace("ஜை", "i[")
    text = text.replace("ஜ்", "[;")
    text = text.replace("ஜ", "[")
    text = text.replace("கௌ", "nfs")
    text = text.replace("கோ", "Nfh")
    text = text.replace("கொ", "nfh")
    text = text.replace("கா", "fh")
    text = text.replace("கி", "fp")
    text = text.replace("கீ", "fP")
    text = text.replace("கு", "F")
    text = text.replace("கூ", "$")
    text = text.replace("கெ", "nf")
    text = text.replace("கே", "Nf")
    text = text.replace("கை", "if")
    text = text.replace("க்", "f;")
    text = text.replace("க", "f")
    text = text.replace("ஙௌ", "nqs")
    text = text.replace("ஙோ", "Nqh")
    text = text.replace("ஙொ", "nqh")
    text = text.replace("ஙா", "qh")
    text = text.replace("ஙி", "qp")
    text = text.replace("ஙீ", "qP")
    text = text.replace("ஙு", "*")
    text = text.replace("ஙூ", "*")
    text = text.replace("ஙெ", "nq")
    text = text.replace("ஙே", "Nq")
    text = text.replace("ஙை", "iq")
    text = text.replace("ங்", "q;")
    text = text.replace("ங", "q")
    text = text.replace("சௌ", "nrs")
    text = text.replace("சோ", "Nrh")
    text = text.replace("சொ", "nrh")
    text = text.replace("சா", "rh")
    text = text.replace("சி", "rp")
    text = text.replace("சீ", "rP")
    text = text.replace("சு", "R")
    text = text.replace("சூ", "R+")
    text = text.replace("செ", "nr")
    text = text.replace("சே", "Nr")
    text = text.replace("சை", "ir")
    text = text.replace("ச்", "r;")
    text = text.replace("ச", "r")
    text = text.replace("ஞௌ", "nQs")
    text = text.replace("ஞோ", "NQh")
    text = text.replace("ஞொ", "nQh")
    text = text.replace("ஞா", "Qh")
    text = text.replace("ஞி", "Qp")
    text = text.replace("ஞீ", "QP")
    text = text.replace("ஞு", "*")
    text = text.replace("ஞூ", "*")
    text = text.replace("ஞெ", "nQ")
    text = text.replace("ஞே", "NQ")
    text = text.replace("ஞை", "iQ")
    text = text.replace("ஞ்", "Q;")
    text = text.replace("ஞ", "Q")
    text = text.replace("டௌ", "nls")
    text = text.replace("டோ", "Nlh")
    text = text.replace("டொ", "nlh")
    text = text.replace("டா", "lh")
    text = text.replace("டி", "b")
    text = text.replace("டீ", "B")
    text = text.replace("டு", "L")
    text = text.replace("டூ", "^")
    text = text.replace("டெ", "nl")
    text = text.replace("டே", "Nl")
    text = text.replace("டை", "il")
    text = text.replace("ட்", "l;")
    text = text.replace("ட", "l")
    text = text.replace("ணௌ", "nzs")
    text = text.replace("ணோ", "Nzh")
    text = text.replace("ணொ", "nzh")
    text = text.replace("ணா", "zh")
    text = text.replace("ணி", "zp")
    text = text.replace("ணீ", "zP")
    text = text.replace("ணு", "Z")
    text = text.replace("ணூ", "Z}")
    text = text.replace("ணெ", "nz")
    text = text.replace("ணே", "Nz")
    text = text.replace("ணை", "iz")
    text = text.replace("ண்", "z;")
    text = text.replace("ண", "z")
    text = text.replace("தௌ", "njs")
    text = text.replace("தோ", "Njh")
    text = text.replace("தொ", "njh")
    text = text.replace("தா", "jh")
    text = text.replace("தி", "jp")
    text = text.replace("தீ", "jP")
    text = text.replace("து", "J")
    text = text.replace("தூ", "J}")
    text = text.replace("தெ", "nj")
    text = text.replace("தே", "Nj")
    text = text.replace("தை", "ij")
    text = text.replace("த்", "j;")
    text = text.replace("த", "j")
    text = text.replace("நௌ", "nes")
    text = text.replace("நோ", "Neh")
    text = text.replace("நொ", "neh")
    text = text.replace("நா", "eh")
    text = text.replace("நி", "ep")
    text = text.replace("நீ", "eP")
    text = text.replace("நு", "E")
    text = text.replace("நூ", "E}")
    text = text.replace("நெ", "ne")
    text = text.replace("நே", "Ne")
    text = text.replace("நை", "ie")
    text = text.replace("ந்", "e;")
    text = text.replace("ந", "e")
    text = text.replace("னௌ", "nds")
    text = text.replace("னோ", "Ndh")
    text = text.replace("னொ", "ndh")
    text = text.replace("னா", "dh")
    text = text.replace("னி", "dp")
    text = text.replace("னீ", "dP")
    text = text.replace("னு", "D")
    text = text.replace("னூ", "D}")
    text = text.replace("னெ", "nd")
    text = text.replace("னே", "Nd")
    text = text.replace("னை", "id")
    text = text.replace("ன்", "d;")
    text = text.replace("ன", "d")
    text = text.replace("பௌ", "ngs")
    text = text.replace("போ", "Ngh")
    text = text.replace("பொ", "ngh")
    text = text.replace("பா", "gh")
    text = text.replace("பி", "gp")
    text = text.replace("பீ", "gP")
    text = text.replace("பு", "G")
    text = text.replace("பூ", "G+")
    text = text.replace("பெ", "ng")
    text = text.replace("பே", "Ng")
    text = text.replace("பை", "ig")
    text = text.replace("ப்", "g;")
    text = text.replace("ப", "g")
    text = text.replace("மௌ", "nks")
    text = text.replace("மோ", "Nkh")
    text = text.replace("மொ", "nkh")
    text = text.replace("மா", "kh")
    text = text.replace("மி", "kp")
    text = text.replace("மீ", "kP")
    text = text.replace("மு", "K")
    text = text.replace("மூ", "%")
    text = text.replace("மெ", "nk")
    text = text.replace("மே", "Nk")
    text = text.replace("மை", "ik")
    text = text.replace("ம்", "k;")
    text = text.replace("ம", "k")
    text = text.replace("யௌ", "nas")
    text = text.replace("யோ", "Nah")
    text = text.replace("யொ", "nah")
    text = text.replace("யா", "ah")
    text = text.replace("யி", "ap")
    text = text.replace("யீ", "aP")
    text = text.replace("யு", "A")
    text = text.replace("யூ", "A+")
    text = text.replace("யெ", "na")
    text = text.replace("யே", "Na")
    text = text.replace("யை", "ia")
    text = text.replace("ய்", "a;")
    text = text.replace("ய", "a")
    text = text.replace("ரௌ", "nus")
    text = text.replace("ரோ", "Nuh")
    text = text.replace("ரொ", "nuh")
    text = text.replace("ரா", "uh")
    text = text.replace("ரி", "up")
    text = text.replace("ரீ", "uP")
    text = text.replace("ரு", "U")
    text = text.replace("ரூ", "&")
    text = text.replace("ரெ", "nu")
    text = text.replace("ரே", "Nu")
    text = text.replace("ரை", "iu")
    text = text.replace("ர்", "u;")
    text = text.replace("ர", "u")
    text = text.replace("லௌ", "nys")
    text = text.replace("லோ", "Nyh")
    text = text.replace("லொ", "nyh")
    text = text.replace("லா", "yh")
    text = text.replace("லி", "yp")
    text = text.replace("லீ", "yP")
    text = text.replace("லு", "Y")
    text = text.replace("லூ", "Y}")
    text = text.replace("லெ", "ny")
    text = text.replace("லே", "Ny")
    text = text.replace("லை", "iy")
    text = text.replace("ல்", "y;")
    text = text.replace("ல", "y")
    text = text.replace("ளௌ", "nss")
    text = text.replace("ளோ", "Nsh")
    text = text.replace("ளொ", "nsh")
    text = text.replace("ளா", "sh")
    text = text.replace("ளி", "sp")
    text = text.replace("ளீ", "sP")
    text = text.replace("ளு", "S")
    text = text.replace("ளூ", "Sh")
    text = text.replace("ளெ", "ns")
    text = text.replace("ளே", "Ns")
    text = text.replace("ளை", "is")
    text = text.replace("ள்", "s;")
    text = text.replace("ள", "s")
    text = text.replace("வௌ", "nts")
    text = text.replace("வோ", "Nth")
    text = text.replace("வொ", "nth")
    text = text.replace("வா", "th")
    text = text.replace("வி", "tp")
    text = text.replace("வீ", "tP")
    text = text.replace("வு", "T")
    text = text.replace("வூ", "T+")
    text = text.replace("வெ", "nt")
    text = text.replace("வே", "Nt")
    text = text.replace("வை", "it")
    text = text.replace("வ்", "t;")
    text = text.replace("வ", "t")
    text = text.replace("ழௌ", "nos")
    text = text.replace("ழோ", "Noh")
    text = text.replace("ழொ", "noh")
    text = text.replace("ழா", "oh")
    text = text.replace("ழி", "op")
    text = text.replace("ழீ", "oP")
    text = text.replace("ழு", "O")
    text = text.replace("ழூ", "*")
    text = text.replace("ழெ", "no")
    text = text.replace("ழே", "No")
    text = text.replace("ழை", "io")
    text = text.replace("ழ்", "o;")
    text = text.replace("ழ", "o")
    text = text.replace("றௌ", "nws")
    text = text.replace("றோ", "Nwh")
    text = text.replace("றொ", "nwh")
    text = text.replace("றா", "wh")
    text = text.replace("றி", "wp")
    text = text.replace("றீ", "wP")
    text = text.replace("று", "W")
    text = text.replace("றூ", "W}")
    text = text.replace("றெ", "nw")
    text = text.replace("றே", "Nw")
    text = text.replace("றை", "iw")
    text = text.replace("ற்", "w;")
    text = text.replace("ற", "w")
    text = text.replace("ஹௌ", "n`s")
    text = text.replace("ஹோ", "N`h")
    text = text.replace("ஹொ", "n`h")
    text = text.replace("ஹா", "`h")
    text = text.replace("ஹி", "`p")
    text = text.replace("ஹீ", "`P")
    text = text.replace("ஹு", "{`")
    text = text.replace("ஹூ", "`_")
    text = text.replace("ஹெ", "n`")
    text = text.replace("ஹே", "N`")
    text = text.replace("ஹை", "i`")
    text = text.replace("ஹ்", "`;")
    text = text.replace("ஹ", "`")
    text = text.replace("ஷௌ", "n\\s")
    text = text.replace("ஷோ", "N\\h")
    text = text.replace("ஷொ", "n\\h")
    text = text.replace("ஷா", "\\h")
    text = text.replace("ஷி", "\\p")
    text = text.replace("ஷீ", "\\P")
    text = text.replace("ஷு", "\\{")
    text = text.replace("ஷூ", "\\_")
    text = text.replace("ஷெ", "n\\")
    text = text.replace("ஷே", "N\\")
    text = text.replace("ஷை", "i\\")
    text = text.replace("ஷ்", "\\;")
    text = text.replace('ஷ', '\\')
    text = text.replace("ஸௌ", "n]s")
    text = text.replace("ஸோ", "N]h")
    text = text.replace("ஸொ", "n]h")
    text = text.replace("ஸா", "]h")
    text = text.replace("ஸி", "]p")
    text = text.replace("ஸீ", "]P")
    text = text.replace("ஸு", "]{")
    text = text.replace("ஸூ", "]_")
    text = text.replace("ஸெ", "n]")
    text = text.replace("ஸே", "N]")
    text = text.replace("ஸை", "i]")
    text = text.replace("ஸ்", "];")
    text = text.replace("ஸ", "]")
    text = text.replace("அ", "m")
    text = text.replace("ஆ", "M")
    text = text.replace("இ", ",")
    text = text.replace("ஈ", "<")
    text = text.replace("உ", "c")
    text = text.replace("ஊ", "C")
    text = text.replace("எ", "v")
    text = text.replace("ஏ", "V")
    text = text.replace("ஐ", "I")
    text = text.replace("ஒ", "x")
    text = text.replace("ஓ", "X")
    text = text.replace("ஔ", "xs")
    text = text.replace("ஃ", "/")
    return text


def insertData(tableName, data, dataBase, format="post"):
    if(format == "patch"):
        result = dataBase.patch(tableName, data)
    else:
        result = dataBase.post(tableName, data)


def getLastDate():
    dic = dataBase.get(databaseUrl, "Data")

    try:                                   # if scrapdata table not exist then add it in database
        lastCount = dic['date']
    except:
        lastCount = 0
    return lastCount


def setLastDate(imgUrl):
    data = {}
    data["date"] = imgUrl
    insertData("Data", data, dataBase, format="patch")


def getPostData():
    rasiPalan={}
    html_doc = requests.get(postUrl).content
    soup = BeautifulSoup(html_doc, 'html.parser')
    date = soup.find_all("h1")[3].text
    rasiTags = soup.find_all("ul", {"class": "rasi-12-same"})[0].find_all("li")
    for i in rasiTags:
        rasiName=i.find("h1").text
        rasiText=i.find("p").text.split(":")[1]
        rasiPalan[rasiName]=rasiText

    # print(newUrls)
    return date,rasiPalan


def makeImg(date,rasiName,palan):
    rasiTem = path.join(dir_path, 'Images/RasiTemplate.jpg')
    rasiImg = path.join(dir_path, 'Images/'+rasiName+'.jpg')

    template=Image.open(rasiTem)
    rasiImg=Image.open(rasiImg).resize((350,350))
    newImg=template.copy()


    newImg.paste(rasiImg,(0,0))
    palanFont = ImageFont.truetype(dir_path+"Fonts/Bamini.ttf", 80)
    dateFont = ImageFont.truetype(dir_path+"Fonts/Godzilla.ttf", 80)
    draw = ImageDraw.Draw(newImg)
    draw.text((780, 120), date, fill=(0, 0, 0), font=dateFont)
    lines = textwrap.wrap(palan, width=45)
    y_text = 380
    w=1920
    for line in lines:
        width, height = palanFont.getsize(line)
        line = unicodeChange(line)
        draw.text((40, y_text), line,font=palanFont)
        y_text += height
        # palan = unicodeChange(makeTextFixed(palan))

    #draw.text((50, 370), palan, fill=(0, 0, 0), font=palanFont)
    newImg.save("Facebook/rasiImg.jpg")



def postToFacebookImage(rasi,date):

    # Get Access token - Follow the video on how to get access token for your fb account

    # The Graph API allows you to read and write data to and from the Facebook social graph
    asafb = fb.GraphAPI(access_token)

    asafb.put_photo(open("Facebook/rasiImg.png", "rb"), message=tags+" #"+rasi+" #"+date.replace("/","_"))
    os.remove("Facebook/rasiImg.png")


def Run():

    lastPostDate = getLastDate()
    newPostData = getPostData()
    if(lastPostDate==newPostData[0]):
        print("No New Update")
        # return
    
    setLastDate(newPostData[0])
    rasiPalan=newPostData[1]
    for rasi,palan in rasiPalan.items():
        makeImg(newPostData[0], rasi, palan)
        try:
            postToFacebookImage(rasi,newPostData[0])
            print("===> ", rasi, end=" : posted\n")
            time.sleep(5)
            break


            # print(postText)
        except Exception as e:
            # setLastSitemap(i)
            # setLastPostLink(j)
            print(e)
            return -1


if __name__ == "__main__":
    Run()
    pass
