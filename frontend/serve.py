form flask import Flask, escape, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
