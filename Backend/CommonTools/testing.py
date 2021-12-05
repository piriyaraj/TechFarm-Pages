from __future__ import print_function
import sys
from oauth2client import client
from googleapiclient import sample_tools
import time
from firebase import firebase
from flask import Flask
import os

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello World!'


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
