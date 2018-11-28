from flask import Flask, request, render_template


app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
    return render_template('index.html', hello='Hello World!')


if __name__ == '__main__':
    app.run(debug=True)

