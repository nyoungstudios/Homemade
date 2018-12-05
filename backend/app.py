from flask import Flask, request, render_template, redirect, jsonify
from firebase_admin import db
from firebase_admin import auth
import FirebaseAuth
import json

import google.auth.transport.requests
import google.oauth2.id_token


# HTTP_REQUEST = google.auth.transport.requests.Request()

app = Flask(__name__)


def getData(path):
    ref = db.reference(path)
    return ref.get()

@app.route("/", methods=['GET'])
def index():
    feedData = getData('/feed/')
    feedLength = 0
    if feedData != None:
        feedLength = len(feedData)
    print("Feed Length: " + str(feedLength))

    # print(feedData)

    return render_template('index.html', feedLength=feedLength, feedData=feedData)

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

@app.route("/profile/<id_token>", methods=['GET'])
def profile(id_token):
    uid = ''
    try:
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        print(uid)
    except:
        return redirect("/404")
    # gets data from firebase
    data = getData('/users/' + str(uid))
    feedData = getData('/feed/')

    # calculates the length in the dataset
    items = 0
    itemData = data
    if data != None:
        items = len(data)
    else:
        itemData = []

    print("Items: " + str(items))

    feedLength = 0
    if feedData != None:
        feedLength = len(feedData)
    print("Feed Length: " + str(feedLength))

    userFeedData = []

    # creates list for which belongs to the current user
    for elem in feedData:
        if elem['uid'] == uid:
            userFeedData.append(elem)

    # print(userFeedData)
    # print(len(userFeedData))

    return render_template('profile.html', items=items, itemData=itemData, feedLength=feedLength, userFeedData=userFeedData)

@app.route("/post-<number>", methods=['GET'])
def post(number):
    feedData = getData('/feed/')

    postData = {}

    print(number)

    for i in range(len(feedData)):
        print(i)
        if i == int(number):
            postData = feedData[i]
            break
    print(postData)



    return render_template('post.html', number=number, postData=postData)

#if wrong url is entered
@app.route("/404", methods=['GET'])
def fourOhFour():
    return render_template('404.html')

@app.errorhandler(404)
def fourOohFour(error):
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True)

