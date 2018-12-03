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

#if wrong url is entered
@app.errorhandler(404)
def fourOohFour(error):
    return "file not found"

if __name__ == '__main__':
    app.run(debug=True)

