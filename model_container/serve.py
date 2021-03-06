"""
Main module of the server file
"""

from flask import Flask, request, jsonify, abort, escape
import sys, os
sys.path.append(os.path.realpath(os.path.curdir))

from pipeline import Mtbi

port = os.environ.get('PORT', 30001)
dichotomy = os.environ.get('DICHOTOMY', 'EI')

app = Flask(__name__)

# Create a URL route in our application for "/"
@app.route("/", methods=['POST'])
def infer():
    """
    
    """
    content = request.json
    if (not content['text']): abort(404)
    text = escape(content['text'])
    mtbi = Mtbi(text, dichotomy)

    mtbi.preprocess_pipeline()
    return jsonify(mtbi.predict())

#app.run(host='0.0.0.0', port=port)
