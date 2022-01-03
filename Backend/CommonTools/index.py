from flask import Flask, render_template, send_from_directory, request, send_file
import os
from threading import Thread
from os import path

from werkzeug.datastructures import MultiDict
from werkzeug.utils import redirect, secure_filename

from AllBikeSpecification import Allbikespecification, ExtractPostLinks, PostMaker
from Facebook import ActressGallery, DailyQuote, PJTamilLyrics, TamilCineWorld, FightBoysVsGirls, DailyRasi, TamilMemesWorld,PJFashionWay
from Self import IMGToPDF
app = Flask(__name__)
file_path_main = path.abspath(__file__)
dir_path_main = path.dirname(file_path_main)

@app.route('/')
def hello():
    return 'Home Page' 


@app.route('/favicon.ico')
def favicon():
    return "hello"

# all bike specification blogger autopost
@app.route('/allbikespecification/autopost')
def post():
    thread_a = Thread(target=Allbikespecification.Run, args=())
    thread_a.start()
    return render_template("timepage.html",title="All bike specification autopost to blogger")


@app.route('/allbikespecification/extractposturl')
def extract():
    thread_a = Thread(target=ExtractPostLinks.Run, args=())
    thread_a.start()
    return render_template("timepage.html",title="All bike specification post link Extract")


@app.route('/allbikespecification/postmaker')
def postmake():
    thread_a = Thread(target=PostMaker.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="All bike specification post Maker")



# ========================= Facebook====================================================================
@app.route('/facebook/actressgallery')
def actressgallerypost():
    thread_a = Thread(target=ActressGallery.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="Actress Gallery Image upload")

@app.route('/facebook/dailyquotes')
def dailyQuotes():
    thread_a = Thread(target=DailyQuote.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="Daily Quotes")

@app.route("/facebook/tamillyrics")
def tamillyrics():
    thread_a = Thread(target=PJTamilLyrics.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="Tamil Lyrics")


@app.route("/facebook/tamilcineworld")
def tamilcineworld():
    thread_a = Thread(target=TamilCineWorld.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="Tamil Cine World")


@app.route("/facebook/fightboysvsgirls")
def fightboysvsgirls():
    thread_a = Thread(target=FightBoysVsGirls.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="Fight Boys Vs Girls")

@app.route("/facebook/dailyrasi")
def dailyrasi():
    thread_a = Thread(target=DailyRasi.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="Daily Rasi")

@app.route("/facebook/tamilmemesworld")
def tamilmemesworld():
    thread_a = Thread(target=TamilMemesWorld.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="Tamil Memes World")


@app.route("/facebook/pjfashionway")
def pjfashionway():
    thread_a = Thread(target=PJFashionWay.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="PJ Fashion Way")


# self projects
@app.route('/self/uploader', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        toConveredList = []
        # check if the post request has the file part
        if 'file' not in request.files:
            # flash('No file part')
            return 'No file part'

        file = request.files['file']
        if file.filename == '':
            # flash('No selected file')
            return 'No selected file'

        imgList = MultiDict(request.files).getlist('file')
        # print(imgList)

        for i in imgList:
            print(dir_path_main)
            if i and IMGToPDF.allowedFile(i.filename):
                # print(i)
                filename = secure_filename(i.filename)
                i.save(dir_path_main+"/Self/Data/"+filename)
                toConveredList.append(dir_path_main+"/Self/Data/"+filename)
        print(toConveredList)


        IMGToPDF.converter(toConveredList)
        return send_file(dir_path_main+'/Self/Data/PJImageConveter.pdf', as_attachment=True)

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
    
