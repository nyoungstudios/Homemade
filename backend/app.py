from flask import Flask, request, render_template
from firebase_admin import db


app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
    return render_template('index.html', hello='Hello World!')

#if wrong url is entered
@app.errorhandler(404)
def fourOohFour(error):
    return "file not found"

if __name__ == '__main__':
    app.run(debug=True)

