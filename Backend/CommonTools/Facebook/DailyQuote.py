# ToDo
'''
    1>scrap image and quotes
    2>crop image bottom
    2>download image
    3>scrape other quotes text
    4>upload image to facebook
    5>save last download date
'''
# modules
import os
from bs4 import BeautifulSoup
import requests
from PIL import Image, ImageDraw, ImageFont
import facebook as fb

url = "https://www.brainyquote.com/quote_of_the_day"

access_token = os.environ.get('FB_QUOTES_ACCESS', None)
path = os.path.dirname(os.path.abspath(__file__))+"/"



def postToFacebookText(postQuotes):

    # The Graph API allows you to read and write data to and from the Facebook social graph
    asafb = fb.GraphAPI(access_token)

    
    for post in list(postQuotes.values()):
        title = post["title"]
        quote = post['quote']
        author = post['author']
        postText="😊😊😊"+title+"😊😊😉\n\n"+quote+"\n\n"+"By : "+author
        asafb.put_object("me", "feed", message=postText)

def postToFacebookImage():

    # Get Access token - Follow the video on how to get access token for your fb account

    # The Graph API allows you to read and write data to and from the Facebook social graph
    asafb = fb.GraphAPI(access_token)

    asafb.put_photo(open(path+"Quote of the day.jpg", "rb"))
    os.remove(path+"Quote of the day.jpg")

def addLogo(logo,image):

    image1=Image.open(image) # open the images
    image1_size = image1.size        # get image size

    image1 = image1.crop((0, 0, image1_size[0], image1_size[1]-30))
    image1_size = image1.size        # get image size
    # image1=image1.resize((1200, 900))  # 1280*1920
    draw = ImageDraw.Draw(image1)
    font=ImageFont.truetype("arial.ttf", 30)
    #x, y = (width - 510, height-100)

    image2 = Image.open(logo)  # open logo
    image2 = image2.resize((int(image1_size[0]/4),int(image1_size[1]/4)))# resize the logo as 1/9 image size
    image2_size = image2.size        # get the resized logo sizes
    # new_image = Image.new('RGB',(image1_size[0], 2*image1_size[1]), (250,250,250))  #create new image size as old image size
    # new_image = Image.new('RGB',(image1_size[0], image1_size[1]), (250,250,250))  #create new image size as old image size
    # image1.paste(image1, (0, 0))    # insert image into new image we created
    # insert resized logo into the new image
    image1.paste(image2, ((image1_size[0]-image2_size[0], image1_size[1]-image2_size[1])), image2)
    # print(text1)
    # draw = ImageDraw.Draw(new_image)
    # draw.rectangle((0, int(new_image.size[1]/2), new_image.size[0], new_image.size[1]), fill='black')
    # font=ImageFont.truetype("arial.ttf", 40)
    # draw.text((20,int(new_image.size[1]/2)+10), "hello", fill=(209, 239, 8), font=font)
    image1.save(image, "webp")         # save new image
    return image

def downloadImage(imgUrl):
    res = requests.get(imgUrl)

    file = open(path+"Quote of the day.jpg",'wb')
    for chunk in res.iter_content(10000):
        file.write(chunk)
    file.close()
    addLogo(path+"testlogo.png", path+"Quote of the day.jpg")
    

def getTextQuotes(soup):
    allDiv = soup.find_all("div", {"class": "qotd-q-cntr"})
    Quotes={}
    for div in allDiv:
        post=allDiv.index(div)
        title  = div.find_all("div", {"class": "grid-item qb clearfix bqQt"})[0].find("h2").text
        quote  = div.find_all("div", {"class": "grid-item qb clearfix bqQt"})[0].find_all("a")[0].text.replace("\n","")
        author = div.find_all("div", {"class": "grid-item qb clearfix bqQt"})[0].find_all("a")[1].text
        Quotes[post]={"title":title,"quote":quote,"author":author}
    return Quotes

def Run():
    reqs = requests.get(url)
    soup = BeautifulSoup(reqs.text, 'html.parser')
    imgUrl = "https://www.brainyquote.com" + soup.find_all("a", {"class": "oncl_q"})[0].find_all("img")[0].get_attribute_list("src")[0]

    dailyQuotes = open(path+"data/dailyQuotes.txt", "r")
    lastImgUrl = dailyQuotes.readline()
    dailyQuotes.close()

    if(imgUrl == lastImgUrl):
        print("No new updates")
        return
    
    downloadImage(imgUrl)
    postToFacebookImage()
    dailyQuotes = open(path+"data/dailyQuotes.txt", "w")
    dailyQuotes.write(imgUrl)
    dailyQuotes.close()

    Quotes=getTextQuotes(soup)
    postToFacebookText(Quotes)

if __name__=="__main__":
    # path=os.path.dirname(os.path.abspath(__file__))
    # print(path)
    Run()



