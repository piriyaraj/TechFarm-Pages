from flask import Flask, render_template, send_from_directory
import os
from threading import Thread
from AllBikeSpecification import Allbikespecification, ExtractPostLinks, PostMaker
from Facebook import ActressGallery,DailyQuote
app = Flask(__name__)


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

@app.route('/facebook/dailyQuotes')
def dailyQuotes():
    thread_a = Thread(target=DailyQuote.Run, args=())
    thread_a.start()
    return render_template("timepage.html", title="Daily Quotes")

@app.route("/check")
def testing():
    accessToken = os.environ.get('FB_ACCESS', None)
    print(accessToken)

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
