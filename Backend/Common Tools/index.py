from flask import Flask,render_template
import os
from threading import Thread
import Allbikespecification

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Home Page'

# all bike specification blogger autopost
@app.route('/allbikespecification')
def post():
    thread_a = Thread(target=Allbikespecification.Run, args=())
    thread_a.start()
    return render_template("timepage.html")





if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
