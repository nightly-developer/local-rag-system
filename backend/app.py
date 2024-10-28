import os
# from Modules.db_connect import *
from flask import Flask, render_template, jsonify

domain = os.getenv('Domain')
port = os.getenv('Port')

app = Flask(__name__)

data = [{"name": "vaibhav","age": 24, "nationality": "Indian"},{"name": "rishi","age": 89, "nationality": "UP"},{"name": "Alex","age": 22, "nationality": "USA"}]

@app.route("/")
def home():
  return render_template("home.html",data=data)

@app.route("/upload")
def upload():
  return render_template("upload.html")

if __name__ == "__main__":
  app.run(debug=True)
