from flask import Flask, request, render_template
from firebase_admin import db
import FirebaseAuth


app = Flask(__name__)

ref = db.reference('/').get()
print(ref)

def getData(path):
    ref = db.reference(path)
    return ref.get()

@app.route("/", methods=['GET'])
def index():
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
@app.errorhandler(404)
def fourOohFour(error):
    return "file not found"

if __name__ == '__main__':
    app.run(debug=True)

