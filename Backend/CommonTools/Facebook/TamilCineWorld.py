import os
import re
from bs4 import BeautifulSoup
import requests
import facebook as fb
from firebase import firebase
import time
import tamil
from PIL import Image, ImageDraw, ImageFont
import string

databaseUrl = "https://colabfacebook-default-rtdb.firebaseio.com/facebook/TamilCineWorld/"
dataBase = firebase.FirebaseApplication(databaseUrl, None)
mainSitemap = "https://www.cinemapettai.com/sitemap_index.xml"
postLink = "https://www.cinemapettai.com/behaving-abnormally-dia-menon-in-depression/"
postLink1 = "https://www.cinemapettai.com/vivek-wont-celebrate-newyear/"
access_token = os.environ.get('FB_TAMILCINEWORLD_ACCESS', None)


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
    
def makeTextFixed(text):
    newText=""
    code=0
    for i in range(len(text)):
        
        if(i==60):
           code=1
        if(code == 1 and text[i]==" "):
            newText = newText+ "\n"
            code = 0
            continue
        newText = newText+text[i]
    return newText

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
        postText = postText+i.text+"\n\n"
    
    

    return imgUrl, title, postText

def downloadImage(imgUrl):
    res = requests.get(imgUrl)

    file = open("Facebook/postImage.png", 'wb')
    for chunk in res.iter_content(10000):
        file.write(chunk)
    file.close()
    # addLogo("Facebook/testlogo.png", "Facebook/Quote of the day.jpg")
    

def postToFacebookImage(message):

    # Get Access token - Follow the video on how to get access token for your fb account

    # The Graph API allows you to read and write data to and from the Facebook social graph
    asafb = fb.GraphAPI(access_token)

    asafb.put_photo(open("Facebook/postImage.png", "rb"),message=message)
    os.remove("Facebook/postImage.png")


def makeImage(title):
    templateImg = Image.open("Facebook/tamil cine world.png")
    postImg = Image.open("Facebook/postImage.png")
    postImgSize=postImg.size
    # ratio=postImgSize[1]/410
    postImg = postImg.resize((int(postImgSize[0]/postImgSize[1]*410), 410))
    templateImg.paste(postImg, (0, 95))
    font = ImageFont.truetype("Facebook/Bamini.ttf", 30)
    draw = ImageDraw.Draw(templateImg)
    a = unicodeChange(makeTextFixed(title))
    # print(a)
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
            

            imgUrl, title, postText = getPostData(j)
            downloadImage(imgUrl)
            makeImage(title)
            # print(songLyrics)

            try:
                postToFacebookImage(
                    title+"\n----------------------------------------------------------------\n"+postText)
                setLastPostLink(j)
                print("===> "+j, end=" : posted\n")
                time.sleep(5)

                # print(postText)
            except Exception as e:
                # setLastSitemap(i)
                # setLastPostLink(j)
                print(e)
                return -1




def test():
    makeImage(
        "நாளை புதுவருடம் 2017 பிறக்கவுள்ளதால் தற்போது நியூ இயர் கொண்டாட்டங்கள் களைகட்ட தொடங்கிவிட்டது")
if __name__ == "__main__":
    Run()
