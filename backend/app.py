from flask import Flask, request, render_template
from firebase_admin import db
import FirebaseAuth
import json

import google.auth.transport.requests
import google.oauth2.id_token


# HTTP_REQUEST = google.auth.transport.requests.Request()

app = Flask(__name__)

ref = db.reference('/').get()
print(ref)

def getData(path):
    ref = db.reference(path)
    return ref.get()

@app.route("/", methods=['GET'])
def index():
    # id_token = request.headers['Authorization'].split(' ').pop()
    # claims = google.oauth2.id_token.verify_firebase_token(id_token, HTTP_REQUEST)
    # print(claims)
    # print(request)
    return render_template('index.html', hello='Hello World!')

@app.route("/signup", methods=['GET'])
def signin():
    return render_template('signup.html')

@app.route("/login", methods=['GET'])
def login():
    return render_template('login.html')

@app.route("/logout", methods=['GET'])
def logout():
    return render_template('logout.html')

@app.route("/not-logged-in", methods=['GET'])
def notLoggedIn():
    return render_template('not-logged-in.html')

#if wrong url is entered
@app.route("/404", methods=['GET'])
def fourOhFour():
    return render_template('404.html')

@app.errorhandler(404)
def fourOohFour(error):
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True)

